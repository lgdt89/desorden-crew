import Navbar, { NavItem } from "./NavBar";
interface HeaderProps {
  logoSrc: any;
  navItems: NavItem[];
}

const Header: React.FC<HeaderProps> = ({ logoSrc, navItems }) => {
  return (
     <header className="flex items-center justify-between px-12 bg-black md:px-28 lg:px-48">

      <div className="flex items-center">
        <img src={logoSrc} alt="Logo" className="h-[100px] w-[100px] md:h-[120px] md:w-[120px]" />
      </div>
        
      <Navbar items={navItems}/>
      
    </header>
  );
};

export default Header;