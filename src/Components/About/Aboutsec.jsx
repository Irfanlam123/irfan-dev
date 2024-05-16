import React from "react";
import Abot from "../About/abot.jpg";
const Aboutsec = () => {
  return (
    <section className="flex mt-72 space-x-32">
      <div>
        {" "}
        <img className="h-[300px] rounded-3xl " src={Abot} alt="" />
      </div>
      <div className="mt-20">
        <h2 className="text-3xl text-blue-500 font-bold">ABOUT ME</h2>
        <h1 className="text-4xl text-slate-700 font-bold mt-6 py-2 ">
          Front-end Developer <br />
          based in Delhi, &nbsp; India{" "}
        </h1>
        <p className="text-2xl font-medium mt-6 text-gray-700">
          Hey, my name is Irfan, and I'm a Frontend Developer. My <br /> passion
          is to create and develop a clean UI/UX for my users.
        </p>
        <p className="mt-6 text-2xl font-medium text-gray-700 ">
          My main stack currently is React/Next.js in combination <br /> with
          Tailwind CSS.
        </p>
        <p className="border-2 border-gray-300 mt-16 rounded-full"></p>
        <div className=""></div>
      </div>
    </section>
  );
};

export default Aboutsec;
