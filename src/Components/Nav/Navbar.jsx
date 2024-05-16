// src/Navbar.js
import React from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/About" },
  { name: "Project", href: "/Project" },
  { name: "Contact", href: "/Contact" },
];

const Navbar = () => {
  return (
    <nav className="bg-white  fixed w-full top-0 shadow-lg z-10 py-12   ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-slate-950 text-3xl ml-16 font-semibold">
          <a href="/">irfan.dev</a>
        </div>
        <ul className="flex space-x-2">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="text-gray-600 hover:text-blue-400 transition duration-300 text-2xl py-2   mr-10 font-sans font-extrabold"
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
