import { NextFunction, Request, Response } from "express";
import { ValidatorCallback } from "./validator.type";
import { ValidateCondition } from "./validateCondition.type";

/**
 * Given a list of required params, and their respective validators, validates request params and  returns feedback to the client app.
 * If everything checks, next() is called
 */
export function validateParams(
	conditions: ValidateCondition<string>[],
	req: Request,
	res: Response,
	next: NextFunction
) {
	if (!req.body?.data) {
		return res
			.status(400)
			.json({ message: "Please wrap payload in a data object" });
	}

	const bodyParams = Object.keys(req.body.data);
	const feedback: Record<string, string> = {};

	//Check for extra fields! they should not be present
	const conditionKeys = conditions.map((e) => e.param);
	for (const key of bodyParams) {
		if (!conditionKeys.includes(key)) {
			//Param was detected but should not be present
			return res
				.status(400)
				.json({ message: `Property ${key} should not be included` });
		}
	}

	for (const { param, validator, optional } of conditions) {
		//Param is optional and is not present
		if (optional && !bodyParams.includes(param)) continue;

		//param is required but is missing
		if (!bodyParams.includes(param)) {
			feedback[param] = "missing";
			continue;
		}
		//param exists and will be validated
		const invalidFeedback = validator(req.body.data[param]).message;
		if (invalidFeedback) {
			feedback[param] = invalidFeedback;
		}
	}

	if (Object.keys(feedback).length > 0)
		return res
			.status(400)
			.json({ message: "Invalid body content", feedback });

	next();
}
