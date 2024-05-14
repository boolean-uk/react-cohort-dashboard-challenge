import { NextFunction, Request, Response } from "express";

export function validateParams(
	src: string[],
	req: Request,
	res: Response,
	next: NextFunction
) {
	const params = Object.keys(req.body);
	console.log("Params sent", params, req.body);

	const missing: string[] = [];
	for (const param of src) {
		if (!params.includes(param)) {
			console.log(param);

			missing.push(param);
		}
	}

	if (missing.length > 0) {
		return res
			.status(400)
			.json("Badly formed request, missing fields: " + missing);
	} else {
		next();
	}
}
