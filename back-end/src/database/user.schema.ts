import { ObjectId } from "mongodb";

export type USER_SCHEMA = {
	_id?: ObjectId;
	name: string;
	username: string;
	email: string;
	password: string;
	role: USER_ROLES;
};

export enum USER_ROLES {
	BASIC,
	ADMIN,
}
