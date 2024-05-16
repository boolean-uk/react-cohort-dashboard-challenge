import { ObjectId } from "mongodb";
import { IDENTITY_SCHEMA } from "./identity.schema";

export interface FEED_CONTENT_SCHEMA extends IDENTITY_SCHEMA {
	likes: number;
	content: string;
	authorID: ObjectId | string;
	authorName: string;
	timestamp: string;
}
