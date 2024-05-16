import express from "express";
import authenticateCookieMiddleware from "../../auth/authenticateCookie.middleware";
import getFeedPostsMiddleware from "./getFeedPosts.middleware";
import validatePostFiltersMiddleware from "../common/validators/posts/postsFilters.validator.middleware";
import validatePostDataMiddleware from "../common/validators/posts/postData.validator.middleware";
import postNewPostMiddleware from "./postNewPost.middleware";
import editPostMiddleware from "./editPost.middleware";
import deletePostMiddleware from "./deletePost.middleware";
import verifyFeedContentOwnershipMiddleware from "../common/validators/feed/verifyFeedContentOwnership.validator.middleware";
import validateFeedContentOwnershipParamsMiddleware from "../common/validators/feed/validateFeedContentOwnershipParams.validator.middleware";

const router = express.Router();
router.use(authenticateCookieMiddleware);

router.get("/", getFeedPostsMiddleware);
router.post("/", validatePostDataMiddleware, postNewPostMiddleware);
router.put(
	"/",
	validateFeedContentOwnershipParamsMiddleware,
	verifyFeedContentOwnershipMiddleware,
	validatePostDataMiddleware,
	editPostMiddleware
);
router.delete(
	"/",
	validateFeedContentOwnershipParamsMiddleware,
	verifyFeedContentOwnershipMiddleware,
	validatePostDataMiddleware,
	deletePostMiddleware
);

export default router;
