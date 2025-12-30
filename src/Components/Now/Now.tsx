import React from "react";

const Now: React.FC = () => {
  return (
    <section id="now" className="bg-navy py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-siteText mb-4">What I'm Doing Now</h2>
        <p className="text-siteText/80 mb-6">A short summary of my current focus and goals.</p>

        <ul className="grid sm:grid-cols-2 gap-6">
          <li className="bg-card text-siteText p-6 rounded-2xl shadow-card border border-siteBorder">Building real-world SaaS projects.</li>
          <li className="bg-card text-siteText p-6 rounded-2xl shadow-card border border-siteBorder">Improving frontend skills with React, TypeScript, and Tailwind CSS.</li>
          <li className="bg-card text-siteText p-6 rounded-2xl shadow-card border border-siteBorder">Learning system design and backend scalability.</li>
          <li className="bg-card text-siteText p-6 rounded-2xl shadow-card border border-siteBorder">Actively looking for junior / fresher / startup / remote opportunities.</li>
        </ul>
      </div>
    </section>
  );
};

export default Now;
