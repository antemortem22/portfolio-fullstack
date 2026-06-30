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
  description: {
    es: "Un stack orientado a backend .NET, integraciones robustas y experiencias web modernas.",
    en: "A stack focused on .NET backend work, robust integrations and modern web experiences.",
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
  id: string;
  index: string;
  title: {
    es: string;
    en: string;
  };
  items: string[];
};

export const mockSkillsCategories: MockSkillsCategory[] = [
  {
    id: "backend",
    index: "01",
    title: {
      es: "Backend",
      en: "Backend",
    },
    items: ["C# .NET 9", "ASP.NET Core", "Node.js", "Java Spring", "REST APIs"],
  },
  {
    id: "frontend",
    index: "02",
    title: {
      es: "Frontend & Web",
      en: "Frontend & Web",
    },
    items: ["React 18/19", "Angular 19", "Next.js 15", "Tailwind CSS v4", "Lit Element"],
  },
  {
    id: "databases",
    index: "03",
    title: {
      es: "Bases de datos",
      en: "Databases",
    },
    items: ["SQL Server", "PostgreSQL", "MongoDB", "Entity Framework"],
  },
  {
    id: "architecture",
    index: "04",
    title: {
      es: "Arquitectura",
      en: "Architecture",
    },
    items: ["Clean Architecture", "SOLID", "Microservices", "Design Patterns"],
  },
  {
    id: "tools",
    index: "05",
    title: {
      es: "Tools & DevOps",
      en: "Tools & DevOps",
    },
    items: ["Git / GitHub", "Docker", "Azure DevOps", "CI/CD", "Turborepo"],
  },
  {
    id: "languages",
    index: "06",
    title: {
      es: "Idiomas",
      en: "Languages",
    },
    items: ["Español (nativo)", "Inglés B2/C1", "Portugués (básico)"],
  },
];
