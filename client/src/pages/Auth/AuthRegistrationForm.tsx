import { useNavigate, useOutletContext } from 'react-router-dom';

import BasicButton from '../../components/UI/BasicButton';
import Input from '../../components/UI/Input';
import LoadingOverlay from '../../components/UI/LoadingOverlay';

import useUser from '../../hooks/useUser';
import useRegister from '../../hooks/useRegister';

import type { AuthOutletContext } from './AuthWrapper';

const RegistrationForm = () => {
  const navigate = useNavigate();
  const { showToast } = useOutletContext<AuthOutletContext>();

  const {
    formData,
    validationErrors,
    emailExternalError,
    usernameExternalError,
    validateForm,
    saveInputValues,
    setEmailExternalError,
    setUsernameExternalError,
  } = useRegister();

  const { registerUser, isLoading } = useUser();

  const handleRegistration = async () => {
    setEmailExternalError(false);
    setUsernameExternalError(false);

    if (!validateForm()) return;

    const response = await registerUser(formData);
    if (!response) return;

    showToast(response.message, response.success ? 'success' : 'error');

    if (response.success) {
      navigate('/auth/verify-email', {
        state: { email: formData.email },
      });
      return;
    }

    if (response?.fields) {
      if (response.fields.includes('email')) setEmailExternalError(true);
      if (response.fields.includes('username')) setUsernameExternalError(true);
    }
  };

  return (
    <>
      {isLoading && <LoadingOverlay />}

      <div className='flex flex-col gap-4 text-white'>
        <h1 className='text-white font-medium text-2xl text-center mb-5'>register</h1>

        <Input
          type='text'
          value={formData.username}
          inputId='username'
          labelText='Username'
          dataType='username'
          errors={validationErrors.username || []}
          noLabelError={usernameExternalError}
          onChange={saveInputValues}
        />
        <Input
          type='email'
          value={formData.email}
          inputId='email'
          labelText='Email'
          dataType='email'
          errors={validationErrors.email || []}
          noLabelError={emailExternalError}
          onChange={saveInputValues}
        />
        <Input
          type='password'
          value={formData.password}
          inputId='password'
          labelText='Password'
          dataType='password'
          errors={validationErrors.password || []}
          onChange={saveInputValues}
        />
        <Input
          type='password'
          value={formData.confirmPassword}
          inputId='confirmPassword'
          labelText='Confirm Password'
          dataType='confirmPassword'
          errors={validationErrors.confirmPassword || []}
          onChange={saveInputValues}
        />

        <BasicButton label='Register' disabled={isLoading} onClick={handleRegistration} />

        <p className='text-center text-xs'>
          Already have an account?{' '}
          <button className='underline' type='button' onClick={() => navigate('/auth/login')}>
            Login
          </button>
        </p>
      </div>
    </>
  );
};

export default RegistrationForm;
