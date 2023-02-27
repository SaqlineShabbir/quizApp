import { AuthContext } from '../../context/AuthProvider';

export const useData = () => {
  const { user } = useContext(AuthContext);
  return {};
};
