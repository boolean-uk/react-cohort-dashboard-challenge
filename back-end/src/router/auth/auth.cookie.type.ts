import { USER_ROLES } from "../../database/models/user.schema";

export type AuthCookie = {
	id: string;
	name: string;
	role: USER_ROLES;
};
