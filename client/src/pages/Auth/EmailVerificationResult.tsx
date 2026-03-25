import { useEffect, useState } from 'react';
import { useNavigate, useOutletContext, useSearchParams } from 'react-router-dom';

import BasicButton from '../../components/UI/BasicButton';
import LoadingOverlay from '../../components/UI/LoadingOverlay';

import useUser from '../../hooks/useUser';

import type { AuthOutletContext } from './AuthWrapper';

const VERIFYING_EMAIL_LABEL = 'Verifying your email...';
const SOMETHING_WENT_WRONG_LABEL = 'Something went wrong, please request a new verification email';

interface VerificationResponse {
  message: string;
}

const verificationRequests = new Map<string, Promise<VerificationResponse>>();

const EmailVerificationResult = () => {
  const { verifyEmail, resendVerificationEmail, isLoading } = useUser();
  const navigate = useNavigate();
  const { showToast } = useOutletContext<AuthOutletContext>();

  const [resultLabel, setResultLabel] = useState(VERIFYING_EMAIL_LABEL);
  const [isError, setIsError] = useState(false);

  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');

  useEffect(() => {
    if (!token) return;

    const verifyEmailFunction = async () => {
      try {
        const request = verificationRequests.get(token) ?? verifyEmail(token);
        verificationRequests.set(token, request);
        const response = await request;

        setResultLabel(response.message);
        setIsError(false);
      } catch (error: unknown) {
        verificationRequests.delete(token);
        setIsError(true);

        if (error instanceof Error) {
          setResultLabel(error.message);
          return;
        }

        setResultLabel(SOMETHING_WENT_WRONG_LABEL);
      }
    };

    verifyEmailFunction();
  }, [token, verifyEmail]);

  const handleRequestNewVerificationEmail = async () => {
    if (!token) return;

    try {
      const response = await resendVerificationEmail(token);
      showToast(response.message, 'success');
    } catch (error: unknown) {
      if (error instanceof Error) {
        showToast(error.message, 'error');
        return;
      }

      showToast(SOMETHING_WENT_WRONG_LABEL, 'error');
    }
  };

  return (
    <>
      {isLoading && <LoadingOverlay />}

      <div className='flex flex-col gap-4 text-white'>
        <h1 className='text-white font-medium text-2xl text-center mb-5'>{resultLabel}</h1>
        {isError && <BasicButton label='Resend Verification Email' onClick={handleRequestNewVerificationEmail} />}
        {!isError && <BasicButton label='Login' onClick={() => navigate('/auth/login')} />}
      </div>
    </>
  );
};

export default EmailVerificationResult;
