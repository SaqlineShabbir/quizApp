import Cookies from 'js-cookie';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import { useToggle } from '../provider/context';

import data from './data';

const style = {
  title: `mx-4 text-sm text-black`,
  active: ` rounded-full`,
  link: `flex items-center justify-start my-4  py-1 px-2  lg:w-[215px]  `,
  close: `sm:duration-700 sm:ease-out sm:invisible sm:opacity-0 sm:transition-all`,
  open: `sm:duration-500 sm:ease-in lg:h-auto sm:opacity-100 sm:transition-all sm:w-auto`,
};
// const style = {
//   title: `mx-4 text-sm`,
//   active: `bg-orange-500 rounded-full`,
//   link: `flex items-center justify-start my-1 p-3 w-full hover:text-orange`,
//   close: `lg:duration-700 lg:ease-out lg:invisible lg:opacity-0 lg:transition-all`,
//   open: `lg:duration-500 lg:ease-in lg:h-auto lg:opacity-100 lg:transition-all lg:w-auto`,
// };

export default function SidenavItems() {
  // const [open, setOpen] = useState(true);
  const { asPath } = useRouter();
  const { open } = useToggle();
  const { logOutUser } = useContext(AuthContext);

  const handleLogOut = () => {
    logOutUser();
    Cookies.remove('loggedin');
  };
  return (
    <div>
      <ul className="md:pl-3">
        <li>
          {data.map((item) => (
            <Link href={item.link} key={item.title}>
              <a
                className={`${style.link} active:bg-orange-500 hover:bg-orange-500 rounded-full text-black`}
              >
                <div
                  className={`p-2 ${
                    item.link === asPath ? style.active : ''
                  } text-black`}
                >
                  <span>{item.icon}</span>
                </div>
                <span className="text-black">{item.title}</span>
              </a>
            </Link>
          ))}
        </li>
      </ul>
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
