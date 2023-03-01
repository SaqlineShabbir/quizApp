import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { AiFillGoogleCircle, AiFillTwitterCircle } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';

import { AuthContext } from '../context/AuthProvider';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signInUser, signInUsingGoogle, getUser } = useContext(AuthContext);
  const [error, setError] = useState('');

  const router = useRouter();

  const handleGoogleSignIn = (e) => {
    signInUsingGoogle();
  };
  const handleSubmit = (e) => {
    console.log('si');
    e.preventDefault();
    setError('');
    signInUser(email, password)
      .then((result) => {
        const user = result.user;

        console.log(user);
      })
      .catch((error) => setError(error.message));
  };
  const handleSignInButton = () => {
    console.log('calling get user');
    getUser(email);
  };
  return (
    <div className="lg:flex  overflow-y-scroll h-full w-[100%]">
      <div className="bg-red-100 lg:w-[50%] flex flex-col justify-center items-center px-20 lg:py-0 py-10">
        <div>
          <p className="">
            Those people who develop the ability to continuously acquire new and
            better forms of knowledge that they can apply to their work and to
            their lives will be the movers and shakers in our society for the
            indefinite future
          </p>
          <p>Brian Tracy</p>
        </div>
      </div>
      <div className="lg:px-20 px-3 lg:w-[50%]">
        <p className="mt-20">Back To Topify</p>
        <div className="flex flex-col justify-center items-center gap-10 mt-24">
          <p className=" lg:text-4xl text-2xl font-bold">Log In</p>

          <form onSubmit={handleSubmit}>
            <div className="space-y-5">
              <input
                type="text"
                className="lg:w-[400px] w-[350px] py-5 px-5 drop-shadow-2xl  text-gray-900 text-sm rounded-full  "
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                className=" lg:w-[400px]  py-5 px-5 drop-shadow-xl  text-gray-900 text-sm rounded-full block w-full p-2.5  "
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <p className="text-red-400">{error}</p>
              <button
                onClick={handleSignInButton}
                type="submit"
                className="bg-red-400  py-5 px-10 lg:w-[400px] rounded-full block w-full"
              >
                Log in
              </button>
              {/* <button
                
                className="bg-red-400  py-5 px-10 lg:w-[400px] rounded-full block w-full"
              >
                Log in with google
              </button> */}
              {/* <p onClick={() => addUser()}>addUser</p> */}
              <div className="flex justify-center">
                <div className=" cursor-pointer flex  space-x-5">
                  <BsFacebook size={50} color="#FFAE96" className="mt-1" />
                  <AiFillGoogleCircle
                    size={60}
                    color="#FFAE96"
                    onClick={handleGoogleSignIn}
                  />
                  <AiFillTwitterCircle size={60} color="#FFAE96" />
                </div>
              </div>
              <div className="flex justify-center space-x-3">
                <p>Dont Have an Account?</p>
                <Link className="text-black" href="/register">
                  <p className="cursor-pointer">Sign Up</p>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
