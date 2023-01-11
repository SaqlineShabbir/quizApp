import Link from 'next/link';
import { useRouter } from 'next/router';
import { useToggle } from '../provider/context';

import data from './data';

const style = {
  title: `mx-4 text-sm text-black`,
  active: ` rounded-full`,
  link: `flex items-center justify-start my-1 py-2 my-4  px-5 w-full `,
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
  return (
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
  );
}
