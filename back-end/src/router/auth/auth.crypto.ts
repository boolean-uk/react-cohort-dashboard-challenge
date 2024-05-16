import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

async function encryptString(str: string) {
	const salt = await bcrypt.genSalt(10);
	return await bcrypt.hash(str, salt);
}

async function compareHash(str: string, hash: string) {
	return await bcrypt.compare(str, hash);
}

function generateAccessToken(payload: any, expire: string) {
	if (!process.env.JTW_ACCESS_CODE)
		throw new Error("Can't sign token without secret code");

	return jwt.sign(payload, process.env.JTW_ACCESS_CODE, {
		expiresIn: expire,
	});
}

function verifyAccessToken(token: string) {
	//NOTE: This error is meant to break the server!
	// the env variable only loads at server start...so...if its undefined, something is wrong with server env settings
	if (!process.env.JTW_ACCESS_CODE)
		throw new Error("Can't verify token without secret code");

	try {
		const res = jwt.verify(token, process.env.JTW_ACCESS_CODE);

		return { message: "Authorized", status: 200, payload: res };
	} catch (error) {
		//IMPROVE: implement better handling

		//LOOKUP: https://stackoverflow.com/a/36698015/22510505
		//return 422 when token "is valid" but was tampered

		return { error, message: "Invalid Token", status: 400 };
	}
}

const auth = {
	encryptString,
	compareHash,
	generateAccessToken,
	verifyAccessToken,
};

export default auth;
