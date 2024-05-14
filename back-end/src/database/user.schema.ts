export type USER_SCHEMA = {
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
