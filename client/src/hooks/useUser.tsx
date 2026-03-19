import { useMutation } from '@tanstack/react-query';

import type { CreateUserData } from '../types/user';

import {
  httpLoginUser,
  httpRegisterUser,
  httpResendVerificationEmail,
  httpSendVerificationEmail,
  httpVerifyEmail,
} from './requests';

interface LoginUserVariables {
  username: string;
  password: string;
  rememberMe: boolean;
}

const useUser = () => {
  const registerMutation = useMutation({
    mutationFn: (userData: CreateUserData) => httpRegisterUser(userData),
  });

  const registerUser = async (userData: CreateUserData) => {
    return registerMutation.mutateAsync(userData);
  };

  const sendVerificationEmailMutation = useMutation({
    mutationFn: (email: string) => httpSendVerificationEmail(email),
  });

  const sendVerificationEmail = async (email: string) => {
    return sendVerificationEmailMutation.mutateAsync(email);
  };

  const verifyEmailMutation = useMutation({
    mutationFn: (token: string) => httpVerifyEmail(token),
  });

  const verifyEmail = async (token: string) => {
    return verifyEmailMutation.mutateAsync(token);
  };

  const resendVerificationEmailMutation = useMutation({
    mutationFn: (token: string) => httpResendVerificationEmail(token),
  });

  const resendVerificationEmail = async (token: string) => {
    return resendVerificationEmailMutation.mutateAsync(token);
  };

  const loginUserMutation = useMutation({
    mutationFn: ({ username, password, rememberMe }: LoginUserVariables) =>
      httpLoginUser(username, password, rememberMe),
  });

  const loginUser = async (username: string, password: string, rememberMe: boolean) => {
    return loginUserMutation.mutateAsync({ username, password, rememberMe });
  };

  const isLoading =
    registerMutation.isPending ||
    sendVerificationEmailMutation.isPending ||
    verifyEmailMutation.isPending ||
    resendVerificationEmailMutation.isPending ||
    loginUserMutation.isPending;

  return { registerUser, sendVerificationEmail, verifyEmail, resendVerificationEmail, loginUser, isLoading };
};

export default useUser;
