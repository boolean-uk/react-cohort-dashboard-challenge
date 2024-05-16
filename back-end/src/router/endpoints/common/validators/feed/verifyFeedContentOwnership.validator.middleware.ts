import { NextFunction, Request, Response } from "express";
import { ObjectId } from "mongodb";
import { dbClient } from "../../../../..";
import { AuthCookie } from "../../../../auth/auth.cookie.type";
import { POST_OWNERSHIP_SCHEMA } from "../../models/feedContentOwnership.schema";
import { validateObjectId } from "../../../../../validators/misc.validator";
import { USER_ROLES } from "../../../../../database/models/user-roles.enum";

export default async function verifyFeedContentOwnershipMiddleware(
	req: Request,
	res: Response,
	next: NextFunction
) {
	const ownershipData = req.body.data as POST_OWNERSHIP_SCHEMA;

	const { id } = req.body.jwtPayload as AuthCookie;

	if (!new ObjectId(ownershipData.authorID).equals(new ObjectId(id))) {
		return res.status(403).json({
			message: "Access forbidden.",
		});
	}

	const { role } = req.body.jwtPayload as AuthCookie;

	if (role !== USER_ROLES.ADMIN) {
		return res.status(403).json({
			message: "Access forbidden.",
		});
	}

	return next();
}
