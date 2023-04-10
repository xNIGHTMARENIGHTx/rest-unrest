import express from 'express';

import clientRouter from './resources/clients/client.router.js';
import orderRouter from './resources/orders/order.router.js';

const app = express();

app.use(express.json());

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/clients', clientRouter);
app.use('/orders', orderRouter);

export default app;
