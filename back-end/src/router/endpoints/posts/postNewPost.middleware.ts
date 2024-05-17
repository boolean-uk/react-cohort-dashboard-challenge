import { NextFunction, Request, Response } from "express";
import { ObjectId } from "mongodb";
import { dbClient } from "../../..";
import { DB_COLLECTIONS } from "../../../database/collections.enum";
import { POSTS_FILTERS_SCHEMA } from "./postsFilters.schema";
import { POST_SCHEMA } from "../../../database/models/post.schema";
import { JwtPayload } from "jsonwebtoken";

export default async function postNewPostMiddleware(
	req: Request,
	res: Response,
	next: NextFunction
) {
	const postData = req.body.data as POST_SCHEMA;
	//NOTE: This is not the same as GetUserPostsMiddleware! Here we retrieve only the first 50 posts
	// On the GetUserPostsMiddleware we only get the :user posts
	try {
		//NOTE: This try catch is probably not doing anything since the only function that can throw is insertPost...and it already has a trycatch
		//Set the timestamp to "now"
		postData.timestamp = new Date().toJSON();

		const { status, ...db_data } = await dbClient.insertPost(postData);
		return res.status(status).json(db_data);
	} catch (error) {
		return res.status(500).json({
			message: "Internal server error while inserting post",
			error,
		});
	}
}
