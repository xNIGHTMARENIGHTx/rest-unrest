import { Router } from 'express';

import User from './order.model.js';
import * as usersService from './order.service.js';

const router = Router();

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  // map user fields to exclude secret fields like "password"
  res.json(users.map(User.toResponse));
});

export default router;
