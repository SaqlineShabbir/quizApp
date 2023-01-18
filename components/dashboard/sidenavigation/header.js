import Image from 'next/image';
import logo from '../../../assets/logos/logo.png';
export default function SidenavHeader() {
  return (
    <div className="bg-white flex items-center justify-center mb-6 pb-6 pt-3 sticky top-0 z-10">
      <Image src={logo} width="40" height="30" alt="logo" />
      <p className="text-2xl font-bold text-orange-500">Quiz Board</p>
    </div>
  );
}
