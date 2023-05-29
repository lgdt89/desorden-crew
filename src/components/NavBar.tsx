import { useState } from 'react';
import { Link } from 'react-router-dom';
export interface NavItem {
  label: string;
  url: string;
}

interface NavbarProps {
  items: NavItem[];
}

const Navbar: React.FC<NavbarProps> = ({ items }) => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
   return  (
    <nav className="text-white">
      <div className="md:hidden relative">
        <button
          type="button"
          className="flex items-center px-3 py-2 border border-gray-400 rounded-md focus:outline-none"
          onClick={handleToggleMenu}
        >
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <ul className="absolute left-0 right-0 mx-auto bg-white mt-4 rounded-md md: mt-9 py-2 z-10 md:hidden">
          {items.map((item, index) => (
            <li key={index} className='border-b-4 pl-3'>
              <Link to={item.url} className="block text-black  px-4 py-2">
              
                  {item.label}
               
              </Link>
            </li>
          ))}
        </ul>
      )}

      <ul className="hidden md:flex md:space-4 w-[380px]">
        {items.map((item, index) => (
          <li key={index} className='w-full text-2xl uppercase transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300'>
            <Link to={item.url} className="text-white">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
    
  export default Navbar;
  // <nav className="flex items-center w-[380px]">
  //   <ul className="flex space-x-4 justify-between w-full ">
  //     {items.map((item, index) => (
  //       <li key={index} className='text-4xl uppercase'>
  //         <Link href={item.url} className="text-gray-700 hover:text-gray-900">
  //          {item.label}
  //         </Link>
  //       </li>
  //     ))}
  //   </ul>
  // </nav>