import { NextFunction, Request, Response } from "express";
import auth from "./auth.crypto";
import { JwtPayload } from "jsonwebtoken";
import { log } from "console";

export default async function authenticateCookieMiddleware(
	req: Request,
	res: Response,
	next: NextFunction
) {
	const cookie = req.headers?.cookie?.split("=")[1];
	//== Cookie expired
	if (!cookie) {
		return res
			.status(401)
			.json({ message: "Missing or expired access token" });
	}

	const {
		status: verifyStatus,
		message: verifyMessage,
		payload,
	} = auth.verifyAccessToken(cookie as string);
	//== Cookie is invalid (was hacked?)
	if (verifyStatus !== 200) {
		return res.status(verifyStatus).json({ message: verifyMessage });
	}
	//== Authenticated
	req.body.jwtPayload = payload;
	return next();
}
