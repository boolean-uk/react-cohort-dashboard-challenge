import { NextFunction, Request, Response } from "express";
import { LOGIN_PARAMS } from "./login.params.schema";
import { ValidatorCallback } from "../../../validators/validator.type";
import { validateString } from "../../../validators/form.validator";
import { validateParamsMiddleware } from "../../../validators/params.validator.middleware";

export default function validateLoginParamsMiddleware(
	req: Request,
	res: Response,
	next: NextFunction
) {
	const requiredFields: {
		param: keyof LOGIN_PARAMS;
		validator: ValidatorCallback;
	}[] = [
		{ param: "email", validator: validateString },
		{
			param: "password",
			validator: validateString,
		},
	];

	validateParamsMiddleware(requiredFields, req, res, next);
}
