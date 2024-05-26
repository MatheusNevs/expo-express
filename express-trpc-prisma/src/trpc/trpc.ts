import { initTRPC } from '@trpc/server';
import * as trpcExpress from '@trpc/server/adapters/express';
import express from 'express';
import { db } from "../db";
import superjson from "superjson";
import { lucia } from '../auth/auth';
import { z } from "zod";

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
    getUserSession: procedure.input(z.object({sessionId: z.string()})).query( async ({input}) => {
      const session = await lucia.validateSession(input.sessionId);
      return session;
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