import { NextFunction, Request, Response } from "express";
import { ObjectId } from "mongodb";
import { dbClient } from "../../..";
import { DB_COLLECTIONS } from "../../../database/collections.enum";
import { POSTS_FILTERS_SCHEMA } from "../common/models/postsFilters.schema";

export default async function getUserPostsMiddleware(
	req: Request,
	res: Response,
	next: NextFunction
) {
	const filters = req.body as POSTS_FILTERS_SCHEMA;

	try {
		const data = [];
		let i = 0;
		const collection = dbClient.find(DB_COLLECTIONS.POSTS, {
			_id: new ObjectId(req.params.id),
			filters,
		});
		/*IMPROVE: RETURN FIRST 50 POSTS MAX
			Include start index on req.params to continue retrieving new posts
		*/
		do {
			if (await collection.hasNext()) data.push(collection.next());
			else break;

			i++;
		} while (i < 50);

		res.status(200).json({ data });
	} catch (error) {
		res.status(500).json({
			message: "Internal server error while retrieving posts",
			error,
		});
	}
}
