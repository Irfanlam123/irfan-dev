import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Project", href: "#project" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white fixed w-full top-0 shadow-lg z-10 py-4 md:py-10">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8 lg:px-16 xl:px-32">
        <div className="text-slate-950 text-3xl font-semibold">
          <Link to="#home" smooth onClick={closeMenu}>
            irfan.dev
          </Link>
        </div>
        <div className="flex md:hidden">
          <button
            onClick={handleToggle}
            className="text-gray-600 hover:text-blue-400 focus:outline-none"
          >
            {isOpen ? (
              <XMarkIcon className="w-8 h-8" />
            ) : (
              <Bars3Icon className="w-8 h-8" />
            )}
          </button>
        </div>
        <ul className="hidden md:flex space-x-4">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.href}
                smooth
                className="text-gray-600 hover:text-blue-400 transition duration-300 text-2xl py-2 font-sans font-extrabold"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`md:hidden ${isOpen ? "block" : "hidden"} bg-white shadow-lg`}
      >
        <ul className="flex flex-col items-center py-4">
          {navItems.map((item, index) => (
            <li key={index} className="w-full text-center">
              <Link
                to={item.href}
                smooth
                className="block text-gray-600 hover:text-blue-400 transition duration-300 text-xl py-2 font-sans font-extrabold"
                onClick={closeMenu}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
