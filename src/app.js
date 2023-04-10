import express from 'express';

import clientRouter from './resources/clients/client.router.js';
import orderRouter from './resources/orders/order.router.js';
import tourRouter from './resources/tours/tour.router.js';

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
app.use('/tours', tourRouter);

export default app;
