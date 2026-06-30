import type { ExperienceItem } from "@/types/content";

export const experienceCopy = {
  eyebrow: {
    es: "Experiencia",
    en: "Experience",
  },
  title: {
    es: "MI RECORRIDO.",
    en: "MY PATH.",
  },
};

export const experienceItems: ExperienceItem[] = [
  {
    period: {
      es: "2023 - 2025",
      en: "2023 - 2025",
    },
    role: {
      es: "Desarrolladora .NET",
      en: ".NET Developer",
    },
    company: "CDA Informatica",
    summary: {
      es: "Liderazgo tecnico en la migracion de microservicios heredados a .NET 8. Implementacion de patrones de diseno avanzados, optimizacion de consultas en SQL Server y automatizacion de despliegues mediante Azure DevOps. Trabajo estrecho con React para la modernizacion de portales corporativos.",
      en: "Technical leadership in migrating legacy microservices to .NET 8. Implementation of advanced design patterns, SQL Server query optimization, and deployment automation through Azure DevOps. Close collaboration with React to modernize corporate portals.",
    },
    tags: [".NET 8", "C#", "SQL Server", "Azure DevOps", "React"],
  },
  {
    period: {
      es: "2021 - 2023",
      en: "2021 - 2023",
    },
    role: {
      es: "Backend Developer Jr",
      en: "Backend Developer Jr",
    },
    company: "Freelance Projects",
    summary: {
      es: "Desarrollo de landing pages y pequenas aplicaciones CRUD para clientes locales, enfocada en la robustez del servidor y el diseno de bases de datos relacionales.",
      en: "Development of landing pages and small CRUD applications for local clients, focused on server robustness and relational database design.",
    },
    tags: [".NET", "APIs REST", "SQL", "JavaScript"],
  },
];
