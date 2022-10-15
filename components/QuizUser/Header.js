import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  CogIcon,
  FlagIcon,
  HomeIcon,
  LogoutIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
  UserGroupIcon,
  ViewGridIcon,
} from '@heroicons/react/outline';
import {
  ChatAlt2Icon,
  MoonIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/solid';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import logo from '../../assets/logos/letter-m-logo.webp';

import HeaderIcon from './HeaderIcon';

function Header() {
  const { loggedInUser } = useSelector((state) => state.user);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div>
      <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg-px-5 shadow-md">
        {/* left */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              className="cursor-pointer"
              alt="image"
              src={logo}
              width={90}
              height={60}
              layout="fixed"
            />
          </Link>
          <div className="flex ml-2 rounded-full items-center  bg-gray-100 p-2">
            <SearchIcon className="h-6 text-gray-600" />
            <input
              className=" md:inline-flex flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink"
              type="text"
              placeholder="Search Meet Up"
            />
          </div>
        </div>
        {/* center */}
        <div className="flex justify-center flex-grow">
          <div className="flex space-x-6 md:space-x-2">
            <HeaderIcon active Icon={HomeIcon} />
            <HeaderIcon Icon={FlagIcon} />
            <HeaderIcon Icon={PlayIcon} />
            <HeaderIcon Icon={ShoppingCartIcon} />
            <HeaderIcon Icon={UserGroupIcon} />
          </div>
        </div>
        {/* right */}
        <div className="flex items-center sm:space-x-2 justify-end">
          {/* <Link href="/profile">
            <img
              className="rounded-full cursor-pointer h-12 w-12"
              src={localAuth?.photoURL}
              alt="image"
            />
          </Link> */}

          <p className="font-semibold pr-3 whitespace-nowrap">
            {loggedInUser?.name}
          </p>

          <ViewGridIcon className="icon" />
          <ChatIcon className="icon" />
          <BellIcon className="icon" />
          <ChevronDownIcon
            onClick={() => setOpenMenu(!openMenu)}
            className={`icon ${openMenu ? 'bg-blue-500 text-white' : ''}`}
          />
        </div>
      </div>
      {/* menu  */}
      {openMenu && (
        <div className="absolute top-20 p-2 z-50 rounded-lg shadow right-8 w-80 bg-white">
          <div className="flex p-2 rounded-lg items-center hover:bg-gray-200 gap-2 mb-4">
            <img
              src={user?.photoURL}
              className="rounded-full w-12 h-12"
              alt=""
            />
            <div>
              <h1 className="text-xl font-bold">{user.displayName}</h1>
              <a href="http://facebook.com ">See Your Profile</a>
            </div>
          </div>
          <hr />
          <div className="flex flex-col mt-3">
            <div className="flex w-full items-center cursor-pointer justify-between p-2 rounded-lg hover:bg-gray-200">
              <div className="flex items-center gap-2">
                <CogIcon className="icon" />
                <h1 className="cursor-pointer text-lg">Settings & Privacy</h1>
              </div>
              <ChevronRightIcon className="icon bg-white" />
            </div>
            <div className="flex w-full items-center cursor-pointer justify-between p-2 rounded-lg hover:bg-gray-200">
              <div className="flex items-center gap-2">
                <QuestionMarkCircleIcon className="icon" />
                <h1 className="cursor-pointer text-lg">Help & Support</h1>
              </div>
              <ChevronRightIcon className="icon bg-white" />
            </div>
            <div className="flex w-full items-center cursor-pointer justify-between p-2 rounded-lg hover:bg-gray-200">
              <div className="flex items-center gap-2">
                <MoonIcon className="icon" />
                <h1 className="cursor-pointer text-lg">
                  Display & Accessibility
                </h1>
              </div>
              <ChevronRightIcon className="icon bg-white" />
            </div>
            <div className="flex w-full items-center cursor-pointer justify-between p-2 rounded-lg hover:bg-gray-200">
              <div className="flex items-center gap-2">
                <ChatAlt2Icon className="icon" />
                <h1 className="cursor-pointer text-lg">Give Feedback</h1>
              </div>
              <ChevronRightIcon className="icon bg-white" />
            </div>
            <div className="flex w-full items-center cursor-pointer justify-between p-2 rounded-lg hover:bg-gray-200">
              <div onClick={logOut} className="flex items-center gap-2">
                <LogoutIcon className="icon" />
                <h1 className="cursor-pointer text-lg">Log Out</h1>
              </div>
              <ChevronRightIcon className="icon bg-white" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Header;
// import { BeakerIcon, BellIcon,ChatIcon,ChevronDoubleDownIcon,HomeIcon,UserGroupIcon,ViewGridIcon, } from '@heroicons/react/solid'
// import {FlagIcon,PlayIcon,SearchIcon,ShoppingCartIcon} from "@heroicons/react/outline"
