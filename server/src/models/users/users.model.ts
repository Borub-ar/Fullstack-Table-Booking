import User from './users.mongo.js';

import type { CreateUserDto } from '../../types/user.js';

const createNewUser = async (userData: CreateUserDto) => {
  const { username, email } = userData;

  const emailExists = await User.findOne({ email });
  const usernameExists = await User.findOne({ username });

  if (emailExists) {
    throw new Error('Email already exists');
  }

  if (usernameExists) {
    throw new Error('Username already exists');
  }

  const newUser = new User(userData);
  return await newUser.save();
};

export { createNewUser };
