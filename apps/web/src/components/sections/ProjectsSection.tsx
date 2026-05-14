"use client";

import { projects, projectsCopy } from "@/data/projects";
import { useLanguage } from "@/context/LanguageContext";

export function ProjectsSection() {
  const { locale } = useLanguage();

  return (
    <section id="projects" className="section-shell">
      <div className="section-heading">
        <p>{projectsCopy.eyebrow[locale]}</p>
        <h2>{projectsCopy.title[locale]}</h2>
      </div>
      <div className="mt-7 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-3 lg:gap-6">
        {projects.map((project, index) => (
          <article key={project.title} className="goth-card group overflow-hidden">
            <div className="relative h-28 border-b border-white/10 bg-black sm:h-40">
              <div className="absolute inset-4 border border-primary/30 bg-[radial-gradient(circle_at_50%_0%,rgba(124,81,192,0.35),transparent_42%)]" />
              <div className="absolute inset-x-8 bottom-8 h-14 rounded-sm bg-gradient-to-r from-primary-light/50 to-primary opacity-80 blur-xl" />
              <span className="absolute left-5 top-5 text-xs uppercase tracking-[0.25em] text-zinc-500">
                0{index + 1}
              </span>
            </div>
            <div className="p-4 sm:p-6">
              <p className="text-xs uppercase tracking-[0.22em] text-primary-light">
                {project.category}
              </p>
              <h3 className="mt-3 font-subtitle text-2xl text-white">{project.title}</h3>
              <p className="mt-3 min-h-0 text-sm leading-6 text-zinc-400 sm:mt-4 sm:min-h-24 sm:leading-7">
                {project.description[locale]}
              </p>
              <div className="mt-4 flex flex-wrap gap-2 sm:mt-6">
                {project.tags.map((tag) => (
                  <span key={tag} className="border border-white/10 px-2 py-1 text-[11px] text-zinc-400">
                    {tag}
                  </span>
                ))}
              </div>
              <a href={project.href} className="mt-4 inline-flex text-sm font-semibold text-primary-light sm:mt-6">
                {projectsCopy.linkLabel[locale]}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
