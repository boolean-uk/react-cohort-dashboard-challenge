import { NextFunction, Request, Response } from "express";
import {
	validateListRegExp,
	validateObjectId,
	validateRegExp,
} from "../../../validators/misc.validator";
import { validateParamsMiddleware } from "../../../validators/params.validator.middleware";
import { ValidateCondition } from "../../../validators/validateCondition.type";
import { POSTS_FILTERS_SCHEMA } from "../posts/postsFilters.schema";
import { COMMENTS_FILTERS_SCHEMA } from "./commentsFilters.schema";

export default function validateCommentFiltersMiddleware(
	req: Request,
	res: Response,
	next: NextFunction
) {
	const requiredFields: ValidateCondition<keyof COMMENTS_FILTERS_SCHEMA>[] = [
		{
			param: "_id",
			validator: validateObjectId,
			optional: true,
		},
		{
			param: "authorID",
			validator: validateObjectId,
			optional: true,
		},
		{
			param: "authorName",
			validator: validateRegExp,
			optional: true,
		},

		{
			param: "content",
			validator: validateRegExp,
			optional: true,
		},
		{
			param: "likes",
			validator: validateRegExp,
			optional: true,
		},
		{
			param: "timestamp",
			validator: validateRegExp,
			optional: true,
		},
		{
			param: "postID",
			validator: validateObjectId,
		},
	];

	validateParamsMiddleware(requiredFields, req, res, next);
}
