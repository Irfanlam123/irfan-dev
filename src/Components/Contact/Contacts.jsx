import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const footerData = {
  name: "Irfan Alam",
  role: "Frontend Developer | React Specialist | UI Enthusiast",
  location: "Delhi, India",
  email: "irfanalam010202@gmail.com",
  socials: [
    { icon: faLinkedinIn, link: "https://www.linkedin.com/in/irfan-alam-2034a922b/", color: "blue" },
    { icon: faGithub, link: "https://github.com/Irfanlam123", color: "gray" },
  ],
};

const Contact = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 py-16 px-6 sm:px-8 md:px-12 lg:px-24 text-gray-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">

        {/* Name & Role */}
        <div className="text-center md:text-left">
          <h3 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
            {footerData.name}
          </h3>
          <p className="text-lg sm:text-xl text-gray-400 mb-6">{footerData.role}</p>
          <p className="text-gray-500 text-base">© {new Date().getFullYear()} All Rights Reserved</p>
        </div>

        {/* Social Links & Contact */}
        <div className="flex flex-col items-center md:items-end gap-6">
          <div className="flex space-x-6">
            {footerData.socials.map((social, idx) => (
              <a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                aria-label={social.icon.iconName}
              >
                <div className="absolute -inset-2 bg-gradient-to-tr from-blue-500/50 to-purple-500/50 rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="w-14 h-14 flex items-center justify-center bg-gray-900/50 backdrop-blur-md rounded-full border border-gray-700 group-hover:border-blue-400 transition-all duration-500 shadow-lg">
                  <FontAwesomeIcon
                    icon={social.icon}
                    className={`text-3xl text-white group-hover:text-blue-400 transition-colors duration-500`}
                  />
                </div>
              </a>
            ))}
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right mt-4">
            <p className="text-lg text-gray-400 mb-1">📍 {footerData.location}</p>
            <a
              href={`mailto:${footerData.email}`}
              className="text-blue-400 font-medium text-lg hover:text-blue-300 transition-colors"
            >
              {footerData.email}
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent my-12"></div>

      {/* Footer Note */}
      <div className="text-center text-gray-400 text-sm sm:text-base">
        Crafted with <span className="text-red-500">❤️</span> using{" "}
        <span className="text-blue-400 font-semibold">React</span> &{" "}
        <span className="text-purple-400 font-semibold">Tailwind CSS</span>
      </div>
    </footer>
  );
};

export default Contact;
