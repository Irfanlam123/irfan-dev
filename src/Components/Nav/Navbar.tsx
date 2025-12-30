import React, { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

/* =======================
   TYPES
======================= */
interface NavItem {
  name: string;
  href: string;
}

/* =======================
   CONSTANTS
======================= */
const NAV_ITEMS: NavItem[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

/* =======================
   COMPONENT
======================= */
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("#home");

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 50);

      const sections = NAV_ITEMS.map((item) =>
        item.href.replace("#", "")
      );

      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (!element) return false;

        const rect = element.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });

      if (currentSection) {
        setActiveSection(`#${currentSection}`);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-lg bg-navy/95 shadow-sm border-b border-siteBorder"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link
          to="#home"
          smooth
          className="text-3xl font-extrabold tracking-wide text-siteText hover:text-accent transition"
        >Irfan</Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6">
          {NAV_ITEMS.map((item) => (
            <li key={item.href} className="relative group">
              <Link
                to={item.href}
                smooth
                className={`text-lg font-semibold tracking-wide transition duration-300 ${
                  activeSection === item.href
                    ? "text-accent"
                    : "text-siteText/80 hover:text-siteText"
                }`}
              >
                {item.name}
                <span
                  className={`absolute left-0 -bottom-2 h-[3px] w-full bg-accent transform transition-transform duration-300 ${
                    activeSection === item.href
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            </li>
          ))}


        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden text-siteText/70 hover:text-siteText transition"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? (
            <XMarkIcon className="w-8 h-8" />
          ) : (
            <Bars3Icon className="w-8 h-8" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col space-y-6 px-6 py-6 bg-navy/95 border-t border-siteBorder">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                to={item.href}
                smooth
                className={`block text-lg font-semibold tracking-wide transition duration-300 ${
                  activeSection === item.href
                    ? "text-accent"
                    : "text-siteText/80 hover:text-siteText"
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
