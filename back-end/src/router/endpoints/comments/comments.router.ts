import express from "express";
import authenticateCookieMiddleware from "../../auth/authenticateCookie.middleware";
import validateFeedContentOwnershipParamsMiddleware from "../common/validators/feed/validateFeedContentOwnershipParams.validator.middleware";
import verifyFeedContentOwnershipMiddleware from "../common/validators/feed/verifyFeedContentOwnership.validator.middleware";
import validatePostDataMiddleware from "../posts/postData.validator.middleware";
import deletePostMiddleware from "./deleteComments.middleware";
import editCommentMiddleware from "./editComment.middleware";
import getCommentsListMiddleware from "./getCommentsList.middleware";
import postNewCommentMiddleware from "./postNewPost.middleware";
import validateCommentDataMiddleware from "./commentData.validator.middleware";
import validateCommentFiltersMiddleware from "./commentFilters.validator.middleware";

const router = express.Router();
router.use(authenticateCookieMiddleware);

router.post(
	"/list",
	validateCommentFiltersMiddleware,
	getCommentsListMiddleware
);

router.post("/new", validateCommentDataMiddleware, postNewCommentMiddleware);

router.put(
	"/",
	validateFeedContentOwnershipParamsMiddleware,
	verifyFeedContentOwnershipMiddleware,
	validateCommentDataMiddleware,
	editCommentMiddleware
);

router.delete(
	"/",
	validateFeedContentOwnershipParamsMiddleware,
	verifyFeedContentOwnershipMiddleware,
	deletePostMiddleware
);

export default router;
