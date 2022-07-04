import Logo from '@components/atoms/Logo';
import { Link } from '@libs/next/hint';
import { GrInstagram, GrTwitter, GrYoutube } from 'react-icons/gr';
const LayoutFooter = () => {
  return (
    <footer className="px-10 py-4 bg-gray-800 footer text-base-content mt-auto">
      <div className="items-center grid-flow-col">
        <Logo width={24} height={24} />
        <p>Copyright © 2021 - All right reserved by WACA</p>
      </div>
      <div className="md:place-self-center md:justify-self-end">
        <div className="grid grid-flow-col gap-6">
          <Link href="https://www.instagram.com/">
            <a>
              <GrInstagram />
            </a>
          </Link>
          <Link href="https://www.youtube.com/">
            <a>
              <GrYoutube />
            </a>
          </Link>
          <Link href="https://twitter.com/">
            <a>
              <GrTwitter />
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default LayoutFooter;
