import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import router from "./router/main.router";
import cookieParser from "cookie-parser";
import { error } from "console";
//== Setup express
const server = express();
server.use(cors());
server.use(cookieParser());
// server.use(express.urlencoded({ extended: false }));
server.use(express.json());

//== Setup routes
// Root route
server.get("/", (_req: Request, res: Response) => {
	res.status(200).json({ message: "API server is running" });
});

// Router
server.use(router);

// Default Err
server.use(
	(_err: Error, _req: Request, res: Response, _next: NextFunction): void => {
		res.status(500).json({
			error: _err,
			message: "An unknown error was caught by the last error boundary",
		});
	}
);

export default server;
