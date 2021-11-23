import { Link } from '@libs/next/hint';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import * as Icons from 'react-icons/ri';
import { MENUS, TOGGLE_ID } from './code';

export const SideNav = () => {
  const router = useRouter();
  const locale = useMemo(() => router.locale, [router.locale]);
  return (
    <aside className="drawer-side">
      <label htmlFor={TOGGLE_ID} className="drawer-overlay" />
      <ul className="p-4 overflow-y-auto menu w-80 bg-gray-800 text-base-content">
        {MENUS.map((menu) => {
          const MenuIcon = Icons[menu.icon];
          return (
            <li key={menu.link}>
              <Link href={menu.link}>
                <a className="flex p-2 items-center">
                  <MenuIcon className="mr-4" />
                  {menu.name[locale]}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default SideNav;
