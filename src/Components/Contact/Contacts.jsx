import React from "react";
import { CiLocationArrow1 } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";

const Contacts = () => {
  return (
    <div className="px-4 md:px-12 lg:px-52 py-16 bg-gradient-to-r from-blue-50 to-blue-100">
      <p className="text-center text-2xl md:text-3xl font-bold text-blue-700">
        CONTACT
      </p>
      <h1 className="text-center text-2xl md:text-4xl font-bold mt-5 py-2 text-gray-700">
        Don't be shy! Hit me up! 👇
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center mt-12 space-y-10 md:space-y-0 md:space-x-12">
        <div className="flex flex-col items-center text-center md:text-left">
          <p className="text-6xl font-bold rounded-full shadow-2xl bg-white transition transform hover:scale-105 hover:shadow-3xl">
            <CiLocationArrow1 className="border-2 border-gray-300 rounded-full text-blue-500 font-bold px-2 py-2" />
          </p>
          <div className="mt-6">
            <p className="text-xl md:text-3xl font-semibold text-gray-800">
              Location
            </p>
            <h4 className="text-lg md:text-2xl text-blue-600">
              <a href="/">Delhi, India</a>
            </h4>
          </div>
        </div>
        <div className="flex flex-col items-center text-center md:text-left">
          <p className="text-6xl font-bold rounded-full shadow-2xl bg-white transition transform hover:scale-105 hover:shadow-3xl">
            <TfiEmail className="border-2 border-gray-300 rounded-full text-blue-500 font-bold px-2 py-2" />
          </p>
          <div className="mt-6">
            <p className="text-xl md:text-3xl font-semibold text-gray-800">
              Email
            </p>
            <h4 className="text-lg md:text-2xl text-blue-600">
              <a href="mailto:irfanalam010202@gmail.com">
                irfanalam010202@gmail.com
              </a>
            </h4>
          </div>
        </div>
      </div>
      <div className="border-t-2 border-gray-300 mx-4 md:mx-12 lg:mx-52 mt-12"></div>
    </div>
  );
};

export default Contacts;
