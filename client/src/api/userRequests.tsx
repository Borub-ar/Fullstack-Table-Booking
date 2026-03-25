import axios from 'axios';

import apiErrorCatchHandler from '../utils/apiErrorCatchHandler';

import type { CreateUserData } from '../types/user';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

export const httpRegisterUser = async (userData: CreateUserData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/users/create`, userData);
    return response.data;
  } catch (error) {
    apiErrorCatchHandler(error);
  }
};

export const httpSendVerificationEmail = async (email: string) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/users/send-verification-email`, { email });
    return response.data;
  } catch (error) {
    apiErrorCatchHandler(error);
  }
};

export const httpVerifyEmail = async (token: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/verify-email/${token}`);
    return response.data;
  } catch (error) {
    apiErrorCatchHandler(error);
  }
};

export const httpResendVerificationEmail = async (token: string) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/users/resend-verification-email`, { token });
    return response.data;
  } catch (error) {
    apiErrorCatchHandler(error);
  }
};

export const httpLoginUser = async (username: string, password: string, rememberMe: boolean) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/users/login`,
      { username, password, rememberMe },
      { withCredentials: true },
    );
    return response.data;
  } catch (error) {
    apiErrorCatchHandler(error);
  }
};
