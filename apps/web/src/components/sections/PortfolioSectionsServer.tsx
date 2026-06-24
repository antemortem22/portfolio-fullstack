import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import {
  getPortfolioSectionsData,
  type PortfolioSectionsData,
} from "@/lib/api/portfolio";

export async function PortfolioSectionsServer() {
  let data: PortfolioSectionsData = {
    projects: [],
    skillGroups: [],
    technologies: [],
  };
  let projectsState: "ready" | "empty" | "error" = "ready";
  let skillsState: "ready" | "empty" | "error" = "ready";

  try {
    data = await getPortfolioSectionsData();

    if (data.projects.length === 0) {
      projectsState = "empty";
    }

    if (data.skillGroups.length === 0 && data.technologies.length === 0) {
      skillsState = "empty";
    }
  } catch (error) {
    console.error("Failed to load portfolio sections.", error);
    projectsState = "error";
    skillsState = "error";
  }

  return (
    <>
      <ProjectsSection state={projectsState} projects={data.projects} />
      <SkillsSection
        state={skillsState}
        skillGroups={data.skillGroups}
        technologies={data.technologies}
      />
    </>
  );
}
