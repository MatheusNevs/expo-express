import * as trpcExpress from "@trpc/server/adapters/express";
import { initTRPC } from "@trpc/server";
import express from "express";
import { appRouter } from "./root";

const t = initTRPC.create()
export const createTRPCRouter = t.router;
export const publicProcedure = t.procedure;

export const tRPCRouter = express();

tRPCRouter.use(
    "/trpc",
    trpcExpress.createExpressMiddleware({
        router: appRouter
    })
)