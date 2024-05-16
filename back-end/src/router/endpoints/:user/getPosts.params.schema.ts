import { POST_SCHEMA } from "../../../database/models/post.schema";

export interface GET_POSTS_PARAMS extends POST_SCHEMA {
	id?: string;
}
