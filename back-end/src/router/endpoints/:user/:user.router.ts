import express from "express";
import authenticateCookie from "../../auth/authenticateCookie.middleware";
import userMiddleware from "./:user.middleware";
import validateGetPostsParamsMiddleware from "./getPosts.validator.middleware";

const router = express.Router();
const BASE_URL = "/:id";
router.get(BASE_URL, userMiddleware);
router.post(
	BASE_URL + "/posts",
	validateGetPostsParamsMiddleware,
	userMiddleware
);

export default router;
