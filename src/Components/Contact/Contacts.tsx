import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type Social = {
  icon: IconDefinition;
  link: string;
  color?: string;
};

const footerData: {
  name: string;
  role: string;
  location: string;
  email: string;
  socials: Social[];
} = {
  name: "Irfan Alam",
  role: "Frontend Developer | React Specialist | UI Enthusiast",
  location: "Delhi, India",
  email: "irfanalam010202@gmail.com",
  socials: [
    { icon: faLinkedinIn, link: "https://www.linkedin.com/in/irfan-alam-2034a922b/", color: "blue" },
    { icon: faGithub, link: "https://github.com/Irfanlam123", color: "gray" },
  ],
};

const Contact: React.FC = () => {
  return (
    <footer className="bg-navy py-16 px-6 sm:px-8 md:px-12 lg:px-24 text-siteText border-t border-siteBorder">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        {/* Name & Role */}
        <div className="text-center md:text-left">
          <h3 className="text-3xl sm:text-4xl font-bold text-siteText mb-4">
            {footerData.name}
          </h3>
          <p className="text-lg sm:text-xl text-siteText/80 mb-6">{footerData.role}</p>
          <p className="text-siteText/70 text-base">© {new Date().getFullYear()} All Rights Reserved</p>
        </div>

        {/* Social Links & Contact */}
        <div className="flex flex-col items-center md:items-end gap-6">
          <div className="flex space-x-6">
            {footerData.socials.map((social, idx) => (
              <a key={idx} href={social.link} target="_blank" rel="noopener noreferrer" className="group relative" aria-label={`social-${idx}`}>
                <div className="absolute -inset-2 bg-gradient-to-tr from-accent/30 to-accent/30 rounded-full blur opacity-0 group-hover:opacity-70 transition-opacity duration-500" />
                <div className="w-14 h-14 flex items-center justify-center bg-card rounded-full border border-siteBorder group-hover:border-accent transition-all duration-500 shadow-lg">
                  <FontAwesomeIcon icon={social.icon} className={`text-3xl text-siteText group-hover:text-accent transition-colors duration-500`} />
                </div>  
              </a>
            ))}
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right mt-4">
            <p className="text-lg text-siteText/80 mb-1">📍 {footerData.location}</p>
            <a href={`mailto:${footerData.email}`} className="text-accent font-medium text-lg hover:text-accent/90 transition-colors">
              {footerData.email}
            </a> 
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent my-12" />

      {/* Footer Note */}
      <div className="text-center text-siteText/80 text-sm sm:text-base">
        Crafted with <span className="text-red-500">❤️</span> using <span className="text-accent font-semibold">React</span> & <span className="text-accent/80 font-semibold">Tailwind CSS</span>
      </div>
    </footer>
  );
};

export default Contact;
