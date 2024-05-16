import { NextFunction, Request, Response } from "express";
import { ObjectId } from "mongodb";

export default function validateUserParamsMiddleware(
	req: Request,
	res: Response,
	next: NextFunction
) {
	//LINK: https://www.mongodb.com/community/forums/t/bsontypeerror-argument-passed-in-must-be-a-string-of-12-bytes-or-a-string-of-24-hex-characters-or-an-integer/188466/3
	if (!ObjectId.isValid(req.params?.id)) {
		return res.status(400).json({ message: "Invalid id format" });
	}
	next();
}
