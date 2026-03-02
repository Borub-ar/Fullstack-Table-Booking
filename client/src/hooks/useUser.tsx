import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';

import type { CreateUserData } from '../types/user';

import {
  httpLoginUser,
  httpRegisterUser,
  httpResendVerificationEmail,
  httpSendVerificationEmail,
  httpVerifyEmail,
} from './requests';

const useUser = () => {
  const [isLoading, setIsLoading] = useState(false);

  const registerMutation = useMutation({
    mutationFn: (userData: CreateUserData) => httpRegisterUser(userData),
  });

  const registerUser = async (userData: CreateUserData) => {
    return registerMutation.mutateAsync(userData);
  };

  const sendVerificationEmail = async (email: string) => {
    if (isLoading) return;
    setIsLoading(true);

    const result = await httpSendVerificationEmail(email);
    setIsLoading(false);
    return result;
  };

  const verifyEmail = async (token: string) => {
    if (isLoading) return;
    setIsLoading(true);

    const result = await httpVerifyEmail(token);
    setIsLoading(false);
    return result;
  };

  const resendVerificationEmail = async (token: string) => {
    if (isLoading) return;
    setIsLoading(true);

    const result = await httpResendVerificationEmail(token);
    setIsLoading(false);
    return result;
  };

  const loginUser = async (username: string, password: string, rememberMe: boolean) => {
    if (isLoading) return;
    setIsLoading(true);

    const result = await httpLoginUser(username, password, rememberMe);
    setIsLoading(false);
    return result;
  };

  return { registerUser, sendVerificationEmail, verifyEmail, resendVerificationEmail, loginUser, isLoading };
};

export default useUser;
