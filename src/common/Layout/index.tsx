import { TOGGLE_ID } from './code';
import LayoutFooter from './Footer';
import LayoutHeader from './Header';
import SideNav from './SideNav';

const Layout: React.FC = ({ children }) => {
  return (
    <div className="drawer drawer-end min-h-screen">
      <input type="checkbox" id={TOGGLE_ID} className="drawer-toggle" />
      <div className="flex flex-col drawer-content h-auto ">
        <LayoutHeader />
        <main className="w-full max-w-screen-2xl mx-auto p-4">{children}</main>
        <LayoutFooter />
      </div>
      <SideNav />
    </div>
  );
};

export default Layout;
