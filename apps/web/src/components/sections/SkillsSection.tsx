import { skillGroups, technologies } from "@/data/skills";

export function SkillsSection() {
  return (
    <section id="skills" className="section-shell">
      <div className="section-heading">
        <p>Stack</p>
        <h2>Skills & Tecnologías</h2>
      </div>
      <div className="mt-10 grid gap-5 sm:mt-12 md:grid-cols-3 lg:gap-6">
        {skillGroups.map((group) => (
          <article key={group.title} className="goth-card p-6">
            <h3 className="font-subtitle text-2xl text-white">{group.title}</h3>
            <div className="mt-7 space-y-5">
              {group.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="mb-2 flex items-center justify-between text-xs text-zinc-400">
                    <span>{skill.name}</span>
                    <span>{skill.value}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#7C51C0] to-[#553883]"
                      style={{ width: `${skill.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
      <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
        {technologies.map((tech) => (
          <div key={tech} className="border border-white/10 bg-white/[0.04] px-4 py-5 text-center text-sm font-semibold text-zinc-200">
            {tech}
          </div>
        ))}
      </div>
    </section>
  );
}
