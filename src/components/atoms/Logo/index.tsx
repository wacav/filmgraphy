import LogoImg from '@public/assets/logo_transparent.png';
import Image from 'next/image';

const Logo = ({ width, height }: { width: number | string; height: number | string }) => (
  <Image src={LogoImg} alt="Filmgraphy logo" height={height} width={width} />
);

export default Logo;
