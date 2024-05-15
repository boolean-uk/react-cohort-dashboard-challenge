/**
 * A set of functions that validate data from forms
 * This file works as a wrapper for any kind of library that may be installed later
 */

import { ValidatorCallback as ValidatorCallback } from "./validator.type";

/**
 * Checks data against a list of valid types.
 * @returns false, or a ValidationFeedback object
 */
const isInvalidType = (data: any, ...types: string[]) =>
	!types.includes(typeof data) && {
		message: `Received: [${typeof data}] instead of types: [${types}]`,
	};

export const validateString: ValidatorCallback = (data) => {
	const isInvalid = isInvalidType(data, "string");
	return isInvalid ? isInvalid : { message: undefined };
};

export const validateName: ValidatorCallback = (data) => {
	const isInvalid = isInvalidType(data, "string");
	if (isInvalid) return isInvalid;

	if (/^[A-z]+$/i.test(data)) return { message: undefined };
	else
		return {
			message: "Invalid set of characters. Only supports [A-z]",
		};
};

export const validateEmail: ValidatorCallback = (data) => {
	const isInvalid = isInvalidType(data, "string");
	if (isInvalid) return isInvalid;

	if (/@/i.test(data)) return { message: undefined };
	else return { message: "Email is not valid" };
};

export const validatePassword: ValidatorCallback = (data) => {
	const isInvalid = isInvalidType(data, "string");
	if (isInvalid) return isInvalid;

	if (!/[A-Z]+/.test(data))
		return { message: "Requires at least one uppercase letter" };
	if (!/[a-z]+/.test(data))
		return { message: "Requires at least one lowercase letter" };
	if (!/[0-9]+/.test(data))
		return { message: "Requires at least one number" };

	return { message: undefined };
};
