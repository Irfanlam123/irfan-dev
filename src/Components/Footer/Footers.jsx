// Footers.jsx

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Footers = () => {
  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-900 py-8 px-4 md:px-12 lg:px-52">
      <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <p className="font-bold text-lg md:text-2xl text-gray-100">
          Copyright © 2024. All rights are reserved
        </p>
        <ul className="flex space-x-8 mt-4 md:mt-0">
          <li>
            <a
              href="https://www.linkedin.com/in/irfan-alam-2034a922b/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-105 transition transform"
            >
              <FontAwesomeIcon
                icon={faLinkedinIn}
                size="2x"
                className="text-gray-200 border-2 border-gray-200 rounded-lg p-2 hover:text-blue-400"
              />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Irfanlam123"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-105 transition transform"
            >
              <FontAwesomeIcon
                icon={faGithub}
                size="2x"
                className="text-gray-200 border-2 border-gray-200 rounded-lg p-2 hover:text-gray-400"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footers; // Ensure that you have a default export here
