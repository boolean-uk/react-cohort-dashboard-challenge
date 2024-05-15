import { ObjectId } from "mongodb";
import { USER_ROLES } from "./user-roles.enum";

export type USER_SCHEMA = {
	_id?: ObjectId;
	name: string;
	username: string;
	email: string;
	role: USER_ROLES;
};
