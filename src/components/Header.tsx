import HeroSection from "./HeroSection";
import Navbar, { NavItem } from "./NavBar";
interface HeaderProps {
  logoSrc: any;
  navItems: NavItem[];
}

const Header: React.FC<HeaderProps> = ({ logoSrc, navItems }) => {
  return (
     <header className="flex items-center justify-between px-12 bg-black md:py-12 md:px-44 ">
      <div className="flex items-center">
        <img src={logoSrc} alt="Logo" className="h-36 w-[200px]" />
      </div>
      <Navbar items={navItems} />
      
    </header>
  );
};

export default Header;