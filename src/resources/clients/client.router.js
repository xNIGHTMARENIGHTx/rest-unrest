import { Router } from 'express';

import User from './client.model.js';
import * as usersService from './client.service.js';

const router = Router();

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  res.json(users.map(User.toResponse));
});

export default router;
