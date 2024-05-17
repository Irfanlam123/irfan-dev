import React from "react";

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
        <div className="flex flex-col items-center space-y-8 mt-10">
          <div className="text-center">
            <a
              className="text-lg md:text-2xl font-bold"
              href="https://expense-tracker-app-blue-eight.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Here is my Project{" "}
              <button className="bg-black text-gray-50 py-2 px-4 rounded-full transition-transform transform hover:scale-105 ml-2">
                Click me
              </button>
            </a>
          </div>
          <div className="text-center">
            <a
              className="text-lg md:text-2xl font-bold"
              href="https://login-popup.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Here is my Project{" "}
              <button className="bg-black text-gray-50 py-2 px-4 rounded-full transition-transform transform hover:scale-105 ml-2">
                Click me
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
