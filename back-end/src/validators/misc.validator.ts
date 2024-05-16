import { ObjectId } from "mongodb";
import { validateString } from "./form.validator";
import { ValidatorCallback } from "./validator.type";

/**
 * Checks if a given input is a valid RegExp or a string
 */
export const validateRegExp: ValidatorCallback = (data) => {
	return data instanceof RegExp || typeof data === "string"
		? { message: "Requires a valid regular expression or string" }
		: { message: undefined };
};
/**
 * Checks if a given list contains ONLY valid RegExp or strings
 */
export const validateListRegExp: ValidatorCallback = (data) => {
	if (!Array.isArray(data)) return { message: "List is not an array" };
	for (const el of data) {
		if (validateRegExp(el).message) {
			return { message: "List contains invalid elements" };
		}
	}
	return { message: undefined };
};
/**
 * Checks if a given list contains ONLY valid strings
 */
export const validateListString: ValidatorCallback = (data) => {
	if (!Array.isArray(data)) return { message: "List is not an array" };
	for (const el of data) {
		if (validateString(el).message) {
			return { message: "List contains invalid elements" };
		}
	}
	return { message: undefined };
};
export const validateObjectId: ValidatorCallback = (data) => {
	return ObjectId.isValid(data)
		? { message: undefined }
		: { message: "Invalid id format" };
};
