import { initTRPC } from '@trpc/server';
import * as trpcExpress from '@trpc/server/adapters/express';
import express from 'express';
import { db } from "../db";
import superjson from "superjson";

// created for each request
export const createContext = async ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => {
  // const session = await getServerAuthSession();
  
  return {
    db,
    // session,
    ...req.headers,
  };
};
type Context = Awaited<ReturnType<typeof createContext>>;

const t = initTRPC.context<typeof createContext>().create({
  transformer: superjson,
  errorFormatter: ({ shape, error }) => ({
    ...shape,
    data: {
      ...shape.data,
      error
    },
  }),
});
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