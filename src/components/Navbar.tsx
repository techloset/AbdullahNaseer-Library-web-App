import React, { useState } from 'react';
import logo from "../assets/logo.svg";
import hamBurger from "../assets/hamBurger.svg"
import dropDown from "../assets/dropDown.svg"


const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex flex-col md:flex-row justify-between items-center mt-6">
      <div className="flex justify-between md:flex w-full ">
        {/* Logo */}
        <img src={logo} alt="Logo" className="mr-4" />

        {/* Hamburger button for small screens */}
        <button className="md:hidden" onClick={toggleMenu}>
          <img src={hamBurger} alt="Logo" className="mr-4" />
        </button>
      </div>

      {/* Menu for larger screens or when the menu is open on small screens */}
      <div
        className={`${isMenuOpen ? 'flex' : 'hidden'
          } md:flex flex-col md:flex-row md:space-x-12 mt-3 md:mt-0 transition-all ease-in-out duration-300`}
      >
        <a href="/">Home</a>
        <button className='flex ' >Landings <span className=''><img src={dropDown} alt="Logo" className="mr-4" /></span></button>
        <button className='flex ' >Landings <span className=''><img src={dropDown} alt="Logo" className="mr-4" /></span></button>
        <a href="/cart">Docs</a>
        <a href="/cart">Help</a>
        <button className='border-2 border-[#1565D8] text-[#1565D8] px-6 py-1 rounded-md'>Search</button>
      </div>
    </nav>
  );
};

export default Navbar;
