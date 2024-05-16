import { NextFunction, Request, Response } from "express";
import { validateObjectId } from "../../../../../validators/misc.validator";
import { validateParams } from "../../../../../validators/params.validator.middleware";
import { ValidateCondition } from "../../../../../validators/validateCondition.type";
import { POST_OWNERSHIP_SCHEMA } from "../../models/feedContentOwnership.schema";

export default function validateFeedContentOwnershipParamsMiddleware(
	req: Request,
	res: Response,
	next: NextFunction
) {
	const requiredFields: ValidateCondition<keyof POST_OWNERSHIP_SCHEMA>[] = [
		{
			param: "authorID",
			validator: validateObjectId,
		},
	];

	validateParams(requiredFields, req, res, next);
}
