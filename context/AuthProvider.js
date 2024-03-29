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
  const [userData, setUserData] = useState([]);
  const [information, setInformation] = useState([]);

  useEffect(() => {
    fetch(`https://quiz-app-backend-blond.vercel.app/result`)
      .then((res) => res.json())
      .then((data) => setInformation(data));
  }, []);
  // register user
  const createUser = (email, password, name) => {
    return createUserWithEmailAndPassword(auth, email, password).then(() => {
      const newUser = { email, displayName: name };
      setUser(newUser);

      // verifyEmail();
      //saving user to backend
      saveUser(name, email);
      //getting user
      getUser(email);
      Cookies.set('loggedin', 'true');

      updateProfile(auth.currentUser, {
        displayName: name,
      })
        .then(() => {})
        .catch((error) => {
          setAuthError(error.message);
        });

      router.push('/dashboard');
    });
  };
  // login user
  const signInUser = (email, password) => {
    Cookies.set('loggedin', 'true');
    router.push('/dashboard');
    //getting user

    return signInWithEmailAndPassword(auth, email, password);
  };
  // console.log('userrrrr', userData);
  //google sign in
  const signInUsingGoogle = () => {
    return signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.

        // The signed-in user info.
        const user = result.user;
        console.log('goo user', user);
        setUser(user);
        Cookies.set('loggedin', 'true');

        saveUser(user?.displayName, user?.email);

        //getting user
        console.log('should i get');
        getUser(user?.email);
        router.push('/dashboard');
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
  //verify email
  // const verifyEmail = () => {
  //   sendEmailVerification(auth.currentUser).then(() => {
  //     alert('please check email and verify');
  //   });
  // };

  //observe  user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unSubscribe();
  }, []);

  // save user to database
  const saveUser = (name, email) => {
    axios
      .post('https://quiz-app-backend-blond.vercel.app/user', {
        name,
        email,
      })
      .then((response) => {})
      .catch((error) => (error) => {
        console.log(error.message);
      });
  };

  //get user from  backend

  const getUser = async (email) => {
    console.log('getting');
    try {
      const res = await axios.get(
        `https://quiz-app-backend-blond.vercel.app/user/${email}`
      );
      console.log(res);
      setUserData(res.data);
      Cookies.set('role', res?.data[0].role);
    } catch (err) {
      console.log(err);
    }
  };

  const authInfo = {
    createUser,
    signInUser,
    logOutUser,
    signInUsingGoogle,
    user,
    getUser,
    information,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;
