import React from "react";
import Stick from "../Projects/Sticky.png"; // Ensure this path is correct

const projects = [

  {
    title: "Sticky Note App",
    link: "https://sikh-lo-nextjs.vercel.app/",
    image: Stick,
  },
  {
    title: "Weather App",
    link: "https://weather-app-example.com", // Replace with actual project link
    image: "https://via.placeholder.com/300/00f/fff?text=Weather+App", // Placeholder image
  },
  {
    title: "Portfolio Website",
    link: "https://portfolio-example.com", // Replace with actual project link
    image: "https://via.placeholder.com/300/0f0/fff?text=Portfolio+Website", // Placeholder image
  },
  {
    title: "Chat Application",
    link: "https://chat-app-example.com", // Replace with actual project link
    image: "https://via.placeholder.com/300/f00/fff?text=Chat+Application", // Placeholder image
  },
  {
    title: "E-commerce Store",
    link: "https://ecommerce-example.com", // Replace with actual project link
    image: "https://via.placeholder.com/300/ff0/000?text=E-commerce+Store", // Placeholder image
  },
  {
    title: "Note Taking App",
    link: "https://note-taking-example.com", // Replace with actual project link
    image: "https://via.placeholder.com/300/f0f/000?text=Note+Taking+App", // Placeholder image
  },
];

const ProjectCard = ({ title, link, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl duration-300 flex flex-col">
      {image && (
        <div className="relative flex-grow">
          <img className="h-48 w-full object-cover" src={image} alt={title} />
        </div>
      )}
      <div className="p-6 flex-grow flex flex-col justify-between text-center">
        <a
          className="text-lg md:text-2xl font-semibold text-blue-600 hover:text-blue-800 transition duration-200"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {title}
        </a>
        {image && (
          <a
            className="mt-4 inline-block bg-blue-600 text-white text-lg py-2 px-4 rounded-full transition-transform transform hover:scale-105"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Click me
          </a>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="bg-gray-100 py-16 px-4 md:px-12 lg:px-52">
      <h1 className="flex justify-center text-2xl md:text-3xl font-bold text-blue-500 mb-8">
        PROJECTS
      </h1>
      <div className="bg-white p-8 shadow-lg rounded-lg">
        <h2 className="flex justify-center mt-24 md:mt-48 text-2xl md:text-4xl text-gray-700 font-semibold mb-8">
          New Projects Coming Soon...🤠
        </h2>
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-8 mt-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
