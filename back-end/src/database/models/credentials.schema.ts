import { ObjectId } from "mongodb";
import { IDENTITY_SCHEMA } from "./identity.schema";

export interface CREDENTIALS_SCHEMA extends IDENTITY_SCHEMA {
	email: string;
	hash: string;
}
