import React from "react";

const Experience: React.FC = () => {
  return (
    <section id="experience" className="bg-navy py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-siteText mb-4">Experience</h2>
        <p className="text-siteText/80 mb-8">A concise, honest overview of my real work experience.</p>

        <div className="bg-navy border rounded-2xl shadow-card p-6 md:p-8 border-siteBorder">
          <div className="flex items-start justify-between gap-6 flex-col md:flex-row">
            <div>
              <h3 className="text-xl font-semibold text-siteText">Java Developer (Intern / Junior Role)</h3>
              <div className="text-sm text-siteText/75">PMGlob Technology — Noida, India</div>
              <div className="text-sm text-siteText/75 mt-1">Duration: 3 months</div>
            </div>

            <div className="mt-4 md:mt-0">
              <span className="inline-block px-3 py-1 rounded-full bg-card text-accent font-medium text-sm">Backend Internship</span>
            </div>
          </div>

          <div className="mt-6 text-siteText/85 space-y-3">
            <p>
              During this internship I worked on backend systems used in real business applications. I primarily used <strong>Java 17</strong> and <strong>Spring Boot</strong> to build REST APIs and backend services.
            </p>

            <ul className="list-disc pl-5 text-siteText/85">
              <li>Implemented JWT-based authentication with <strong>Spring Security</strong>.</li>
              <li>Worked with <strong>JPA / Hibernate</strong> and <strong>PostgreSQL</strong> for data persistence.</li>
              <li>Used <strong>Redis</strong> for basic caching to improve API performance.</li>
              <li>Learned practical workflows: project structure, team collaboration using <strong>Git/GitHub</strong>, and preparing services for deployment with <strong>Docker</strong>.</li>
            </ul>

            <p className="text-sm text-siteText/70">
              This experience helped me understand how production-level backend services are developed and maintained, and prepared me to contribute effectively to full-stack projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
