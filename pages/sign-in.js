import React, { useEffect } from 'react';
import Login from '../components/login';
import Header from '../components/shared/Header';

const SignIn = () => {
  // On your about page for example
  useEffect(() => {
    document.documentElement.style.overflow = 'auto';
    document.body.style.overflow = 'scroll';
  }, []);

  return (
    <div className="border overflow-auto">
      <Header />
      <Login />
    </div>
  );
};

export default SignIn;
