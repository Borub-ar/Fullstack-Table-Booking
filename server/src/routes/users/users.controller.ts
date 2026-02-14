import type { Request, Response } from 'express';

import { tryCatch } from '../../utils/tryCatch.js';

import { createUser, sendVerificationEmail } from '../../models/users/users.model.js';

export const createUserHandler = tryCatch(async (req: Request, res: Response) => {
  const { username, password, email } = req.body;
  await createUser({ username, password, email });
  return res.status(201).json({ success: true, message: 'User created successfully' });
});

export const sendVerificationEmailHandler = tryCatch(async (req: Request, res: Response) => {
  const { email } = req.body;
  await sendVerificationEmail(email);
  return res.status(200).json({ success: true, message: 'Verification email sent successfully' });
});
