import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Footers = () => {
  return (
    <div>
      <div className=" flex ml-52 p-16">
        <p className="font-bold text-3xl text-gray-50  ">
          Copyright © 2024. All rights are reserved
        </p>
        <ul className="flex space-x-14 ml-96">
          <li>
            <a
              href="https://www.linkedin.com/in/irfan-alam-2034a922b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedinIn}
                size="2x"
                className="text-gray-200 border-2 border-gray-200 rounded-lg px-1 py-1 "
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
                className="text-gray-200 border-2 border-gray-200 rounded-lg px-1 py-1"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footers;
