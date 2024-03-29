import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { AiFillGoogleCircle } from 'react-icons/ai';

import { AuthContext } from '../context/AuthProvider';
import Header from './shared/Header';
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
    <div className="">
      <Header />
      <div className="lg:flex w-[100%] min-h-[100vh]">
        <div className=" lg:w-[50%] flex flex-col justify-center items-center px-5 lg:px-20 lg:py-0 py-10">
          <div>
            <p className="">
              Those people who develop the ability to continuously acquire new
              and better forms of knowledge that they can apply to their work
              and to their lives will be the movers and shakers in our society
              for the indefinite future
            </p>
            <p className="">- Brian Tracy</p>
          </div>
        </div>
        <div className="lg:px-20 px-3 lg:w-[50%]">
          {/* <p className="mt-20">Back To Topify</p> */}
          <div className="flex flex-col justify-center items-center gap-10 mt-24">
            <p className=" lg:text-4xl text-2xl font-bold">Log In</p>

            <form onSubmit={handleSubmit}>
              <div className="space-y-5">
                <input
                  type="text"
                  className="lg:w-[400px] w-[350px] py-5 px-5   text-gray-900 text-sm rounded-full border"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  type="password"
                  className=" lg:w-[400px]  py-5 px-5   text-gray-900 text-sm rounded-full block w-full p-2.5 border "
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
                  <div className=" flex flex-col items-center text-center  space-x-5">
                    {/* <BsFacebook
                      size={50}
                      color="#FFAE96"
                      className="mt-1 cursor-pointer"
                    /> */}
                    <AiFillGoogleCircle
                      size={60}
                      color="#FFAE96"
                      onClick={handleGoogleSignIn}
                      className="cursor-pointer"
                    />
                    {/* <AiFillTwitterCircle
                      size={60}
                      color="#FFAE96"
                      className="cursor-pointer"
                    /> */}
                    <div className="border p-5">
                      <p>testone@gmail.com</p>
                      <p>123456</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center space-x-3">
                  <p>Dont Have an Account?</p>
                  <div className="text-blue-600">
                    <Link href="/register">
                      <p className="cursor-pointer">Sign Up</p>
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
