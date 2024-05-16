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
	const { id, role } = req.body.jwtPayload as AuthCookie;
	//NOTE: I know i only need the id to delete the post, but this way is much
	//faster than requesting only the id...fetching a document with that id...
	//checking the attributes...etc etc
	console.log(
		postData.authorID,
		id,
		role !== USER_ROLES.ADMIN,
		!new ObjectId(postData.authorID).equals(new ObjectId(id))
	);

	if (
		!(new ObjectId(postData.authorID).equals(new ObjectId(id)) ||
		role !== USER_ROLES.ADMIN)
	) {
		return res.status(403).json({
			message:
				"Access forbidden. You don't have permissions to delete this resource",
		});
	}

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
