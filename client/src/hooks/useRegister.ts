import { useState } from 'react';
import { z } from 'zod';

import type { FormData } from '../types/user';
import { registrationSchema } from '../../../shared/validation/registrationSchema';

const useRegister = () => {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [emailExternalError, setEmailExternalError] = useState(false);
  const [usernameExternalError, setUsernameExternalError] = useState(false);
  const [validationErrors, setValidationErrors] = useState<Record<string, string[]>>({});

  const validateForm = () => {
    const result = registrationSchema.safeParse(formData);

    if (!result.success) {
      setValidationErrors(z.flattenError(result.error).fieldErrors);
    }

    return result.success;
  };

  const saveInputValues = (e: React.ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) => {
    const { value, dataset } = e.target;

    if (dataset.type === 'email') setEmailExternalError(false);
    if (dataset.type === 'username') setUsernameExternalError(false);

    setFormData(prev => {
      return { ...prev, [dataset.type as keyof typeof formData]: value };
    });

    setValidationErrors(prev => {
      return { ...prev, [dataset.type as keyof typeof formData]: [] };
    });
  };

  return {
    formData,
    setFormData,
    validateForm,
    validationErrors,
    setValidationErrors,
    saveInputValues,
    emailExternalError,
    setEmailExternalError,
    usernameExternalError,
    setUsernameExternalError,
  };
};

export default useRegister;
