import { NextFunction, Request, Response } from "express";
import {
	validateListRegExp,
	validateObjectId,
	validateRegExp,
} from "../../../validators/misc.validator";
import { validateParamsMiddleware } from "../../../validators/params.validator.middleware";
import { ValidateCondition } from "../../../validators/validateCondition.type";
import { POSTS_FILTERS_SCHEMA } from "./postsFilters.schema";
import { POST_SCHEMA } from "../../../database/models/post.schema";

export default function validatePostFiltersMiddleware(
	req: Request,
	res: Response,
	next: NextFunction
) {
	const requiredFields: ValidateCondition<keyof POSTS_FILTERS_SCHEMA>[] = [
		{
			param: "title",
			validator: validateRegExp,
			optional: true,
		},
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
			param: "tags",
			validator: validateListRegExp,
			optional: true,
		},
	];

	validateParamsMiddleware(requiredFields, req, res, next);
}
