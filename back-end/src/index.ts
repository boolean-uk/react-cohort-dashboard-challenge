//== Setup ENV VARS
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT || 3000;
const uri = process.env.DB_URI as string;
const DB_NAME = process.env.DB_NAME as string;

//== Setup db connection
import DatabaseClient from "./database/DatabaseClient";
export const dbClient = new DatabaseClient(uri, DB_NAME);
dbClient.connect();

//close db connection
process.on("SIGINT", dbClient.close);
process.on("SIGTERM", dbClient.close);

//== Setup server
import app from "./server";
app.listen(port, () => {
	console.log(`[server]: server is running on port ${port}`);
});
