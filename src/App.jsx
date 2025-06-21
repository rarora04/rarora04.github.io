import React, { useRef, useEffect, useState } from 'react';

const FadeInOnScroll = ({ children, delay = 0, direction = 'bottom', startScale = 0.98 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !isVisible) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.1
    });

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current);
      }
    };
  }, [isVisible]);

  const getInitialTransformClasses = () => {
    let translateClasses = '';
    switch (direction) {
      case 'left':
        translateClasses = 'translate-x-[-20px]';
        break;
      case 'right':
        translateClasses = 'translate-x-[20px]';
        break;
      case 'bottom':
      default:
        translateClasses = 'translate-y-[20px]';
        break;
    }
    return translateClasses;
  };

  return (
    <div
      ref={domRef}
      className={`
        transform transition-all duration-1000 ease-out
        ${isVisible ? 'opacity-100 translate-x-0 translate-y-0 scale-100' : `opacity-0 ${getInitialTransformClasses()} scale-[${startScale}]`}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};


const portfolioData = {
  sidebar: {
    name: "Rahul Arora",
    title: "Learner",
    university: "Rice University - CS, Math, FCAM",
    profilePic: {
      light: "/icon_light.png",
      dark: "/icon_dark.png"
    },
    navLinks: [
      { name: "Projects", href: "#portfolio" },
      { name: "Experiences", href: "#experiences" },
      { name: "Resume", href: "/Rahul Resume.pdf", target: "_blank" },
    ],
    socialLinks: [
      { type: "github", href: "https://github.com/rarora04", label: "GitHub" },
      { type: "linkedin", href: "https://www.linkedin.com/in/rarora04", label: "LinkedIn" },
      { type: "email", href: "mailto:rahul.vp.arora@gmail.com", label: "Email" },
    ],
  },

  about: {
    heading: "Hi, I'm Rahul!",
    content: (
      <>
        I'm a CS & Math double major at Rice University interested in applying my skills to financial modeling.
      </>
    ),
    image: "/Photo.JPG",
  },

  experiences: [
    {
      image: "/GCM_logo.png",
      title: "SWE Intern @ GCM",
      year: "2025",
      description: "API Gateway",
    },
    {
      image: "/Rice_logo.png",
      title: "Theoretical CS Researcher",
      year: "2025",
      description: "Augmented Distribution Testing",
    },
    {
      image: "/PROS_logo.png",
      title: "SWE Intern @ PROS",
      year: "2024",
      description: "API Pipeline",
    },
  ],

  projects: [
    
  ],
};

const SocialIconSVG = ({ type, sizeClasses = 'h-6 w-6' }) => {
  let svgPath;
  switch (type) {
    case 'github':
      svgPath = "M12 0C5.372 0 0 5.372 0 12c0 5.303 3.438 9.799 8.205 11.385.6.11.82-.26.82-.577v-2.222c-3.33.72-4.035-1.61-4.035-1.61-.546-1.387-1.332-1.758-1.332-1.758-1.09-.745.08-.73.08-.73 1.205.085 1.838 1.238 1.838 1.238 1.07 1.835 2.809 1.305 3.49.998.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.12-.3-.53-1.52.115-3.175 0 0 1.005-.32 3.3 1.23.955-.265 1.975-.4 3-.405 1.025.005 2.045.14 3 .405 2.295-1.55 3.3-1.23 3.3-1.23.645 1.655.235 2.875.115 3.175.77.84 1.235 1.91 1.235 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.29c0 .318.21.69.825.575C20.565 21.794 24 17.3 24 12c0-6.628-5.372-12-12-12z";
      break;
    case 'linkedin':
      svgPath = "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z";
      break;
    case 'email':
      svgPath = "M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 4v7a2 2 0 002 2h14a2 2 0 002-2v-7m-18 0l7.89 5.26a2 2 0 002.22 0L21 12";
      break;
    default:
      return null;
  }

  return (
    <svg className={`${sizeClasses} transition duration-300`} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d={svgPath} clipRule="evenodd"></path>
    </svg>
  );
};


function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };


  useEffect(() => {
    document.title = `${portfolioData.sidebar.name} - Personal Portfolio`;
  }, [portfolioData.sidebar.name]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-800 font-['Lora',serif] antialiased text-gray-900 dark:text-gray-100 flex flex-col md:flex-row">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&display=swap');
      </style>

      <header className="md:hidden bg-white dark:bg-gray-800 shadow-lg p-4 z-50 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-black dark:text-gray-100">{portfolioData.sidebar.name}</h1>
          <nav className="flex items-center space-x-4">
            <ul className="flex space-x-4">
              {portfolioData.sidebar.navLinks.slice(0, 3).map((link, index) => (
                <li key={index}>
                  <a href={link.href} target={link.target || "_self"} className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" stroke="none">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"> {/* Crescent outline */}
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </nav>
        </div>
      </header>

      <aside className="hidden md:block md:w-80 md:flex-shrink-0 md:fixed md:h-screen md:overflow-y-auto bg-white dark:bg-gray-800 p-8 shadow-xl">
        <div className="flex flex-col items-center py-4 h-full justify-between">
          <div className="flex flex-col items-center">
            <button
              onClick={toggleDarkMode}
              className="self-end p-2 rounded-full text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300 mb-4"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" stroke="none">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"> {/* Crescent outline */}
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            <img
              src={isDarkMode ? portfolioData.sidebar.profilePic.dark : portfolioData.sidebar.profilePic.light}
              alt="Portrait of Your Name"
              className="w-48 h-48 rounded-full border-4 border-black dark:border-gray-700 object-cover mb-4"
            />
            <h1 className="text-4xl font-extrabold text-black dark:text-gray-100 mb-2 text-center"><strong>{portfolioData.sidebar.name}</strong></h1>
            <h3 className="text-xl text-gray-900 dark:text-gray-200 mb-2 text-center">{portfolioData.sidebar.title}</h3>
            <p className="text-md text-gray-700 dark:text-gray-300 font-semibold mb-2 text-center">{portfolioData.sidebar.university}</p>
          </div>

          <nav className="w-full text-center flex-grow flex items-center justify-center my-6">
            <ul className="space-y-1 list-none p-0">
              {portfolioData.sidebar.navLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} target={link.target || "_self"} className="block p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300 text-base font-medium">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="flex space-x-6 justify-center list-none p-0 pt-6 border-t border-gray-200 dark:border-gray-700 w-full">
            {portfolioData.sidebar.socialLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} target="_blank" rel="noopener noreferrer" className="inline-block hover:scale-110 transition-transform duration-300 text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">
                  <SocialIconSVG type={link.type} sizeClasses="h-8 w-8" />
                  <span className="sr-only">{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      <main className="w-full md:ml-80 md:flex-grow pt-16 md:pt-0">
        <FadeInOnScroll direction="bottom" startScale={0.98}>
          <section id="about" className="main style1 py-16 bg-white dark:bg-gray-800">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-2">
                  <header className="major mb-6">
                    <h2 className="text-4xl font-bold text-black dark:text-gray-100 mb-2">{portfolioData.about.heading}</h2>
                  </header>
                  <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed space-y-4">
                    {portfolioData.about.content}
                  </p>
                </div>
                <div className="md:col-span-1 flex justify-center items-center">
                  <img
                    src={portfolioData.about.image}
                    alt="Image related to About section"
                    className="rounded-lg shadow-xl w-full max-w-sm object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
        </FadeInOnScroll>

        <FadeInOnScroll direction="bottom" delay={100} startScale={0.98}>
          <section id="experiences" className="main style2 py-16 bg-gray-100 dark:bg-gray-800">
            <div className="container mx-auto px-4 text-center">
              <header className="major mb-8">
                <h2 className="text-4xl font-bold text-black dark:text-gray-100 mb-2">Experiences</h2>
                <p className="text-xl text-gray-700 dark:text-gray-300">A few of my milestones over the past few years</p>
              </header>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolioData.experiences.map((experience, index) => (
                  <FadeInOnScroll key={index} delay={index * 100} direction="bottom" startScale={0.98}>
                    <div className="flex flex-col items-center bg-white dark:bg-gray-900 p-6 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition duration-300 transform hover:scale-105 group">
                      <div className="flex items-center justify-center mb-4 w-full">
                        <img
                          src={experience.image}
                          alt={experience.title}
                          className="w-32 h-32 rounded-full border-4 border-black dark:border-gray-700"
                        />
                      </div>
                      <div className="flex items-center justify-center mb-2">
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition duration-300">{experience.title}</h3>
                        {experience.year && (
                          <span className="ml-2 px-2 py-1 text-xs font-bold rounded-full bg-blue-600 dark:bg-blue-400 text-white dark:text-gray-900 transition duration-300">
                            {experience.year}
                          </span>
                        )}
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 text-center">{experience.description}</p>
                    </div>
                  </FadeInOnScroll>
                ))}
              </div>
            </div>
          </section>
        </FadeInOnScroll>

        <FadeInOnScroll direction="bottom" delay={200} startScale={0.98}>
          <section id="portfolio" className="main style1 special py-16 bg-white dark:bg-gray-800">
            <div className="container mx-auto px-4">
              <div className="text-center mb-10">
                <h2 className="text-4xl font-bold text-black dark:text-gray-100 mb-2">Portfolio</h2>
                <h5 className="text-lg text-gray-700 dark:text-gray-300">Explore my recent work</h5>
              </div>

              {portfolioData.projects.map((project, index) => (
                <FadeInOnScroll key={index} delay={index * 150} direction={index % 2 === 0 ? "left" : "right"} startScale={0.98}>
                  <div
                    className={`
                      flex flex-col items-center gap-8 md:gap-16 my-12 p-8 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700
                      ${index % 2 === 0 ? 'bg-gray-100 dark:bg-gray-900 md:flex-row' : 'bg-gray-100 dark:bg-gray-900 md:flex-row-reverse'}
                      hover:shadow-2xl transition duration-300 transform hover:scale-[1.01] group
                    `}
                  >
                    <div className="w-full md:w-1/2">
                      <img
                        src={project.image}
                        alt={project.altText}
                        className="rounded-lg shadow-lg w-full h-auto object-cover border border-gray-200 dark:border-gray-700"
                      />
                    </div>
                    <div className="w-full md:w-1/2 text-center md:text-left">
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition duration-300 mb-4">{project.title}</h3>
                      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                        {project.description}
                      </p>
                      <div className="flex justify-center md:justify-start space-x-4">
                        {project.buttons.map((button, btnIndex) => (
                          <a
                            key={btnIndex}
                            href={button.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`
                              inline-block py-3 px-6 rounded-md font-semibold transition duration-300 transform hover:scale-105
                              ${button.type === 'primary' ? 'bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-400 dark:text-gray-900 dark:hover:bg-blue-500' : 'bg-gray-300 text-gray-900 hover:bg-gray-400 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600'}
                            `}
                          >
                            {button.text}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </FadeInOnScroll>
              ))}
            </div>
          </section>
        </FadeInOnScroll>

        <footer id="footer" className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-400 py-6 text-center border-t border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4">
            <ul className="copyright text-sm list-none p-0">
              <li>©{new Date().getFullYear()} {portfolioData.sidebar.name}</li>
            </ul>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
