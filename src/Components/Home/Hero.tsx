import React from "react";
import { motion, Variants } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaDownload,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

import IMG from "../Home/chem.png";
import resume from "../../assets/Irfan_Resume.pdf";

/* =======================
   TYPES
======================= */
interface Service {
  title: string;
  description: string;
  icon: string;
}

interface TechItem {
  name: string;
  Icon: React.ComponentType<{ className?: string }>;
  hover: string;
}

/* =======================
   ANIMATIONS
======================= */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const scaleFade: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

/* =======================
   DATA
======================= */
const services: Service[] = [
  {
    title: "Modern UI Development",
    description:
      "Building clean, elegant, and user-focused interfaces using React, Tailwind CSS, and component-driven design.",
    icon: "🎨",
  },
  {
    title: "Responsive Web Apps",
    description:
      "Creating fully responsive applications optimized for desktop, tablet, and mobile devices.",
    icon: "📱",
  },
  {
    title: "API Integration",
    description:
      "Integrating REST APIs securely and efficiently to connect frontend applications with backend services.",
    icon: "🔗",
  },
  {
    title: "Performance & SEO",
    description:
      "Improving load time, accessibility, SEO, and overall user experience for production-ready applications.",
    icon: "⚡",
  },
];

const techStack: TechItem[] = [
  { name: "HTML5", Icon: FaHtml5, hover: "hover:text-orange-500" },
  { name: "CSS3", Icon: FaCss3Alt, hover: "hover:text-blue-500" },
  {
    name: "JavaScript",
    Icon: IoLogoJavascript,
    hover: "hover:text-yellow-400",
  },
  { name: "React", Icon: FaReact, hover: "hover:text-cyan-400" },
  { name: "Next.js", Icon: RiNextjsFill, hover: "hover:text-siteText/90" },
  {
    name: "Tailwind CSS",
    Icon: RiTailwindCssFill,
    hover: "hover:text-sky-400",
  },
];

/* =======================
   COMPONENT
======================= */
const Hero: React.FC = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section
        id="home"
        className="min-h-screen flex items-center bg-navy pt-28 pb-20 px-6"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* TEXT */}
            <motion.div
              className="lg:w-1/2 text-center lg:text-left"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-siteText mb-6">
                Full-Stack Developer <span className="inline-block">👋</span>
              </h1>

<p className="text-lg sm:text-xl text-siteText/85 max-w-2xl mx-auto lg:mx-0 mb-8">
                Fresher with real project experience. I build clean, scalable, and
                recruiter-friendly web applications using React, TypeScript, and Tailwind CSS.
              </p>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <motion.a
                  href={resume}
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-semibold text-white bg-accent shadow-lg hover:bg-accent/90 transition"
                >
                  <FaDownload />
                  Download Resume
                </motion.a>

                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-lg font-semibold border-2 border-accent text-accent hover:bg-accent hover:text-white transition"
                >
                  View Projects
                </motion.a>
              </div>

              {/* SOCIAL */}
              <div className="flex gap-6 justify-center lg:justify-start">
                <a
                  href="https://www.linkedin.com/in/irfan-alam-2034a922b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border-2 border-siteBorder rounded-full text-siteText hover:bg-accent hover:text-white transition"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a
                  href="https://github.com/Irfanlam123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border-2 border-siteBorder rounded-full text-siteText hover:bg-accent hover:text-white transition"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </motion.div>

            {/* IMAGE */}
            <motion.div
              className="lg:w-1/2 flex justify-center"
              initial="hidden"
              animate="visible"
              variants={scaleFade}
            >
              <div className="relative">
                <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-accent shadow-2xl">
                  <img
                    src={IMG}
                    alt="Irfan Alam"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -inset-6 rounded-full bg-accent/20 opacity-30 blur-3xl" />
              </div>
            </motion.div>
          </div>

          {/* TECH STACK */}
          <motion.div
            className="mt-20 text-center"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <h2 className="text-3xl font-bold text-siteText mb-8">
              Tech Stack
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              {techStack.map(({ Icon, name, hover }) => (
                <motion.div
                  key={name}
                  variants={fadeUp}
                  whileHover={{ scale: 1.15, y: -5 }}
                  className={`p-5 text-3xl rounded-xl bg-card text-siteText shadow-md border border-siteBorder ${hover}`}
                  title={name}
                >
                  <Icon />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="bg-navy py-24 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-siteText mb-4">
              Services
            </h2>
            <p className="text-lg text-siteText/80 max-w-3xl mx-auto">
              I help businesses and startups build high-quality web applications
              with modern technologies and best practices.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={fadeUp}
                className="bg-card border border-siteBorder rounded-2xl p-8 shadow-card hover:shadow-md transition"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-siteText mb-2">
                  {service.title}
                </h3>
                <p className="text-siteText/80 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;
