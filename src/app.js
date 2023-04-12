import express from 'express';

import url from 'url';
import path from "path"

import clientRouter from './resources/clients/client.router.js';
import orderRouter from './resources/orders/order.router.js';
import tourRouter from './resources/tours/tour.router.js';
import agentRouter from "./resources/agents/agent.router.js";

const app = express();

const dirname = url.fileURLToPath(new URL(".", import.meta.url));

app.use(express.json());

app.use("/", express.static(path.join(dirname, "html")));

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/clients', clientRouter);
app.use('/orders', orderRouter);
app.use('/tours', tourRouter);
app.use('/agents', agentRouter);

export default app;
