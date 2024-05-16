import { NextFunction, Request, Response } from "express";
import { AuthCookie } from "./auth.cookie.type";
import { ObjectId } from "mongodb";
import { USER_ROLES } from "../../database/models/user-roles.enum";

export default function verifyAdminAccessMiddleware(
	req: Request,
	res: Response,
	next: NextFunction
) {
	const { role } = req.body.jwtPayload as AuthCookie;

	if (role !== USER_ROLES.ADMIN) {
		return res.status(403).json({
			message: "Access forbidden.",
		});
	}

	return next();
}
