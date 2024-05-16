import express from "express";
import validatePostFiltersMiddleware from "../common/validators/posts/postsFilters.validator.middleware";
import userMiddleware from "./:user.middleware";
import validateUserParamsMiddleware from "./:user.validator.middleware";
import getUserPostsMiddleware from "./getUserPosts.middleware";

const router = express.Router();
router.use(validateUserParamsMiddleware);

router.get("/", userMiddleware);
router.post("/posts", validatePostFiltersMiddleware, getUserPostsMiddleware);

export default router;
