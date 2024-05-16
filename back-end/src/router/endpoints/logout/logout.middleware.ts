import { Request, Response } from "express";
import { NextFunction } from "express-serve-static-core";
import { dbClient } from "../../..";

export default async function logoutMiddleware(
	req: Request,
	res: Response,
	next: NextFunction
) {
	const cookie = req.headers?.cookie?.split("=")[1] as string;

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
