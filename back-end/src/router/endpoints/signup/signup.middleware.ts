import { Request, Response } from "express";
import { NextFunction } from "express-serve-static-core";
import { mongoClient } from "../../..";
import { USER_ROLES, USER_SCHEMA } from "../../../database/user.schema";

import { SIGNUP_PARAMS } from "./signup.params";

export default async function signUpMiddleware(
	req: Request,
	res: Response,
	next: NextFunction
) {
	//validate login
	const { email, password, name, username }: SIGNUP_PARAMS = req.body;

	if (await mongoClient.has("users", { email })) {
		return res.status(401).json({ message: "Email already exists" });
	} else {
		//Create new user

		const user: USER_SCHEMA = {
			email,
			password,
			name,
			username,
			role: USER_ROLES.BASIC,
		};

		mongoClient.getCollection("users").insertOne(user);
		return res.status(200).json({ message: "Created new user" });
	}
}
