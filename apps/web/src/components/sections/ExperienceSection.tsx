"use client";

import { MotionReveal } from "@/components/motion/MotionReveal";
import { MotionStagger } from "@/components/motion/MotionStagger";
import { FloralBackground } from "@/components/shared/FloralBackground";
import { TechTag } from "@/components/shared/TechTag";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";
import { experienceCopy, experienceItems } from "@/data/experience";

function splitPeriod(period: string) {
  return period
    .split(/[-—]/)
    .map((part) => part.trim())
    .filter(Boolean);
}

export function ExperienceSection() {
  const { locale } = useLanguage();

  return (
    <Section
      id="experience"
      wide
      className="relative isolate overflow-hidden border-b border-white/8 py-20 sm:py-24"
      tone="surface"
    >
      <FloralBackground intensity="medium" />
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,rgba(122,56,181,0.16)_0%,rgba(122,56,181,0.06)_18%,rgba(122,56,181,0.02)_28%,transparent_48%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(8,7,10,0.3)_0%,rgba(8,7,10,0.76)_100%)]" />

      <div className="grid gap-12">
        <MotionReveal>
          <SectionHeading eyebrow={experienceCopy.eyebrow[locale]} title={experienceCopy.title[locale]} />
        </MotionReveal>

        <div className="relative before:absolute before:bottom-2 before:left-[96px] before:top-3 before:w-px before:bg-[linear-gradient(180deg,rgba(181,138,221,0.24),rgba(181,138,221,0.08))] sm:before:left-[121px] lg:before:left-[143px]">
          <MotionStagger className="grid gap-16">
            {experienceItems.map((item, index) => (
              <MotionReveal key={`${item.company}-${item.period[locale]}`} className="relative">
                <div className="grid grid-cols-[82px_24px_minmax(0,1fr)] gap-x-4 gap-y-5 sm:grid-cols-[104px_28px_minmax(0,1fr)] sm:gap-x-5 lg:grid-cols-[122px_40px_minmax(0,1fr)] lg:gap-x-7">
                  <div
                    className={`type-heading-display text-[1.8rem] leading-[0.96] sm:text-[2.1rem] lg:text-[2.3rem] ${
                      index === 0 ? "text-[var(--color-accent)]" : "text-[rgba(214,203,227,0.9)]"
                    }`}
                  >
                    {splitPeriod(item.period[locale]).map((part, partIndex) => (
                      <span key={part} className="block">
                        {partIndex === 0 ? (
                          <span className="inline-flex items-center gap-2.5 sm:gap-3">
                            <span>{part}</span>
                            <span
                              className={`mt-[0.12em] block h-[2px] w-9 sm:w-10 lg:w-11 ${
                                index === 0
                                  ? "bg-[linear-gradient(90deg,rgba(181,138,221,0.22),rgba(181,138,221,0.86))]"
                                  : "bg-[linear-gradient(90deg,rgba(214,203,227,0.18),rgba(214,203,227,0.72))]"
                              }`}
                            />
                          </span>
                        ) : (
                          part
                        )}
                      </span>
                    ))}
                  </div>

                  <div aria-hidden="true" />

                  <div className="pt-[0.1rem]">
                    <div className="mb-5 flex items-center">
                      <span
                        className={`block h-[2px] w-10 sm:w-11 lg:w-12 ${
                          index === 0
                            ? "bg-[linear-gradient(90deg,rgba(181,138,221,0.7),rgba(181,138,221,0.1))]"
                            : "bg-[linear-gradient(90deg,rgba(214,203,227,0.54),rgba(214,203,227,0.08))]"
                        }`}
                      />
                    </div>

                    <h3
                      className={`type-heading-display text-[2rem] uppercase leading-[0.95] sm:text-[2.45rem] lg:text-[2.85rem] ${
                        index === 0 ? "text-white" : "text-[rgba(240,237,242,0.88)]"
                      }`}
                    >
                      {item.role[locale]}
                    </h3>

                    <p className="type-meta mt-3 text-[0.66rem] text-[rgba(181,138,221,0.88)]">
                      {item.company}
                    </p>

                    <p className="type-body-muted mt-5 max-w-[42rem] text-[0.95rem] leading-[1.95] text-[rgba(206,200,214,0.8)]">
                      {item.summary[locale]}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <TechTag
                          key={tag}
                          className="border-[rgba(122,56,181,0.62)] bg-[rgba(18,10,26,0.22)] px-3 py-[0.45rem] text-[0.62rem] text-[var(--color-accent)]"
                        >
                          {tag}
                        </TechTag>
                      ))}
                    </div>
                  </div>
                </div>
              </MotionReveal>
            ))}
          </MotionStagger>
        </div>
      </div>
    </Section>
  );
}
