"use client";

import { motion } from "motion/react";
import { MotionReveal } from "@/components/motion/MotionReveal";
import { MotionStagger } from "@/components/motion/MotionStagger";
import { EditorialLabel } from "@/components/shared/EditorialLabel";
import { Section } from "@/components/shared/Section";
import { TechTag } from "@/components/shared/TechTag";
import { useLanguage } from "@/context/LanguageContext";
import { isSkillCategoryId, mockSkillsCategories, skillsCategoryDefinitions, skillsCopy } from "@/data/skills";
import type { SkillGroup, Technology } from "@/types/content";

type SkillsSectionProps = {
  skillGroups: SkillGroup[];
  technologies: Technology[];
};

function normalize(value: string) {
  return value.toLowerCase();
}

function buildCategories(skillGroups: SkillGroup[], technologies: Technology[]) {
  if (skillGroups.length === 0 && technologies.length === 0) {
    return null;
  }

  const categoryMap = new Map<string, Set<string>>(
    skillsCategoryDefinitions.map((definition) => [definition.id, new Set<string>()]),
  );

  const matchCategory = (value: string) => {
    const normalized = normalize(value);

    return (
      skillsCategoryDefinitions.find((definition) =>
        definition.matchers.some((token) => normalized.includes(token)),
      )?.id ?? "tools"
    );
  };

  const resolveCategory = (value: string, explicitCategoryId?: string) =>
    explicitCategoryId && isSkillCategoryId(explicitCategoryId)
      ? explicitCategoryId
      : matchCategory(value);

  skillGroups.forEach((group) => {
    const category = resolveCategory(group.title, group.categoryId);
    const target = categoryMap.get(category);

    if (!target) {
      return;
    }

    group.skills.forEach((skill) => target.add(skill.name));
  });

  technologies.forEach((technology) => {
    const category = resolveCategory(technology.label, technology.categoryId);
    categoryMap.get(category)?.add(technology.label);
  });

  return Array.from(categoryMap.entries())
    .map(([id, items]) => {
      const definition = skillsCategoryDefinitions.find((category) => category.id === id);

      if (!definition) {
        return null;
      }

      return {
        id: definition.id,
        index: definition.index,
        title: definition.title,
        items: Array.from(items),
      };
    })
    .filter((category): category is NonNullable<typeof category> => category !== null)
    .filter((category) => category.items.length > 0);
}

export function SkillsSection({ skillGroups, technologies }: SkillsSectionProps) {
  const { locale } = useLanguage();
  const categories = buildCategories(skillGroups, technologies) ?? mockSkillsCategories;

  return (
    <Section
      id="skills"
      wide
      className="relative isolate overflow-hidden border-b border-white/8 py-16 sm:py-20"
      tone="default"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[#0f0e14]" />
      <div className="grid gap-8">
        <MotionReveal>
          <div className="max-w-4xl">
            <EditorialLabel>{skillsCopy.eyebrow[locale]}</EditorialLabel>
            <div className="mt-3 flex max-w-full flex-wrap items-baseline gap-x-3 gap-y-2">
              <h2 className="type-heading-display text-[2.65rem] uppercase leading-[0.95] sm:text-[3.25rem] lg:text-[3.7rem]">
                {skillsCopy.title[locale]}
              </h2>
              <p className="type-accent whitespace-nowrap text-[2.55rem] leading-[0.95] sm:text-[3.15rem] lg:text-[3.7rem]">
                {skillsCopy.accent[locale]}
              </p>
            </div>
          </div>
        </MotionReveal>

        <MotionStagger className="grid gap-5 pt-2 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))] sm:gap-6">
          {categories.map((category) => (
            <MotionReveal
              key={category.id}
              className="h-full"
            >
              <motion.article
                whileHover={{ y: -8, transition: { duration: 0.28, ease: [0.16, 1, 0.3, 1] } }}
                className="group relative grid h-full content-start gap-4 overflow-hidden border border-[rgba(122,56,181,0.14)] bg-[linear-gradient(180deg,rgba(15,14,20,0.92)_0%,rgba(11,10,15,0.96)_100%)] px-4 py-4 shadow-[0_10px_28px_rgba(0,0,0,0.16)] transition duration-500 hover:border-[rgba(181,138,221,0.34)] hover:bg-[linear-gradient(180deg,rgba(22,18,30,0.96)_0%,rgba(13,11,18,0.98)_100%)] hover:shadow-[0_22px_44px_rgba(26,10,42,0.24)] sm:gap-5 sm:px-6 sm:py-5"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-[rgba(181,138,221,0.28)]" />
                  <div className="absolute inset-y-0 left-[-30%] w-[42%] bg-[linear-gradient(90deg,transparent_0%,rgba(181,138,221,0.04)_28%,rgba(181,138,221,0.16)_50%,rgba(181,138,221,0.04)_72%,transparent_100%)] blur-xl transition duration-700 group-hover:left-[88%]" />
                </div>

                <div className="grid gap-4">
                  <p className="relative z-10 type-meta text-[0.64rem] text-[var(--color-accent)] transition duration-500 group-hover:text-[var(--color-accent-soft)]">
                    {category.index} {category.title[locale]}
                  </p>
                  <div className="relative h-px w-full overflow-hidden bg-[rgba(122,56,181,0.22)]">
                    <div
                      aria-hidden="true"
                      className="skills-shimmer absolute inset-y-[-8px] left-[-24%] w-[30%] bg-[linear-gradient(90deg,transparent_0%,rgba(122,56,181,0.06)_18%,rgba(181,138,221,0.38)_50%,rgba(122,56,181,0.09)_82%,transparent_100%)] opacity-80 blur-md"
                    />
                  </div>
                </div>

                <div className="relative z-10 flex flex-wrap gap-3">
                  {category.items.map((item) => (
                    <TechTag
                      key={item}
                      className="min-h-9 px-3 py-2 text-[0.64rem] tracking-[0.08em] transition duration-500 hover:-translate-y-1 hover:border-[rgba(181,138,221,0.68)] hover:bg-[rgba(46,22,66,0.48)] hover:text-[var(--color-accent-soft)] hover:shadow-[0_12px_24px_rgba(69,28,101,0.2)]"
                    >
                      {item}
                    </TechTag>
                  ))}
                </div>
              </motion.article>
            </MotionReveal>
          ))}
        </MotionStagger>
      </div>
    </Section>
  );
}
