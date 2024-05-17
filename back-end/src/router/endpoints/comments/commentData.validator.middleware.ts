import { NextFunction, Request, Response } from "express";
import { POST_SCHEMA } from "../../../database/models/post.schema";
import {
	validateNumber,
	validateString,
	validateTimestamp,
} from "../../../validators/form.validator";
import {
	validateListString,
	validateObjectId,
} from "../../../validators/misc.validator";
import { validateParamsMiddleware } from "../../../validators/params.validator.middleware";
import { ValidateCondition } from "../../../validators/validateCondition.type";
import { COMMENT_SCHEMA } from "../../../database/models/comment.schema";

export default function validateCommentDataMiddleware(
	req: Request,
	res: Response,
	next: NextFunction
) {
	const requiredFields: ValidateCondition<keyof COMMENT_SCHEMA>[] = [
		{
			param: "_id",
			validator: validateObjectId,
			optional: true,
		},
		{
			param: "authorID",
			validator: validateObjectId,
		},
		{
			param: "authorName",
			validator: validateString,
		},

		{
			param: "content",
			validator: validateString,
		},
		{
			param: "likes",
			validator: validateNumber,
		},
		{
			param: "timestamp",
			validator: validateTimestamp,
			optional: true,
		},
		{
			param: "postID",
			validator: validateObjectId,
		},
	];

	validateParamsMiddleware(requiredFields, req, res, next);
}
