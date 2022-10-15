import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/features/users/userSlice';

const login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const router = useRouter();
  const { data: session } = useSession();
  console.log(session?.user);
  const handleGoogleSignIn = (e) => {
    signIn();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      loginUser({
        email,
        password,
      })
    );
  };

  return (
    <div className="lg:flex">
      <div className="bg-red-100  lg:w-1/2 h-[100vh]">
        <div className="flex  justify-center items-center gap-10 py-[300px] lg:px-[200px]  md:px-[70px]  px-10">
          <div className="space-y-5">
            <p className="">
              Those people who develop the ability to continuously acquire new
              and better forms of knowledge that they can apply to their work
              and to their lives will be the movers and shakers in our society
              for the indefinite future
            </p>
            <p>Brian Tracy</p>
          </div>
        </div>
      </div>
      <div className="bg-white  lg:w-1/2  px-20">
        <p className="mt-20">Back To Topify</p>
        <div className="flex flex-col justify-center items-center gap-10 mt-24">
          <p className="flex  items-center lg:text-4xl text-2xl font-bold">
            Log In
          </p>

          <form onSubmit={handleSubmit}>
            <div className="space-y-5">
              <input
                type="text"
                id="first_name"
                className="lg:w-[400px]  py-5 px-5 drop-shadow-2xl  text-gray-900 text-sm rounded-full  "
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                id="password"
                className=" lg:w-[400px]  py-5 px-5 drop-shadow-xl  text-gray-900 text-sm rounded-full block w-full p-2.5  "
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <p className="text-red-400">Forget Password?</p>
              <button className="bg-red-400  py-5 px-10 lg:w-[400px] rounded-full block w-full">
                Log in
              </button>
              <button
                onClick={handleGoogleSignIn}
                className="bg-red-400  py-5 px-10 lg:w-[400px] rounded-full block w-full"
              >
                Log in with google
              </button>
              {/* <p onClick={() => addUser()}>addUser</p> */}
              <div>
                <p>Dont Have an Account?</p>
                <Link href="/register">Sign Up</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default login;
