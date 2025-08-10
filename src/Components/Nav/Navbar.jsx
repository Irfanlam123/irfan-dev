import React, { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-sm shadow-md py-3" : "bg-white/90 backdrop-blur-sm py-4"} md:py-6`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-slate-950 text-2xl sm:text-3xl font-bold">
            <Link 
              to="#home" 
              smooth 
              onClick={closeMenu}
              className="hover:text-blue-500 transition-colors duration-200"
            >
              irfan.dev
            </Link>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-6 lg:space-x-8">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.href}
                  smooth
                  className="text-gray-700 hover:text-blue-500 transition-all duration-200 text-lg lg:text-xl font-medium relative group"
                  activeClassName="text-blue-500"
                >
                  {item.name}
                  <span className={`absolute left-0 bottom-0 h-0.5 bg-blue-500 transition-all duration-300 ${scrolled ? 'w-0 group-hover:w-full' : 'w-0 group-hover:w-full'}`}></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={handleToggle}
            className="md:hidden text-gray-700 hover:text-blue-500 focus:outline-none transition-colors duration-200 p-1"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <XMarkIcon className="w-7 h-7" />
            ) : (
              <Bars3Icon className="w-7 h-7" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? "block" : "hidden"} transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-96" : "max-h-0"}`}>
          <ul className="flex flex-col space-y-2 py-4">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.href}
                  smooth
                  className="block px-4 py-3 text-gray-700 hover:text-blue-500 hover:bg-gray-50 rounded-lg transition-colors duration-200 text-lg font-medium"
                  onClick={closeMenu}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;