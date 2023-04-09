import { Router } from 'express';
import { StatusCodes } from "http-status-codes";

import Client from './client.model.js';
import * as clientsService from './client.service.js';

const router = Router();

router.route('/').get(async (req, res) => {
  const users = await clientsService.getAll();
  res.json(users.map(Client.toResponse));
});

export default router;
