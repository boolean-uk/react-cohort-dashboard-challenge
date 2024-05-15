import { NextFunction, Request, Response } from "express";
import {
	validateEmail,
	validateName,
	validatePassword,
} from "../../../validators/form.validator";
import { validateParams } from "../../../validators/params.validator.middleware";
import { ValidatorCallback } from "../../../validators/validator.type";
import { SIGNUP_PARAMS } from "./signup.params.schema";

export default function validateSignUpParamsMiddleware(
	req: Request,
	res: Response,
	next: NextFunction
) {
	const requiredFields: {
		param: keyof SIGNUP_PARAMS;
		validator: ValidatorCallback;
	}[] = [
		{ param: "name", validator: validateName },
		{ param: "username", validator: validateName },
		{ param: "email", validator: validateEmail },
		{ param: "password", validator: validatePassword },
	];

	validateParams(requiredFields, req, res, next);
}
