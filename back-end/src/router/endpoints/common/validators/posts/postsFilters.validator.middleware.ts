import { NextFunction, Request, Response } from "express";
import {
	validateListRegExp,
	validateOptionalData,
	validateRegExp,
} from "../../../../../validators/misc.validator";
import { validateParams } from "../../../../../validators/params.validator.middleware";
import { ValidatorCallback } from "../../../../../validators/validator.type";
import { POSTS_FILTERS_SCHEMA } from "../../models/postsFilters.schema";

export default function validatePostFiltersMiddleware(
	req: Request,
	res: Response,
	next: NextFunction
) {
	const requiredFields: {
		param: keyof POSTS_FILTERS_SCHEMA;
		validator: ValidatorCallback;
	}[] = [
		{
			param: "title",
			validator: (data) => validateOptionalData(data, validateRegExp),
		},
		{
			param: "_id",
			validator: (data) => validateOptionalData(data, validateRegExp),
		},
		{
			param: "authorID",
			validator: (data) => validateOptionalData(data, validateRegExp),
		},
		{
			param: "authorName",
			validator: (data) => validateOptionalData(data, validateRegExp),
		},

		{
			param: "content",
			validator: (data) => validateOptionalData(data, validateRegExp),
		},
		{
			param: "likes",
			validator: (data) => validateOptionalData(data, validateRegExp),
		},
		{
			param: "timestamp",
			validator: (data) => validateOptionalData(data, validateRegExp),
		},
		{
			param: "tags",
			validator: (data) => validateOptionalData(data, validateListRegExp),
		},
	];

	validateParams(requiredFields, req, res, next);
}
