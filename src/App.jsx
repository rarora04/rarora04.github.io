import React from 'react';

const portfolioData = {
  header: {
    name: "Rahul Arora",
    title: "Student",
    university: "Rice University Class of 2027 - Computer Science & Mathematics",
    profilePic: "/Photo.JPG",
    navLinks: [
      { name: "About Me", href: "#about" },
      { name: "Resume", href: "Rahul Resume.pdf", target: "_blank" },
      { name: "GitHub", href: "https://github.com/rarora04", target: "_blank" },
      { name: "LinkedIn", href: "https://www.linkedin.com/in/rarora04", target: "_blank" }, 
      { name: "Portfolio", href: "#portfolio" },
    ],

    socialLinks: [
      { iconClass: "fab fa-linkedin", href: "https://www.linkedin.com/in/rarora04", label: "LinkedIn" },
      { iconClass: "fab fa-github", href: "https://github.com/rarora04", label: "GitHub" },
      { iconClass: "fas fa-envelope", href: "mailto:ra80@rice.edu", label: "Email" },
    ],
  },


  about: {
    heading: "Hi, I'm Rahul!",
    subheading: "",
    content: (<></>
    ),
  },

  highlights: [
  ],

  projects: {
  },
};


function App() {
  return (
    <div className="min-h-screen bg-gray-900 font-sans antialiased text-gray-100">
      <script src="https://kit.fontawesome.com/48ce21e03f.js" crossOrigin="anonymous"></script>
      <header id="header" className="bg-gray-800 shadow-lg p-4 z-50 border-b border-gray-700">
        <div className="container mx-auto flex flex-col items-center">
          <nav className="mb-4">
            <ul className="flex flex-wrap justify-center space-x-4 md:space-x-6 text-lg list-none p-0">
              {portfolioData.header.navLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} target={link.target || "_self"} className="text-gray-200 hover:text-amber-400 transition duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="inner flex flex-col items-center py-4">
            <img
              src={portfolioData.header.profilePic}
              alt="profilePic"
              className="w-48 h-48 rounded-full border-4 border-amber-400 object-cover mb-4"
            />
            <h1 className="text-5xl font-extrabold text-amber-400 mb-2"><strong>{portfolioData.header.name}</strong></h1>
            <h3 className="text-2xl text-gray-200 mb-2">{portfolioData.header.title}</h3>
            <p className="text-xl text-gray-300 font-semibold mb-4 text-center">{portfolioData.header.university}</p>
            <ul className="flex space-x-6 mb-6 list-none p-0">
              {portfolioData.header.socialLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-amber-400 transition duration-300 text-3xl">
                    <i className={link.iconClass}></i><span className="sr-only">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
            <a href="#about" className="button inline-block bg-amber-400 text-gray-900 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-amber-500 transition duration-300 transform hover:scale-105">
              About Me
            </a>
          </div>
        </div>
      </header>

      <section id="about" className="main style1 py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <header className="major mb-6">
                <h2 className="text-4xl font-bold text-amber-400 mb-2">{portfolioData.about.heading}</h2>
                <p className="text-xl text-gray-300 font-semibold">{portfolioData.about.subheading}</p>
              </header>
              <p className="text-lg text-gray-200 leading-relaxed space-y-4">
                {portfolioData.about.content}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="three" className="main style2 py-16 bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <header className="major mb-8">
            <h2 className="text-4xl font-bold text-amber-400 mb-2">Highlights</h2>
            <p className="text-xl text-gray-300">A few of my milestones over the past few years</p>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.highlights.map((highlight, index) => (
              <div key={index} className="flex flex-col items-center bg-gray-900 p-6 rounded-lg shadow-xl border border-gray-700 hover:shadow-2xl transition duration-300 transform hover:scale-105">
                <img
                  src={highlight.image}
                  alt={highlight.title}
                  className="w-32 h-32 rounded-full object-cover mb-4 border-2 border-amber-400"
                />
                <h3 className="text-2xl font-semibold text-gray-100 mb-2">{highlight.title}</h3>
                <p className="text-gray-300 text-center">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="main style1 special py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-amber-400 mb-2">Portfolio</h2>
            <h5 className="text-lg text-gray-300 italic">Personal Projects in Github</h5>
          </div>
          {Object.entries(portfolioData.projects).map(([year, projectsInYear]) => (
            <React.Fragment key={year}>
              <h2 className="text-3xl font-bold text-amber-400 text-center mb-4 mt-12">{year}</h2>
              <hr className="border-gray-700 mb-8" />
              {projectsInYear.map((project, index) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start mb-12 bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700">
                  <div className="md:col-span-1 flex justify-center items-center">
                    <i className={`${project.icon} text-amber-400 text-5xl`}></i>
                  </div>
                  <div className="md:col-span-1 text-center md:text-left">
                    <p className="text-lg font-bold text-gray-200 mb-1">{project.date}</p>
                    <h6 className="text-sm text-gray-400 mb-2">Topics: {project.topics}</h6>
                    <ul className="flex justify-center md:justify-start space-x-4 list-none p-0">
                      {project.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-amber-400 transition duration-300 text-xl">
                            <i className={link.iconClass}></i><span className="sr-only">{link.label}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="md:col-span-3">
                    <h3 className="text-2xl font-semibold text-gray-100 mb-2">{project.title}</h3>
                    <p className="text-base text-gray-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
