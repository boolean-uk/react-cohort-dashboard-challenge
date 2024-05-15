import { NextFunction, Request, Response } from "express";
import { dbClient } from "../../..";
import { DB_COLLECTIONS } from "../../../database/collections.enum";
import { PUBLIC_USER_DATA_SCHEMA } from "../../../database/models/public_user_data.schema";

export default async function getPostsMiddleware(
	req: Request,
	res: Response,
	next: NextFunction
) {
	const filters = req.body;
	//FIX: Filters should be sanitized first

	try {
		const data = [];
		let i = 0;
		const collection = dbClient.find(DB_COLLECTIONS.POSTS, { filters });
		// RETURN FIRST 50 POSTS
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
