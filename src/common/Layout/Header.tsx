import Button from '@components/atoms/Button';
import LogoTitle from '@components/molecules/LogoTitle';
import useMenu from '@hooks/menu/useMenu';
import { Link } from '@libs/next/hint';
import { useRouter } from 'next/router';
import { FiMenu, FiUser } from 'react-icons/fi';
import tw, { styled } from 'twin.macro';
import { TOGGLE_ID } from '.';

const NavButtonWrap = styled.div`
  .btn + .btn {
    ${tw`ml-1`}
  }
`;

const LayoutHeader = () => {
  const router = useRouter();
  const menus = useMenu();

  return (
    <div className="w-full bg-gray-800 navbar mb-2 shadow-lg bg-transparent">
      <div className="px-2 mx-2 navbar-start">
        <Link href="/" passHref>
          <LogoTitle />
        </Link>
        <div className="items-stretch ml-6 hidden lg:flex">
          {menus.map((menu) => (
            <Link href={menu.link} passHref key={menu.link}>
              <Button variant="ghost" size="sm">
                {menu.name[router.locale]}
              </Button>
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
