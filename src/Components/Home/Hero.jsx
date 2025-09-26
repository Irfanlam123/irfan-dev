import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FaHtml5, FaCss3Alt, FaReact, FaDownload } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";
import IMG from "../Home/chem.png";

const Hero = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.2 } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const services = [
    {
      title: "UI/UX Design",
      description:
        "Designing clean, modern and responsive interfaces that enhance user experience and engagement.",
      icon: "🎨",
    },
    {
      title: "Responsive Development",
      description:
        "Building fully responsive web applications optimized for all devices using React, Next.js and Tailwind.",
      icon: "📱",
    },
    {
      title: "API Integration",
      description:
        "Seamlessly integrating RESTful and GraphQL APIs to connect frontend with backend services.",
      icon: "🔗",
    },
    {
      title: "Performance Optimization",
      description:
        "Optimizing applications for speed, SEO, accessibility and smooth user interactions.",
      icon: "⚡",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white pt-28 pb-20"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
            {/* Text */}
            <motion.div
              className="text-center lg:text-left lg:w-1/2"
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
                Frontend{" "}
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
                  whileHover={{ scale: 1.05 }}
                >
                  Developer
                </motion.span>{" "}
                <motion.span
                  className="inline-block ml-2"
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  👋
                </motion.span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
                Hi, I'm <span className="font-semibold text-white">Irfan Alam</span>, a
                passionate Frontend Developer based in Delhi, India.{" "}
                <motion.span
                  className="text-blue-400 inline-block ml-1"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ☺
                </motion.span>
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <motion.a
                  href=".\src\assets\Irfan-Resume.pdf"
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2 transition-all duration-300"
                >
                  <FaDownload className="text-sm" />
                  Download CV
                </motion.a>
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-gray-600 text-gray-300 font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:border-blue-500 hover:text-white"
                >
                  View Projects
                </motion.a>
              </div>

              {/* Social Icons */}
              <div className="flex justify-center lg:justify-start gap-6">
                <motion.a
                  href="https://www.linkedin.com/in/irfan-alam-2034a922b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    size="lg"
                    className="border-2 border-gray-600 rounded-full p-3 text-gray-300 hover:text-blue-400 hover:border-blue-400 transition-all duration-300"
                  />
                </motion.a>
                <motion.a
                  href="https://github.com/Irfanlam123"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    size="lg"
                    className="border-2 border-gray-600 rounded-full p-3 text-gray-300 hover:text-white hover:border-white transition-all duration-300"
                  />
                </motion.a>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              className="lg:w-1/2 flex justify-center"
              initial="hidden"
              animate="visible"
              variants={imageVariants}
            >
              <div className="relative group">
                <motion.div
                  className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-r from-blue-500 to-purple-600 p-1 shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src={IMG}
                    alt="Irfan Alam - Frontend Developer"
                    className="w-full h-full rounded-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </motion.div>
                <div className="absolute -inset-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500"></div>
              </div>
            </motion.div>
          </div>

          {/* Tech Stack */}
          <motion.div
            className="max-w-5xl mx-auto mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-8">Tech Stack</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { Icon: FaHtml5, hover: "hover:text-orange-500", name: "HTML5" },
                { Icon: FaCss3Alt, hover: "hover:text-blue-500", name: "CSS3" },
                { Icon: IoLogoJavascript, hover: "hover:text-yellow-500", name: "JavaScript" },
                { Icon: FaReact, hover: "hover:text-cyan-400", name: "React" },
                { Icon: RiNextjsFill, hover: "hover:text-gray-300", name: "Next.js" },
                { Icon: RiTailwindCssFill, hover: "hover:text-sky-400", name: "Tailwind" },
              ].map(({ Icon, hover, name }, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-4 text-3xl rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 text-white shadow-lg transition-all duration-300 ${hover} relative group`}
                  title={name}
                >
                  <Icon />
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20 px-4 sm:px-6 lg:px-8 text-white"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Services
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              I specialize in creating modern, responsive, and user-friendly web
              applications with focus on performance and scalability.
            </p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
              >
                <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-700 hover:shadow-xl transition-all duration-300 group-hover:border-blue-400">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-blue-500 group-hover:to-purple-600 transition-all duration-300">
                      <span className="text-2xl">{service.icon}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-center">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;
