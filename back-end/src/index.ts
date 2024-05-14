import dotenv from "dotenv";
dotenv.config();

import app from "./server";

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`[server]: server is running on port ${port}`);
});
