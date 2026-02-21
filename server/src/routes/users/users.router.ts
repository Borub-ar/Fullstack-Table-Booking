import { Router } from 'express';
import {
  createUserHandler,
  resendVerificationEmailHandler,
  sendVerificationEmailHandler,
  verifyEmailHandler,
} from './users.controller.js';

const userRouter = Router();

userRouter.get('/verify-email/:token', verifyEmailHandler);

userRouter.post('/create', createUserHandler);
userRouter.post('/send-verification-email', sendVerificationEmailHandler);
userRouter.post('/resend-verification-email', resendVerificationEmailHandler);

export default userRouter;
