import express from "express";
import { githubLoginRouter } from "./github.js";

export const loginRouter = express.Router();

loginRouter.use(githubLoginRouter);

loginRouter.get("/auth/login", async (_, res) => {
	if (res.locals.session) {
		return res.redirect("exp://192.168.100.10:8081");
	}
	return res.status(200);
});
