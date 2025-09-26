import React from "react";
import { motion } from "framer-motion";
import Food from "../../assets/food.png";
import Web from "../../assets/landing.png";
import Blog from "../../assets/blog.png";
const projects = [
  {
    title: "MERN Food Delivery App",
    description:
      "A full-stack food delivery application built with the MERN stack, featuring user authentication, restaurant menus, cart functionality, and order management.",
    link: "https://github.com/Irfanlam123/Mern-food-app",
    image: Food,
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS"],
    accentColor: "from-green-500 to-green-700",
  },
  {
    title: "Blog App",
    description:
      "A full-stack blog application where users can create, read, update, and delete blog posts with a modern and responsive UI.",
    link: "https://blog-app-weld-phi.vercel.app/",
    image: Blog,
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS"],
    accentColor: "from-purple-500 to-purple-700",
  },
  {
    title: "Web Animated",
    description:
      "A visually engaging landing page showcasing interactive animations, smooth scrolling effects, and responsive design, built to captivate users and improve UX.",
    link: "https://web-animated.vercel.app/",
    image: Web,
    technologies: ["React.js", "Framer Motion", "Tailwind CSS", "GSAP"],
    accentColor: "from-blue-500 to-blue-700",
  },
];


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

const ProjectCard = ({
  title,
  description,
  link,
  image,
  technologies,
  accentColor,
  isEven,
}) => {
  return (
    <motion.div
      className="flex flex-col lg:flex-row items-center justify-center py-16 px-6 md:px-12 lg:px-20 relative overflow-hidden"
      variants={itemVariants}
    >
      {/* Floating decoration */}
      <motion.div
        className={`absolute -top-20 -left-20 w-40 h-40 rounded-full bg-gradient-to-br ${accentColor} opacity-10 blur-2xl`}
        animate={{ opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className={`absolute -bottom-10 -right-10 w-64 h-64 rounded-full bg-gradient-to-br ${accentColor} opacity-10 blur-2xl`}
        animate={{ opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* Image */}
      <div
        className={`w-full lg:w-1/2 ${isEven ? "lg:order-2" : "lg:order-1"} mb-8 lg:mb-0 z-10`}
      >
        <motion.div
          className="relative group overflow-hidden rounded-2xl shadow-2xl border border-gray-700"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img
            className="w-full max-h-[350px] object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
            src={image}
            alt={title}
            loading="lazy"
          />
          <div
            className={`absolute inset-0 bg-gradient-to-br ${accentColor} opacity-20 rounded-2xl group-hover:opacity-30 transition-opacity duration-500`}
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-3 text-lg font-semibold text-white rounded-full bg-gradient-to-r ${accentColor} shadow-lg hover:scale-105 transition-transform duration-300`}
            >
              Live Preview
            </a>
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div
        className={`w-full lg:w-1/2 ${isEven ? "lg:order-1 lg:pr-12" : "lg:order-2 lg:pl-12"} z-10`}
      >
        <div className="max-w-lg mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
          <p className="text-lg text-gray-400 mb-6 leading-relaxed">{description}</p>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-3">Built With:</h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-4 py-2 bg-gray-800/70 text-gray-200 rounded-full text-sm font-medium shadow-sm border border-gray-700 transition-all"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-block px-8 py-3 text-lg font-semibold text-white rounded-full bg-gradient-to-r ${accentColor} shadow-lg transition-all hover:scale-105`}
          >
            View Project
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full overflow-hidden relative bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20 text-gray-300"
    >
      <div className="relative z-10 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-7xl mx-auto text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.span
            className="inline-block px-4 py-2 text-sm font-semibold tracking-wider text-blue-400 bg-blue-900/30 rounded-full mb-4"
            whileHover={{ scale: 1.05 }}
          >
            PORTFOLIO
          </motion.span>
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4"
            variants={itemVariants}
          >
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Projects
            </span>
          </motion.h1>
          <motion.div
            className="mx-auto h-1 w-24 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
            variants={itemVariants}
          />
          <motion.p
            className="mt-6 text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Here are some of my featured projects. Each one was built to solve
            specific problems and showcase different skills.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} isEven={index % 2 === 0} />
          ))}
        </motion.div>

        {/* Coming soon section */}
        <motion.div
          className="flex flex-col items-center justify-center py-20 bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-2xl mt-16 shadow-xl"
          variants={itemVariants}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            More Projects Coming Soon!
          </h2>
          <p className="text-xl text-gray-400 mb-6 max-w-xl text-center">
            I'm constantly working on new projects and improving my skills. Stay
            tuned for more exciting work!
          </p>
          <div className="text-6xl animate-bounce">🚀</div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
