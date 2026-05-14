import { Navbar } from "@/components/layout/Navbar";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { brand } from "@/data/brand";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <footer className="mx-auto flex max-w-6xl flex-col gap-4 border-t border-white/10 px-5 py-8 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 {brand.name}. Todos los derechos reservados.</p>
        <div className="flex gap-4">
          {brand.socialLinks.map((link) => (
            <a key={link.label} href={link.href} className="transition hover:text-white">
              {link.label}
            </a>
          ))}
        </div>
      </footer>
    </>
  );
}
