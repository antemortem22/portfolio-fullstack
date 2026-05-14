import { projects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-20">
      <div className="section-heading">
        <p>Portfolio</p>
        <h2>Proyectos Destacados</h2>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {projects.map((project, index) => (
          <article key={project.title} className="goth-card group overflow-hidden">
            <div className="relative h-40 border-b border-white/10 bg-black">
              <div className="absolute inset-4 border border-primary/30 bg-[radial-gradient(circle_at_50%_0%,rgba(124,81,192,0.35),transparent_42%)]" />
              <div className="absolute inset-x-8 bottom-8 h-14 rounded-sm bg-gradient-to-r from-primary-light/50 to-primary opacity-80 blur-xl" />
              <span className="absolute left-5 top-5 text-xs uppercase tracking-[0.25em] text-zinc-500">
                0{index + 1}
              </span>
            </div>
            <div className="p-6">
              <p className="text-xs uppercase tracking-[0.22em] text-primary-light">
                {project.category}
              </p>
              <h3 className="mt-3 font-subtitle text-2xl text-white">{project.title}</h3>
              <p className="mt-4 min-h-24 text-sm leading-7 text-zinc-400">
                {project.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="border border-white/10 px-2 py-1 text-[11px] text-zinc-400">
                    {tag}
                  </span>
                ))}
              </div>
              <a href={project.href} className="mt-6 inline-flex text-sm font-semibold text-primary-light">
                Ver proyecto
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
