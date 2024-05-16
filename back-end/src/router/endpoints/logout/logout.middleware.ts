import { Request, Response } from "express";
import { NextFunction } from "express-serve-static-core";
import { dbClient } from "../../..";
import auth from "../../auth/auth.crypto";

export default async function logoutMiddleware(
	req: Request,
	res: Response,
	next: NextFunction
) {
	const cookie = req.headers?.cookie?.split("=")[1];
	//== Cookie expired
	if (!cookie) {
		return res.status(401).json({ message: "You were not logged in" });
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
	//== Cookie is valid -> add to blacklist
	const { status, ...db_response } = await dbClient.insertBlacklistCookie(
		cookie
	);
	if (status != 200) {
		return res.status(status).json(db_response);
	}

	return res.status(200).json({
		message: "Logged out",
	});
}
