import { apiFetch } from "@/lib/api/client";
import type { Project } from "@/types/content";

export type PortfolioDto = {
  id: number;
  displayName: string;
  logoUrl: string | null;
  cvUrlEs: string | null;
  cvUrlEn: string | null;
  heroSection: HeroSectionDto | null;
  profile: ProfileDto | null;
  projects: ProjectDto[];
  skillCategories: SkillCategoryDto[];
  tools: ToolDto[];
};

type HeroSectionDto = {
  tagline: string;
  descriptionEs: string;
  descriptionEn: string;
  heroMediaUrl: string | null;
};

type ProfileDto = {
  aboutEs: string;
  aboutEn: string;
  role: string;
  profileImageUrl: string | null;
  socialLinks: SocialLinkDto[];
};

type SocialLinkDto = {
  platform: string;
  url: string;
  icon: string | null;
};

export type ProjectDto = {
  id: number;
  title: string;
  eyebrow: string | null;
  descriptionEs: string;
  descriptionEn: string;
  githubUrl: string | null;
  liveUrl: string | null;
  preview: string | null;
  showInPortfolio: boolean;
  displayOrder: number;
  status: string;
  statusLabel: string;
  tags: string[];
};

type SkillCategoryDto = {
  name: string;
  displayOrder: number;
  skills: SkillDto[];
};

type SkillDto = {
  name: string;
  percentage: number;
  displayOrder: number;
};

type ToolDto = {
  name: string;
  icon: string | null;
  displayOrder: number;
};

export type SkillsSectionData = {
  skillGroups: {
    title: string;
    icon: string;
    skills: {
      name: string;
      value: number;
    }[];
  }[];
  technologies: {
    label: string;
    icon: string;
  }[];
};

export type PortfolioSectionsData = {
  projects: Project[];
  skillGroups: SkillsSectionData["skillGroups"];
  technologies: SkillsSectionData["technologies"];
};

export async function getPortfolio() {
  return apiFetch<PortfolioDto>("/api/portfolio", {
    cache: "no-store",
  });
}

export async function getPortfolioSectionsData(): Promise<PortfolioSectionsData> {
  const portfolio = await getPortfolio();

  return {
    projects: portfolio.projects.map(mapProjectDtoToProject),
    ...mapPortfolioToSkillsSectionData(portfolio),
  };
}

function mapSkillGroupIcon(categoryName: string) {
  switch (categoryName.toLowerCase()) {
    case "frontend":
      return "code";
    case "backend":
      return "server";
    case "database":
      return "database";
    default:
      return "code";
  }
}

function mapProjectDtoToProject(project: ProjectDto): Project {
  return {
    id: project.id,
    published: project.showInPortfolio,
    order: project.displayOrder,
    title: project.title,
    category: project.eyebrow ?? "",
    description: {
      es: project.descriptionEs,
      en: project.descriptionEn,
    },
    tags: project.tags,
    repositoryUrl: project.githubUrl ?? "",
    projectUrl: project.liveUrl ?? undefined,
    image: project.preview ?? undefined,
  };
}

function mapPortfolioToSkillsSectionData(portfolio: PortfolioDto): SkillsSectionData {
  return {
    skillGroups: portfolio.skillCategories
      .slice()
      .sort((left, right) => left.displayOrder - right.displayOrder)
      .map((category) => ({
        title: category.name,
        icon: mapSkillGroupIcon(category.name),
        skills: category.skills
          .slice()
          .sort((left, right) => left.displayOrder - right.displayOrder)
          .map((skill) => ({
            name: skill.name,
            value: skill.percentage,
          })),
      })),
    technologies: portfolio.tools
      .slice()
      .sort((left, right) => left.displayOrder - right.displayOrder)
      .map((tool) => ({
        label: tool.name,
        icon: tool.icon ?? "workflow",
      })),
  };
}
