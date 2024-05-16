import { NextFunction, Request, Response } from "express";
import { GET_POSTS_PARAMS } from "../common/models/postsFilters.schema";
import { ValidatorCallback } from "../../../validators/validator.type";
import { validateString } from "../../../validators/form.validator";
import { validateParams } from "../../../validators/params.validator.middleware";
import { validateRegExp } from "../../../validators/misc.validator";
import { ObjectId } from "mongodb";

export default function validateUserParamsMiddleware(
	req: Request,
	res: Response,
	next: NextFunction
) {
	if (!ObjectId.isValid(req.params?.id)) {
		return res.status(400).json({ message: "Invalid id format" });
	}
	next();
}
