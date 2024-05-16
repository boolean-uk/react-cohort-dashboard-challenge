import { ObjectId } from "mongodb";
import { USER_ROLES } from "./user-roles.enum";
import { IDENTITY_SCHEMA } from "./identity.schema";

export interface USER_SCHEMA extends IDENTITY_SCHEMA {
	name: string;
	username: string;
	email: string;
	role: USER_ROLES;
}
