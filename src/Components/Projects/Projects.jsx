import React, { useEffect } from "react";
import Stick from "../Projects/Sticky.png";

const projects = [
  {
    title: "Woodcraft Creations",
    description: "An e-commerce platform for handmade woodcraft products featuring custom order functionality, product galleries, and secure checkout.",
    link: "https://wood-craft-p2o4.vercel.app/",
    image: "https://images.unsplash.com/photo-1602872030490-4a484a7b3ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    technologies: ["Next.js", "Sanity CMS", "Stripe", "Tailwind CSS"],
    accentColor: "from-amber-600 to-amber-800",
    bgColor: "bg-amber-50"
  },
  {
    title: "Amazon Clone",
    description: "A functional Amazon clone with product listings, shopping cart, and user authentication features.",
    link: "https://amazon-clone-ten-lake-68.vercel.app/",
    image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    technologies: ["HTML", "CSS", "UI/UX"],
    accentColor: "from-yellow-400 to-orange-500",
    bgColor: "bg-orange-50"
  },
  {
    title: "Puja Booking System",
    description: "A comprehensive platform for booking Hindu religious ceremonies and pujas, with priest scheduling, samagri (ritual items) management, and donation system.",
    link: "https://divya-darhsanm.vercel.app/",
    image: "https://images.unsplash.com/photo-1662720868850-e60cefb03201?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG9vamF8ZW58MHx8MHx8fDA%3D",
    technologies: ["React", "Node.js", "MongoDB", "Payment Gateway", "Calendar Integration"],
    accentColor: "from-orange-500 to-yellow-500",
    bgColor: "bg-yellow-50"
  },
  {
    title: "Sticky Note App",
    description: "A modern note-taking application with drag-and-drop functionality and real-time updates built with Next.js and Firebase.",
    link: "https://sikh-lo-nextjs.vercel.app/",
    image: Stick,
    technologies: ["Next.js", "Firebase", "Tailwind CSS", "React DnD"],
    accentColor: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50"
  }
];

const ProjectCard = ({ title, description, link, image, technologies, accentColor, bgColor, isEven }) => {
  return (
    <div className={`min-h-screen flex flex-col lg:flex-row items-center justify-center p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24 ${bgColor} relative overflow-hidden animate-fadeIn`}>
      {/* Floating decorative elements */}
      <div className={`absolute -top-20 -left-20 w-40 h-40 rounded-full bg-gradient-to-br ${accentColor} opacity-10 blur-xl animate-float`}></div>
      <div className={`absolute -bottom-10 -right-10 w-64 h-64 rounded-full bg-gradient-to-br ${accentColor} opacity-10 blur-xl animate-float-reverse`}></div>
      
      {/* Image Section */}
      <div className={`w-full lg:w-1/2 ${isEven ? 'lg:order-2' : 'lg:order-1'} mb-8 lg:mb-0 z-10 transition-all duration-500 hover:scale-[1.01]`}>
        <div className="relative group overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500">
          <img 
            className="w-full h-auto object-cover rounded-3xl transition-transform duration-700 group-hover:scale-105" 
            src={image} 
            alt={title} 
          />
          <div className={`absolute inset-0 bg-gradient-to-br ${accentColor} opacity-20 rounded-3xl group-hover:opacity-30 transition-opacity duration-500`}></div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-3xl"></div>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative z-10 px-6 py-3 text-lg font-semibold text-white rounded-full bg-gradient-to-r ${accentColor} shadow-lg hover:scale-105 transition-transform duration-300`}
            >
              Live Preview
            </a>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className={`w-full lg:w-1/2 ${isEven ? 'lg:order-1 lg:pr-16' : 'lg:order-2 lg:pl-16'} z-10`}>
        <div className="max-w-lg mx-auto">
          <div className="hover:translate-x-1 transition-transform duration-300">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {title}
            </h2>
          </div>
          
          <p className="text-lg sm:text-xl text-gray-600 mb-6 leading-relaxed">
            {description}
          </p>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Built With:</h3>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-white text-gray-800 rounded-full text-sm font-medium shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300"
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
            className={`inline-block px-8 py-3 text-lg font-semibold text-white rounded-full bg-gradient-to-r ${accentColor} shadow-lg relative overflow-hidden group transition-all duration-300 hover:scale-105 hover:shadow-xl`}
          >
            <span className="relative z-10">View Project</span>
            <span className={`absolute inset-0 bg-gradient-to-r ${accentColor.split(' ').reverse().join(' ')} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></span>
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="w-full overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/4 left-10 w-32 h-32 rounded-full bg-blue-100 blur-3xl opacity-30 animate-pulse-slow"></div>
        <div className="absolute top-3/4 right-20 w-40 h-40 rounded-full bg-purple-100 blur-3xl opacity-30 animate-pulse-slow animation-delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-48 h-48 rounded-full bg-amber-100 blur-3xl opacity-30 animate-pulse-slow animation-delay-1500"></div>
      </div>

      <div className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 animate-fadeInUp">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Projects</span>
          </h1>
          
          <div className="flex justify-center animate-fadeInUp animation-delay-100">
            <div className="w-24 h-2 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
          </div>
          
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto animate-fadeInUp animation-delay-200">
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

        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 relative overflow-hidden">
          {/* Animated stars */}
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-white animate-twinkle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                opacity: Math.random() * 0.5 + 0.5,
                animationDelay: `${Math.random() * 3}s`
              }}
            ></div>
          ))}
          
          <div className="max-w-2xl text-center relative z-10 animate-fadeInUp">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              More Projects Coming Soon!
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              I'm constantly working on new projects and improving my skills. Stay tuned for more exciting work!
            </p>
            <div className="text-6xl animate-bounce">
              🚀
            </div>
          </div>
        </div>
      </div>

      {/* Global styles for animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fadeInUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }
        
        @keyframes float-reverse {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(20px) rotate(-5deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.05); opacity: 0.4; }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-float-reverse {
          animation: float-reverse 10s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        
        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }
        
        .animation-delay-100 {
          animation-delay: 100ms;
        }
        
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        
        .animation-delay-1000 {
          animation-delay: 1000ms;
        }
        
        .animation-delay-1500 {
          animation-delay: 1500ms;
        }
      `}</style>
    </section>
  );
};

export default Projects;