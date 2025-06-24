import React, { useState, useEffect, useRef } from 'react';

const portfolioData = {
  name: "Rahul Arora",
  title: "Lifelong Learner",
  tagline: "Always Seeking Elegant Solutions",
  about: [
    "I'm a CS & Math double major at Rice University interested in applying my skills to financial modeling and software development.",
    "My journey has taken me from learning the fundamentals of software engineering at PROS to my current role at Graham Capital Management, where I develop technologies and provide crucial data for traders and systematic teams.",
    "I'm now aiming to dive deeper into data analytics and quantitative research. The projects below hope to show my modeling skills and my exploration of complex financial concepts."
  ],
  experiences: [
    {
      role: "SWE Intern",
      company: "Graham Capital Management",
      companyLink: "https://www.grahamcapital.com/",
      date: "Summer 2025",
      description: "API Gateway - consolidated centralized consumption layer for data delivery; 20B AUM",
      technologies: ["C#"]
    },
    {
      role: "Theoretical CS Researcher",
      company: "Rice University",
      companyLink: "https://cs.rice.edu/",
      date: "Spring 2025 - Present",
      description: "Conducted research in augmented distribution testing, contributing to a novel algorithm for statistical analysis.",
      technologies: ["Python", "LaTeX", "Jupyter"]
    },
    {
      role: "SWE Intern",
      company: "PROS",
      companyLink: "https://pros.com/",
      date: "Summer 2024",
      description: "Engineered a robust data pipeline for processing and analyzing API usage metrics, improving system monitoring and client reporting capabilities.",
      technologies: ["Java", "SQL"]
    },
    {
      role: "Student Coordinator",
      company: "Rice GIS/Data Center",
      companyLink: "https://www.library.rice.edu/places/gisdata-center-gdc",
      date: "Fall 2023 - Present",
      description: "Performed regression analysis on US Gov. census tract datasets using ArcGIS Pro to determine Texas's energy generation sources.",
      technologies: ["ArcGIS",]
    },
  ],
  projects: [],
  navLinks: [
      { name: "About", href: "#about" },
      { name: "Experience", href: "#experience" },
      { name: "Projects", href: "#projects" },
      { name: "Resume", href: "/Rahul Resume.pdf", target: "_blank" },
  ],
  socialLinks: [
      { type: "github", href: "https://github.com/rarora04", label: "GitHub" },
      { type: "linkedin", href: "https://www.linkedin.com/in/rarora04", label: "LinkedIn" },
      { type: "email", href: "mailto:rahul.vp.arora@gmail.com", label: "Email" },
  ]
};


const GitHubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-6 w-6" aria-hidden="true">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
    </svg>
);

const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
        <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 1 1 8.25 6.5 1.75 1.75 0 0 1 6.5 8.25zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.62 1.62 0 0 0 13 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 0 1 2.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
    </svg>
);

const EmailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
    </svg>
);

const EasterEggIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="h-4 w-4 inline-block ml-1 transition-transform hover:scale-110">
        <path d="M256,0C167.688,0,96,143.063,96,256c0,112.938,71.688,256,160,256s160-143.063,160-256C416,143.063,344.313,0,256,0z M352,288l-32-32l-32,32l-32-32l-32,32l-32-32l-32,32H98.656C110.344,157.938,175.875,32,256,32s145.656,125.938,157.344,256H352z"/>
    </svg>
);

const ExternalLinkIcon = () => (
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
        <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
    </svg>
);

const FilledMoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="0">
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 w-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25c0 5.385 4.365 9.75 9.75 9.75 2.572 0 4.92-.99 6.752-2.648z" />
  </svg>
);


