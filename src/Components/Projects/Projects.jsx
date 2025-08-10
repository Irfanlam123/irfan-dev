import React from "react";
import Stick from "../Projects/Sticky.png";

const projects = [
  {
    title: "Woodcraft Creations",
    description: "An e-commerce platform for handmade woodcraft products featuring custom order functionality, product galleries, and secure checkout.",
    link: "https://wood-craft-p2o4.vercel.app/",
    image: "https://images.unsplash.com/photo-1602872030490-4a484a7b3ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    technologies: ["Next.js", "Sanity CMS", "Stripe", "Tailwind CSS"],
    accentColor: "from-amber-600 to-amber-800"
  },
  {
    title: "Amazon Clone",
    description: "A functional Amazon clone with product listings, shopping cart, and user authentication features.",
    link: "https://amazon-clone-ten-lake-68.vercel.app/",
    image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    technologies: ["HTML", "CSS", "JavaScript", "UI/UX"],
    accentColor: "from-yellow-400 to-orange-500"
  },
  {
    title: "Sticky Note App",
    description: "A modern note-taking application with drag-and-drop functionality and real-time updates built with Next.js and Firebase.",
    link: "https://sikh-lo-nextjs.vercel.app/",
    image: Stick,
    technologies: ["Next.js", "Firebase", "Tailwind CSS", "React DnD"],
    accentColor: "from-purple-500 to-pink-500"
  }
];

const ProjectCard = ({ title, description, link, image, technologies, accentColor, isEven }) => {
  return (
    <div className={`min-h-screen flex flex-col lg:flex-row items-center justify-center p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24 ${isEven ? 'bg-gray-50' : 'bg-white'}`}>
      {/* Image Section - Alternates sides based on isEven */}
      <div className={`w-full lg:w-1/2 ${isEven ? 'lg:order-2' : 'lg:order-1'} mb-8 lg:mb-0`}>
        <div className="relative group overflow-hidden rounded-3xl shadow-2xl transform transition-all duration-500 hover:shadow-3xl">
          <img 
            className="w-full h-auto object-cover rounded-3xl transition-transform duration-700 group-hover:scale-105" 
            src={image} 
            alt={title} 
          />
          <div className={`absolute inset-0 bg-gradient-to-br ${accentColor} opacity-20 rounded-3xl group-hover:opacity-30 transition-opacity duration-500`}></div>
        </div>
      </div>

      {/* Content Section */}
      <div className={`w-full lg:w-1/2 ${isEven ? 'lg:order-1 lg:pr-16' : 'lg:order-2 lg:pl-16'}`}>
        <div className="max-w-lg mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 leading-relaxed">
            {description}
          </p>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Built With:</h3>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-block px-8 py-3 text-lg font-semibold text-white rounded-full bg-gradient-to-r ${accentColor} shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl`}
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="w-full overflow-hidden">
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            My <span className="text-blue-600">Projects</span>
          </h1>
          <div className="w-24 h-2 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mx-auto"></div>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of my featured projects. Each one was built to solve specific problems and showcase different skills.
          </p>
        </div>

        {projects.map((project, index) => (
          <ProjectCard 
            key={index}
            {...project}
            isEven={index % 2 === 0}
          />
        ))}

        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
          <div className="max-w-2xl text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              More Projects Coming Soon!
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              I'm constantly working on new projects and improving my skills. Stay tuned for more exciting work!
            </p>
            <div className="text-6xl animate-bounce">🚀</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;