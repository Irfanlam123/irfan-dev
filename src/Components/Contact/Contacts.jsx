import React from "react";
import { CiLocationArrow1 } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Contacts = () => {
  return (
    <section id="contact" className="px-6 sm:px-8 md:px-12 lg:px-24 py-20 bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Section Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <p className="text-blue-600 font-semibold text-lg mb-4">GET IN TOUCH</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-6">
          Let's Build Something <span className="text-blue-600">Amazing</span> Together
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Whether you have a project in mind or just want to say hello, I'd love to hear from you!
        </p>
      </div>

      {/* Contact Cards */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-6xl mx-auto">
        {/* Location Card */}
        <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
          <div className="p-8 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
              <CiLocationArrow1 className="text-3xl text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Location</h3>
            <p className="text-lg text-blue-600 font-medium">
              Delhi, India
            </p>
          </div>
        </div>

        {/* Email Card */}
        <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
          <div className="p-8 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
              <TfiEmail className="text-3xl text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Email</h3>
            <a 
              href="mailto:irfanalam010202@gmail.com" 
              className="text-lg text-blue-600 font-medium hover:text-blue-800 transition-colors"
            >
              irfanalam010202@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-6 mt-16">
        <a
          href="https://www.linkedin.com/in/irfan-alam-2034a922b/"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative"
          aria-label="LinkedIn"
        >
          <div className="absolute -inset-1 bg-blue-600 rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
          <div className="w-14 h-14 flex items-center justify-center bg-white rounded-full shadow-lg group-hover:bg-blue-50 transition-colors">
            <FaLinkedinIn className="text-2xl text-blue-600 group-hover:text-blue-700 transition-colors" />
          </div>
        </a>
        <a
          href="https://github.com/Irfanlam123"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative"
          aria-label="GitHub"
        >
          <div className="absolute -inset-1 bg-gray-600 rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
          <div className="w-14 h-14 flex items-center justify-center bg-white rounded-full shadow-lg group-hover:bg-gray-50 transition-colors">
            <FaGithub className="text-2xl text-gray-700 group-hover:text-gray-900 transition-colors" />
          </div>
        </a>
      </div>

      {/* Divider */}
      <div className="max-w-4xl mx-auto mt-16">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      </div>
    </section>
  );
};

export default Contacts;