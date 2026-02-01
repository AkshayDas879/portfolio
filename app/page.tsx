import Link from "next/link";
import portfolioData from "./portfolio.json";
import { PortfolioData } from "./types";
import CopyEmailButton from "./components/CopyEmailButton";

async function getPortfolioData() {
  return portfolioData as PortfolioData;
}

export default async function Home() {
  const { hero, about, projects, experience, contact } = await getPortfolioData();

  return (
    <div className="flex flex-col gap-20">
      <section className="flex flex-col gap-8 py-24">
        {/* Hero Content */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900">
            {hero.title} <br />
            <span className="text-slate-400">{hero.subtitle}</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed">
            {hero.description}
          </p>
        </div>

        {/* Primary Actions */}
        <div className="flex gap-4 pt-4">
          <a
            href="#work"
            className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition"
          >
            {hero.ctaPrimary}
          </a>
          <a
            href="#contact"
            className="border border-slate-200 px-8 py-3 rounded-full font-medium hover:bg-slate-50 transition"
          >
            {hero.ctaSecondary}
          </a>
        </div>
      </section>

      <section id="about" className="py-20 border-t border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Left Side: Professional Summary */}
          <div className="md:col-span-7 space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">{about.heading}</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              {about.summary}
            </p>
            <p className="text-slate-600">
              {about.detailedDescription}
            </p>

            {/* Values Swedish recruiters look for */}
            <div className="flex flex-wrap gap-4 pt-4">
              {about.values.map((value, index) => (
                <div key={index} className="flex items-center gap-2 text-sm font-medium text-slate-800 bg-slate-50 px-4 py-2 rounded-full">
                  {value}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Quick Tech Stack */}
          <div className="md:col-span-5 bg-slate-900 rounded-3xl p-8 text-white">
            <h3 className="text-xl font-semibold mb-6">Technical Arsenal</h3>
            <div className="space-y-4">
              <div>
                <p className="text-slate-400 text-xs uppercase tracking-widest mb-2">Core Expertise</p>
                <p className="text-sm font-mono">{about.techStack.core}</p>
              </div>
              <div className="border-t border-slate-800 pt-4">
                <p className="text-slate-400 text-xs uppercase tracking-widest mb-2">Architectural Patterns</p>
                <p className="text-sm font-mono">{about.techStack.architecture}</p>
              </div>
              <div className="border-t border-slate-800 pt-4">
                <p className="text-slate-400 text-xs uppercase tracking-widest mb-2">Backend & Tools</p>
                <p className="text-sm font-mono">{about.techStack.backend}</p>
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
          <h2 className="text-3xl font-bold tracking-tight">{contact.heading}</h2>
          <p className="text-lg text-slate-600">
            {contact.description}
          </p>

          {/* Action Buttons Grid */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">

            {/* 1. Primary Email Link */}
            <a
              href={`mailto:${contact.email}`}
              className="w-full md:w-auto bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-slate-800 transition shadow-lg flex items-center justify-center gap-2"
            >
              Send Email
            </a>

            {/* 2. LinkedIn Button */}
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto border border-blue-600 text-blue-600 px-8 py-4 rounded-full font-medium hover:bg-blue-50 transition flex items-center justify-center gap-2"
            >
              LinkedIn
            </a>

            {/* 3. Copy Email Fallback */}
            <CopyEmailButton email={contact.email} />

            <a
              href={contact.resumeUrl}
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


