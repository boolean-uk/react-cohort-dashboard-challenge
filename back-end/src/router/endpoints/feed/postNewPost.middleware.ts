import { NextFunction, Request, Response } from "express";
import { ObjectId } from "mongodb";
import { dbClient } from "../../..";
import { DB_COLLECTIONS } from "../../../database/collections.enum";
import { POSTS_FILTERS_SCHEMA } from "../common/models/postsFilters.schema";
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
		//Set the timestamp to "now"
		postData.timestamp = new Date().toJSON();

		if ((await dbClient.insertPost(postData)).acknowledged)
			return res.status(200).json({ message: "great success" });
		else throw new Error("Database refused to insert");
	} catch (error) {
		return res.status(500).json({
			message:
				//@ts-ignore
				error?.message || "Internal server error while inserting post",
			error,
		});
	}
}
