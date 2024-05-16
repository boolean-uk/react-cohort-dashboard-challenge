import { ObjectId } from "mongodb";

export interface POST_SCHEMA {
	_id?: ObjectId;
	title: string;
	content: string;
	authorID: ObjectId;
	authorName: string;
	tags: string[];
}
