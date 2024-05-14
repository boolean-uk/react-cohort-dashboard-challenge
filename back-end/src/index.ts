import dotenv from "dotenv";
dotenv.config();
const uri = process.env.DB_URI as string;
const DB_NAME = process.env.DB_NAME as string;

import app from "./server";
import DatabaseClient from "./database/DatabaseClient";

const port = process.env.PORT || 3000;

export const mongoClient = new DatabaseClient(uri, DB_NAME);
//
mongoClient.connect();
process.on("SIGINT", mongoClient.close);
process.on("SIGTERM", mongoClient.close);
//
app.listen(port, () => {
	console.log(`[server]: server is running on port ${port}`);
});
