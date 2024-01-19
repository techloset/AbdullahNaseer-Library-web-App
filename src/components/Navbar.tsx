import React, { useState } from 'react';
import logo from "../assets/logo.svg";
import hamBurger from "../assets/hamBurger.svg"

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex flex-col md:flex-row md:mx-16 justify-between items-center mt-6">
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
        <a href="/menu">Landings</a>
        <a href="/service">Pages</a>
        <a href="/cart">Docs</a>
        <a href="/cart">Help</a>
        <a href="/cart">Search</a>
      </div>
    </nav>
  );
};

export default Navbar;
