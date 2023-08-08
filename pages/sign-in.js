import React from 'react';
import Login from '../components/login';
import Header from '../components/shared/Header';

const SignIn = () => {
  return (
    <div className="border overflow-auto">
      <Header />
      <Login />
    </div>
  );
};

export default SignIn;
