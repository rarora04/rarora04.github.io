import React from 'react';

const ExternalLinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
      clipRule="evenodd"
    ></path>
  </svg>
);

const colorThemes = {
  blue: {
    linkClasses:
      "hover:text-sky-500 dark:hover:text-sky-300 focus-visible:text-sky-500 dark:focus-visible:text-sky-300",
    tagClasses: "bg-sky-400/10 text-sky-600 dark:text-sky-300",
  },
  red: {
    linkClasses:
      "hover:text-red-500 dark:hover:text-red-400 focus-visible:text-red-500 dark:focus-visible:text-red-400",
    tagClasses: "bg-red-400/10 text-red-600 dark:text-red-300",
    backButtonClasses: "text-red-500 dark:text-red-400",
  },
};

const ProjectItem = ({ project, themeColor }) => {
  const theme = colorThemes[themeColor] || colorThemes.blue;
  const isInternalLink = project.link === 'quant-portfolio';
  const isExternalLink = project.link && !isInternalLink;

  const linkProps = isExternalLink
    ? { href: project.link, target: '_blank', rel: 'noreferrer noopener' }
    : {};

  const Component = isExternalLink ? 'a' : 'div';

  return (
    <li className="group mb-12">
      <div className="relative grid gap-4 p-4 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4
        lg:hover:!opacity-100 lg:group-hover/list:opacity-50
        transform duration-150 ease-[cubic-bezier(.4,2,.6,1)]
        hover:scale-[1.01] hover:shadow-lg
        active:scale-[0.99] active:translate-y-0.5 active:shadow-inner
        rounded-lg
      ">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none
          lg:-inset-x-6 lg:block
          group-hover:bg-white/30 dark:group-hover:bg-slate-800/50
          group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]
          group-hover:drop-shadow-sm
        "></div>
        <div className="z-10 sm:col-span-8">
          <h3 className="font-medium leading-snug text-slate-900 dark:text-slate-200">
            <Component
              className={`inline-flex items-baseline font-medium leading-tight text-slate-900 dark:text-slate-200 ${theme.linkClasses} group/link text-base`}
              {...linkProps}
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
              <span>
                {project.title}{" "}
                {isExternalLink && <ExternalLinkIcon />}
              </span>
            </Component>
          </h3>
          <p className="mt-2 text-sm leading-normal">{project.description}</p>
          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            {project.technologies.map(tech => (
              <li key={tech} className="mr-1.5 mt-2">
                <div className={`flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5 ${theme.tagClasses}`}>
                  {tech}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
};

const QuantPortfolioPage = ({ projects, onBackClick }) => {
  const theme = colorThemes.red;
  return (
    <div className="bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 font-sans">
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24">
        <div className="lg:w-1/2 lg:mx-auto">
          <div className="mb-12">
            <button
              onClick={onBackClick}
              className={`group mb-4 flex items-center font-semibold leading-tight ${theme.backButtonClasses} ${theme.linkClasses}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mr-1 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-1" aria-hidden="true"><path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd"></path></svg>
              Back to Portfolio
            </button>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-200 sm:text-5xl">Quant Portfolio</h1>
            <p className="mt-4 leading-normal">A collection of my projects in quantitative finance and data modeling.</p>
          </div>
          <ul className="group/list">
            {projects.map((proj, index) => (
              <ProjectItem key={index} project={proj} themeColor="red" />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default QuantPortfolioPage;