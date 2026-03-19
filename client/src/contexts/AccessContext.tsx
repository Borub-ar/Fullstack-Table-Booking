/* eslint-disable react-refresh/only-export-components */
import { createContext, type ReactNode } from 'react';

const AccessContext = createContext('');

export const AccessContextProvider = ({ children }: { children: ReactNode }) => {
  return <AccessContext.Provider value={''}>{children}</AccessContext.Provider>;
};
