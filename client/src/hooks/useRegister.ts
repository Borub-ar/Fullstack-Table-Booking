import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';

import useUser from './useUser';
import ApiError from '../utils/apiError';

import type { FormData } from '../types/user';
import { registrationSchema } from '../../../shared/validation/registrationSchema';

interface UseRegisterOptions {
  showToast: (message: string, type: 'success' | 'error') => void;
}

type RegisterField = keyof FormData;

const useRegister = ({ showToast }: UseRegisterOptions) => {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [emailExternalError, setEmailExternalError] = useState(false);
  const [usernameExternalError, setUsernameExternalError] = useState(false);
  const [validationErrors, setValidationErrors] = useState<Record<string, string[]>>({});

  const { registerUser, isLoading } = useUser();
  const navigate = useNavigate();

  const validateForm = () => {
    const result = registrationSchema.safeParse(formData);

    if (!result.success) {
      setValidationErrors(z.flattenError(result.error).fieldErrors);
      return false;
    }

    setValidationErrors({});
    return true;
  };

  const saveInputValues = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value, dataset } = e.currentTarget;
    const fieldName = dataset.type as RegisterField | undefined;

    if (!fieldName) return;

    if (fieldName === 'email') setEmailExternalError(false);
    if (fieldName === 'username') setUsernameExternalError(false);

    setFormData(prev => {
      return { ...prev, [fieldName]: value };
    });

    setValidationErrors(prev => {
      return { ...prev, [fieldName]: [] };
    });
  };

  const handleRegistration = async () => {
    setEmailExternalError(false);
    setUsernameExternalError(false);

    if (!validateForm()) return;

    try {
      const response = await registerUser(formData);

      showToast(response.message, 'success');
      navigate('/auth/verify-email', {
        state: { email: formData.email },
      });
    } catch (error: unknown) {
      if (error instanceof ApiError) {
        showToast(error.message, 'error');

        if (error.fields?.includes('email')) setEmailExternalError(true);
        if (error.fields?.includes('username')) setUsernameExternalError(true);
        return;
      }

      if (error instanceof Error) {
        showToast(error.message, 'error');
        return;
      }

      showToast('Unknown error', 'error');
    }
  };

  return {
    formData,
    validationErrors,
    saveInputValues,
    emailExternalError,
    usernameExternalError,
    isLoading,
    handleRegistration,
  };
};

export default useRegister;
