'use client'
import Link from 'next/link';
import { useState } from 'react';
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
    <nav className="">
      <div className="md:hidden relative">
        <button
          type="button"
          className="flex items-center px-3 py-2 border border-gray-400 rounded-md hover:text-gray-900 focus:outline-none"
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
        <ul className="absolute left-0 right-0 mx-auto bg-white  rounded-md mt-2 py-2 z-10 md:hidden">
          {items.map((item, index) => (
            <li key={index} className='border-b-4'>
              <Link href={item.url} className="block text-gray-700 hover:text-gray-900 px-4 py-2">
              
                  {item.label}
               
              </Link>
            </li>
          ))}
        </ul>
      )}

      <ul className="hidden md:flex md:space-x-4 w-[380px]">
        {items.map((item, index) => (
          <li key={index} className='w-full text-2xl uppercase'>
            <Link href={item.url} className="text-gray-700 hover:text-gray-900">
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