import express, { Request, Response } from "express";
import validateLoginParamsMiddleware from "./endpoints/login/signup.validator.middleware";
import validateSignUpParamsMiddleware from "./endpoints/signup/signup.validator.middleware";
import loginMiddleware from "./endpoints/login/login.middleware";
import signUpMiddleware from "./endpoints/signup/signup.middleware";

const router = express.Router();

router.post("/login", validateLoginParamsMiddleware, loginMiddleware);
router.post("/signup", validateSignUpParamsMiddleware, signUpMiddleware);

export default router;
