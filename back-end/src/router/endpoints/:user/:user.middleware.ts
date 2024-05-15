import { NextFunction, Request, Response } from "express";
import { dbClient } from "../../..";
import { DB_COLLECTIONS } from "../../../database/collections.enum";
import { PUBLIC_USER_DATA_SCHEMA } from "../../../database/models/public_user_data.schema";
import { ObjectId } from "mongodb";

export default async function userMiddleware(
	req: Request,
	res: Response,
	next: NextFunction
) {
	console.log(req.params.id);

	const targetUserData = (await dbClient.findOne(
		DB_COLLECTIONS.PUBLIC_USER_DATA,
		{
			_id: new ObjectId(req.params.id),
		}
	)) as PUBLIC_USER_DATA_SCHEMA | null;

	//== User was not found
	if (!targetUserData) {
		return res.status(404).json({ message: "User not found" });
	}

	//== User WAS found
	return res.status(200).json({ data: targetUserData });
}
