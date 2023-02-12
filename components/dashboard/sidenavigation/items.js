import Cookies from 'js-cookie';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import { useToggle } from '../provider/context';
import ArchivesIcon from './icons/archives';
import CreditsIcon from './icons/credits';
import HomeIcon from './icons/home';

import SettingsIcon from './icons/settings';
import StatusIcon from './icons/status';
const style = {
  title: `mx-4 text-sm text-black`,
  active: ` rounded-full`,
  link: `flex items-center justify-start my-4  py-1 px-2  lg:w-[215px]  `,
  close: `sm:duration-700 sm:ease-out sm:invisible sm:opacity-0 sm:transition-all`,
  open: `sm:duration-500 sm:ease-in lg:h-auto sm:opacity-100 sm:transition-all sm:w-auto`,
};

export default function SidenavItems({ users }) {
  // const [open, setOpen] = useState(true);
  const { asPath } = useRouter();
  const { open } = useToggle();
  const { logOutUser, user } = useContext(AuthContext);

  const expectedUser = users?.find((u) => u.email === user.email);

  const handleLogOut = () => {
    logOutUser();
    Cookies.remove('loggedin');
    Router.push('/');
  };
  return (
    <div className="">
      <Link href="/dashboard">
        <div className="flex  hover:bg-orange-500 active:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-300 rounded-full text-black my-4 mx-2 py-3 px-2 lg:w-[215px] space-x-2 cursor-pointer">
          <span>
            <HomeIcon />
          </span>
          <p>Dashboard</p>
        </div>
      </Link>
      <Link href="/dashboard/quiz-test">
        <div
          className={` flex active:bg-orange-500 hover:bg-orange-500 rounded-full text-black my-4 mx-2 py-3 px-2 lg:w-[215px] space-x-2  cursor-pointer`}
        >
          <span>
            <StatusIcon />
          </span>
          <p>Give A Quiz Test</p>
        </div>
      </Link>
      <Link href="/dashboard/score&grade">
        <div
          className={` flex active:bg-orange-500 hover:bg-orange-500 rounded-full text-black my-4 mx-2 py-3 px-2 lg:w-[215px] space-x-2  cursor-pointer`}
        >
          <span>
            <StatusIcon />
          </span>
          <p>Score & Grade</p>
        </div>
      </Link>
      <Link href="/dashboard/download-certificates">
        <div
          className={` flex active:bg-orange-500 hover:bg-orange-500 rounded-full text-black my-4 mx-2 py-3 px-2 lg:w-[215px] space-x-2  cursor-pointer`}
        >
          <span>
            <StatusIcon />
          </span>
          <p>Download Certificates</p>
        </div>
      </Link>
      <Link href="/dashboard/update-profile">
        <div
          className={` flex active:bg-orange-500 hover:bg-orange-500 rounded-full text-black my-4 mx-2 py-3 px-2 lg:w-[215px] space-x-2  cursor-pointer`}
        >
          <span>
            <StatusIcon />
          </span>
          <p>Update Your Profile</p>
        </div>
      </Link>
      <Link href="/dashboard/subscriptions">
        <div
          className={` flex active:bg-orange-500 hover:bg-orange-500 rounded-full text-black my-4 mx-2 py-3 px-2 lg:w-[215px] space-x-2  cursor-pointer`}
        >
          <span>
            <StatusIcon />
          </span>
          <p>Subscriptions</p>
        </div>
      </Link>
      <Link href="/dashboard/review">
        <div
          className={` flex active:bg-orange-500 hover:bg-orange-500 rounded-full text-black my-4 mx-2 py-3 px-2 lg:w-[215px] space-x-2  cursor-pointer`}
        >
          <span>
            <StatusIcon />
          </span>
          <p>Give Us A Review</p>
        </div>
      </Link>
      <Link href="/dashboard/delete-category">
        <div
          className={` flex active:bg-orange-500 hover:bg-orange-500 rounded-full text-black my-4 mx-2 py-3 px-2 lg:w-[215px] space-x-2 cursor-pointer`}
        >
          <span>
            <ArchivesIcon />
          </span>
          <p>Delete Category</p>
        </div>
      </Link>
      <Link href="/dashboard/post-category">
        <div
          className={` flex active:bg-orange-500 hover:bg-orange-500 rounded-full text-black my-4 mx-2 py-3 px-2 lg:w-[215px] space-x-2 cursor-pointer`}
        >
          <span>
            <CreditsIcon />
          </span>
          <p>Add Category</p>
        </div>
      </Link>
      <Link href="/dashboard/post-question">
        <div
          className={` flex active:bg-orange-500 hover:bg-orange-500 rounded-full text-black my-4 mx-2 py-3 px-2 lg:w-[215px] space-x-2 cursor-pointer`}
        >
          <span>
            <CreditsIcon />
          </span>
          <p>Add Question</p>
        </div>
      </Link>
      <Link href="/dashboard/make-admin">
        <div
          className={` flex active:bg-orange-500 hover:bg-orange-500 rounded-full text-black my-4 mx-2 py-3 px-2 lg:w-[215px] space-x-2 cursor-pointer`}
        >
          <span>
            <SettingsIcon />
          </span>
          <p>Make Admin</p>
        </div>
      </Link>

      <div className="mt-24">
        <button
          className="bg-black rounded-full px-12 py-2 ml-6 flex"
          onClick={handleLogOut}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
            />
          </svg>
          Log Out
        </button>
      </div>
    </div>
  );
}
