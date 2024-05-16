import { ObjectId } from "mongodb";
import { FEED_CONTENT_SCHEMA } from "./feedContent.schema";

export interface POST_SCHEMA extends FEED_CONTENT_SCHEMA {
	title: string;
	tags: string[];
}
