import express from "express";
import loginMiddleware from "./endpoints/login/login.middleware";
import validateLoginParamsMiddleware from "./endpoints/login/login.validator.middleware";
import signUpMiddleware from "./endpoints/signup/signup.middleware";
import validateSignUpParamsMiddleware from "./endpoints/signup/signup.validator.middleware";
import userMiddleware from "./endpoints/:user/:user.middleware";

const router = express.Router();

router.post("/login", validateLoginParamsMiddleware, loginMiddleware);
router.post("/signup", validateSignUpParamsMiddleware, signUpMiddleware);
router.get("/:user", userMiddleware);

export default router;
