import HeroSection from "./HeroSection";
import Navbar, { NavItem } from "./NavBar";

interface HeaderProps {
  logoSrc: string;
  navItems: NavItem[];
}

const Header: React.FC<HeaderProps> = ({ logoSrc, navItems }) => {
  return (
     <header className="flex items-center justify-between py-12 px-44">
      <div className="flex items-center">
        <img src={logoSrc} alt="Logo" className="h-10 w-auto" />
      </div>
      <Navbar items={navItems} />
      
    </header>
  );
};

export default Header;