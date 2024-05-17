import { NextFunction, Request, Response } from "express";
import { ObjectId } from "mongodb";
import { dbClient } from "../../..";
import { FEED_CONTENT_OWNERSHIP_SCHEMA } from "../common/models/feedContentOwnership.schema";

export default async function deleteCommentsMiddleware(
	req: Request,
	res: Response,
	next: NextFunction
) {
	const { _id } = req.body.data as FEED_CONTENT_OWNERSHIP_SCHEMA;

	try {
		const { status, ...db_data } = await dbClient.deleteComment({
			_id: new ObjectId(_id),
		});
		return res.status(status).json(db_data);
	} catch (error) {
		return res.status(500).json({
			message: "Internal server error while deleting comment",
			error,
		});
	}
}
