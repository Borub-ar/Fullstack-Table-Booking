import { useState } from 'react';

import { httpRegisterUser } from './requests';

import type { CreateUserData } from '../types/user';

const useUser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const registerUser = async (userData: CreateUserData) => {
    if (isLoading) return;

    setIsLoading(true);
    setError('');
    setSuccess('');

    const result = await httpRegisterUser(userData);
    if (result.success) {
      setSuccess(result.data.message);
    } else {
      setError(result.error || 'Registration failed');
    }

    setIsLoading(false);
    return result;
  };

  const reset = () => {
    setError('');
    setSuccess('');
  };

  return { registerUser, isLoading, error, success, reset };
};

export default useUser;
