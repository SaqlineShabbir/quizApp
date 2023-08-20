import Cookies from 'js-cookie';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import img from '../../assets/logos/ologo-removebg-preview.png';
import { AuthContext } from '../../context/AuthProvider';
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useContext(AuthContext);

  const verify = Cookies.get('loggedin');
  return (
    <header className=" text-white p-4 ">
      <div className="container mx-auto flex items-center justify-between lg:px-[55px] text-black relative">
        <Link href="/" className="font-semibold text-xl">
          <div className="flex">
            <Image
              src={img}
              width={50}
              height={50}
              alt="Picture of the author"
            />{' '}
            <p className="pt-5">ONQUIZ</p>
          </div>
        </Link>
        <button
          className="md:hidden rounded-lg focus:outline-none focus:shadow-outline"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
            {isOpen ? (
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414Z"
              />
            ) : (
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2 5h16V7H2V5Zm0 6h16v2H2v-2Zm0 6h16v2H2v-2Z"
              />
            )}
          </svg>
        </button>
        <nav
          className={`mt-4 text-sm   md:mt-0 ${
            isOpen ? 'block' : 'hidden'
          } md:flex `}
        >
          <div>
            <Link href="/" className="block mx-5 md:inline-block  md:mt-0  ">
              HOME
            </Link>
          </div>
          <br />
          {!verify && (
            <div className="lg:mx-5">
              <Link
                href="/sign-in"
                className="block md:inline-block  md:mt-0 mr-7"
              >
                LOGIN
              </Link>
            </div>
          )}
          <br />
          {verify && (
            <div className="mx-5">
              <Link
                href="/dashboard"
                className="block md:inline-block mt-4 md:mt-0 md:mr-6 text-black-400 hover-text-black-100 "
              >
                DASHBOARD
              </Link>
            </div>
          )}
          <br />
          {/* <div className="lg:mx-5">
            <Link
              href="/contact"
              className="block md:inline-block mt-4 md:mt-0 text-black-500 "
            >
              CONTACT
            </Link>
          </div> */}
        </nav>
      </div>
    </header>
  );
}

export default Header;
