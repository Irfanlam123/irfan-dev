import React from "react";
import Abot from "../About/abot.jpg";

const Aboutsec = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center mt-12 md:mt-24 space-y-10 md:space-y-0 md:space-x-8 lg:space-x-32 px-4 md:px-12 lg:px-24">
      <div className="flex justify-center md:justify-start">
        <img className="h-64 w-64 md:h-80 md:w-80 lg:h-[300px] lg:w-[300px] rounded-3xl" src={Abot} alt="About" />
      </div>
      <div className="mt-8 md:mt-0 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl text-blue-500 font-bold">ABOUT ME</h2>
        <h1 className="text-3xl md:text-4xl text-slate-700 font-bold mt-4 md:mt-6 py-2">
          Front-end Developer <br />
          based in Delhi, India
        </h1>
        <p className="text-lg md:text-2xl font-medium mt-4 md:mt-6 text-gray-700">
          Hey, my name is Irfan, and I'm a Frontend Developer. My <br className="hidden md:block" /> passion
          is to create and develop a clean UI/UX for my users.
        </p>
        <p className="mt-4 md:mt-6 text-lg md:text-2xl font-medium text-gray-700">
          My main stack currently is React/Next.js in combination <br className="hidden md:block" /> with
          Tailwind CSS.
        </p>
        <div className="border-2 border-gray-300 mt-8 md:mt-16 rounded-full w-16 mx-auto"></div>
      </div>
    </section>
  );
};

export default Aboutsec;
