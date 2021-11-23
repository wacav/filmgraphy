import { Image, Link } from '@libs/next/hint';
import Logo from '@public/assets/logo_transparent.png';
import { useRouter } from 'next/router';
import { FiMenu, FiUser } from 'react-icons/fi';
import tw, { styled } from 'twin.macro';
import { MENUS, TOGGLE_ID } from './code';
const NavButtonWrap = styled.div`
  .btn + .btn {
    ${tw`ml-1`}
  }
`;

const LayoutHeader = () => {
  const router = useRouter();

  return (
    <div className="w-full bg-gray-800 navbar mb-2 shadow-lg bg-transparent">
      <div className="px-2 mx-2 navbar-start">
        <Link href="/" passHref>
          <Image src={Logo} alt="LOGO" height={52} width={52} className="cursor-pointer" />
        </Link>
        <Link href="/" passHref>
          <span className="text-lg font-bold uppercase ml-2 cursor-pointer text-primary">Filmgraphy</span>
        </Link>
        <div className="items-stretch ml-6 hidden lg:flex">
          {MENUS.map((menu) => (
            <Link href={menu.link} passHref key={menu.link}>
              <a className="btn btn-ghost btn-sm rounded-btn">{menu.name[router.locale]}</a>
            </Link>
          ))}
        </div>
      </div>
      <NavButtonWrap className="navbar-end">
        <button className="btn btn-square btn-ghost">
          <FiUser />
        </button>
        <label htmlFor={TOGGLE_ID} className="btn btn-square btn-ghost lg:hidden">
          <FiMenu />
        </label>
      </NavButtonWrap>
    </div>
  );
};

export default LayoutHeader;
