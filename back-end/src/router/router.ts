import express, { Request, Response } from "express";
import { loginHandler, validateLoginParams } from "./endpoints/login";
const router = express.Router();

router.post("/login", validateLoginParams, loginHandler);

export default router;
