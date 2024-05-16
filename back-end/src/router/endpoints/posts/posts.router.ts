import express from "express";
import authenticateCookieMiddleware from "../../auth/authenticateCookie.middleware";
import validateFeedContentOwnershipParamsMiddleware from "../common/validators/feed/validateFeedContentOwnershipParams.validator.middleware";
import verifyFeedContentOwnershipMiddleware from "../common/validators/feed/verifyFeedContentOwnership.validator.middleware";
import validatePostDataMiddleware from "../common/validators/posts/postData.validator.middleware";
import deletePostMiddleware from "./deletePost.middleware";
import editPostMiddleware from "./editPost.middleware";
import getPostsListMiddleware from "./getPostsList.middleware";
import postNewPostMiddleware from "./postNewPost.middleware";

const router = express.Router();
router.use(authenticateCookieMiddleware);

router.get("/", getPostsListMiddleware);

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
	deletePostMiddleware
);

export default router;
