import express, { Request, Response } from "express";
import { loginHandler, validateLoginParams } from "./endpoints/login";
import { signUpHandler, validateSignUpParams } from "./endpoints/signup";
const router = express.Router();

router.post("/login", validateLoginParams, loginHandler);
router.post("/signup", validateSignUpParams, signUpHandler);

export default router;
