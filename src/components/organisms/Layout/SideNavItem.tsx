import Link from 'next/link';
import { useMemo } from 'react';
import * as Icons from 'react-icons/ri';

const SideNavItem = ({ href, name, icon }: { href: string; name: string; icon?: string }) => {
  const MenuIcon = useMemo(() => (icon ? Icons[icon] : undefined), [icon]);
  return (
    <li>
      <Link href={href}>
        <a className="flex p-2 items-center">
          {MenuIcon && <MenuIcon className="mr-4" />}
          {name}
        </a>
      </Link>
    </li>
  );
};

export default SideNavItem;
