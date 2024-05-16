import React from "react";
import Navbar from "./Components/Nav/Navbar";
import { Route, Router, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
Routes;
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Project" element={<Project />} />
        <Route path="Contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
