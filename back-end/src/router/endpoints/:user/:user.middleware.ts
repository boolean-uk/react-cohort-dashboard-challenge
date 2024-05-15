import { NextFunction, Request, Response } from "express";
import auth from "../../auth/auth";

export default function userMiddleware(
	req: Request,
	res: Response,
	next: NextFunction
) {
	const cookie = req.headers?.cookie?.split("=")[1];
	console.log("Cookie", cookie);
	console.log(req.params);

	if (!cookie) res.status(401).json({ message: "Missing access token" });

	const isValid = auth.verifyAccessToken(cookie as string);
	if (isValid.status !== 0) {
		res.status(isValid.status).json({ message: isValid.message });
	}

	res.status(200).json({ message: "access granted" });
}
