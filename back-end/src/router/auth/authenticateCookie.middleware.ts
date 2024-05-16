import { NextFunction, Request, Response } from "express";
import auth from "./auth.crypto";
import { JwtPayload } from "jsonwebtoken";
import { log } from "console";
import { dbClient } from "../..";
import { DB_COLLECTIONS } from "../../database/collections.enum";

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
	//== Cookie didn't expired, but user already logout out and cookie is on blacklist
	const isCookieBlacklisted = await dbClient.has(
		DB_COLLECTIONS.BLACKLISTED_COOKIES,
		{ cookie }
	);
	if (isCookieBlacklisted) {
		return res
			.status(401)
			.json({ message: "Your session is invalid. Please login again" });
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
