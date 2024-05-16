import express from "express";
import loginMiddleware from "./endpoints/login/login.middleware";
import validateLoginParamsMiddleware from "./endpoints/login/login.validator.middleware";
import signUpMiddleware from "./endpoints/signup/signup.middleware";
import validateSignUpParamsMiddleware from "./endpoints/signup/signup.validator.middleware";
import userMiddleware from "./endpoints/:user/:user.middleware";
import userRouter from "./endpoints/:user/:user.router";
import feedRouter from "./endpoints/feed/feed.router";
import logoutMiddleware from "./endpoints/logout/logout.middleware";

const router = express.Router();

router.post("/signup", validateSignUpParamsMiddleware, signUpMiddleware);
router.post("/login", validateLoginParamsMiddleware, loginMiddleware);
router.get("/logout", logoutMiddleware);
router.use("/feed", feedRouter);
//dont forget to load this as last!
router.use("/:id", userRouter);

export default router;
