import express from "express";
import authenticateCookieMiddleware from "../../auth/authenticateCookie.middleware";
import getFeedPostsMiddleware from "./getFeedPosts.middleware";
import validatePostFiltersMiddleware from "../common/validators/posts/postsFilters.validator.middleware";
import validatePostDataMiddleware from "../common/validators/posts/postData.validator.middleware";
import postNewPostMiddleware from "./postNewPost.middleware";

const router = express.Router();
router.use(authenticateCookieMiddleware);

router.get("/", validatePostFiltersMiddleware, getFeedPostsMiddleware);
router.post("/", validatePostDataMiddleware, postNewPostMiddleware);

export default router;
