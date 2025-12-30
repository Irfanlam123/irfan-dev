import React from "react";
import { motion, Variants } from "framer-motion";
import Abot from "./abot.jpg";

type SkillMap = Record<string, string[]>;

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
    Languages: ["Java (17)", "JavaScript", "Golang", "HTML5", "CSS3"],
    "Frameworks & Libraries": ["Spring Boot", "JPA/Hibernate", "React", "Next.js", "Node.js", "Express.js"],
    Databases: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
    "Tools & Technologies": ["Git", "GitHub", "Postman", "Docker", "JWT", "REST APIs", "Microservices"],
  } as SkillMap,
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, duration: 0.8 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const skillColorClasses: Record<string, {dot:string; tag:string}> = {
  Languages: { dot: 'bg-teal-400', tag: 'text-teal-700 bg-teal-50 border-teal-200' },
  'Frameworks & Libraries': { dot: 'bg-indigo-400', tag: 'text-indigo-700 bg-indigo-50 border-indigo-200' },
  Databases: { dot: 'bg-green-400', tag: 'text-green-700 bg-green-50 border-green-200' },
  'Tools & Technologies': { dot: 'bg-amber-400', tag: 'text-amber-700 bg-amber-50 border-amber-200' },
};

const Aboutsec: React.FC = () => {
  return (
    <section id="about" className="w-full px-4 sm:px-6 lg:px-8 bg-navy pt-12 pb-20 md:pb-28 text-siteText">
      <div className="max-w-7xl mx-auto">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
          {/* Section Header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <motion.span className="inline-block px-4 py-2 text-sm font-semibold tracking-wider text-accent bg-accent/8 rounded-full mb-4" whileHover={{ scale: 1.05 }}>
              {aboutData.subtitle}
            </motion.span>

            <motion.h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-siteText mb-4" variants={itemVariants}>
              About <span className="text-accent">Me</span>
            </motion.h2>

            <motion.div className="mx-auto h-1 w-24 bg-accent/60 rounded-full" variants={itemVariants} />
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
            {/* Image */}
            <motion.div className="flex justify-center lg:justify-start" variants={itemVariants}>
              <div className="relative">
                <div className="w-60 h-60 rounded-2xl overflow-hidden border-2 border-siteBorder shadow-lg">
                  <img className="w-full h-full object-cover" src={aboutData.image} alt={`${aboutData.name} - ${aboutData.role}`} loading="lazy" />
                </div>
                <div className="absolute -inset-3 rounded-2xl bg-accent/8 -z-10" />
              </div>
            </motion.div>

            {/* Right: content */}
            <motion.div className="space-y-6" variants={containerVariants}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-card p-4 rounded-lg border border-siteBorder text-siteText">
                  <div className="text-sm text-siteText/80">Location</div>
                  <div className="font-semibold mt-1">{aboutData.location}</div>
                </div>
                <div className="bg-card p-4 rounded-lg border border-siteBorder text-siteText">
                  <div className="text-sm text-siteText/80">Role</div>
                  <div className="font-semibold mt-1">{aboutData.role}</div>
                </div>
                <div className="bg-card p-4 rounded-lg border border-siteBorder text-siteText">
                  <div className="text-sm text-siteText/80">Experience</div>
                  <div className="font-semibold mt-1">3 months internship</div>
                </div>
              </div>

              <div className="text-siteText/85">
                <p className="text-base leading-relaxed mb-2">{aboutData.bio[0]}</p>
                <p className="text-siteText/80 text-sm mb-4">{aboutData.bio[1]}</p>
                <p className="text-siteText/80 text-sm mb-4">{aboutData.bio[2]}</p>

                <div className="bg-card-darker p-4 rounded-lg border border-siteBorder mt-2 text-siteText">
                  <h4 className="font-semibold text-siteText mb-3">Backend skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Java 17',
                      'Spring Boot',
                      'JWT',
                      'JPA/Hibernate',
                      'PostgreSQL',
                      'Redis',
                      'Docker',
                      'Git/GitHub',
                      'REST APIs',
                    ].map((s) => (
                      <span key={s} className="text-sm px-3 py-1 rounded-full bg-card-darker border border-siteBorder text-siteText/85">{s}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-siteText mb-3">Skills</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {Object.values(aboutData.skills).flat().map((skill) => (
                    <span key={skill} className="block px-3 py-2 rounded-md border border-siteBorder text-siteText/90 text-sm">{skill}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Aboutsec;
