import { Router } from 'express';
import { createUserHandler, sendVerificationEmailHandler } from './users.controller.js';

const userRouter = Router();

userRouter.post('/create', createUserHandler);
userRouter.post('/send-verification-email', sendVerificationEmailHandler);

export default userRouter;
