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
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => item.href.substring(1));
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(`#${current}`);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-lg bg-gray-900/80 shadow-md border-b border-gray-700"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto  flex items-center mt-10 justify-between px-4 py-7">
        {/* Logo */}
        <Link
          to="#home"
          smooth
          className="text-3xl font-extrabold tracking-wide text-white hover:text-blue-400 transition"
        >
          <p>
            {"{"}irfan.dev{"}"}
          </p>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10">
          {navItems.map((item, i) => (
            <li key={i} className="relative group">
              <Link
                to={item.href}
                smooth
                className={`text-lg font-semibold tracking-wide transition duration-300 ${
                  activeSection === item.href
                    ? "text-blue-400"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.name}
                {/* Underline effect */}
                <span
                  className={`absolute left-0 bottom-[-6px] h-[3px] w-full bg-blue-400 transform scale-x-0 transition-transform duration-300 ${
                    activeSection === item.href
                      ? "scale-x-100"
                      : "group-hover:scale-x-100"
                  }`}
                ></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 hover:text-white transition"
        >
          {isOpen ? (
            <XMarkIcon className="w-8 h-8" />
          ) : (
            <Bars3Icon className="w-8 h-8" />
          )}
        </button>
      </div>

      {/* Mobile Menu with animation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col space-y-6 px-6 py-6 bg-gray-900/95 border-t border-gray-700">
          {navItems.map((item, i) => (
            <li key={i}>
              <Link
                to={item.href}
                smooth
                className={`block text-lg font-semibold tracking-wide transition duration-300 ${
                  activeSection === item.href
                    ? "text-blue-400"
                    : "text-gray-300 hover:text-white"
                }`}
                onClick={() => setIsOpen(false)}
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
