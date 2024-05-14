import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import router from "./router";
//
const app = express();

app.use(express.json());
app.use(cors());

//
app.get("/", (_req: Request, res: Response) => {
	res.status(200).json({ message: "API server is running" });
});
app.use(router);

// Default Err
app.use(
	(_err: Error, _req: Request, res: Response, _next: NextFunction): void => {
		res.status(500).json({
			message: "An unknown error occurred.",
		});
	}
);

export default app;
