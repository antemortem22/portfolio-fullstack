import type { LocalizedText, SkillCategoryId } from "@/types/content";

export const skillsCopy = {
  eyebrow: {
    es: "Stack",
    en: "Stack",
  },
  title: {
    es: "HERRAMIENTAS &",
    en: "TOOLS &",
  },
  accent: {
    es: "Tecnologias",
    en: "Technologies",
  },
  loading: {
    es: "Cargando tecnologias...",
    en: "Loading technologies...",
  },
  empty: {
    es: "Todavia no hay tecnologias disponibles.",
    en: "There are no technologies available yet.",
  },
  error: {
    es: "No fue posible cargar el stack en este momento.",
    en: "The stack could not be loaded right now.",
  },
};

export type MockSkillsCategory = {
  id: SkillCategoryId;
  index: string;
  title: LocalizedText;
  items: string[];
};

export type SkillsCategoryDefinition = {
  id: SkillCategoryId;
  index: string;
  title: LocalizedText;
  matchers: string[];
};

export function isSkillCategoryId(value: string): value is SkillCategoryId {
  return skillsCategoryDefinitions.some((definition) => definition.id === value);
}

export const skillsCategoryDefinitions: SkillsCategoryDefinition[] = [
  {
    id: "backend",
    index: "01",
    title: { es: "Backend", en: "Backend" },
    matchers: ["c#", ".net", "asp.net", "node", "spring", "api", "backend", "signalr"],
  },
  {
    id: "frontend",
    index: "02",
    title: { es: "Frontend & Web", en: "Frontend & Web" },
    matchers: ["react", "angular", "next", "tailwind", "lit", "frontend", "web", "typescript"],
  },
  {
    id: "databases",
    index: "03",
    title: { es: "Bases de datos", en: "Databases" },
    matchers: ["sql", "postgres", "mongo", "supabase", "entity framework", "database", "redis"],
  },
  {
    id: "architecture",
    index: "04",
    title: { es: "Arquitectura", en: "Architecture" },
    matchers: ["clean", "solid", "microservice", "pattern", "architecture", "ddd", "cqrs", "layered"],
  },
  {
    id: "tools",
    index: "05",
    title: { es: "Tools & DevOps", en: "Tools & DevOps" },
    matchers: ["git", "docker", "azure", "ci", "turbo", "devops", "postman", "vercel", "github actions"],
  },
  {
    id: "methodologies",
    index: "06",
    title: { es: "Metodologias", en: "Methodologies" },
    matchers: ["scrum", "agile", "documentation", "workflow", "ai powered", "codex"],
  },
  {
    id: "security",
    index: "07",
    title: { es: "Seguridad", en: "Security" },
    matchers: ["jwt", "bearer", "oauth", "azuread", "auth", "security"],
  },
  {
    id: "languages",
    index: "08",
    title: { es: "Idiomas", en: "Languages" },
    matchers: ["espanol", "ingles", "portugues", "language"],
  },
];

export const mockSkillsCategories: MockSkillsCategory[] = [
  {
    id: "backend",
    index: "01",
    title: {
      es: "Backend",
      en: "Backend",
    },
    items: ["C#", ".NET 8", ".NET 9", ".NET 10", "ASP.NET Core", "REST APIs", "SignalR", "Python"],
  },
  {
    id: "frontend",
    index: "02",
    title: {
      es: "Frontend & Web",
      en: "Frontend & Web",
    },
    items: ["React 19", "Next.js 15", "Tailwind CSS v4", "Motion", "TypeScript"],
  },
  {
    id: "databases",
    index: "03",
    title: {
      es: "Bases de datos",
      en: "Databases",
    },
    items: ["SQL Server", "PostgreSQL", "Supabase", "Entity Framework", "Database Design"],
  },
  {
    id: "architecture",
    index: "04",
    title: {
      es: "Arquitectura",
      en: "Architecture",
    },
    items: ["Clean Architecture", "SOLID", "Layered Architecture", "Design Patterns", "Architecture Patterns"],
  },
  {
    id: "tools",
    index: "05",
    title: {
      es: "Tools & DevOps",
      en: "Tools & DevOps",
    },
    items: ["Git / GitHub", "GitHub Actions", "Azure DevOps", "CI/CD", "Postman", "Vercel"],
  },
  {
    id: "methodologies",
    index: "06",
    title: {
      es: "Metodologias",
      en: "Methodologies",
    },
    items: ["Scrum", "Agile", "Documentation", "AI Powered Development", "Codex"],
  },
  {
    id: "security",
    index: "07",
    title: {
      es: "Seguridad",
      en: "Security",
    },
    items: ["JWT", "Bearer Tokens"],
  },
  {
    id: "languages",
    index: "08",
    title: {
      es: "Idiomas",
      en: "Languages",
    },
    items: ["Espanol (nativo)", "Ingles B2/C1"],
  },
];
