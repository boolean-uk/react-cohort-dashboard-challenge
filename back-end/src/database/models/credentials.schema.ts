import { ObjectId } from "mongodb";

export interface CREDENTIALS_SCHEMA {
	_id?: ObjectId;
	email: string;
	hash: string;
}