const Header = ({ data, activeLink, isDarkMode, toggleDarkMode }) => {
    const SocialIcons = {
        github: <GitHubIcon />,
        linkedin: <LinkedInIcon />,
        email: <EmailIcon />
    };

    return (
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
                <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-200 sm:text-5xl">
                    <a href="/">{data.name}</a>
                </h1>
                <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-900 dark:text-slate-200 sm:text-xl">
                    {data.title}
                </h2>
                <p className="mt-4 max-w-xs leading-normal">
                    {data.tagline}
                </p>
                <nav className="nav hidden lg:block" aria-label="In-page jump links">
                    <ul className="mt-16 w-max">
                        {data.navLinks.map(link => (
                            <li key={link.href}>
                                <a className="group flex items-center py-3" href={link.href} target={link.target || "_self"}>
                                    <span className={`nav-indicator mr-4 h-px transition-all group-hover:w-16 group-hover:bg-slate-500 dark:group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none ${activeLink === link.href.substring(1) ? 'w-16 bg-slate-900 dark:bg-slate-200' : 'w-8 bg-slate-400 dark:bg-slate-600'}`}></span>
                                    <span className={`nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-900 dark:group-hover:text-slate-200 group-focus-visible:text-slate-200 ${activeLink === link.href.substring(1) ? 'text-slate-900 dark:text-slate-200' : 'text-slate-500'}`}>{link.name}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <div className="flex items-center mt-8">
                 <ul className="ml-1 flex items-center" aria-label="Social media">
                    {data.socialLinks.map(link => (
                        <li key={link.type} className="mr-5 text-xs">
                            <a className="block text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200" href={link.href} target={link.href.startsWith('http') ? '_blank' : '_self'} rel="noreferrer noopener">
                                <span className="sr-only">{link.label}</span>
                                {SocialIcons[link.type]}
                            </a>
                        </li>
                    ))}
                </ul>
                <button onClick={toggleDarkMode} className="ml-1 p-2 rounded-full text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors" aria-label="Toggle theme">
                    {isDarkMode ? <FilledMoonIcon /> : <MoonIcon />}
                </button>
            </div>
        </header>
    );
};

const Section = React.forwardRef(({ id, title, children }, ref) => (
    <section ref={ref} id={id} className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label={title}>
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-white/80 dark:bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-slate-200 lg:sr-only">{title}</h2>
        </div>
        {children}
    </section>
));


export default function App() {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme');
            return savedTheme === 'dark' || (savedTheme === null && window.matchMedia('(prefers-color-scheme: dark)').matches);
        }
        return false;
    });

    useEffect(() => {
        const root = window.document.documentElement;
        if (isDarkMode) {
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            root.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => setIsDarkMode(prev => !prev);
    
    const [activeLink, setActiveLink] = useState('about');
    const aboutRef = useRef(null);
    const experienceRef = useRef(null);
    const projectsRef = useRef(null);

    useEffect(() => {
        const sections = [aboutRef, experienceRef, projectsRef];
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveLink(entry.target.id);
                }
            });
        }, {
            rootMargin: '-30% 0px -70% 0px',
            threshold: 0
        });

        sections.forEach(sectionRef => {
            if (sectionRef.current) observer.observe(sectionRef.current);
        });

        return () => {
             sections.forEach(sectionRef => {
                if (sectionRef.current) observer.unobserve(sectionRef.current);
            });
        };
    }, []);
    
    useEffect(() => {
        document.title = `${portfolioData.name} | Personal Portfolio`;
    }, []);


    return (
        <div className="bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 font-sans">
             <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
                body { font-family: 'Inter', sans-serif; }
            `}</style>
            <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
                <div className="lg:flex lg:justify-between lg:gap-4">
                    <Header data={portfolioData} activeLink={activeLink} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
                    <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
                        <Section id="about" title="About" ref={aboutRef}>
                            {portfolioData.about.map((paragraph, index) => (
                                <p className="mb-4" key={index}>{paragraph}</p>
                            ))}
                        </Section>

                        <Section id="experience" title="Experience" ref={experienceRef}>
                             <ol className="group/list">
                                {portfolioData.experiences.map((exp, index) => (
                                    <li className="mb-12" key={index}>
                                        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-100/50 dark:lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                                            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label={exp.date}>{exp.date}</header>
                                            <div className="z-10 sm:col-span-6">
                                                <h3 className="font-medium leading-snug text-slate-900 dark:text-slate-200">
                                                    <div>
                                                        <a className="inline-flex items-baseline font-medium leading-tight text-slate-900 dark:text-slate-200 hover:text-sky-500 dark:hover:text-teal-300 focus-visible:text-sky-500 dark:focus-visible:text-teal-300 group/link text-base" href={exp.companyLink} target="_blank" rel="noreferrer noopener" aria-label={`${exp.role} at ${exp.company}`}>
                                                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                                            <span>{exp.role} · <span className="inline-block">{exp.company}<ExternalLinkIcon/></span></span>
                                                        </a>
                                                    </div>
                                                </h3>
                                                <p className="mt-2 text-sm leading-normal">{exp.description}</p>
                                                <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                                                    {exp.technologies.map(tech => (
                                                        <li key={tech} className="mr-1.5 mt-2">
                                                            <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-600 dark:bg-teal-400/10 dark:text-teal-300">
                                                                {tech}
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ol>
                        </Section>

                        <Section id="projects" title="Projects" ref={projectsRef}>
                            <ul className="group/list">
                                {portfolioData.projects.map((proj, index) => (
                                   <li className="mb-12" key={index}>
                                        <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-100/50 dark:lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                                             <div className="z-10 sm:order-2 sm:col-span-6">
                                                <h3 className="font-medium leading-snug text-slate-900 dark:text-slate-200">
                                                    <a className="inline-flex items-baseline font-medium leading-tight text-slate-900 dark:text-slate-200 hover:text-sky-500 dark:hover:text-teal-300 focus-visible:text-sky-500 dark:focus-visible:text-teal-300 group/link text-base" href={proj.link} target="_blank" rel="noreferrer noopener" aria-label={proj.title}>
                                                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                                        <span>{proj.title} <ExternalLinkIcon/></span>
                                                    </a>
                                                </h3>
                                                <p className="mt-2 text-sm leading-normal">{proj.description}</p>
                                                 <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                                                    {proj.technologies.map(tech => (
                                                        <li key={tech} className="mr-1.5 mt-2">
                                                            <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-600 dark:bg-teal-400/10 dark:text-teal-300">
                                                                {tech}
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                   </li>
                                ))}
                            </ul>
                        </Section>
                        <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
                            <p className="flex items-center justify-center">
                                Hope you enjoy this little <EasterEggIcon></EasterEggIcon>.
                            </p>
                        </footer>
                    </main>
                </div>
            </div>
        </div>
    );
}