import Navbar, { NavItem } from "./NavBar";
interface HeaderProps {
  logoSrc: any;
  navItems: NavItem[];
}

const Header: React.FC<HeaderProps> = ({ logoSrc, navItems }) => {
  return (
     <header className="flex items-center justify-between px-12 bg-black md:py-4 md:px-24 lg:py-0 lg:px-35">
      <div className="flex items-center">
        <img src={logoSrc} alt="Logo" className="h-[5.5rem] w-[100px] md:h-[7.5rem] md:w-[150px] lg:h-[10.5rem] lg:w-[200px]" />
      </div>
      <Navbar items={navItems} />
      
    </header>
  );
};

export default Header;