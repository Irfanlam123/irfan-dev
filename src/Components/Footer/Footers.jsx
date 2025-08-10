import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Footers = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 px-6 sm:px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          
          {/* Copyright and Info */}
          <div className="text-center md:text-left">
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              Irfan Alam
            </h3>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 font-medium">
              Frontend Developer | React Specialist | UI Enthusiast
            </p>
            <p className="text-gray-400 text-base">
              © {new Date().getFullYear()} All Rights Reserved
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex space-x-8">
              <a
                href="https://www.linkedin.com/in/irfan-alam-2034a922b/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                aria-label="LinkedIn"
              >
                <div className="absolute -inset-2 bg-blue-600 rounded-full blur opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="w-14 h-14 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 group-hover:border-blue-400 transition-all duration-500">
                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    className="text-3xl text-white group-hover:text-blue-400 transition-colors duration-500"
                  />
                </div>
              </a>
              <a
                href="https://github.com/Irfanlam123"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                aria-label="GitHub"
              >
                <div className="absolute -inset-2 bg-gray-600 rounded-full blur opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="w-14 h-14 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 group-hover:border-gray-300 transition-all duration-500">
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="text-3xl text-white group-hover:text-gray-300 transition-colors duration-500"
                  />
                </div>
              </a>
              <a
                href="mailto:irfanalam010202@gmail.com"
                className="group relative"
                aria-label="Email"
              >
                <div className="absolute -inset-2 bg-red-500 rounded-full blur opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="w-14 h-14 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 group-hover:border-red-400 transition-all duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white group-hover:text-red-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </a>
            </div>
            
            {/* Contact Info */}
            <div className="text-center md:text-right">
              <p className="text-lg text-gray-300 mb-2">📍 Delhi, India</p>
              <a 
                href="mailto:irfanalam010202@gmail.com" 
                className="text-xl text-blue-400 hover:text-blue-300 font-medium transition-colors"
              >
                irfanalam010202@gmail.com
              </a>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="h-0.5 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent my-12"></div>
        
        {/* Footer Note */}
        <div className="text-center">
          <p className="text-gray-500 text-sm sm:text-base">
            Crafted with <span className="text-red-500">❤️</span> using <span className="font-semibold text-blue-400">React</span> and <span className="font-semibold text-cyan-400">Tailwind CSS</span>
          </p>
          <p className="text-gray-500 text-sm sm:text-base mt-2">
            Designed to deliver exceptional digital experiences
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footers;