import { ObjectId } from "mongodb";
import { IDENTITY_SCHEMA } from "../../../../database/models/identity.schema";

export interface FEED_CONTENT_OWNERSHIP_SCHEMA extends IDENTITY_SCHEMA {
	authorID: ObjectId | string;
}
