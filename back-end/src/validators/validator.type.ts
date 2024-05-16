/**
 * A callback that accepts some data, and after validation returns a message.
 * Undefined messages mean that data is valid
 */
export type ValidatorCallback = (data: any, ...args: any) => ValidatorFeedback;

//IMPROVE: Would it be useful to code error types in order to improve UX?
// message prop contains text that should be displayed on a toast/alert/etc
// but with a code i could also understand where the error might come from!
// like...a input would never send an object instead of a string...unless that it came from a coding error!
// resulting on a app error instead of user error
export enum VALIDATOR_ERR_CODES_ENUM {
	TYPE,
	INPUT,
}

export type ValidatorFeedback = {
	message: string | undefined;
	status?: number;
};
