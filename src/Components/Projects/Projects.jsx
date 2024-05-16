import React from "react";

const Projects = () => {
  return (
    <div className="ml-52">
      <p className="flex justify-center text-3xl font-bold text-blue-500">
        PROJECTS
      </p>
      <div className="mb-10">
        {" "}
        <h2 className="flex justify-center mt-72 text-4xl text-gray-700 font-semibold ">
          New Projects Comming Soon...🤠
        </h2>
        <p className="flex justify-center p-10">
          <a
            className="text-2xl font-bold"
            href="https://expense-tracker-app-blue-eight.vercel.app/"
          >
            Here is my Project{" "}
            <button className="bg-black text-gray-50 py-1 px-2 rounded-full">
              Click me
            </button>
          </a>
        </p>
        <p className="flex justify-center p-10">
          <a
            className="text-2xl font-bold"
            href="https://login-popup.vercel.app/"
          >
            Here is my Project{" "}
            <button className="bg-black text-gray-50 py-1 px-2 rounded-full">
              Click me
            </button>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Projects;
