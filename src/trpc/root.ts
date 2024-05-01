import { createTRPCRouter } from "./trpc";
import { publicProcedure } from "./trpc";


export const appRouter = createTRPCRouter({
    helloWorld: publicProcedure.query(async () => {
        console.log("Ola mundo")
    })
});

export type AppRouter = typeof appRouter;