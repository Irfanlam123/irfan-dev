import React from "react";
import Stick from "../Projects/Sticky.png";

const Projects = () => {
  return (
    <div className="bg-gray-100 py-16 px-4 md:px-12 lg:px-52">
      <p className="flex justify-center text-2xl md:text-3xl font-bold text-blue-500 mb-8">
        PROJECTS
      </p>
      <div className="bg-white p-8 shadow-lg rounded-lg">
        <h2 className="flex justify-center mt-24 md:mt-48 text-2xl md:text-4xl text-gray-700 font-semibold mb-8">
          New Projects Coming Soon...🤠
        </h2>
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-8 mt-10">
          <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/3 hover:shadow-xl transition-shadow duration-300">
            <div className="text-center mb-4">
              <a
                className="text-lg md:text-2xl font-bold text-blue-600"
                href="https://expense-tracker-app-blue-eight.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Expense Tracker
              </a>
            </div>
            <div className="flex justify-center">
              <a
                href="https://expense-tracker-app-blue-eight.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-blue-600 text-white text-xl py-2 px-4 rounded-full transition-transform transform hover:scale-105">
                  Click me
                </button>
              </a>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/3 hover:shadow-xl transition-shadow duration-300">
            <div className="text-center mb-4">
              <a
                className="text-lg md:text-2xl font-bold text-blue-600"
                href="https://login-popup.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Login Popup
              </a>
            </div>
            <div className="flex justify-center">
              <a
                href="https://login-popup.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-blue-600 text-white text-xl py-2 px-4 rounded-full transition-transform transform hover:scale-105">
                  Click me
                </button>
              </a>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/3 hover:shadow-xl transition-shadow duration-300">
            <div className="relative text-center mb-4">
              <img
                className="h-48 w-full object-cover rounded-lg"
                src={Stick}
                alt="Sticky Note App"
              />
              <a
                className="absolute inset-0 flex items-center justify-center"
                href="https://sikh-lo-nextjs.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-blue-600 text-white text-xl py-2 px-4 rounded-full transition-transform transform hover:scale-105">
                  Click me
                </button>
              </a>
            </div>
            <div className="text-center">
              <a
                className="text-lg md:text-2xl font-bold text-blue-600"
                href="https://sikh-lo-nextjs.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sticky Note App
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
