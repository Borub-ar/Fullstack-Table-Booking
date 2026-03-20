import { useContext } from 'react';
import { Outlet, Navigate } from 'react-router';

import { AccessContext } from '../../contexts/AccessContext';

const RequireAuth = () => {
  const accessContext = useContext(AccessContext);

  if (!accessContext) {
    throw new Error('');
  }

  const { isAuthenticated } = accessContext;

  if (!isAuthenticated) {
    return <Navigate to='auth/login' replace />;
  }

  return <Outlet />;
};

export default RequireAuth;
