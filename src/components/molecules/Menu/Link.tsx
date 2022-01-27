import Button from '@components/atoms/Button';
import Link from 'next/link';

const MenuLink = ({ name, href }: { name: string; href: string }) => {
  return (
    <Link href={href} passHref>
      <Button variant="ghost" size="sm">
        {name}
      </Button>
    </Link>
  );
};
export default MenuLink;
