import express from 'express';
import { tRPCRouter } from './trpc/trpc';


export const app = express();

app.use(tRPCRouter)

app.listen(3000);

