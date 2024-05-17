import { NextFunction, Request, Response } from "express";
import { ObjectId } from "mongodb";
import { dbClient } from "../../..";
import { DB_COLLECTIONS } from "../../../database/collections.enum";
import { POSTS_FILTERS_SCHEMA } from "./postsFilters.schema";
import { POST_SCHEMA } from "../../../database/models/post.schema";
import { JwtPayload } from "jsonwebtoken";
import { AuthCookie } from "../../auth/auth.cookie.type";
import { USER_ROLES } from "../../../database/models/user-roles.enum";
import { FEED_CONTENT_SCHEMA } from "../../../database/models/feedContent.schema";
import { FEED_CONTENT_OWNERSHIP_SCHEMA } from "../common/models/feedContentOwnership.schema";

export default async function deletePostMiddleware(
	req: Request,
	res: Response,
	next: NextFunction
) {
	const { _id } = req.body.data as FEED_CONTENT_OWNERSHIP_SCHEMA;

	try {
		const { status, ...db_data } = await dbClient.deletePost({
			_id: new ObjectId(_id),
		});
		return res.status(status).json(db_data);
	} catch (error) {
		return res.status(500).json({
			message: "Internal server error while deleting post",
			error,
		});
	}
}
