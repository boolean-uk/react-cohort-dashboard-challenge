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

export default function validatePostDataMiddleware(
	req: Request,
	res: Response,
	next: NextFunction
) {
	const requiredFields: ValidateCondition<keyof POST_SCHEMA>[] = [
		{
			param: "title",
			validator: validateString,
		},
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
			param: "tags",
			validator: validateListString,
			optional: true,
		},
	];

	validateParamsMiddleware(requiredFields, req, res, next);
}
