import Logo from '@components/atoms/Logo';
import AppName from '@components/atoms/Logo/AppName';

const LogoTitle = () => (
  <a className="flex items-center cursor-pointer">
    <Logo width={52} height={52} />
    <AppName className="ml-2" />
  </a>
);

export default LogoTitle;
