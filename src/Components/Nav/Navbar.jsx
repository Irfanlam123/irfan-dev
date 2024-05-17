import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/About" },
  { name: "Project", href: "/Project" },
  { name: "Contact", href: "/Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white fixed w-full top-0 shadow-lg z-10 py-4 md:py-10">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8 lg:px-16 xl:px-32">
        <div className="text-slate-950 text-3xl font-semibold">
          <a href="/">irfan.dev</a>
        </div>
        <div className="flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
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
              <a
                href={item.href}
                className="text-gray-600 hover:text-blue-400 transition duration-300 text-xl py-2 font-sans font-extrabold"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`md:hidden ${
          isOpen ? "block" : "hidden"
        } bg-white shadow-lg`}
      >
        <ul className="flex flex-col items-center py-4">
          {navItems.map((item, index) => (
            <li key={index} className="w-full text-center">
              <a
                href={item.href}
                className="block text-gray-600 hover:text-blue-400 transition duration-300 text-xl py-2 font-sans font-extrabold"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
