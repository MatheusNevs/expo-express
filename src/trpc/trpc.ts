import * as trpcExpress from "@trpc/server/adapters/express"
import { initTRPC } from "@trpc/server"
import { app } from "../server"
import { appRouter } from "./root"

const t = initTRPC.create()
export const createTRPCRouter = t.router;
export const publicProcedure = t.procedure;

app.use(
    "/trpc",
    trpcExpress.createExpressMiddleware({
        router: appRouter
    })
)