"use client";

import Image from "next/image";
import { projects, projectsCopy } from "@/data/projects";
import { useLanguage } from "@/context/LanguageContext";

export function ProjectsSection() {
  const { locale } = useLanguage();
  const hasThreeOrMoreProjects = projects.length >= 3;

  return (
    <section id="projects" className="section-shell">
      <div className="section-heading">
        <p>{projectsCopy.eyebrow[locale]}</p>
        <h2>{projectsCopy.title[locale]}</h2>
      </div>
      <div
        className={`mx-auto mt-7 grid w-full grid-cols-1 gap-5 sm:mt-12 sm:gap-7 lg:gap-8 ${
          hasThreeOrMoreProjects
            ? "max-w-[1180px] md:grid-cols-2 xl:grid-cols-3"
            : "max-w-[860px] md:grid-cols-2"
        }`}
      >
        {projects.map((project) => (
          <article key={project.title} className="goth-card group overflow-hidden">
            <div className="relative h-36 border-b border-white/10 bg-black sm:h-40">
              {project.image ? (
                <>
                  <Image
                    src={project.image}
                    alt={project.imageAlt?.[locale] ?? project.title}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 33vw"
                    className="object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03)_0%,rgba(255,255,255,0)_18%,rgba(3,3,5,0.18)_52%,rgba(3,3,5,0.48)_100%)]" />
                </>
              ) : null}
              <div className="absolute inset-x-10 bottom-5 h-12 rounded-full bg-gradient-to-r from-primary-light/35 to-primary/70 opacity-75 blur-2xl" />
            </div>
            <div className="p-4 sm:p-5">
              <p className="text-xs uppercase tracking-[0.22em] text-primary-light">
                {project.category}
              </p>
              <h3 className="mt-3 font-subtitle text-[1.85rem] text-white">{project.title}</h3>
              <p className="mt-3 min-h-0 text-sm leading-6 text-zinc-400 sm:mt-4 sm:min-h-20 sm:leading-7">
                {project.description[locale]}
              </p>
              <div className="mt-4 flex flex-wrap gap-2 sm:mt-5">
                {project.tags.map((tag) => (
                  <span key={tag} className="border border-white/10 px-2 py-1 text-[11px] text-zinc-400">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex flex-col items-start gap-1.5 sm:mt-5">
                <a
                  href={project.repositoryUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex text-sm font-semibold text-primary-light transition hover:text-white"
                >
                  {projectsCopy.repositoryLabel[locale]} <span className="ml-2">→</span>
                </a>
                {project.projectUrl ? (
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex text-sm font-semibold text-primary-light transition hover:text-white"
                  >
                    {projectsCopy.projectLabel[locale]} <span className="ml-2">→</span>
                  </a>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
