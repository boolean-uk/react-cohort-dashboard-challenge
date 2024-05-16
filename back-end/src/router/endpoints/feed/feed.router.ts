import express from "express";
import authenticateCookieMiddleware from "../../auth/authenticateCookie.middleware";
import getFeedPostsMiddleware from "./getFeedPosts.middleware";
import validatePostFiltersMiddleware from "../common/validators/posts/postsFilters.validator.middleware";
import validatePostDataMiddleware from "../common/validators/posts/postData.validator.middleware";
import postNewPostMiddleware from "./postNewPost.middleware";
import editPostMiddleware from "./editPost.middleware";
import deletePostMiddleware from "./deletePost.middleware";
import verifyPostOwnershipMiddleware from "../common/validators/posts/verifyPostOwnership.validator.middleware";
import validatePostOwnershipParamsMiddleware from "../common/validators/posts/validatePostOwnershipParams.validator.middleware";

const router = express.Router();
router.use(authenticateCookieMiddleware);

router.get("/", getFeedPostsMiddleware);
router.post("/", validatePostDataMiddleware, postNewPostMiddleware);
router.put(
	"/",
	validatePostOwnershipParamsMiddleware,
	verifyPostOwnershipMiddleware,
	validatePostDataMiddleware,
	editPostMiddleware
);
router.delete("/", validatePostDataMiddleware, deletePostMiddleware);

export default router;
