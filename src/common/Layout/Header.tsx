import Logo from '@public/assets/logo_transparent.png';
import { Feather } from '@type/icon';
import { Image, Link } from '@type/next';

const LayoutHeader = () => {
  return (
    <div className="navbar mb-2 shadow-lg bg-transparent">
      <div className="px-2 mx-2 navbar-start">
        <Link href="/">
          <Image src={Logo} alt="LOGO" height={52} width={52} className="cursor-pointer" />
        </Link>
        <Link href="/">
          <span className="text-lg font-bold uppercase ml-2 cursor-pointer">Filmgraphy</span>
        </Link>
      </div>
      <div className="hidden px-2 mx-2 navbar-center lg:flex">
        <div className="flex items-stretch">
          <a className="btn btn-ghost btn-sm rounded-btn">Portfolio</a>
          <a className="btn btn-ghost btn-sm rounded-btn">About</a>
          <a className="btn btn-ghost btn-sm rounded-btn">Contact</a>
        </div>
      </div>
      <div className="navbar-end">
        <button className="btn btn-square btn-ghost">
          <Feather.FiSearch size={24} />
        </button>
        <button className="btn btn-square btn-ghost hidden lg:flex ml-1">
          <Feather.FiUser size={24} />
        </button>
        <button className="btn btn-square btn-ghost lg:hidden ml-1">
          <Feather.FiMenu size={24} />
        </button>
      </div>
    </div>
  );
};

export default LayoutHeader;
