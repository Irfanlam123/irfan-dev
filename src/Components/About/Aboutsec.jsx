import React from "react";
import { motion } from "framer-motion";
import Abot from "../About/abot.jpg";

const Aboutsec = () => {
  const aboutData = {
    title: "About Me",
    subtitle: "GET TO KNOW ME",
    location: "Delhi, India 📍",
    name: "Irfan",
    role: "Full Stack Developer",
    image: Abot,
    bio: [
      "Hello! I'm Irfan, a passionate full stack developer with a love for creating beautiful, functional, and user-friendly digital experiences.",
      "My expertise lies in modern web technologies with a strong focus on React.js, Next.js, and Tailwind CSS.",
      "When I'm not coding, you can find me exploring new design trends or contributing to open-source projects.",
    ],
    skills: {
      Languages: ["JavaScript", "Golang", "HTML5", "CSS3"],
      "Frameworks & Libraries": ["React", "Next.js", "Node.js", "Express.js"],
      Databases: ["MongoDB", "PostgreSQL", "MySQL"],
      "Tools & Technologies": ["Git", "GitHub", "Postman", "Docker", "Microservices"],
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, duration: 0.8 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const skillColors = {
    Languages: "blue",
    "Frameworks & Libraries": "purple",
    Databases: "green",
    "Tools & Technologies": "amber",
  };

  return (
    <section
      id="about"
      className="w-full px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-0 md:pt-8 pb-20 md:pb-28 text-gray-300"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <motion.span
              className="inline-block px-4 py-2 text-sm font-semibold tracking-wider text-blue-400 bg-blue-900/30 rounded-full mb-4"
              whileHover={{ scale: 1.05 }}
            >
              {aboutData.subtitle}
            </motion.span>
            <motion.h2
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4"
              variants={itemVariants}
            >
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Me
              </span>
            </motion.h2>
            <motion.div
              className="mx-auto h-1 w-24 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
              variants={itemVariants}
            />
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
            {/* Image Section */}
            <motion.div
              className="relative w-full max-w-sm lg:max-w-md"
              variants={itemVariants}
            >
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl opacity-20 blur-xl -z-10"
                animate={{ opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="overflow-hidden rounded-2xl shadow-2xl border-2 border-gray-700"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  className="w-full h-auto object-cover"
                  src={aboutData.image}
                  alt={`${aboutData.name} - ${aboutData.role}`}
                  loading="lazy"
                />
              </motion.div>
            </motion.div>

            {/* Content Section */}
            <motion.div className="w-full max-w-2xl" variants={containerVariants}>
              <motion.h3
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-6"
                variants={itemVariants}
              >
                A dedicated{" "}
                <span className="text-blue-400">{aboutData.role}</span> based in{" "}
                {aboutData.location}
              </motion.h3>

              <motion.div
                className="space-y-4 text-gray-400 mb-8"
                variants={itemVariants}
              >
                {aboutData.bio.map((paragraph, idx) => (
                  <p key={idx} className="text-base sm:text-lg leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </motion.div>

              {/* Skills Section */}
              <motion.div className="space-y-6" variants={containerVariants}>
                {Object.entries(aboutData.skills).map(([category, skillList]) => (
                  <motion.div key={category} variants={itemVariants}>
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                      <span
                        className={`w-3 h-3 bg-${skillColors[category]}-400 rounded-full mr-3`}
                      ></span>
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <motion.span
                          key={skill}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className={`px-3 py-2 text-sm font-medium text-${skillColors[category]}-300 bg-${skillColors[category]}-900/30 rounded-lg transition-all duration-300 border border-${skillColors[category]}-800/50`}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Aboutsec;
