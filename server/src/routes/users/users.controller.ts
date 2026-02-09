import type { Request, Response } from 'express';

import { createNewUser } from '../../models/users/users.model.js';
import { tryCatch } from '../../utils/tryCatch.js';

export const httpCreateNewUser = tryCatch(async (req: Request, res: Response) => {
  const { username, password, email } = req.body;

  await createNewUser({ username, password, email });
  return res.status(201).json({ message: 'User created successfully' });
});
