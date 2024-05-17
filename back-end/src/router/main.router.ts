import express from "express";
import authenticateCookieMiddleware from "./auth/authenticateCookie.middleware";
import userRouter from "./endpoints/:user/:user.router";
import commentsRouter from "./endpoints/comments/comments.router";
import loginMiddleware from "./endpoints/login/login.middleware";
import validateLoginParamsMiddleware from "./endpoints/login/login.validator.middleware";
import logoutMiddleware from "./endpoints/logout/logout.middleware";
import postsRouter from "./endpoints/posts/posts.router";
import signUpMiddleware from "./endpoints/signup/signup.middleware";
import validateSignUpParamsMiddleware from "./endpoints/signup/signup.validator.middleware";

const router = express.Router();

router.post("/signup", validateSignUpParamsMiddleware, signUpMiddleware);
router.post("/login", validateLoginParamsMiddleware, loginMiddleware);
router.get("/logout", authenticateCookieMiddleware, logoutMiddleware);
router.use("/posts", postsRouter);
router.use("/comments", commentsRouter);
router.use("/user/:id", userRouter);

export default router;
