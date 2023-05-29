import { StaticImageData } from "next/image";
import HeroSection from "./HeroSection";
import Navbar, { NavItem } from "./NavBar";
interface HeaderProps {
  logoSrc: any;
  navItems: NavItem[];
}

const Header: React.FC<HeaderProps> = ({ logoSrc, navItems }) => {
  return (
     <header className="flex items-center justify-between py-12 px-44 bg-black">
      <div className="flex items-center">
        <img src={logoSrc} alt="Logo" className="h-36 w-[200px]" />
      </div>
      <Navbar items={navItems} />
      
    </header>
  );
};

export default Header;