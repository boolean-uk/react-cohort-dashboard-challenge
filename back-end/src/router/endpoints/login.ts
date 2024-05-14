import { Request, Response } from "express";
import { NextFunction } from "express-serve-static-core";
import { validateParams } from "../validators/params-validator";
import { log } from "console";

type LOGIN_PARAMS = {
	email: string;
	password: string;
};

export function loginHandler(req: Request, res: Response, next: NextFunction) {
	//validate login

	//get user data
	//send token + data
	const DUMMY_USER = {
		name: "Borat",
		username: "kazacs_great_journalist",
		email: "kazacs-news@paper.kz",
		role: "admin",
	};

	return res.status(200).json({ token: "123", user: DUMMY_USER });
}

export function validateLoginParams(
	req: Request,
	res: Response,
	next: NextFunction
) {
	const requiredFields = ["email", "password"];
	validateParams(requiredFields, req, res, next);
}
