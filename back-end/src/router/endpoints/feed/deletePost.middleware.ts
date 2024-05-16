import { NextFunction, Request, Response } from "express";
import { ObjectId } from "mongodb";
import { dbClient } from "../../..";
import { DB_COLLECTIONS } from "../../../database/collections.enum";
import { POSTS_FILTERS_SCHEMA } from "../common/models/postsFilters.schema";
import { POST_SCHEMA } from "../../../database/models/post.schema";
import { JwtPayload } from "jsonwebtoken";
import { AuthCookie } from "../../auth/auth.cookie.type";
import { USER_ROLES } from "../../../database/models/user-roles.enum";

export default async function deletePostMiddleware(
	req: Request,
	res: Response,
	next: NextFunction
) {
	const postData = req.body.data as POST_SCHEMA;

	try {
		//NOTE: This try catch is probably not doing anything since the only function that can throw is insertPost...and it already has a trycatch
		//Set the timestamp to "now"
		postData.timestamp = new Date().toJSON();

		const { status, ...db_data } = await dbClient.deletePost({
			_id: new ObjectId(postData._id),
		});
		return res.status(status).json(db_data);
	} catch (error) {
		return res.status(500).json({
			message: "Internal server error while deleting post",
			error,
		});
	}
}
