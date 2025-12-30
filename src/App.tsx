import React from "react";
import Navbar from "./Components/Nav";
import Hero from "./Components/Home";
import Aboutsec from "./Components/About";
import Experience from "./Components/Experience/Experience";
import Now from "./Components/Now/Now";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Aboutsec />
      <Experience />
      <Now />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
