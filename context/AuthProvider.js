import axios from 'axios';
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
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
  const provider = new GoogleAuthProvider();
  // register user
  const createUser = (email, password, name) => {
    return createUserWithEmailAndPassword(auth, email, password).then(() => {
      const newUser = { email, displayName: name };
      setUser(newUser);
      saveUser(name, email);
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
    Cookies.set('loggedin', 'true');
    return signInWithEmailAndPassword(auth, email, password);
  };

  //google sign in
  const signInUsingGoogle = () => {
    return signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.

        // The signed-in user info.
        const user = result.user;
        setUser(user);

        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        console.log(error);
      });
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

  // save user to database
  const saveUser = (name, email) => {
    axios
      .post('https://quiz-app-backend-production-5339.up.railway.app/user', {
        name,
        email,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => (error) => {
        console.log(error.message);
      });
  };

  const authInfo = {
    createUser,
    signInUser,
    logOutUser,
    signInUsingGoogle,
    user,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;
