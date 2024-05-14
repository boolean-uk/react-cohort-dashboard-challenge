import { Request, Response } from "express";
import { NextFunction } from "express-serve-static-core";
import { mongoClient } from "../../..";
import { validateString } from "../../validators/form.validator";
import { validateParams } from "../../validators/validate.params.middleware";
import { ValidatorCallback } from "../../validators/validator.type";
import { LOGIN_PARAMS } from "./login.params";

export default async function loginMiddleware(
	req: Request,
	res: Response,
	next: NextFunction
) {
	//validate login
	const { email, password }: LOGIN_PARAMS = req.body;

	for await (const user of mongoClient.find("users", { email })) {
		if (user.password === password)
			return res.status(200).json({ token: "123", user: req.body.name });
		else return res.status(401).json({ message: "Invalid Password" });
	}

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
