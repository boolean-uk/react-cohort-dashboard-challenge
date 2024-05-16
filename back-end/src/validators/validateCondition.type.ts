import { ValidatorCallback } from "./validator.type";

export type ValidateCondition<T extends string> = {
	param: T;
	validator: ValidatorCallback;
	optional?: boolean;
};
