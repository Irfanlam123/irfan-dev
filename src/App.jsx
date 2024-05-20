import React from "react";
import Navbar from "./Components/Nav/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="project">
        <Project />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default App;
