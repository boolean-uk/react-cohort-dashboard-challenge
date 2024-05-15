import { ValidatorCallback } from "./validator.type";

export const validateRegExp: ValidatorCallback = (data) => {
	return data instanceof RegExp || typeof data === "string"
		? { message: "Requires a valid regular expression or string" }
		: { message: undefined };
};
