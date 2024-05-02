import { initTRPC } from '@trpc/server';
import * as trpcExpress from '@trpc/server/adapters/express';
import express from 'express';
import { db } from "../db";


// created for each request
export const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => ({}); // no context yet
type Context = Awaited<ReturnType<typeof createContext>>;

export const createTRPCContext = async (opts: { headers: Headers }) => {
  // const session = await getServerAuthSession();

  return {
    db,
    // session,
    ...opts,
  };
};

const t = initTRPC.context<Context>().create();
const procedure = t.procedure;
export const appRouter = t.router({
    helloWorld: procedure.query( () => {
        console.log("Hello World");
        return "Hello World";
    })
});

export const tRPCRouter = express.Router();

tRPCRouter.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  }),
);

export type AppRouter = typeof appRouter;