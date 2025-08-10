import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import IMG from "../Home/chem.png";

const Hero = () => {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 max-w-7xl mx-auto">
        {/* Text Content */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          <div className="mb-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
              Front-End React <br /> 
              <span className="text-blue-600">Developer</span>{" "}
              <span className="text-4xl sm:text-5xl">👋</span>
            </h1>
          </div>
          
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
            Hi, I'm Irfan Alam. A passionate Front-end React Developer based in Delhi, India.
            <span className="text-blue-500 ml-2">☺</span>
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center lg:justify-start gap-6 mb-8">
            <a
              href="https://www.linkedin.com/in/irfan-alam-2034a922b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon
                icon={faLinkedinIn}
                size="lg"
                className="border-2 border-gray-700 hover:border-blue-600 rounded-lg p-2 transition-all duration-300"
              />
            </a>
            <a
              href="https://github.com/Irfanlam123"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 transition-colors duration-300"
              aria-label="GitHub"
            >
              <FontAwesomeIcon
                icon={faGithub}
                size="lg"
                className="border-2 border-gray-700 hover:border-gray-900 rounded-lg p-2 transition-all duration-300"
              />
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="order-1 lg:order-2 relative group mb-8 lg:mb-0">
          <div className="relative z-10 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-gray-200 shadow-xl">
            <img
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              src={IMG}
              alt="Irfan Alam - Frontend Developer"
              loading="eager"
            />
          </div>
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full opacity-20 blur-lg group-hover:opacity-30 transition-opacity duration-300"></div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="max-w-7xl mx-auto mt-12 sm:mt-16 px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 whitespace-nowrap">
            Tech Stack
          </h2>
          
          <div className="hidden sm:block h-10 w-0.5 bg-gray-300"></div>
          
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {[
              { icon: <FaHtml5 className="text-3xl" />, color: "bg-orange-500" },
              { icon: <FaCss3Alt className="text-3xl" />, color: "bg-blue-500" },
              { icon: <IoLogoJavascript className="text-3xl" />, color: "bg-yellow-400" },
              { icon: <FaReact className="text-3xl text-blue-400" />, color: "bg-gray-900" },
              { icon: <RiNextjsFill className="text-3xl text-white" />, color: "bg-gray-900" },
              { icon: <RiTailwindCssFill className="text-3xl text-blue-400" />, color: "bg-gray-900" }
            ].map((tech, index) => (
              <div 
                key={index}
                className={`${tech.color} text-white p-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
              >
                {tech.icon}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto mt-10 sm:mt-12 px-4 sm:px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      </div>
    </div>
  );
};

export default Hero;