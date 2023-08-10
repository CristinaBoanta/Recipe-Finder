import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-darkGreen text-white py-2 z-0">
      <div className="md:container md:mx-auto px-12 flex justify-between items-center">
        <Link to="/">
          <h1 className="text-3xl font-bold text-white">RecipEase</h1>
        </Link>
        <div className="md:hidden">
          <button
            className="text-xl focus:outline-none"
            onClick={handleMobileMenuToggle}
          >
            ☰ 
          </button>
        </div>

        <nav
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } md:flex md:space-x-4 absolute md:relative justify-end left-0 w-full bg-darkGreen md:top-0 top-16 z-10`}
        >
          <Link
            to="/"
            className="block px-4 py-4 text-xl hover:bg-white hover:text-darkGreen duration-500"
          >
            Home
          </Link>
          <Link
            to="/"
            className="block px-4 py-4 text-xl hover:bg-white hover:text-darkGreen duration-500"
          >
            Recipes
          </Link>
          <Link
            to="/"
            className="block px-4 py-4 text-xl hover:bg-white hover:text-darkGreen duration-500"
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;