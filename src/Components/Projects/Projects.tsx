import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import Food from "../../assets/food.png";
import Blog from "../../assets/blog.png";
import WhatsAppTool from "../../assets/wwtool.png";
import Viraam from "../../assets/viraam.png";
import Vijan from "../../assets/vijan.png";

type Project = {
  title: string;
  description: string;
  link?: string;
  image: string;
  technologies: string[];
  professional?: boolean;
};

const professionalProjects: Project[] = [
  {
    title: "WhatsApp Business Automation Tool (SaaS)",
    description:
      "A real SaaS product for automating WhatsApp Business workflows and campaigns. Role: backend & integrations.",
    link: "https://github.com/Irfanlam123/watsapp-webtool-business",
    image: WhatsAppTool,
    technologies: ["Java", "Spring Boot", "PostgreSQL", "JWT", "REST APIs", "Docker"],
    professional: true,
  },
  {
    title: "Viraam Vani – Coaching & Learning Platform",
    description:
      "A full-stack MERN product providing study materials, exam results, and course info; used by real users.",
    link: "https://www.viraamvaani.live/",
    image: Viraam,
    technologies: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS"],
    professional: true,
  },
  {
    title: "Vijan Pharma – Corporate Website",
    description:
      "A corporate website focused on clean UI, responsiveness, and SEO-friendly structure.",
    link: "https://vijanpharma.com/",
    image: Vijan,
    technologies: ["React", "Tailwind CSS", "Responsive Design"],
    professional: true,
  },
];

const demoProjects: Project[] = [
  {
    title: "MERN Food Delivery App",
    description: "Demo full-stack food delivery app with auth, cart, and orders.",
    link: "https://github.com/Irfanlam123/Mern-food-app",
    image: Food,
    technologies: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS"],
  },
  {
    title: "Blog Application",
    description: "CRUD blog platform with modern UI and user flows.",
    link: "https://blog-app-weld-phi.vercel.app/",
    image: Blog,
    technologies: ["MongoDB", "Express", "React", "Node.js"],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Projects: React.FC = () => {
  const [selected, setSelected] = useState<Project | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (p: Project) => {
    setSelected(p);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    // keep selected until animation ends
    setTimeout(() => setSelected(null), 300);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="projects" className="bg-navy py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 text-sm font-semibold text-accent bg-accent/8 rounded-full mb-4">PORTFOLIO</span>
          <h2 className="text-4xl md:text-5xl font-bold text-siteText mb-4">My Projects</h2>
          <p className="text-siteText/80 max-w-3xl mx-auto">Professional projects are highlighted first; demo and practice projects are listed below.</p>
        </div>

        <motion.div variants={container} initial="hidden" animate="show" className="space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {professionalProjects.map((p) => (
              <motion.div key={p.title} variants={item} className="bg-card border border-siteBorder rounded-2xl p-8 shadow-card hover:shadow-lg transform hover:-translate-y-1 transition">
                <img src={p.image} alt={p.title} className="w-full h-52 object-cover rounded-md mb-5" />
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-siteText">{p.title}</h3>
                  <span className="inline-block px-3 py-1 text-sm rounded-full bg-card-darker text-accent font-medium">Professional</span>
                </div>
                <p className="text-siteText/80 mb-4 text-base">{p.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.technologies.map((t) => (
                    <span key={t} className="text-sm px-3 py-1 rounded-full bg-card-darker border border-siteBorder text-siteText/85">{t}</span>
                  ))}
                </div>
                <button onClick={() => openModal(p)} className="inline-block px-4 py-2 rounded-md bg-accent text-white font-semibold hover:bg-accent/90 transition">Details</button>
              </motion.div> 
            ))}
          </div>

          <div>
            <h3 className="text-xl font-semibold text-siteText mb-4">Additional / Demo Projects</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {demoProjects.map((p) => (
                <motion.div key={p.title} variants={item} className="bg-card border border-siteBorder rounded-2xl p-8 shadow-card hover:shadow-lg transform hover:-translate-y-1 transition">
                  <img src={p.image} alt={p.title} className="w-full h-52 object-cover rounded-md mb-4" />
                  <h4 className="text-xl font-semibold text-siteText mb-1">{p.title}</h4>
                  <p className="text-siteText/80 text-base mb-3">{p.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {p.technologies.map((t) => (
                      <span key={t} className="text-sm px-3 py-1 rounded-full bg-card-darker border border-siteBorder text-siteText/85">{t}</span>
                    ))}
                  </div>
                  <button onClick={() => openModal(p)} className="inline-block px-4 py-2 rounded-md bg-accent text-white font-semibold hover:bg-accent/90 transition">Details</button>
                </motion.div> 
              ))}
            </div>
          </div>
        </motion.div>

        {/* Modal */}
        {isOpen && selected && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div onClick={closeModal} className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 20, opacity: 0 }} className="relative z-50 max-w-3xl w-full mx-4 bg-navy rounded-2xl p-6 md:p-10 border border-siteBorder shadow-2xl">
              <div className="flex items-start gap-6">
                <img src={selected.image} alt={selected.title} className="w-48 h-48 object-cover rounded-md hidden sm:block" />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold text-siteText">{selected.title}</h3>
                    {selected.professional && <span className="inline-block px-3 py-1 text-sm rounded-full bg-card-darker text-accent font-medium">Professional</span>}
                  </div>
                  <p className="text-siteText/85 mb-4">{selected.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selected.technologies.map((t) => (
                      <span key={t} className="text-sm px-3 py-1 rounded-full bg-card-darker border border-siteBorder text-siteText/85">{t}</span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    {selected.link && (
                      <a href={selected.link} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md bg-accent text-white font-semibold hover:bg-accent/90 transition">Open Project</a>
                    )}
                    <button onClick={closeModal} className="px-4 py-2 rounded-md border border-siteBorder text-siteText hover:bg-card transition">Close</button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
