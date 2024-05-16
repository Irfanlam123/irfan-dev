import React from "react";
import { CiLocationArrow1 } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";

const Contacts = () => {
  return (
    <div>
      <p className="text-3xl font-bold text-blue-500">CONTACT</p>
      <h1 className="text-4xl font-bold mt-5 py-2">
        Don't be shy! Hit me up! 👇
      </h1>
      <div className="flex mt-6">
        <div className="flex space-x-6">
          <p className="text-6xl font-bold  rounded-full shadow-2xl bg-white transition transform hover:scale-105 hover:shadow-3xl">
            <CiLocationArrow1 className="border-2 border-gray-300 rounded-full text-blue-500 font-bold px-2 py-2" />
          </p>
          <div className="flex flex-col  ">
            <p className="text-3xl font-semibold">Location</p>
            <h4 className="text-2xl text-blue-500">
              <a href="/">Delhi, India</a>
            </h4>
          </div>
          <div className="flex ">
            <p className="text-6xl font-bold  rounded-full shadow-2xl bg-white transition transform hover:scale-105 hover:shadow-3xl">
              <TfiEmail className="border-2 border-gray-300 rounded-full text-blue-500 font-bold " />
            </p>
            <div className="flex ">
              <p>
                <a href="" className="text-2xl font-sans text-blue-500 ml-10 ">
                  {" "}
                  irfanalam010202@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="border-2 border-gray-200 mr-44 mt-4 rounded-full"></p>
    </div>
  );
};

export default Contacts;
