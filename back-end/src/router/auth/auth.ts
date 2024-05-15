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
	if (!process.env.JTW_ACCESS_CODE)
		throw new Error("Can't verify token without secret code");
	try {
		const res = jwt.verify(token, process.env.JTW_ACCESS_CODE);
	} catch (error) {
		console.log(error);
		//IMPROVE: implement better handling

		//LOOKUP: https://stackoverflow.com/a/36698015/22510505
		//return 422 when token "is valid" but was tampered

		return { message: "Invalid Token", status: 400 };
	}

	return { message: "Authorized", status: 0 };
}

const auth = {
	encryptString,
	compareHash,
	generateAccessToken,
	verifyAccessToken,
};

export default auth;
