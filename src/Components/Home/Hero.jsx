import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import IMG from "../Home/chem.png";

const Hero = () => {
  return (
    <div className="mt-72  ">
      <div className="flex text-2xl mt-40 space-x-72">
        <div className="ml-52">
          <div className="">
            <h1 className="text-8xl font-bold text-gray-700 ">
              Front-End React <br /> Developer{" "}
              <span className="text-7xl">👋</span>
            </h1>
          </div>
          <p className="space-y-2 text-gray-600 font-medium mt-8 text-2xl py-3">
            Hi, I'm Irfan Alam. A passionate Front-end React Developer <br />
            based in Delhi, India. <span className="text-4xl">☺</span>
          </p>
          <ul className="flex space-x-14 mt-10  ">
            <li>
              <a
                href="https://www.linkedin.com/in/irfan-alam-2034a922b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  size="2x"
                  className="text-gray-700 border-2 border-gray-700 rounded-lg px-2 py-1 "
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
        <div className=" border-2 border-gray-700 bg-gray-100">
          <img
            className="h-[350px]  rounded-full hover:animate-spin"
            src={IMG}
            alt="altbalaji"
          />
        </div>
      </div>

      <div className="ml-52  flex space-x-10">
        <h1 className=" font-bold text-3xl text-gray-700">Tech Stack </h1>
        <p className="h-14 border-l-2 border-gray-400"></p>
        <div>
          {" "}
          <p className="flex text-6xl space-x-4 ">
            <p
              className="border-2 rounded-lg bg-orange-500 hover-text  transition-transform
           duration-300 hover:-translate-y-3  "
            >
              <FaHtml5 />
            </p>{" "}
            <p
              className="border-2 rounded-lg bg-blue-400 hover-text  transition-transform
           duration-300 hover:-translate-y-3"
            >
              <FaCss3Alt />
            </p>{" "}
            <p
              className="text-black border-2 rounded-lg bg-yellow-400 hover-text  transition-transform
           duration-300 hover:-translate-y-3"
            >
              <IoLogoJavascript />
            </p>{" "}
            <div className="flex space-x-8">
              <p
                className="text-blue-400 border-2 space-x-5 ml-28 rounded-lg bg-gray-950 hover-text  transition-transform
           duration-300 hover:-translate-y-3"
              >
                <FaReact />
              </p>
              <p
                className="text-white border-2 rounded-lg bg-gray-950 hover-text  transition-transform
           duration-300 hover:-translate-y-3"
              >
                <RiNextjsFill />
              </p>
              <p
                className="text-blue-400 border-2 rounded-lg bg-slate-900 hover-text  transition-transform
           duration-300 hover:-translate-y-3"
              >
                <RiTailwindCssFill />
              </p>
            </div>{" "}
          </p>
        </div>{" "}
      </div>
      <p
        className="border-2 border-gray-200 mt-2 rounded-full mr-20 shadow-md
      ml-20"
      ></p>
    </div>
  );
};

export default Hero;
