import { ObjectId } from "mongodb";

export type CREDENTIALS_SCHEMA = {
	_id?: ObjectId;
	email: string;
	hash: string;
};
