import { Link } from "react-router-dom";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function NavList() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery/page-1" },
    { name: "Schedule", path: "/schedule/monday" },
    { name: "Blog", path: "/blog" },
    { name: "Pricing", path: "/pricing" },
    { name: "Classes", path: "/classes" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center gap-6 lg:gap-8 xl:gap-10">
        {navItems.map((item) => (
          <li key={item.path} className="relative group">
            {item.path === "/" ? (
              <a
                href={item.path}
                className={`text-white hover:text-[#ff0336] transition-colors duration-300 text-sm lg:text-base font-medium py-2 ${
                  activeLink === item.path ? "text-[#ff0336]" : ""
                }`}
                onClick={() => setActiveLink(item.path)}
              >
                {item.name}
                <span className="absolute left-0 bottom-0 h-0.5 bg-[#ff0336] w-0 group-hover:w-full transition-all duration-300"></span>
              </a>
            ) : (
              <Link
                to={item.path}
                onClick={() => {
                  goTop();
                  setActiveLink(item.path);
                }}
                className={`text-white hover:text-[#ff0336] transition-colors duration-300 text-sm lg:text-base font-medium py-2 ${
                  activeLink === item.path ? "text-[#ff0336]" : ""
                }`}
              >
                {item.name}
                <span className="absolute left-0 bottom-0 h-0.5 bg-[#ff0336] w-0 group-hover:w-full transition-all duration-300"></span>
              </Link>
            )}
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-white focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMenuOpen ? (
          <XMarkIcon className="h-8 w-8" />
        ) : (
          <Bars3Icon className="h-8 w-8" />
        )}
      </button>

      {/* Mobile Navigation */}
      <div className={`md:hidden fixed inset-0 bg-black/90 backdrop-blur-sm z-50 transition-all duration-300 ease-in-out ${
        isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
      }`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navItems.map((item) => (
            <div key={item.path} className="relative overflow-hidden">
              {item.path === "/" ? (
                <a
                  href={item.path}
                  className={`text-2xl text-white hover:text-[#ff0336] transition-colors duration-300 font-medium ${
                    activeLink === item.path ? "text-[#ff0336]" : ""
                  }`}
                  onClick={() => {
                    setActiveLink(item.path);
                    setIsMenuOpen(false);
                  }}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  to={item.path}
                  className={`text-2xl text-white hover:text-[#ff0336] transition-colors duration-300 font-medium ${
                    activeLink === item.path ? "text-[#ff0336]" : ""
                  }`}
                  onClick={() => {
                    goTop();
                    setActiveLink(item.path);
                  }}
                >
                  {item.name}
                </Link>
              )}
              <span className="absolute left-0 bottom-0 h-0.5 bg-[#ff0336] w-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default NavList;