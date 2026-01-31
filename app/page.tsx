'use client'
import { useState } from "react";

const projects = [
  {
    title: "Rule Engine & Dynamic Pricing",
    client: "Citi Bank (BFSI)",
    description: "Architected a high-scale rule engine for real-time special offers. Led the migration of legacy jQuery interfaces to a modern Angular 14 architecture, consuming complex internal APIs.",
    tech: ["Angular 14", "Java", "Oracle", "API Design"],
    link: "#"
  },
  {
    title: "Micro-Frontend Insurance Platform",
    client: "Citi Bank (BFSI)",
    description: "Developed a private banking insurance application from scratch using Module Federation. Created a shared UI library as an NPM package to ensure design consistency across micro-frontends.",
    tech: ["Angular", "React", "Micro-Frontends", "Jest", "NPM"],
    link: "#"
  },
  {
    title: "Loan Origination System (MSME)",
    client: "Asirvad Microfinance",
    description: "Built an end-to-end loan management system covering lead entry to automated disbursement. Integrated E-sign and E-Nach APIs for seamless digital contract execution.",
    tech: ["Angular 8", "Asp.Net Core", "E-Sign API", "SQL"],
    link: "#"
  },
  {
    title: "CMMS Maintenance Platform",
    client: "CRH Americas Materials",
    description: "Engineered a system to track and schedule maintenance for heavy construction equipment across multiple global sites, focusing on production stability and system enhancements.",
    tech: ["Angular", "JavaScript", "Enterprise Support"],
    link: "#"
  },
  {
    title: "Commercial Vehicle Loan System",
    client: "Manappuram Finance",
    description: "Automated credit scoring and collateral valuation. Integrated external asset valuation services and CIBIL APIs to determine real-time loan eligibility for commercial clients.",
    tech: ["Angular", "CIBIL API", "Oracle PL/SQL"],
    link: "#"
  },
  {
    title: "Automated Cloud Backup Solution",
    client: "Internal Product",
    description: "Developed a C#-based utility to automate SQL Server database backups directly to Google Drive on a scheduled basis, ensuring data redundancy and recovery.",
    tech: ["C#", "SQL Server", "Google Drive API"],
    link: "#"
  }
];

const experience = [
  {
    company: "Tata Consultancy Services",
    role: "Frontend Developer",
    period: "Mar 2022 — Present",
    description: "Leading migrations and developing micro-frontends for global BFSI clients like Citi.",
    skills: ["Angular 14", "React", "Micro-Frontends"]
  },
  {
    company: "Gridstone Technologies",
    role: "Software Engineer",
    period: "Dec 2021 — Feb 2022",
    description: "Focused on HR management systems and candidate verification workflows.",
    skills: ["Angular 11", ".NET Core"]
  },
  {
    company: "Manappuram Comptech",
    role: "Associate Software Engineer",
    period: "Jun 2019 — Nov 2021",
    description: "Developed automated loan origination systems and integrated external financial APIs.",
    skills: ["Angular 8", "Asp.Net Core", "Oracle"]
  },
  {
    company: "GJ Infotech",
    role: "Junior Developer",
    period: "2018 — 2019",
    description: "Built school management solutions and automated cloud backup utilities.",
    skills: ["C#", "SQL Server", "VB.Net"]
  }
];

