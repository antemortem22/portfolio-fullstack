import Image from "next/image";
import { MotionReveal } from "@/components/motion/MotionReveal";
import { TechTag } from "@/components/shared/TechTag";
import type { Locale, Project } from "@/types/content";

type ProjectRowProps = {
  project: Project;
  index: number;
  locale: Locale;
  onOpen: (project: Project) => void;
};

const localProjectPreviewByTitle: Record<string, string> = {
  "portfolio full stack": "/project-portfolio-preview.png",
  restaurantapp: "/project-restaurant-app.png",
};

export function resolveProjectPreview(project: Project) {
  return project.image ?? localProjectPreviewByTitle[project.title.trim().toLowerCase()];
}

export function ProjectRow({ project, index, locale, onOpen }: ProjectRowProps) {
  const previewSrc = resolveProjectPreview(project);
  const isPriorityPreview = index === 0 || previewSrc === "/project-invitation.png";

  return (
    <MotionReveal className="border-t border-white/8">
      <article className="group relative overflow-hidden transition-colors duration-300 hover:bg-[rgba(26,18,36,0.92)]">
        <button
          type="button"
          onClick={() => onOpen(project)}
          className="absolute inset-0 z-0 h-full w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-soft)] focus-visible:ring-inset"
          aria-label={`Open ${project.title}`}
        />

        <div className="pointer-events-none relative z-10 grid w-full gap-6 px-4 py-7 text-left sm:px-7 sm:py-8 lg:grid-cols-[56px_minmax(0,1.05fr)_minmax(280px,0.72fr)] lg:items-center lg:gap-10 lg:px-10 lg:py-10">
          <div className="type-number pt-1 text-[0.68rem] transition-colors duration-300 group-hover:text-[var(--color-accent-soft)]">
            {String(index + 1).padStart(2, "0")}
          </div>

          <div className="min-w-0">
            <p className="type-meta text-[0.6rem]">
              {project.category || "PROJECT"}
            </p>
            <h3 className="type-heading-display mt-3 max-w-4xl text-[1.7rem] uppercase leading-[1.05] transition-colors duration-300 group-hover:text-[var(--color-accent-soft)] sm:text-[2.2rem] lg:text-[2.9rem]">
              {project.title}
            </h3>
            <div className="mt-5 flex flex-wrap gap-2">
              <TechTag>{project.statusLabel ?? "IN PROGRESS"}</TechTag>
            </div>

            {(project.repositoryUrl || project.projectUrl) ? (
              <div className="pointer-events-auto mt-5 hidden flex-wrap items-center gap-2.5 opacity-0 transition duration-300 group-hover:opacity-100 group-focus-within:opacity-100 md:flex">
                {project.repositoryUrl ? (
                  <a
                    href={project.repositoryUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-8 items-center justify-center gap-1.5 rounded-[0.55rem] border border-[rgba(181,138,221,0.34)] bg-[rgba(16,16,21,0.78)] px-3 text-[0.58rem] font-medium tracking-[0.05em] text-[var(--color-accent-soft)] transition duration-300 hover:-translate-y-0.5 hover:border-[rgba(181,138,221,0.62)] hover:bg-[rgba(30,20,42,0.98)] hover:text-white hover:shadow-[0_14px_28px_rgba(61,24,92,0.26)]"
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5 fill-current">
                      <path d="M12 2C6.48 2 2 6.58 2 12.24c0 4.53 2.87 8.38 6.84 9.73.5.1.68-.22.68-.5 0-.24-.01-1.05-.01-1.9-2.78.62-3.36-1.22-3.36-1.22-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .08 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.72 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.84c.85 0 1.7.12 2.5.37 1.9-1.33 2.74-1.05 2.74-1.05.55 1.42.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.95-2.35 4.81-4.58 5.06.36.32.69.95.69 1.92 0 1.38-.01 2.5-.01 2.84 0 .28.18.61.69.5A10.27 10.27 0 0 0 22 12.24C22 6.58 17.52 2 12 2Z" />
                    </svg>
                    <span>GitHub</span>
                  </a>
                ) : null}

                {project.projectUrl ? (
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-8 items-center justify-center gap-1.5 rounded-[0.55rem] border border-[color:rgba(181,138,221,0.38)] bg-[var(--color-accent)] px-3 text-[0.58rem] font-semibold uppercase tracking-[0.08em] text-white transition duration-300 hover:-translate-y-0.5 hover:border-[color:rgba(181,138,221,0.62)] hover:bg-[var(--color-accent-deep)] hover:shadow-[0_14px_28px_rgba(61,24,92,0.3)]"
                  >
                    <span>{locale === "es" ? "Ver sitio" : "View site"}</span>
                    <span aria-hidden="true" className="text-[0.68rem] leading-none">
                      ↗
                    </span>
                  </a>
                ) : null}
              </div>
            ) : null}
          </div>

          <div className="lg:justify-self-end">
            {previewSrc ? (
              <div className="relative aspect-[1.55/1] w-full overflow-hidden border border-white/8 bg-black/40 shadow-[0_16px_40px_rgba(0,0,0,0.28)] transition-transform duration-300 group-hover:-translate-y-0.5 sm:max-w-[420px] lg:max-w-[360px]">
                <Image
                  src={previewSrc}
                  alt={project.imageAlt?.[locale] ?? `${project.title} preview`}
                  width={720}
                  height={464}
                  priority={isPriorityPreview}
                  loading={isPriorityPreview ? "eager" : "lazy"}
                  sizes="(max-width: 1024px) 100vw, 360px"
                  className="h-full w-full object-cover object-center grayscale transition duration-500 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,3,6,0.02)_0%,rgba(4,3,6,0.16)_100%)]" />
              </div>
            ) : (
              <div className="flex aspect-[1.55/1] w-full items-center justify-center border border-white/8 bg-[rgba(14,12,18,0.78)] sm:max-w-[420px] lg:max-w-[360px]">
                <span className="type-meta text-[0.62rem] text-[var(--color-copy)]">
                  Preview unavailable
                </span>
              </div>
            )}
          </div>
        </div>
      </article>
    </MotionReveal>
  );
}
