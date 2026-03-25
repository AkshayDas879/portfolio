import portfolioData from "./data/portfolio.json";
import { PortfolioData } from "./lib/types";
import CopyEmailButton from "./components/copy-email-button";
import { 
  TextReveal, 
  ScrollScrubText, 
  HorizontalScrollContainer, 
  TimelineDraw, 
  MagneticButton, 
  FadeIn,
  StaggerContainer
} from "./components/animations";
import ParticleBackground from "./components/particle-background";

async function getPortfolioData() {
  return portfolioData as PortfolioData;
}

export default async function Home() {
  const { hero, about, projects, experience, contact } = await getPortfolioData();

  return (
    <div className="flex flex-col w-full overflow-hidden">
      
      {/* 1. Hero Section - Full Height, Parallax, Mask Revealing */}
      <section className="relative h-screen min-h-[800px] w-full flex flex-col justify-center items-center text-center px-6 overflow-hidden">
        <ParticleBackground />
        
        <div className="z-10 flex flex-col items-center justify-center max-w-5xl w-full">
          <TextReveal 
            tag="h1"
            className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-slate-900 dark:text-slate-50 uppercase justify-center mb-6" 
            text={hero.title} 
            delay={0.2}
          />
          <TextReveal 
            tag="h2"
            className="text-xl md:text-3xl font-light text-slate-500 dark:text-slate-400 justify-center mb-12" 
            text={hero.subtitle} 
            delay={0.6}
          />
          
          <FadeIn delay={1.2} className="max-w-2xl mx-auto mb-16">
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-mono">
              {hero.description}
            </p>
          </FadeIn>

          <FadeIn delay={1.6} className="flex flex-col sm:flex-row gap-6 mx-auto items-center justify-center w-full">
            <MagneticButton href="#work">
              <div className="bg-black text-white dark:bg-white dark:text-black px-10 py-4 rounded-full font-medium hover:scale-110 transition-transform duration-300 flex items-center justify-center w-[200px]">
                {hero.ctaPrimary}
              </div>
            </MagneticButton>
            <MagneticButton href="#contact">
              <div className="border border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm px-10 py-4 rounded-full font-medium hover:scale-110 transition-transform duration-300 flex items-center justify-center w-[200px] text-slate-900 dark:text-white">
                {hero.ctaSecondary}
              </div>
            </MagneticButton>
          </FadeIn>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="text-xs uppercase tracking-[0.3em] font-mono">Scroll</span>
          <div className="w-[1px] h-12 bg-black dark:bg-white animate-pulse" />
        </div>
      </section>

      {/* 2. About Section - Scrub Text */}
      <section id="about" className="py-32 md:py-48 px-6 bg-slate-50 dark:bg-slate-900/40 w-full border-y border-slate-100 dark:border-slate-800/50">
        <div className="max-w-5xl mx-auto flex flex-col gap-12">
          <FadeIn>
            <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-slate-500 mb-8">( 01 — About )</h2>
          </FadeIn>
          
          <div className="text-3xl md:text-5xl lg:text-6xl font-serif text-slate-900 dark:text-slate-50 leading-tight">
            <ScrollScrubText text={about.summary} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
            <FadeIn>
              <div className="space-y-6">
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  {about.detailedDescription}
                </p>
                <div className="flex flex-wrap gap-3 pt-4">
                  {about.values.map((value, index) => (
                    <span key={index} className="text-sm font-mono border border-slate-200 dark:border-slate-800 px-4 py-2 rounded-full cursor-hover hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300 text-slate-700 dark:text-slate-300">
                      {value}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-black text-white dark:bg-slate-900 dark:text-slate-300 rounded-3xl p-10 h-full flex flex-col justify-center shadow-2xl dark:shadow-none border border-transparent dark:border-slate-800">
                <h3 className="text-xl font-serif mb-8 text-slate-400">Core Arsenal</h3>
                <div className="space-y-6 font-mono text-sm leading-relaxed">
                  <div className="group cursor-hover">
                    <span className="text-slate-500 block mb-1">Frontend</span>
                    <span className="group-hover:text-blue-400 transition-colors uppercase tracking-wider">{about.techStack.core}</span>
                  </div>
                  <div className="group cursor-hover">
                    <span className="text-slate-500 block mb-1">Architecture</span>
                    <span className="group-hover:text-amber-400 transition-colors uppercase tracking-wider">{about.techStack.architecture}</span>
                  </div>
                  <div className="group cursor-hover">
                    <span className="text-slate-500 block mb-1">Backend & Tools</span>
                    <span className="group-hover:text-green-400 transition-colors uppercase tracking-wider">{about.techStack.backend}</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 3. Horizontal Pinned Projects */}
      <div id="work">
        <HorizontalScrollContainer>
          <div className="w-[80vw] lg:w-[40vw] flex-shrink-0 flex flex-col justify-center h-full px-6 lg:px-0">
            <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-slate-500 mb-8">( 02 — Selected Work )</h2>
            <h3 className="text-5xl md:text-7xl font-serif leading-none tracking-tighter">
              Featured<br/>
              <span className="text-slate-500 italic font-light">Projects</span>
            </h3>
            <p className="mt-8 text-lg text-slate-400 max-w-md">
              A curated selection of enterprise applications, micro-frontends, and architectural migrations.
            </p>
            <div className="mt-12 flex items-center gap-4 text-sm font-mono text-slate-500 hidden lg:flex">
              <span className="uppercase tracking-widest">Scroll</span>
              <svg width="40" height="12" viewBox="0 0 40 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-[pulse_2s_ease-in-out_infinite]">
                <path d="M40 6L30 0.226497V11.7735L40 6ZM0 7H31V5H0V7Z" fill="currentColor"/>
              </svg>
            </div>
          </div>

          {projects.map((project, index) => (
            <div key={index} className="w-[85vw] lg:w-[45vw] flex-shrink-0 lg:h-[70vh] group cursor-hover relative rounded-[2rem] overflow-hidden bg-slate-800/50 border border-slate-700/50 flex flex-col justify-between p-8 lg:p-14 transition-transform duration-700 hover:scale-[0.98] hover:bg-slate-800">
              <div className="absolute inset-0 bg-gradient-to-b from-slate-900/0 to-slate-950/90 z-10" />
              
              <div className="relative z-20 flex justify-between items-start mb-20 lg:mb-0">
                <span className="text-xs font-mono border border-slate-600 px-4 py-1.5 rounded-full text-slate-300 bg-slate-900/50 backdrop-blur-sm">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">{project.client}</span>
              </div>
              
              <div className="relative z-20 mt-auto transform transition-transform duration-700 lg:group-hover:-translate-y-6">
                <h4 className="text-3xl lg:text-5xl font-serif mb-6 text-white group-hover:text-blue-300 transition-colors leading-tight">{project.title}</h4>
                <p className="text-slate-400 text-lg mb-8 max-w-lg lg:opacity-0 lg:-translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-500 delay-100">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 lg:opacity-0 lg:-translate-y-2 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-500 delay-200">
                  {project.tech.map(t => (
                    <span key={t} className="text-xs font-mono uppercase tracking-widest bg-white/5 border border-white/10 px-4 py-2 rounded-full text-slate-200">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
          
          <div className="w-[10vw] flex-shrink-0 hidden lg:block"></div>
        </HorizontalScrollContainer>
      </div>

      {/* 4. Experience Timeline */}
      <section id="experience" className="py-32 md:py-48 px-6 bg-white dark:bg-slate-950 w-full">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-slate-500 mb-20">( 03 — Experience )</h2>
          </FadeIn>

          <TimelineDraw>
            <div className="space-y-32">
              {experience.map((job, index) => (
                <div key={index} className="relative pl-16 md:pl-28 mt-4">
                  <div className="absolute left-[30px] md:left-[36px] top-1.5 w-[10px] h-[10px] rounded-full bg-slate-300 dark:bg-slate-700 z-20 border-[2px] border-white dark:border-slate-950" />
                  
                  <StaggerContainer>
                    <span className="text-sm font-mono text-slate-400 uppercase tracking-widest block mb-4">
                      {job.period}
                    </span>
                    <h3 className="text-4xl font-serif font-bold text-slate-900 dark:text-slate-50 mb-3">{job.company}</h3>
                    <h4 className="text-xl font-medium text-slate-500 dark:text-slate-400 mb-8 font-serif italic">{job.role}</h4>
                    
                    <div className="whitespace-pre-line text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-10 prose prose-slate dark:prose-invert">
                      {job.description}
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {job.skills.map(skill => (
                        <span key={skill} className="text-xs font-mono uppercase tracking-widest text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 px-4 py-2 rounded-full cursor-hover hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </StaggerContainer>
                </div>
              ))}
            </div>
          </TimelineDraw>
        </div>
      </section>

      {/* 5. Contact Area */}
      <section id="contact" className="py-48 px-6 bg-slate-50 dark:bg-slate-900 w-full text-center relative z-20 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto space-y-12">
          <FadeIn>
            <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-slate-500 mb-10">( 04 — Contact )</h2>
            <h3 className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tighter text-slate-900 dark:text-slate-50 leading-[1.1]">
              {contact.heading}
            </h3>
            <p className="text-xl text-slate-500 dark:text-slate-400 mt-10 max-w-xl mx-auto leading-relaxed">
              {contact.description}
            </p>
          </FadeIn>
          
          <FadeIn delay={0.2} className="pt-16 flex flex-col md:flex-row justify-center items-center gap-6">
            <MagneticButton href={`mailto:${contact.email}`}>
              <div className="bg-black text-white dark:bg-white dark:text-black px-12 py-5 rounded-full font-medium text-lg hover:scale-105 transition-transform duration-300 w-full sm:w-auto text-center flex items-center justify-center min-w-[240px]">
                Send an Email
              </div>
            </MagneticButton>
            
            <MagneticButton href={contact.linkedin}>
              <div className="border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm px-12 py-5 rounded-full font-medium text-lg hover:bg-slate-100 dark:hover:bg-slate-800 hover:scale-105 transition-all duration-300 w-full sm:w-auto text-center flex items-center justify-center min-w-[240px] text-slate-900 dark:text-white">
                LinkedIn Profile
              </div>
            </MagneticButton>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
