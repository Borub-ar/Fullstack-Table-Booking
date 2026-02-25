import { Router } from 'express';

import {
  loginLimiter,
  refreshSessionTokenLimiter,
  registrationLimiter,
  verificationLimiter,
} from '../../middleware/rateLimit.js';

import {
  createUserHandler,
  loginUserHandler,
  logoutUserHandler,
  refreshSessionTokenHandler,
  resendVerificationEmailHandler,
  sendVerificationEmailHandler,
  verifyEmailHandler,
} from './users.controller.js';

const userRouter = Router();

userRouter.get('/verify-email/:token', verificationLimiter, verifyEmailHandler);

userRouter.post('/create', registrationLimiter, createUserHandler);
userRouter.post('/send-verification-email', verificationLimiter, sendVerificationEmailHandler);
userRouter.post('/resend-verification-email', verificationLimiter, resendVerificationEmailHandler);

userRouter.post('/login', loginLimiter, loginUserHandler);
userRouter.post('/logout', logoutUserHandler);
userRouter.post('/refresh-session-token', refreshSessionTokenLimiter, refreshSessionTokenHandler);

export default userRouter;
