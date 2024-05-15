import { CookieOptions, Request, Response } from "express";
import { NextFunction } from "express-serve-static-core";
import { dbClient } from "../../..";
import { validateString } from "../../../validators/form.validator";
import { validateParams } from "../../../validators/params.validator.middleware";
import { ValidatorCallback } from "../../../validators/validator.type";
import { LOGIN_PARAMS } from "./login.params.schema";
import auth from "../../auth/auth";

import { USER_SCHEMA } from "../../../database/user.schema";
export default async function loginMiddleware(
	req: Request,
	res: Response,
	next: NextFunction
) {
	//validate login
	const { email, password }: LOGIN_PARAMS = req.body;

	const user = (await dbClient.findOne("users", {
		email,
	})) as USER_SCHEMA | null;

	if (!user)
		return res
			.status(401)
			.json({ message: "Invalid username or password" });

	if (await auth.compareHash(password + "", user.password)) {
		//
		const token = auth.generateAccessToken(
			{ name: user._id, role: user.role },
			"20m"
		);

		const { password: userPassword, ...data } = user;

		const options: CookieOptions = {
			maxAge: 20 * 60 * 1000, // would expire in 20minutes
			httpOnly: true, // The cookie is only accessible by the web server
			secure: true,
			sameSite: "none",
		};

		res.cookie("SessionID", token, options); // set the token to response header, so that the client sends it back on each subsequent request

		return res.status(200).json({
			user: data,
		});
	}

	return res.status(401).json({ message: "Invalid username or password" });
}
