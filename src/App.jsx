import React from "react";
import Navbar from "./Components/Nav/Navbar";
import Hero from "./Components/Home/Hero";
import Aboutsec from "./Components/About/Aboutsec";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contacts";


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Aboutsec />
      <Projects />
      <Contact />

    
    </div>
  );
};

export default App;
