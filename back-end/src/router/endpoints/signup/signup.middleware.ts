import { Request, Response } from "express";
import { NextFunction } from "express-serve-static-core";
import { dbClient } from "../../..";
import { USER_SCHEMA } from "../../../database/models/user.schema";
import { USER_ROLES } from "../../../database/models/user-roles.enum";
import { SIGNUP_PARAMS } from "./signup.params.schema";
import auth from "../../auth/auth.crypto";
import { DB_COLLECTIONS } from "../../../database/collections.enum";
import { CREDENTIALS_SCHEMA } from "../../../database/models/credentials.schema";
import { PUBLIC_USER_DATA_SCHEMA } from "../../../database/models/public_user_data.schema";

export default async function signUpMiddleware(
	req: Request,
	res: Response,
	next: NextFunction
) {
	const { email, password, name, username }: SIGNUP_PARAMS = req.body;

	if (await dbClient.has("users", { email })) {
		return res.status(401).json({ message: "Email already exists" });
	} else {
		//== Create new user
		const user: USER_SCHEMA = {
			email,
			name,
			username,
			role: USER_ROLES.BASIC,
		};
		await dbClient.insert(DB_COLLECTIONS.USERS, user);
		//== Create public data
		const { email: privateEmail, ...publicUserData } =
			(await dbClient.findOne(DB_COLLECTIONS.USERS, {
				email,
				name,
				username,
				role: USER_ROLES.BASIC,
			})) as PUBLIC_USER_DATA_SCHEMA;

		dbClient.insert(DB_COLLECTIONS.PUBLIC_USER_DATA, publicUserData);

		//== Create new auth doc
		const hash = await auth.encryptString(password);
		const credentials: CREDENTIALS_SCHEMA = { email, hash };
		await dbClient.insert(DB_COLLECTIONS.AUTH, credentials);

		return res.status(200).json({ message: "Created new user" });
	}
}
