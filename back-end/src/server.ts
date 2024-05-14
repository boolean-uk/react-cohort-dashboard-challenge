import cors from "cors";
import express, { Request, Response } from "express";
//
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (_req: Request, res: Response) => {
	res.status(200).json({ message: "API server is running" });
});

export default app;
