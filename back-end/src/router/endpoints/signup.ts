import { Request, Response } from "express";
import { NextFunction } from "express-serve-static-core";
import { mongoClient } from "../..";
import {
	validateEmail,
	validateName,
	validatePassword,
} from "../validators/form.validator";
import { validateParams } from "../validators/params.validator";
import { ValidatorCallback } from "../validators/validator.type";

type SIGNUP_PARAMS = {
	name: string;
	username: string;
	email: string;
	password: string;
};

export async function signUpHandler(
	req: Request,
	res: Response,
	next: NextFunction
) {
	//validate login
	const { email, password, name, username }: SIGNUP_PARAMS = req.body;

	if (await mongoClient.has("users", { email })) {
		return res.status(401).json({ message: "Email already exists" });
	} else {
		//Create new user
		const user = { email, password, name, username, role: 0 };
		mongoClient.getCollection("users").insertOne(user);
		return res.status(200).json({ message: "Created new user" });
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

export function validateSignUpParams(
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
