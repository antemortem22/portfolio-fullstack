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
    timelineLabel: {
      es: "NOV 2023 - AGO 2025",
      en: "NOV 2023 - AUG 2025",
    },
    role: {
      es: "Desarrolladora .NET",
      en: ".NET Developer",
    },
    aclarations: {
      es: "CDA Informatica - YPF CLIENT",
      en: "CDA Informatica - YPF CLIENT",
    },
    summary: {
      es: "Desarrollo y mantenimiento de aplicaciones empresariales en entornos productivos, trabajando principalmente con .NET, SQL Server y React. Participé en la implementación de funcionalidades de negocio, construcción y consumo de APIs REST, optimización de consultas, integración con servicios internos, automatización de procesos y resolución de incidencias. También trabajé con procesamiento de datos, generación de archivos Excel, validaciones, SignalR para procesos asincrónicos, control de accesos por roles con AzureAD y despliegues mediante Azure DevOps, colaborando en la evolución y estabilidad de aplicaciones corporativas.",
      en: "Developed and maintained enterprise applications in production environments, working mainly with .NET, SQL Server and React. Contributed to business features, REST API development and consumption, query optimization, internal service integrations, process automation and incident resolution. Also worked with data processing, Excel file generation, validations, SignalR for asynchronous processes, role-based access control with AzureAD and deployments through Azure DevOps, supporting the evolution and stability of corporate applications.",
    },
    tags: [".NET 8", "C#", "SQL Server", "Azure DevOps", "React", "Entity Framework", "Postman", "SignalR", "EPPlus"],
  },
  {
    timelineLabel: {
      es: "ago 2026 - dic 2028",
      en: "aug 2026 - dec 2028",
    },

    role: {
      es: "Tecnicatura Superior en Desarrollo de Software",
      en: "Higher Technical Degree in Software Development",
    },

    aclarations: {
      es: "IFTS N.º 29 | Modalidad a distancia | En curso",
      en: "IFTS No. 29 | Remote program | In progress",
    },

    summary: {
      es: "Formación integral en desarrollo de software, con contenidos en programación, bases de datos, orientación a objetos, modelado y diseño de software, desarrollo web backend y frontend, testing, ingeniería de software, cloud, redes y gestión de proyectos.",
      en: "Comprehensive software development program covering programming, databases, object-oriented development, software modeling and design, backend and frontend web development, testing, software engineering, cloud technologies, networking and project management.",
    },

    tags: [
      "Software Development",
      "Backend",
      "Frontend",
      "Databases",
      "OOP",
      "Software Design",
      "Testing",
      "Cloud",
    ],
  },
  {
    timelineLabel: {
      es: "2020 - PRESENTE",
      en: "2020 - PRESENT",
    },
    role: {
      es: "Formación Autodidacta en Programación",
      en: "Self-Taught Programming Path",
    },
    aclarations: {
      es: "Aprendizaje independiente y cursos técnicos",
      en: "Independent Learning and Technical Courses",
    },
    summary: {
      es: "Construcción constante de bases técnicas en desarrollo web, backend, bases de datos y arquitectura de software, complementada con cursos en distintas instituciones y práctica aplicada en proyectos propios.",
      en: "Ongoing development of technical foundations in web development, backend, databases and software architecture, complemented by courses from different institutions and applied practice through personal projects.",
    },
    tags: ["HTML", "css", "JAVASCRIPT", "Python", "Ruby","unit testing", ".Net ecosystem"],
  },
];
