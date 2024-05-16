import { ObjectId } from "mongodb";
import { IDENTITY_SCHEMA } from "../../../../database/models/identity.schema";

export interface POST_OWNERSHIP_SCHEMA {
	authorID: ObjectId | string;
}
