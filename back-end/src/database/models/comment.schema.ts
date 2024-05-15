import { ObjectId } from "mongodb";

export type COMMENT_SCHEMA = {
	_id?: ObjectId;
	content: string;
	authorID: ObjectId;
	authorName: string;
	likes: number;
	postID: ObjectId;
};
