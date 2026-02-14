import bcrypt from 'bcrypt';

import User from './users.mongo.js';
import AppError from '../../AppError.js';

import type { CreateUserDto } from '../../types/user.js';
import { registrationSchema } from '../../../../shared/validation/registrationSchema.js';
import { generateVerificationToken } from '../../utils/generateVerificationToken.js';
import { sendVerificationEmailService } from '../../services/email.service.js';

import { USER_ALREADY_EXISTS, USER_INVALID_DATA } from '../../constants/errorCodes.js';

const SALT_ROUNDS = 10;

const createUser = async (userData: CreateUserDto) => {
  try {
    validateRegistrationData(userData);
    await checkIfUserExists(userData);
    await checkIfEmailExists(userData);

    const passwordHash = await bcrypt.hash(userData.password, SALT_ROUNDS);
    const verificationToken = generateVerificationToken();
    const verificationTokenExpiresAt = new Date(Date.now() + 1000 * 60 * 60 * 24);

    const userToCreate = {
      username: userData.username,
      email: userData.email,
      passwordHash,
      verificationToken,
      verificationTokenExpiresAt,
      userId: crypto.randomUUID(),
    };

    const newUser = new User(userToCreate);
    await newUser.save();

    await sendVerificationEmailService(verificationToken, userData.email);
  } catch (error) {
    if (error instanceof AppError) throw error;
    throw new Error('Something went wrong while creating user');
  }
};

const validateRegistrationData = (userData: CreateUserDto) => {
  const validationResult = registrationSchema.safeParse(userData);
  if (!validationResult.success) {
    throw new AppError(USER_INVALID_DATA, 'Invalid data', 400);
  }
};

const checkIfUserExists = async (userData: CreateUserDto) => {
  const existingUser = await User.findOne({ username: userData.username });
  if (existingUser) {
    throw new AppError(USER_ALREADY_EXISTS, 'This username is already taken', 400, ['username']);
  }
};

const checkIfEmailExists = async (userData: CreateUserDto) => {
  const existingEmail = await User.findOne({ email: userData.email });
  if (existingEmail) {
    throw new AppError(USER_ALREADY_EXISTS, 'This email is already taken', 400, ['email']);
  }
};

const sendVerificationEmail = async (email: string) => {
  
};

export { createUser, sendVerificationEmail };
