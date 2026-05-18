"use client";

import Image from "next/image";
import { skillGroups, skillsCopy, technologies } from "@/data/skills";
import { useLanguage } from "@/context/LanguageContext";

type SkillIconName =
  | "code"
  | "server"
  | "database"
  | "git"
  | "azure-devops"
  | "postman"
  | "workflow"
  | "test-tube";

function SkillIcon({ icon, compact = false }: { icon: string; compact?: boolean }) {
  const iconName = icon as SkillIconName;
  const iconClass = compact ? "h-7 w-7" : "h-7 w-7";

  const content = (
    <>
      {iconName === "code" && (
        <span className="font-mono text-xl font-bold tracking-[0.08em] leading-none">
          &lt;/&gt;
        </span>
      )}

      {iconName === "server" && (
        <svg viewBox="0 0 24 24" className={iconClass} fill="currentColor">
          <path d="M4 4h16a2 2 0 0 1 2 2v4H2V6a2 2 0 0 1 2-2Zm0 10h16a2 2 0 0 1 2 2v4H2v-4a2 2 0 0 1 2-2Zm3-7v1.8h8V7H7Zm11-.2a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4ZM7 17v1.8h8V17H7Zm11-.2a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Z" />
        </svg>
      )}

      {iconName === "database" && (
        <svg viewBox="0 0 24 24" className={iconClass} fill="currentColor">
          <path d="M12 3C7.03 3 3 4.57 3 6.5S7.03 10 12 10s9-1.57 9-3.5S16.97 3 12 3Z" />
          <path d="M3 9.2v4.1C3 15.23 7.03 16.8 12 16.8s9-1.57 9-3.5V9.2c-1.6 1.61-5.08 2.55-9 2.55s-7.4-.94-9-2.55Z" />
          <path d="M3 16v1.5C3 19.43 7.03 21 12 21s9-1.57 9-3.5V16c-1.6 1.61-5.08 2.55-9 2.55S4.6 17.61 3 16Z" />
        </svg>
      )}

      {iconName === "git" && (
        <svg viewBox="0 0 24 24" className={iconClass} fill="currentColor">
          <path d="M22.1 10.95 13.05 1.9a1.48 1.48 0 0 0-2.1 0L8.9 3.95l2.38 2.38a1.95 1.95 0 0 1 2.47 2.48l2.29 2.29a1.96 1.96 0 1 1-1.18 1.18L12.72 10.1v5.68a1.95 1.95 0 1 1-1.64-.02V10a1.96 1.96 0 0 1-.86-2.6L7.75 4.93 1.9 10.78a1.48 1.48 0 0 0 0 2.1l9.22 9.22c.58.58 1.52.58 2.1 0l8.88-8.88c.58-.58.58-1.52 0-2.1Z" />
        </svg>
      )}

      {iconName === "azure-devops" && (
        <svg viewBox="0 0 24 24" className={iconClass} fill="currentColor">
          <path d="M4 4.8 11.2 2v4.3L7.7 7.7v8.6l3.5 1.4V22L4 19.2V4.8Zm8.6 1.2L20 3.1v17.8l-7.4-2.9v-3.5l4.2 1.4V8.1l-4.2 1.4V6Zm-3.3 4.1 3.3-1.1v6l-3.3-1.1v-3.8Z" />
        </svg>
      )}

      {iconName === "postman" && (
        <svg viewBox="0 0 24 24" className={iconClass} fill="currentColor">
          <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm5.25 7.14-4.86 4.86-.7-.7 2.5-2.5-3.95 2.22-.85 3.57-1.1-1.1 3.57-.85 2.22-3.95-2.5 2.5-.7-.7 4.86-4.86a1.07 1.07 0 0 1 1.51 1.51Zm-1.2-.8a.28.28 0 0 0-.4 0l-1.1 1.1.4.4 1.1-1.1a.28.28 0 0 0 0-.4Z" />
        </svg>
      )}

      {iconName === "workflow" && (
        <svg viewBox="0 0 24 24" className={iconClass} fill="currentColor">
          <path d="M4.5 3h5.2A2.5 2.5 0 0 1 12.2 5.5v2.2h2.7A2.6 2.6 0 0 1 17.5 5h2A2.5 2.5 0 0 1 22 7.5v2A2.5 2.5 0 0 1 19.5 12h-2a2.6 2.6 0 0 1-2.45-1.75H12.2v4.5h1.55a2.6 2.6 0 0 1 2.45-1.75h2A2.5 2.5 0 0 1 20.7 15.5v2A2.5 2.5 0 0 1 18.2 20h-2a2.5 2.5 0 0 1-2.5-2.5v-.25H10a2.3 2.3 0 0 1-2.3-2.3V12H4.5A2.5 2.5 0 0 1 2 9.5v-4A2.5 2.5 0 0 1 4.5 3Z" />
        </svg>
      )}

      {iconName === "test-tube" && (
        <Image
          src="/testing-icon.svg"
          alt=""
          width={28}
          height={28}
          className={iconClass}
        />
      )}
    </>
  );

  if (compact) {
    return <span className="inline-flex items-center justify-center text-primary-light">{content}</span>;
  }

  return (
    <span
      className="inline-flex h-11 w-11 items-center justify-center rounded-[10px] border border-primary-light/30 bg-[linear-gradient(180deg,rgba(124,81,192,0.3)_0%,rgba(85,56,131,0.7)_100%)] text-primary-light shadow-[0_0_20px_rgba(124,81,192,0.22),inset_0_1px_0_rgba(255,255,255,0.12)]"
    >
      {content}
    </span>
  );
}

export function SkillsSection() {
  const { locale } = useLanguage();

  return (
    <section id="skills" className="section-shell">
      <div className="section-heading">
        <p>{skillsCopy.eyebrow[locale]}</p>
        <h2>{skillsCopy.title[locale]}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm font-normal normal-case leading-7 tracking-normal text-zinc-400">
          {skillsCopy.description[locale]}
        </p>
      </div>

      <div className="mt-8 grid gap-5 sm:mt-10 sm:gap-7 md:grid-cols-3 lg:gap-9">
        {skillGroups.map((group) => (
          <article key={group.title} className="goth-card p-5">
            <div className="flex items-center gap-4">
              <SkillIcon icon={group.icon} />
              <h3 className="text-xl text-zinc-100">{group.title}</h3>
            </div>

            <div className="mt-5 space-y-4">
              {group.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="text-zinc-100">{skill.name}</span>
                    <span className="font-semibold text-primary-light">{skill.value}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-slate-700/70">
                    <div
                      className="h-full rounded-full bg-primary-light"
                      style={{ width: `${skill.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap justify-center gap-4 sm:mt-7 sm:gap-6">
        {technologies.map((tech) => (
          <div
            key={tech.label}
            className="flex min-h-16 w-full max-w-[170px] flex-[1_1_130px] flex-col items-center justify-center gap-1.5 rounded-[12px] border border-primary-light/16 bg-[linear-gradient(180deg,rgba(19,19,24,0.94)_0%,rgba(11,11,16,0.96)_100%)] px-4 py-3 text-center text-sm font-medium text-zinc-100 shadow-[0_0_24px_rgba(124,81,192,0.1),0_0_52px_rgba(85,56,131,0.1),inset_0_1px_0_rgba(255,255,255,0.05)] transition hover:border-primary-light/40 hover:shadow-[0_0_28px_rgba(124,81,192,0.18),0_0_64px_rgba(85,56,131,0.16),inset_0_1px_0_rgba(255,255,255,0.08)]"
          >
            <SkillIcon icon={tech.icon} compact />
            <span>{tech.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
