import { USER_ROLES } from "../../database/models/user-roles.enum";

export type AuthCookie = {
	id: string;
	name: string;
	role: USER_ROLES;
};
