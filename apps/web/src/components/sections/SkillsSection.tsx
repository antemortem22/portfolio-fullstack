"use client";

import { MotionReveal } from "@/components/motion/MotionReveal";
import { MotionStagger } from "@/components/motion/MotionStagger";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";
import { mockSkillsCategories, skillsCopy } from "@/data/skills";

type SkillGroup = {
  title: string;
  icon: string;
  skills: {
    name: string;
    value: number;
  }[];
};

type Technology = {
  label: string;
  icon: string;
};

type SkillsSectionProps = {
  state: "loading" | "ready" | "empty" | "error";
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

  const categoryMap = new Map<string, Set<string>>([
    ["Backend", new Set<string>()],
    ["Frontend & Web", new Set<string>()],
    ["Bases de datos", new Set<string>()],
    ["Arquitectura", new Set<string>()],
    ["Tools & DevOps", new Set<string>()],
    ["Idiomas", new Set<string>()],
  ]);

  const matchCategory = (value: string) => {
    const normalized = normalize(value);

    if (["c#", ".net", "asp.net", "node", "spring", "api", "backend"].some((token) => normalized.includes(token))) {
      return "Backend";
    }

    if (["react", "angular", "next", "tailwind", "lit", "frontend", "web"].some((token) => normalized.includes(token))) {
      return "Frontend & Web";
    }

    if (["sql", "postgres", "mongo", "entity framework", "database"].some((token) => normalized.includes(token))) {
      return "Bases de datos";
    }

    if (["clean", "solid", "microservice", "pattern", "architecture"].some((token) => normalized.includes(token))) {
      return "Arquitectura";
    }

    if (["git", "docker", "azure", "ci", "turbo", "devops"].some((token) => normalized.includes(token))) {
      return "Tools & DevOps";
    }

    return "Idiomas";
  };

  skillGroups.forEach((group) => {
    const category = matchCategory(group.title);
    const target = categoryMap.get(category);

    if (!target) {
      return;
    }

    group.skills.forEach((skill) => target.add(skill.name));
  });

  technologies.forEach((technology) => {
    const category = matchCategory(technology.label);
    categoryMap.get(category)?.add(technology.label);
  });

  return Array.from(categoryMap.entries())
    .map(([title, items], index) => ({
      id: title,
      index: String(index + 1).padStart(2, "0"),
      title: {
        es: title,
        en: title === "Bases de datos" ? "Databases" : title === "Arquitectura" ? "Architecture" : title === "Idiomas" ? "Languages" : title,
      },
      items: Array.from(items),
    }))
    .filter((category) => category.items.length > 0);
}

export function SkillsSection({ skillGroups, technologies }: SkillsSectionProps) {
  const { locale } = useLanguage();
  const categories = buildCategories(skillGroups, technologies) ?? mockSkillsCategories;

  return (
    <Section
      id="skills"
      wide
      className="relative isolate overflow-hidden border-b border-white/8 py-20 sm:py-24"
      tone="default"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[#0f0e14]" />
      <div className="grid gap-10">
        <MotionReveal>
          <SectionHeading
            eyebrow={skillsCopy.eyebrow[locale]}
            title={skillsCopy.title[locale]}
            accent={skillsCopy.accent[locale]}
          />
        </MotionReveal>

        <MotionStagger className="grid gap-x-8 gap-y-8 pt-2 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => (
            <MotionReveal
              key={category.id}
              className="group relative grid content-start gap-5 overflow-hidden px-5 py-5 transition duration-500 hover:-translate-y-1 sm:px-6"
            >
              <div className="grid gap-4">
                <p className="relative z-10 type-meta text-[0.64rem] text-[var(--color-accent)] transition duration-500 group-hover:text-[var(--color-accent-soft)]">
                  {category.index} {category.title[locale]}
                </p>
                <div className="relative h-px w-full overflow-hidden bg-[rgba(122,56,181,0.22)]">
                  <div
                    aria-hidden="true"
                    className="skills-shimmer absolute inset-y-[-8px] left-[-24%] w-[28%] bg-[linear-gradient(90deg,transparent_0%,rgba(122,56,181,0.05)_18%,rgba(181,138,221,0.3)_50%,rgba(122,56,181,0.08)_82%,transparent_100%)] opacity-70 blur-md"
                  />
                </div>
              </div>

              <div className="relative z-10 flex flex-wrap gap-3">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex min-h-9 items-center border border-white/8 bg-[rgba(12,11,16,0.82)] px-3 py-2 font-sans text-[0.64rem] font-semibold uppercase tracking-[0.08em] text-white transition duration-500 group-hover:border-[rgba(255,255,255,0.14)] group-hover:bg-[rgba(22,21,27,0.92)] hover:-translate-y-1 hover:border-[rgba(181,138,221,0.48)] hover:bg-[rgba(32,22,45,0.98)] hover:text-[var(--color-accent-soft)] hover:shadow-[0_12px_24px_rgba(69,28,101,0.2)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </MotionReveal>
          ))}
        </MotionStagger>
      </div>
    </Section>
  );
}
