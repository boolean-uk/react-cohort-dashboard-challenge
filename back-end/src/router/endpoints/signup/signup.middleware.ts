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
	const { email, password, name, username }: SIGNUP_PARAMS = req.body.data;

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
		const db_response = await dbClient.insertUser(user, password);

		return res.status(db_response.status).json(db_response.message);
	}
}
