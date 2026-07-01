import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { LanguageProvider } from "@/context/LanguageContext";
import { hardcodedProjects } from "@/data/projects";
import {
  getPortfolioSectionsData,
  type PortfolioSectionsData,
} from "@/lib/api/portfolio";

export const revalidate = 3600;

export default async function Home() {
  let data: PortfolioSectionsData = {
    projects: [],
    skillGroups: [],
    technologies: [],
  };
  let projectsState: "ready" | "empty" | "error" = "empty";

  try {
    data = await getPortfolioSectionsData();

    if (data.projects.length === 0) {
      data.projects = hardcodedProjects;
    }
    projectsState = data.projects.length > 0 ? "ready" : "empty";
  } catch (error) {
    console.error("Failed to load portfolio sections.", error);
    data.projects = hardcodedProjects;
    projectsState = data.projects.length > 0 ? "ready" : "error";
  }

  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection state={projectsState} projects={data.projects} />
        <ExperienceSection />
        <SkillsSection
          skillGroups={data.skillGroups}
          technologies={data.technologies}
        />
        <ContactSection />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
