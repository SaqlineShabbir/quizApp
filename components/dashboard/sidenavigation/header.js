import Image from 'next/image';
import { useContext } from 'react';
import logo from '../../../assets/logos/logo.png';
import { ToggleContext } from '../provider/ToggleProvider';
export default function SidenavHeader() {
  const { open, toggle } = useContext(ToggleContext);
  return (
    <div className="bg-white flex  mb-6 pb-6 pt-3 sticky top-0 z-10">
      <Image src={logo} width="40" height="30" alt="logo" />
      <p className="text-2xl font-bold text-orange-500">Quiz Board</p>
      {open == true && (
        <button
          type="button"
          aria-expanded="false"
          aria-label="Toggle sidenav"
          onClick={toggle}
          className="text-4xl text-black focus:outline-none"
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
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
