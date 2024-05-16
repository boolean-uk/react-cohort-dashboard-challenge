import { NextFunction, Request, Response } from "express";
import { validateObjectId } from "../../../../../validators/misc.validator";
import { validateParamsMiddleware } from "../../../../../validators/params.validator.middleware";
import { ValidateCondition } from "../../../../../validators/validateCondition.type";
import { FEED_CONTENT_OWNERSHIP_SCHEMA } from "../../models/feedContentOwnership.schema";
import { FEED_CONTENT_SCHEMA } from "../../../../../database/models/feedContent.schema";
import { POST_SCHEMA } from "../../../../../database/models/post.schema";
import { COMMENT_SCHEMA } from "../../../../../database/models/comment.schema";

export default function validateFeedContentOwnershipParamsMiddleware(
	req: Request,
	res: Response,
	next: NextFunction
) {
	const requiredFields: ValidateCondition<
		keyof FEED_CONTENT_OWNERSHIP_SCHEMA
	>[] = [
		{
			param: "_id",
			validator: validateObjectId,
		},
		{
			param: "authorID",
			validator: validateObjectId,
		},
	];

	validateParamsMiddleware(requiredFields, req, res, next);
}
