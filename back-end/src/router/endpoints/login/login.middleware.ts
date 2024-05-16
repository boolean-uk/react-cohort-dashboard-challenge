import { CookieOptions, Request, Response } from "express";
import { NextFunction } from "express-serve-static-core";
import { dbClient } from "../../..";
import { validateString } from "../../../validators/form.validator";
import { validateParamsMiddleware } from "../../../validators/params.validator.middleware";
import { ValidatorCallback } from "../../../validators/validator.type";
import { LOGIN_PARAMS } from "./login.params.schema";
import auth from "../../auth/auth.crypto";

import { USER_SCHEMA } from "../../../database/models/user.schema";
import { DB_COLLECTIONS } from "../../../database/collections.enum";
import { CREDENTIALS_SCHEMA } from "../../../database/models/credentials.schema";
import { AuthCookie } from "../../auth/auth.cookie.type";
export default async function loginMiddleware(
	req: Request,
	res: Response,
	next: NextFunction
) {
	//validate login
	const { email, password }: LOGIN_PARAMS = req.body.data;

	const user = (await dbClient.findOne(DB_COLLECTIONS.USERS, {
		email,
	})) as USER_SCHEMA | null;

	//== No user was found with that email
	if (!user)
		return res
			.status(401)
			.json({ message: "Invalid username or password" });

	//== Verify password
	const authDoc = (await dbClient.findOne(DB_COLLECTIONS.AUTH, {
		email: user.email,
	})) as CREDENTIALS_SCHEMA | null;

	//== Database error
	if (!authDoc) {
		return res
			.status(502)
			.json({ message: "Unexpected error with external database" });
	}
	//== Generate Token
	if (await auth.compareHash(password, authDoc.hash)) {
		//

		const cookieData: AuthCookie = {
			//@ts-ignore <- user._id is defined cz it came from db
			id: user._id,
			name: user.name,
			role: user.role,
		};

		const cookieExpire = { text: "30m", value: 30 * 60 * 1000 };

		const token = auth.generateAccessToken(cookieData, cookieExpire.text);

		const options: CookieOptions = {
			maxAge: cookieExpire.value,
			httpOnly: true,
			secure: true,
			sameSite: "strict",
		};

		res.cookie("SessionID", token, options); // set the token to response header, so that the client sends it back on each subsequent request

		return res.status(200).json({
			user,
		});
	}

	// == Invalid Password
	return res.status(401).json({ message: "Invalid username or password" });
}
