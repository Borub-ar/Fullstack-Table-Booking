/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, type Dispatch, type ReactNode, type SetStateAction } from 'react';

type AccessContextValue = {
  accessToken: string;
  setAccessToken: Dispatch<SetStateAction<string>>;
  isAuthenticated: boolean;
};

export const AccessContext = createContext<AccessContextValue | null>(null);

export const AccessContextProvider = ({ children }: { children: ReactNode }) => {
  const [accessToken, setAccessToken] = useState('');

  const isAuthenticated = !!accessToken;

  return (
    <AccessContext.Provider value={{ accessToken, setAccessToken, isAuthenticated }}>{children}</AccessContext.Provider>
  );
};
