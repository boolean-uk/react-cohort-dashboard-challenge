import express from "express";
import validatePostFiltersMiddleware from "../common/validators/posts/postsFilters.validator.middleware";
import userMiddleware from "./:user.middleware";
import validateUserParamsMiddleware from "./:user.validator.middleware";
import getUserPostsMiddleware from "./getUserPosts.middleware";

const BASE_URL = "/:id";

const router = express.Router();
router.use(BASE_URL, validateUserParamsMiddleware);

router.get(BASE_URL, userMiddleware);

router.post(
	BASE_URL + "/posts",
	validatePostFiltersMiddleware,
	getUserPostsMiddleware
);

export default router;
