import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { userLoggedIn } from '../redux/features/users/userSlice';

export default function useAuthCheck() {
  const dispatch = useDispatch();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const localAuth = localStorage?.getItem('loggedInUser');

    if (localAuth) {
      const auth = JSON.parse(localAuth);
      console.log(auth, 'authhh');
      if (auth) {
        dispatch(
          userLoggedIn({
            user: auth,
          })
        );
      }
    }
    setAuthChecked(true);
  }, [dispatch, setAuthChecked]);

  return authChecked;
}
