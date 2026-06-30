import type { Project } from "@/types/content";

export const projectsCopy = {
  eyebrow: {
    es: "Portfolio",
    en: "Portfolio",
  },
  title: {
    es: "PROYECTOS",
    en: "MY WORK",
  },
  accent: {
    es: "seleccionados.",
    en: "selected.",
  },
  repositoryLabel: {
    es: "Repositorio",
    en: "Repository",
  },
  projectLabel: {
    es: "Proyecto",
    en: "Project",
  },
  previewLabel: {
    es: "Preview",
    en: "Preview",
  },
  loading: {
    es: "Cargando proyectos...",
    en: "Loading projects...",
  },
  empty: {
    es: "Todavia no hay proyectos publicados.",
    en: "There are no published projects yet.",
  },
  error: {
    es: "No fue posible cargar los proyectos en este momento.",
    en: "Projects could not be loaded right now.",
  },
};

export const hardcodedProjects: Project[] = [
  {
    id: 1,
    published: true,
    order: 1,
    title: "Portfolio Full Stack",
    category: "Landing + Admin",
    description: {
      es: "Portfolio personal con landing editorial, panel administrativo y arquitectura preparada para integrar servicios reales de backend.",
      en: "Personal portfolio with an editorial landing page, admin panel, and an architecture prepared to integrate real backend services.",
    },
    tags: [".NET 8", "NEXT.JS", "POSTGRESQL"],
    repositoryUrl: "https://github.com/antemortem22/portfolio-fullstack",
    image: "/project-portfolio-preview.png",
    statusLabel: "In progress",
  },
  {
    id: 2,
    published: true,
    order: 2,
    title: "RestaurantApp",
    category: "Product UI",
    description: {
      es: "Interfaz para experiencia gastronómica digital con foco en navegación clara, presentación visual del producto y escalabilidad del front.",
      en: "Interface for a digital restaurant experience focused on clear navigation, strong product presentation, and frontend scalability.",
    },
    tags: [".NET 8", "BLAZOR", "SQL SERVER"],
    repositoryUrl: "",
    image: "/project-restaurant-app.png",
    statusLabel: "In progress",
  },
];
