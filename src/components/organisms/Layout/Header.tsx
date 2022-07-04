import Button from '@components/atoms/Button';
import LogoTitle from '@components/molecules/LogoTitle';
import MenuLink from '@components/molecules/Menu/Link';
import { NAV_TOGGLE_KEY } from '@config';
import useMenu from '@hooks/menu/useMenu';
import { Link } from '@libs/next/hint';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { FiMenu, FiUser } from 'react-icons/fi';
import tw, { styled } from 'twin.macro';

const NavButtonWrap = styled.div`
  .btn + .btn {
    ${tw`ml-1`}
  }
`;

const LayoutHeader = () => {
  const router = useRouter();
  const locale = useMemo(() => router.locale, [router.locale]);
  const menus = useMenu();

  return (
    <div className="w-full bg-gray-800 navbar mb-2 shadow-lg bg-transparent">
      <div className="px-2 mx-2 navbar-start">
        <Link href="/" passHref>
          <LogoTitle />
        </Link>
        <div className="items-stretch ml-6 hidden lg:flex">
          {menus.map(({ link, name }, idx) => (
            <MenuLink key={idx} href={link} name={name[locale]} />
          ))}
        </div>
      </div>
      <NavButtonWrap className="navbar-end">
        <Button variant="ghost">
          <FiUser />
        </Button>
        <Button variant="ghost" className="lg:hidden">
          <label htmlFor={NAV_TOGGLE_KEY}>
            <FiMenu />
          </label>
        </Button>
      </NavButtonWrap>
    </div>
  );
};

export default LayoutHeader;
