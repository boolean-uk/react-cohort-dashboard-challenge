import { NextFunction, Request, Response } from "express";
import { ObjectId } from "mongodb";
import { dbClient } from "../../..";
import { DB_COLLECTIONS } from "../../../database/collections.enum";
import { POSTS_FILTERS_SCHEMA } from "../posts/postsFilters.schema";
import { POST_SCHEMA } from "../../../database/models/post.schema";
import { JwtPayload } from "jsonwebtoken";
import { COMMENT_SCHEMA } from "../../../database/models/comment.schema";

export default async function editCommentMiddleware(
	req: Request,
	res: Response,
	next: NextFunction
) {
	const comment = req.body.data as COMMENT_SCHEMA;
	try {
		//NOTE: This try catch is probably not doing anything since the only function that can throw is insertPost...and it already has a trycatch
		//Set the timestamp to "now"
		comment.timestamp = new Date().toJSON();

		const { status, ...db_data } = await dbClient.updateComment(
			{ _id: new ObjectId(comment._id) },
			comment
		);
		return res.status(status).json(db_data);
	} catch (error) {
		return res.status(500).json({
			message: "Internal server error while updating post",
			error,
		});
	}
}
