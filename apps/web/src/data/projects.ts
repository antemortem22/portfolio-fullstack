export type Project = {
  title: string;
  category: string;
  description: {
    es: string;
    en: string;
  };
  tags: string[];
  repositoryUrl: string;
  projectUrl?: string;
  image?: string;
  imageAlt?: {
    es: string;
    en: string;
  };
};

export const projects: Project[] = [
  {
    title: "Portfolio",
    category: "Landing Page",
    description: {
      es: "Landing page inspirada en una estética dark editorial, desarrollada para combinar identidad visual, branding personalizado y una experiencia enfocada en destacar proyectos y tecnologías de manera moderna e inmersiva.",
      en: "Landing page inspired by a dark editorial aesthetic, developed to combine visual identity, personalized branding and an experience focused on showcasing projects and technologies in a modern and immersive way.",
    },
    tags: ["React", "TypeScript", "Tailwind", "Next.js"],
    repositoryUrl: "https://github.com/antemortem22/portfolio-fullstack",
    image: "/project-portfolio-cropped.png",
    imageAlt: {
      es: "Vista previa del proyecto Portfolio",
      en: "Preview of the Portfolio project",
    },
  },
  {
    title: "Restaurant App",
    category: "Web App",
    description: {
      es: "Aplicación desarrollada como challenge técnico, enfocada en la gestión de reservas gastronómicas mediante una experiencia administrativa integrada, lógica de negocio clara y administración eficiente de disponibilidad y reservas.",
      en: "Application developed as a technical challenge for restaurant reservation management, combining operational administration, business validations and availability handling.",
    },
    tags: ["Blazor Server", ".NET 8", "SQL Server"],
    repositoryUrl: "https://github.com/antemortem22/RestaurantApp",
    image: "/project-restaurant-app.png",
    imageAlt: {
      es: "Vista previa del proyecto Restaurant App",
      en: "Preview of the Restaurant App project",
    },
  },
];

export const projectsCopy = {
  eyebrow: {
    es: "Portfolio",
    en: "Portfolio",
  },
  title: {
    es: "Proyectos Destacados",
    en: "Featured Projects",
  },
  repositoryLabel: {
    es: "Ver repositorio",
    en: "View repository",
  },
  projectLabel: {
    es: "Ver proyecto",
    en: "View project",
  },
};
