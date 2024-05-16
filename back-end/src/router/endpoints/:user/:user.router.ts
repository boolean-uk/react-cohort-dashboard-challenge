import express from "express";
import authenticateCookieMiddleware from "../../auth/authenticateCookie.middleware";
import userMiddleware from "./:user.middleware";
import validateUserParamsMiddleware from "./:user.validator.middleware";
import getPostsMiddleware from "./getPosts.middleware";
import validatePostFiltersMiddleware from "../common/validators/postsFilters.validator.middleware";

const BASE_URL = "/:id";

const router = express.Router();
router.use(BASE_URL, validateUserParamsMiddleware);

router.get(BASE_URL, userMiddleware);

router.post(
	BASE_URL + "/posts",
	validatePostFiltersMiddleware,
	getPostsMiddleware
);

export default router;
