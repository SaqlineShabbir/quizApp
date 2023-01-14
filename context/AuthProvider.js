import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import Cookies from 'js-cookie';

import { router } from 'next/router';
import { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // register user
  const createUser = (email, password, name) => {
    return createUserWithEmailAndPassword(auth, email, password).then(() => {
      const newUser = { email, displayName: name };
      setUser(newUser);
      Cookies.set('loggedin', 'true');
      updateProfile(auth.currentUser, {
        displayName: name,
      })
        .then(() => {})
        .catch((error) => {
          setAuthError(error.message);
        });

      router.push('/');
    });
  };
  // login user
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOutUser = () => {
    return signOut(auth);
  };
  //observe  user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log('userObserbing', currentUser);
      setUser(currentUser);
    });
    return () => unSubscribe();
  }, []);
  const authInfo = {
    createUser,
    signInUser,
    logOutUser,
    user,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;
