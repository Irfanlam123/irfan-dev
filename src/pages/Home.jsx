import React from "react";
import Hero from "../Components/Home/Hero";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <About />
      <Project />
      <Contact />
     <Footer/>
    </div>
  );
};

export default Home;
