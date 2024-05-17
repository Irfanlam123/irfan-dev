import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import IMG from "../Home/chem.png";

const Hero = () => {
  return (
    <div className="mt-24 md:mt-72">
      <div className="flex flex-col md:flex-row items-center text-2xl mt-16 md:mt-40 space-y-10 md:space-y-0 md:space-x-24 lg:space-x-72">
        <div className="md:ml-12 lg:ml-52 text-center md:text-left">
          <div>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-gray-700">
              Front-End React <br /> Developer{" "}
              <span className="text-4xl md:text-6xl lg:text-7xl">👋</span>
            </h1>
          </div>
          <p className="text-gray-600 font-medium mt-4 md:mt-8 text-lg md:text-2xl py-3">
            Hi, I'm Irfan Alam. A passionate Front-end React Developer <br />
            based in Delhi, India.
            <span className="text-2xl md:text-4xl text-blue-500">☺</span>
          </p>
          <ul className="flex justify-center md:justify-start space-x-10 md:space-x-14 mt-6 md:mt-10">
            <li>
              <a
                href="https://www.linkedin.com/in/irfan-alam-2034a922b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  size="2x"
                  className="text-gray-700 border-2 border-gray-700 rounded-lg px-2 py-1"
                />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Irfanlam123"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  size="2x"
                  className="text-gray-700 border-2 border-gray-700 rounded-lg px-2 py-1"
                />
              </a>
            </li>
          </ul>
        </div>
        <div className="border-2 border-gray-700 bg-gray-100 p-4 rounded-full">
          <img
            className="h-48 w-48 md:h-64 md:w-64 lg:h-80 lg:w-80 rounded-full hover:animate-spin"
            src={IMG}
            alt="Profile"
          />
        </div>
      </div>

      <div className="mt-12 md:mt-24 px-4 md:px-12 lg:px-52 flex flex-col md:flex-row items-center md:items-start space-y-10 md:space-y-0 md:space-x-10">
        <h1 className="font-bold text-2xl md:text-3xl text-gray-700">
          Tech Stack
        </h1>
        <p className="h-14 border-l-2 border-gray-400 hidden md:block"></p>
        <div className="flex flex-wrap justify-center md:justify-start space-x-4 space-y-4 md:space-y-0 md:space-x-10">
          <div className="border-2 rounded-lg bg-orange-500 hover:text-white transition-transform duration-300 hover:-translate-y-3 p-2">
            <FaHtml5 className="text-4xl md:text-5xl" />
          </div>
          <div className="border-2 rounded-lg bg-blue-400 hover:text-white transition-transform duration-300 hover:-translate-y-3 p-2">
            <FaCss3Alt className="text-4xl md:text-5xl" />
          </div>
          <div className="border-2 rounded-lg bg-yellow-400 hover:text-white transition-transform duration-300 hover:-translate-y-3 p-2">
            <IoLogoJavascript className="text-4xl md:text-5xl" />
          </div>
          <div className="flex space-x-4">
            <div className="border-2 rounded-lg bg-gray-950 hover:text-white transition-transform duration-300 hover:-translate-y-3 p-2">
              <FaReact className="text-4xl md:text-5xl text-blue-400" />
            </div>
            <div className="border-2 rounded-lg bg-gray-950 hover:text-white transition-transform duration-300 hover:-translate-y-3 p-2">
              <RiNextjsFill className="text-4xl md:text-5xl text-white" />
            </div>
            <div className="border-2 rounded-lg bg-slate-900 hover:text-white transition-transform duration-300 hover:-translate-y-3 p-2">
              <RiTailwindCssFill className="text-4xl md:text-5xl text-blue-400" />
            </div>
          </div>
        </div>
      </div>
      <p className="border-2 border-gray-200 mt-2 rounded-full mx-4 md:mx-20 shadow-md"></p>
    </div>
  );
};

export default Hero;
