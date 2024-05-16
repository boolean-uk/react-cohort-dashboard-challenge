import { ObjectId } from "mongodb";
import { FEED_CONTENT_SCHEMA } from "./feedContent.schema";

export interface COMMENT_SCHEMA extends FEED_CONTENT_SCHEMA {
	postID: ObjectId | string;
}
