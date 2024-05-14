import { NextFunction, Request, Response } from "express";
import { ValidatorCallback } from "./validator.type";

/**
 * Given a list of required params, and their respective validators, validates request params and  returns feedback to the client app.
 * If everything checks, next() is called
 */
export function validateParams(
	conditions: { param: string; validator: ValidatorCallback }[],
	req: Request,
	res: Response,
	next: NextFunction
) {
	const bodyParams = Object.keys(req.body);
	const feedback: Record<string, string> = {};

	for (const { param, validator } of conditions) {
		if (!bodyParams.includes(param)) {
			feedback[param] = "missing";
			continue;
		}
		const invalidFeedback = validator(req.body[param]).message;
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
