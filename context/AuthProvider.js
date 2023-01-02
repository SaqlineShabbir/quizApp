import { createContext } from 'react';
import { useEverything } from '../hooks/useEverything';

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const allContext = useEverything();
  return (
    <AuthContext.Provider value={allContext}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;
