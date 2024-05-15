import { NextFunction, Request, Response } from "express";
import { GET_POSTS_PARAMS } from "./getPosts.params.schema";
import { ValidatorCallback } from "../../../validators/validator.type";
import { validateString } from "../../../validators/form.validator";
import { validateParams } from "../../../validators/params.validator.middleware";
import { validateRegExp } from "../../../validators/misc.validator";

export default function validateGetPostsParamsMiddleware(
	req: Request,
	res: Response,
	next: NextFunction
) {
	const requiredFields: {
		param: keyof GET_POSTS_PARAMS;
		validator: ValidatorCallback;
	}[] = [
		{
			param: "title",
			validator: (data) =>
				data === undefined
					? { message: undefined }
					: validateRegExp(data),
		},
		{
			param: "id",
			validator: (data) =>
				data === undefined
					? { message: undefined }
					: validateRegExp(data),
		},
	];

	validateParams(requiredFields, req, res, next);
}
