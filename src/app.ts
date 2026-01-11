import fastify from 'fastify';
import { transcationsRoutes } from './routes/transactions.js';
import cookie from '@fastify/cookie';

export const app = fastify();

app.register(cookie);


app.register(transcationsRoutes, {
    prefix: 'transactions'
});
