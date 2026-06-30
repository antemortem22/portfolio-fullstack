"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { MotionReveal } from "@/components/motion/MotionReveal";
import { ProjectRow, resolveProjectPreview } from "@/components/shared/ProjectRow";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TechTag } from "@/components/shared/TechTag";
import { useLanguage } from "@/context/LanguageContext";
import { projectsCopy } from "@/data/projects";
import type { Project } from "@/types/content";

type ProjectsSectionProps = {
  projects: Project[];
  state: "loading" | "ready" | "empty" | "error";
};

function normalizeProjectStatus(status?: string) {
  const normalized = status?.trim().toLowerCase() ?? "";

  if (normalized === "completed") {
    return "completed";
  }

  if (normalized === "archived") {
    return "archived";
  }

  return "in-progress";
}

function getProjectStatusConfig(status?: string, locale: "es" | "en" = "es") {
  const normalized = normalizeProjectStatus(status);

  if (normalized === "completed") {
    return {
      label: locale === "es" ? "COMPLETADO" : "COMPLETED",
      dotClassName: "bg-[rgba(181,138,221,0.92)]",
      tagClassName:
        "border-[rgba(181,138,221,0.42)] bg-[rgba(122,56,181,0.16)] text-[var(--color-accent-soft)]",
    };
  }

  if (normalized === "archived") {
    return {
      label: locale === "es" ? "ARCHIVADO" : "ARCHIVED",
      dotClassName: "bg-[rgba(149,125,176,0.7)]",
      tagClassName:
        "border-[rgba(149,125,176,0.36)] bg-[rgba(84,70,100,0.18)] text-[rgba(210,195,226,0.84)]",
    };
  }

  return {
    label: locale === "es" ? "EN PROGRESO" : "IN PROGRESS",
    dotClassName: "bg-[var(--color-accent-soft)]",
    tagClassName:
      "border-[rgba(181,138,221,0.42)] bg-[rgba(122,56,181,0.16)] text-[var(--color-accent-soft)]",
  };
}

function ModalIconButton({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      title={label}
      className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-[0.6rem] border border-[rgba(181,138,221,0.34)] bg-[rgba(16,16,21,0.78)] px-3 text-[0.64rem] font-medium tracking-[0.06em] text-[var(--color-accent-soft)] transition duration-300 hover:border-[rgba(181,138,221,0.54)] hover:bg-[rgba(21,19,26,0.96)] hover:text-white"
    >
      {children}
      <span>{label}</span>
    </a>
  );
}

function ModalLinkButton({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      title={label}
      className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-[0.6rem] border border-[color:rgba(181,138,221,0.38)] bg-[var(--color-accent)] px-3 text-[0.64rem] font-semibold uppercase tracking-[0.09em] text-white transition duration-300 hover:border-[color:rgba(181,138,221,0.54)] hover:bg-[var(--color-accent-deep)]"
    >
      <span>{label}</span>
      <span aria-hidden="true" className="text-[0.78rem] leading-none">
        ↗
      </span>
    </a>
  );
}

