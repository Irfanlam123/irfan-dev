import React from "react";
import Abot from "../About/abot.jpg";

const Aboutsec = () => {
  // Organized skills data
  const skills = {
    languages: ["JavaScript", "Golang", "HTML5", "CSS3"],
    frameworks: ["React", "Next.js", "Node.js", "Express.js"],
    databases: ["MongoDB", "PostgreSQL", "MySQL"],
    tools: ["Git", "GitHub", "Postman", "Docker", "Microservices"],
  };

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-blue-50 py-12 md:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Compact Section Header */}
        <div className="text-center mb-8 sm:mb-10">
          <span className="inline-block px-3 py-1 text-xs sm:text-sm font-semibold tracking-wider text-blue-600 bg-blue-100 rounded-full mb-3 transform transition-all hover:scale-105">
            GET TO KNOW ME
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            About <span className="text-blue-600">Me</span>
          </h2>
          <div className="mx-auto h-1 w-20 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 xl:gap-16">
          {/* Image Section */}
          <div className="relative w-full max-w-sm lg:max-w-md group">
            <div className="absolute -inset-3 -z-10 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-3xl opacity-20 blur-lg group-hover:opacity-30 transition-all duration-500"></div>
            <div className="overflow-hidden rounded-2xl shadow-xl border-4 border-white transform transition-all duration-500 hover:scale-[1.02] group-hover:shadow-2xl">
              <img 
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                src={Abot} 
                alt="Irfan - Frontend Developer" 
                loading="lazy"
              />
            </div>
            {/* Floating elements */}
            <div className="absolute -bottom-4 -left-4 w-12 h-12 rounded-full bg-blue-100 opacity-70 animate-float1"></div>
            <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-blue-200 opacity-50 animate-float2"></div>
          </div>

          {/* Content Section */}
          <div className="w-full max-w-2xl">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-4">
              A dedicated <span className="text-blue-600">Full Stack Developer</span> based in Delhi, India 📍
            </h3>
            
            <div className="space-y-4">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Hello! I'm <span className="font-semibold text-blue-600">Irfan</span>, a passionate full stack developer with a love for creating beautiful, functional, and user-friendly digital experiences.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                My expertise lies in modern web technologies with a strong focus on <span className="font-semibold text-blue-600">React.js</span>, <span className="font-semibold text-blue-600">Next.js</span>, and <span className="font-semibold text-blue-600">Tailwind CSS</span>.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                When I'm not coding, you can find me exploring new design trends or contributing to open-source projects.
              </p>
            </div>

            {/* Organized Skills Section */}
            <div className="mt-8 space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                  Languages
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 text-xs sm:text-sm font-medium text-blue-700 bg-blue-100 rounded-full transition-all hover:bg-blue-200 hover:text-blue-800 hover:scale-105"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
                  Frameworks & Libraries
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.frameworks.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 text-xs sm:text-sm font-medium text-purple-700 bg-purple-100 rounded-full transition-all hover:bg-purple-200 hover:text-purple-800 hover:scale-105"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                  Databases
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.databases.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 text-xs sm:text-sm font-medium text-green-700 bg-green-100 rounded-full transition-all hover:bg-green-200 hover:text-green-800 hover:scale-105"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-amber-500 rounded-full mr-2"></span>
                  Tools & Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 text-xs sm:text-sm font-medium text-amber-700 bg-amber-100 rounded-full transition-all hover:bg-amber-200 hover:text-amber-800 hover:scale-105"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes float1 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(3deg); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(8px) rotate(-3deg); }
        }
        .animate-float1 {
          animation: float1 6s ease-in-out infinite;
        }
        .animate-float2 {
          animation: float2 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Aboutsec;