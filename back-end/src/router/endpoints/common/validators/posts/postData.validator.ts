import { NextFunction, Request, Response } from "express";
import {
	validateListRegExp,
	validateListString,
	validateOptionalData,
	validateRegExp,
} from "../../../../../validators/misc.validator";
import { validateParams } from "../../../../../validators/params.validator.middleware";
import { ValidatorCallback } from "../../../../../validators/validator.type";
import { POSTS_FILTERS_SCHEMA } from "../../models/postsFilters.schema";
import {
	validateName,
	validateNumber,
	validateString,
	validateTimestamp,
} from "../../../../../validators/form.validator";
import { POST_SCHEMA } from "../../../../../database/models/post.schema";

export default function validatePostFiltersMiddleware(
	req: Request,
	res: Response,
	next: NextFunction
) {
	const requiredFields: {
		param: keyof POST_SCHEMA;
		validator: ValidatorCallback;
	}[] = [
		{
			param: "title",
			validator: validateString,
		},
		{
			param: "_id",
			validator: (data) => validateOptionalData(data, validateString),
		},
		{
			param: "authorID",
			validator: validateString,
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
			validator: (data) => validateOptionalData(data, validateTimestamp),
		},
		{
			param: "tags",
			validator: (data) => validateOptionalData(data, validateListString),
		},
	];

	validateParams(requiredFields, req, res, next);
}
