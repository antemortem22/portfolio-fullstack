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

  return (
    <MotionReveal className="border-t border-white/8">
      <button
        type="button"
        onClick={() => onOpen(project)}
        className="group grid w-full gap-8 px-5 py-8 text-left transition-colors duration-300 hover:bg-[rgba(26,18,36,0.92)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-soft)] focus-visible:ring-inset sm:px-7 lg:grid-cols-[56px_minmax(0,1.05fr)_minmax(280px,0.72fr)] lg:items-center lg:gap-10 lg:px-10 lg:py-10"
      >
        <div className="type-number pt-1 text-[0.68rem] transition-colors duration-300 group-hover:text-[var(--color-accent-soft)]">
          {String(index + 1).padStart(2, "0")}
        </div>

        <div className="min-w-0">
          <p className="type-meta text-[0.6rem]">
            {project.category || "PROJECT"}
          </p>
          <h3 className="type-heading-display mt-3 max-w-4xl text-[2rem] uppercase leading-[1.08] transition-colors duration-300 group-hover:text-[var(--color-accent-soft)] sm:text-[2.5rem] lg:text-[2.9rem]">
            {project.title}
          </h3>
          <div className="mt-5 flex flex-wrap gap-2">
            <TechTag>{project.statusLabel ?? "IN PROGRESS"}</TechTag>
          </div>
        </div>

        <div className="lg:justify-self-end">
          {previewSrc ? (
            <div className="relative aspect-[1.55/1] w-full overflow-hidden border border-white/8 bg-black/40 shadow-[0_16px_40px_rgba(0,0,0,0.28)] transition-transform duration-300 group-hover:-translate-y-0.5 lg:max-w-[360px]">
              <Image
                src={previewSrc}
                alt={project.imageAlt?.[locale] ?? `${project.title} preview`}
                width={720}
                height={464}
                sizes="(max-width: 1024px) 100vw, 360px"
                className="h-full w-full object-cover object-center grayscale transition duration-500 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,3,6,0.02)_0%,rgba(4,3,6,0.16)_100%)]" />
            </div>
          ) : (
            <div className="flex aspect-[1.55/1] w-full items-center justify-center border border-white/8 bg-[rgba(14,12,18,0.78)] lg:max-w-[360px]">
              <span className="type-meta text-[0.62rem] text-[var(--color-copy)]">
                Preview unavailable
              </span>
            </div>
          )}
        </div>
      </button>
    </MotionReveal>
  );
}
