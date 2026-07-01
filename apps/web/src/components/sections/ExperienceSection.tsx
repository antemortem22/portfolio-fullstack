"use client";

import { MotionReveal } from "@/components/motion/MotionReveal";
import { MotionStagger } from "@/components/motion/MotionStagger";
import { FloralBackground } from "@/components/shared/FloralBackground";
import { TechTag } from "@/components/shared/TechTag";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";
import { experienceCopy, experienceItems } from "@/data/experience";

const accentStyles = [
  {
    dot: "bg-[var(--color-accent)]",
    line: "bg-[linear-gradient(180deg,rgba(122,56,181,0.45),rgba(122,56,181,0.08))]",
    label: "text-[var(--color-accent)]",
  },
  {
    dot: "bg-[var(--color-accent)]",
    line: "bg-[linear-gradient(180deg,rgba(181,138,221,0.4),rgba(181,138,221,0.08))]",
    label: "text-[var(--color-accent)]",
  },
  {
    dot: "bg-[var(--color-accent)]",
    line: "bg-[linear-gradient(180deg,rgba(67,185,215,0.38),rgba(67,185,215,0.08))]",
    label: "text-[var(--color-accent)]",
  },
] as const;

export function ExperienceSection() {
  const { locale } = useLanguage();

  return (
    <Section
      id="experience"
      wide
      className="relative isolate overflow-hidden border-b border-white/8 py-16 sm:py-20"
      tone="surface"
    >
      <FloralBackground intensity="medium" />
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,rgba(122,56,181,0.16)_0%,rgba(122,56,181,0.06)_18%,rgba(122,56,181,0.02)_28%,transparent_48%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(8,7,10,0.3)_0%,rgba(8,7,10,0.76)_100%)]" />

      <div className="grid gap-8">
        <MotionReveal>
          <SectionHeading eyebrow={experienceCopy.eyebrow[locale]} title={experienceCopy.title[locale]} />
        </MotionReveal>

        <MotionStagger className="grid gap-8 sm:gap-10">
          {experienceItems.map((item, index) => {
            const accent = accentStyles[index % accentStyles.length];

            return (
              <MotionReveal key={`${item.role[locale]}-${item.timelineLabel[locale]}`} className="relative">
                <article className="grid grid-cols-[20px_minmax(0,1fr)] gap-x-3 gap-y-3.5 sm:grid-cols-[24px_minmax(0,1fr)] sm:gap-x-4 lg:grid-cols-[30px_minmax(0,1fr)] lg:gap-x-5">
                  <div className="relative flex justify-center">
                    <span className={`absolute left-1/2 top-1 h-2.5 w-2.5 -translate-x-1/2 rounded-full ${accent.dot}`} />
                    {index < experienceItems.length - 1 ? (
                      <span
                        className={`absolute left-1/2 top-4.5 h-[calc(100%+2.25rem)] w-px -translate-x-1/2 ${accent.line}`}
                      />
                    ) : null}
                  </div>

                  <div className="pb-1.5">
                    <p className={`type-meta text-[0.5rem] sm:text-[0.54rem] ${accent.label}`}>{item.timelineLabel[locale]}</p>
                    <h3 className="mt-2 text-[1rem] font-semibold uppercase leading-[1.02] tracking-[0.01em] text-white sm:mt-2.5 sm:text-[1.18rem] lg:text-[1.45rem]">
                      {item.role[locale]}
                    </h3>
                    <p className="type-meta mt-1 text-[0.52rem] text-[rgba(214,203,227,0.5)] sm:text-[0.56rem]">
                      {item.aclarations[locale]}
                    </p>
                    <p className="type-body-muted mt-3 max-w-[38rem] text-[0.75rem] leading-[1.68] text-[rgba(206,200,214,0.76)] sm:text-[0.81rem] sm:leading-[1.74]">
                      {item.summary[locale]}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <TechTag key={tag} className="px-2 py-[0.32rem] text-[0.5rem]">
                          {tag}
                        </TechTag>
                      ))}
                    </div>
                  </div>
                </article>
              </MotionReveal>
            );
          })}
        </MotionStagger>
      </div>
    </Section>
  );
}
