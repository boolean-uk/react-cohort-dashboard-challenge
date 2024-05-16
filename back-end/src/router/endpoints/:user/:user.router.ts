import express from "express";
import authenticateCookie from "../../auth/authenticateCookie.middleware";
import userMiddleware from "./:user.middleware";
import validateUserParamsMiddleware from "./:user.validator.middleware";
import getPostsMiddleware from "./getPosts.middleware";
import validatePostFiltersMiddleware from "../common/validators/postsFilters.validator.middleware";

const router = express.Router();
const BASE_URL = "/:id";
router.get(BASE_URL, validateUserParamsMiddleware, userMiddleware);
router.post(
	BASE_URL + "/posts",
	validateUserParamsMiddleware,
	validatePostFiltersMiddleware,
	getPostsMiddleware
);

export default router;
