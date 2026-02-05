import { useState } from 'react';

import { httpRegisterUser } from './requests';

import type { CreateUserData } from '../types/user';

const useUser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const registerUser = async (userData: CreateUserData) => {
    setIsLoading(true);

    const result = await httpRegisterUser(userData);
    if (result.success) {
      setSuccess(true);
    } else {
      setError(result.error || 'Registration failed');
    }

    setIsLoading(false);
    return result;
  };

  return { registerUser, isLoading, error, success };
};

export default useUser;
