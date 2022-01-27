import { NAV_TOGGLE_KEY } from '@config';
import useMenu from '@hooks/menu/useMenu';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import SideNavItem from './SideNavItem';

export const SideNav = () => {
  const router = useRouter();
  const locale = useMemo(() => router.locale, [router.locale]);
  const menus = useMenu();

  return (
    <aside className="drawer-side">
      <label htmlFor={NAV_TOGGLE_KEY} className="drawer-overlay" />
      <ul className="p-4 overflow-y-auto w-80 bg-gray-800 text-base-content">
        {menus.map(({ link, icon, name }, idx) => (
          <SideNavItem href={link} icon={icon} name={name[locale]} key={idx} />
        ))}
      </ul>
    </aside>
  );
};

export default SideNav;
