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
  {
    timelineLabel: {
      es: "feb 2023 - dic 2024",
      en: "feb 2023 - dec 2024",
    },
    role: {
      es: "Tecnicatura en Desarrollo de Software",
      en: "Software Development Technical Degree",
    },
    aclarations: {
      es: "Trayecto académico avanzado - 16/20 materias aprobadas (descontinuado)",
      en: "Advanced academic path - 16/20 courses completed (discontinued)",
    },
    summary: {
      es: "Formación orientada al desarrollo web, lógica de programación, pensamiento computacional, programación orientada a objetos, bases de datos y fundamentos de software. Trayecto continuado luego mediante aprendizaje independiente, cursos técnicos y proyectos prácticos.",
      en: "Training focused on software development, programming logic, computational thinking, object-oriented programming, databases and software fundamentals. Later continued through independent learning, technical courses and practical projects.",
    },
    tags: ["programming logic", "DataBase", "Software", "Web","python", "poo"],
  },
];