export function ProjectsSection({ projects, state }: ProjectsSectionProps) {
  const { locale } = useLanguage();
  const [visibleCount, setVisibleCount] = useState(3);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const publishedProjects = projects
    .filter((project) => project.published)
    .slice()
    .sort((left, right) => left.order - right.order);
  const visibleProjects = publishedProjects.slice(0, visibleCount);
  const hasMoreProjects = publishedProjects.length > visibleCount;
  const selectedPreview = selectedProject ? resolveProjectPreview(selectedProject) : undefined;
  const selectedStatusConfig = selectedProject ? getProjectStatusConfig(selectedProject.statusLabel, locale) : null;

  useEffect(() => {
    if (!selectedProject) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <Section
      id="projects"
      wide
      className="relative isolate overflow-hidden border-b border-white/8 py-20 sm:py-24"
      tone="default"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[#0f0e14]" />
      <div className="grid gap-10">
        <MotionReveal>
          <SectionHeading
            eyebrow={projectsCopy.eyebrow[locale]}
            title={projectsCopy.title[locale]}
            accent={projectsCopy.accent[locale]}
          />
        </MotionReveal>

        {state === "loading" ? (
          <MotionReveal className="type-body-muted border-t border-white/8 py-8">
            {projectsCopy.loading[locale]}
          </MotionReveal>
        ) : null}

        {state === "error" ? (
          <MotionReveal className="type-body-muted border-t border-white/8 py-8">
            {projectsCopy.error[locale]}
          </MotionReveal>
        ) : null}

        {state === "empty" ? (
          <MotionReveal className="type-body-muted border-t border-white/8 py-8">
            {projectsCopy.empty[locale]}
          </MotionReveal>
        ) : null}

        {state === "ready" ? (
          <div className="border-b border-white/8">
            {visibleProjects.map((project, index) => (
              <ProjectRow
                key={project.id}
                project={project}
                index={index}
                locale={locale}
                onOpen={setSelectedProject}
              />
            ))}

            {hasMoreProjects ? (
              <MotionReveal className="border-t border-white/8 px-5 py-8 sm:px-7 lg:px-10">
                <button
                  type="button"
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/12 bg-transparent px-5 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-white transition duration-300 hover:border-[color:rgba(181,138,221,0.38)] hover:bg-[rgba(21,19,26,0.92)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-soft)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
                  onClick={() => setVisibleCount((current) => current + 3)}
                >
                  {locale === "es" ? "Ver mas proyectos" : "View more projects"}
                </button>
              </MotionReveal>
            ) : null}
          </div>
        ) : null}
      </div>

      {selectedProject ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(8,7,10,0.78)] p-4 backdrop-blur-md"
          onClick={() => setSelectedProject(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={selectedProject.title}
            className="relative w-full max-w-6xl overflow-hidden border border-white/12 bg-[linear-gradient(180deg,rgba(14,13,18,0.98)_0%,rgba(10,10,13,0.98)_100%)] shadow-[0_30px_100px_rgba(0,0,0,0.45)]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label={locale === "es" ? "Cerrar proyecto" : "Close project"}
              onClick={() => setSelectedProject(null)}
              className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center border border-white/10 bg-[rgba(16,16,21,0.82)] text-[var(--color-copy)] transition hover:border-[rgba(181,138,221,0.38)] hover:text-white"
            >
              ×
            </button>

            <div className="grid lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)]">
              <div className="relative min-h-[320px] border-b border-white/8 bg-[rgba(14,12,18,0.86)] lg:min-h-[680px] lg:border-b-0 lg:border-r lg:border-white/8">
                {selectedPreview ? (
                  <Image
                    src={selectedPreview}
                    alt={selectedProject.imageAlt?.[locale] ?? `${selectedProject.title} preview`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                ) : null}
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,6,9,0.08)_0%,rgba(7,6,9,0.18)_100%)]" />
              </div>

              <div className="flex flex-col p-6 sm:p-8 lg:p-10">
                <p className="type-meta text-[0.62rem] text-[var(--color-accent-soft)]">
                  {selectedProject.category || "PROJECT"}
                </p>
                <div className="mt-6 inline-flex w-fit items-center gap-2 border border-[rgba(181,138,221,0.24)] bg-[rgba(22,18,29,0.7)] px-4 py-3">
                  <span className={`h-2 w-2 rounded-full ${selectedStatusConfig?.dotClassName ?? "bg-[var(--color-accent-soft)]"}`} />
                  <span className="type-meta text-[0.64rem]">
                    {selectedStatusConfig?.label ?? "IN PROGRESS"}
                  </span>
                </div>

                <h3 className="type-heading-display mt-8 text-[2.7rem] leading-[0.92] sm:text-[3.4rem]">
                  {selectedProject.title}
                </h3>

                <p className="mt-5 max-w-[34rem] text-[0.98rem] leading-[1.95] text-[rgba(217,210,225,0.76)]">
                  {selectedProject.description[locale]}
                </p>

                <div className="mt-8">
                  <p className="type-meta text-[0.62rem]">
                    STACK
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <TechTag
                        key={tag}
                        emphasized
                        className="border-[rgba(181,138,221,0.42)] bg-[rgba(122,56,181,0.16)] text-[var(--color-accent-soft)]"
                      >
                        {tag}
                      </TechTag>
                    ))}
                  </div>
                </div>

                <div
                  className={`mt-8 grid gap-3 ${
                    selectedProject.projectUrl
                      ? "grid-cols-1 sm:grid-cols-2"
                      : "grid-cols-1"
                  }`}
                >
                  {selectedProject.projectUrl ? (
                    <ModalLinkButton
                      href={selectedProject.projectUrl}
                      label={locale === "es" ? "Ver sitio" : "View site"}
                    />
                  ) : null}

                  {selectedProject.repositoryUrl ? (
                    <ModalIconButton
                      href={selectedProject.repositoryUrl}
                      label={projectsCopy.repositoryLabel[locale]}
                    >
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
                        <path d="M12 2C6.48 2 2 6.58 2 12.24c0 4.53 2.87 8.38 6.84 9.73.5.1.68-.22.68-.5 0-.24-.01-1.05-.01-1.9-2.78.62-3.36-1.22-3.36-1.22-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .08 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.72 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.84c.85 0 1.7.12 2.5.37 1.9-1.33 2.74-1.05 2.74-1.05.55 1.42.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.95-2.35 4.81-4.58 5.06.36.32.69.95.69 1.92 0 1.38-.01 2.5-.01 2.84 0 .28.18.61.69.5A10.27 10.27 0 0 0 22 12.24C22 6.58 17.52 2 12 2Z" />
                      </svg>
                    </ModalIconButton>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </Section>
  );
}
