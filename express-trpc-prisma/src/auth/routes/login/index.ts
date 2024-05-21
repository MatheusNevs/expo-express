import express from "express";
import { githubLoginRouter } from "./github.js";

export const loginRouter = express.Router();

loginRouter.use(githubLoginRouter);

loginRouter.get("/auth/login", async (_, res) => {
	if (res.locals.session) {
		return res.redirect("http://localhost:3000/");
	}
	return res.status(200);
});
