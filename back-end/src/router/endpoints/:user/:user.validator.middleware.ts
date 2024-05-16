import { NextFunction, Request, Response } from "express";
import { ObjectId } from "mongodb";
import { validateObjectId } from "../../../validators/misc.validator";

export default function validateUserParamsMiddleware(
	req: Request,
	res: Response,
	next: NextFunction
) {
	//LINK: https://www.mongodb.com/community/forums/t/bsontypeerror-argument-passed-in-must-be-a-string-of-12-bytes-or-a-string-of-24-hex-characters-or-an-integer/188466/3
	const isValid = validateObjectId(req.params?.id);
	if (isValid.message) {
		return res.status(400).json({ message: isValid.message });
	}
	next();
}
