import type { Request, Response } from 'express';

import { tryCatch } from '../../utils/tryCatch.js';

import AppError from '../../AppError.js';
import { INVALID_TOKEN } from '../../constants/errorCodes.js';

import { createUser, sendVerificationEmail, verifyEmail } from '../../models/users/users.model.js';

export const createUserHandler = tryCatch(async (req: Request, res: Response) => {
  const { username, password, email } = req.body;
  const result = await createUser({ username, password, email });
  return res.status(201).json(result);
});

export const sendVerificationEmailHandler = tryCatch(async (req: Request, res: Response) => {
  const { email } = req.body;
  const response = await sendVerificationEmail(email);
  return res.status(200).json(response);
});

export const verifyEmailHandler = tryCatch(async (req: Request, res: Response) => {
  const tokenParam = req.params.token;
  const token = Array.isArray(tokenParam) ? tokenParam[0] : tokenParam;

  if (!token) throw new AppError(INVALID_TOKEN.errorCode, INVALID_TOKEN.message, 400);

  const response = await verifyEmail(token);
  return res.status(200).json(response);
});