export default function Home() {

  const [copied, setCopied] = useState(false);
  const email = "akshaydas879@gmail.com";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy!', err);
    }
  };

  return (
    <div className="flex flex-col gap-20">
      <section className="flex flex-col gap-8 py-24">
        {/* Hero Content */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900">
            Frontend Developer <br />
            <span className="text-slate-400">based in Stockholm.</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed">
            I build high-performance, accessible web applications with
            Angular, Javascript,  React, Next.js and TypeScript. Currently looking for my next
            challenge in Sweden's tech ecosystem.
          </p>
        </div>

        {/* Primary Actions */}
        <div className="flex gap-4 pt-4">
          <a
            href="#work"
            className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-slate-200 px-8 py-3 rounded-full font-medium hover:bg-slate-50 transition"
          >
            Get in touch
          </a>
        </div>
      </section>

      <section id="about" className="py-20 border-t border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Left Side: Professional Summary */}
          <div className="md:col-span-7 space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              I am a <span className="text-black font-medium">Frontend Developer with 5+ years of experience</span> architecting
              robust solutions for the BFSI and Logistics sectors. My expertise lies in
              modernizing legacy systems—most recently leading a complex migration from
              jQuery to Angular 14 for a client.
            </p>
            <p className="text-slate-600">
              Based in Stockholm, I specialize in building scalable **Micro-Frontends** and high-performance web applications. I bridge the gap between complex
              backend logic and intuitive user experiences.
            </p>

            {/* Values Swedish recruiters look for */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-sm font-medium text-slate-800 bg-slate-50 px-4 py-2 rounded-full">
                🇸🇪 Based in Stockholm
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-slate-800 bg-slate-50 px-4 py-2 rounded-full">
                🤝 Collaborative Mindset
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-slate-800 bg-slate-50 px-4 py-2 rounded-full">
                🚀 Continuous Learner
              </div>
            </div>
          </div>

          {/* Right Side: Quick Tech Stack */}
          <div className="md:col-span-5 bg-slate-900 rounded-3xl p-8 text-white">
            <h3 className="text-xl font-semibold mb-6">Technical Arsenal</h3>
            <div className="space-y-4">
              <div>
                <p className="text-slate-400 text-xs uppercase tracking-widest mb-2">Core Expertise</p>
                <p className="text-sm font-mono">React, Next.js, Angular (6-14), TypeScript</p>
              </div>
              <div className="border-t border-slate-800 pt-4">
                <p className="text-slate-400 text-xs uppercase tracking-widest mb-2">Architectural Patterns</p>
                <p className="text-sm font-mono">Micro-Frontends, Module Federation, API Integration</p>
              </div>
              <div className="border-t border-slate-800 pt-4">
                <p className="text-slate-400 text-xs uppercase tracking-widest mb-2">Backend & Tools</p>
                <p className="text-sm font-mono"> .NET Core, SQL, Oracle, Jest</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="py-20 border-t border-gray-100">
        <h2 className="text-3xl font-bold mb-8">Featured Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="p-6 rounded-2xl bg-slate-50 border border-transparent hover:border-slate-200 transition-all">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">{project.client}</span>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-slate-600 mb-4">{project.description}</p>
              <div className="flex gap-2">
                {project.tech.map(t => (
                  <span key={t} className="text-xs bg-white px-2 py-1 rounded border border-slate-200">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="py-20 border-t border-gray-100">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight mb-12">Experience</h2>

          <div className="space-y-12">
            {experience.map((job, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-slate-100 last:border-0 pb-2">
                {/* The Dot */}
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-slate-900" />

                <div className="flex flex-col gap-1">
                  <span className="text-sm font-mono text-slate-400 uppercase tracking-wider">
                    {job.period}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900">{job.company}</h3>
                  <p className="text-md font-medium text-slate-700 mb-2">{job.role}</p>
                  <p className="text-slate-600 leading-relaxed max-w-xl">
                    {job.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {job.skills.map(skill => (
                      <span key={skill} className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 border-t border-gray-100 text-center">
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold tracking-tight">Let's Connect</h2>
          <p className="text-lg text-slate-600">
            Currently open to new opportunities in Stockholm.
            Feel free to reach out via email or connect on LinkedIn.
          </p>

          {/* Action Buttons Grid */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">

            {/* 1. Primary Email Link */}
            <a
              href={`mailto:${email}`}
              className="w-full md:w-auto bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-slate-800 transition shadow-lg flex items-center justify-center gap-2"
            >
              Send Email
            </a>

            {/* 2. LinkedIn Button */}
            <a
              href="https://www.linkedin.com/in/akshay-das-a-s-144530143/" // REPLACE WITH YOUR LINK
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto border border-blue-600 text-blue-600 px-8 py-4 rounded-full font-medium hover:bg-blue-50 transition flex items-center justify-center gap-2"
            >
              LinkedIn
            </a>

            {/* 3. Copy Email Fallback */}
            <button
              onClick={copyToClipboard}
              className="w-full md:w-auto border border-slate-200 px-8 py-4 rounded-full font-medium hover:bg-slate-50 transition text-slate-600"
            >
              {copied ? "Copied! ✅" : "Copy Email"}
            </button>

            <a
              href="/Akshay_Frontend_Developer_CV.pdf"
              download
              className="flex items-center gap-2 border border-slate-200 px-8 py-4 rounded-full font-medium hover:bg-slate-50 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download CV
            </a>

          </div>
        </div>
      </section>

    </div>
  );
}
