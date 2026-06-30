import type { ProfileData } from "@/types/content";

export const profile: ProfileData = {
  eyebrow: {
    es: "Perfil",
    en: "Profile",
  },
  title: {
    es: "Sobre mí,",
    en: "About me,",
  },
  subtitle: {
    es: "Mas allá del código.",
    en: "Beyond the code.",
  },
  image: "/about-photo-v2.jpg",
  imageAlt: {
    es: "Retrato de Agostina Di Napoli",
    en: "Portrait of Agostina Di Napoli",
  },
  role: {
    es: "Full Stack Developer",
    en: "Full Stack Developer",
  },
  location: {
    es: "Buenos Aires, Argentina",
    en: "Buenos Aires, Argentina",
  },
  sideNote: {
    es: "Backend .NET, APIs robustas e interfaces cuidadas.",
    en: "Backend .NET, robust APIs and polished interfaces.",
  },
  pillars: [
    {
      title: {
        es: "EXPERIENCIA EN SISTEMAS REALES",
        en: "REAL-WORLD SYSTEMS",
      },
      body: {
        es: "Trabaje desarrollando y manteniendo aplicaciones empresariales con .NET, APIs REST, SQL Server y React. Mi experiencia incluye funcionalidades de negocio, integraciones, procesamiento de datos e incidencias en produccion.",
        en: "I have worked on enterprise applications with .NET, REST APIs, SQL Server and React. My experience includes business features, integrations, data processing and production issues.",
      },
    },
    {
      title: {
        es: "BACKEND Y FRONTEND CONECTADOS",
        en: "CONNECTED BACKEND AND FRONTEND",
      },
      body: {
        es: "Mi foco principal esta en el ecosistema .NET, pero entiendo el producto de punta a punta. Puedo trabajar la logica de una API, el modelado de datos y la interfaz que utiliza el usuario.",
        en: "My main focus is the .NET ecosystem, but I understand the product end to end. I can work on API logic, data modeling and the interface used by the end user.",
      },
    },
    {
      title: {
        es: "TECNOLOGIA CON IDENTIDAD",
        en: "TECHNOLOGY WITH IDENTITY",
      },
      body: {
        es: "No considero que una aplicacion este terminada solamente porque funciona. Tambien me importan la claridad, la usabilidad y los detalles visuales que construyen una experiencia coherente.",
        en: "I do not consider an application finished just because it works. Clarity, usability and the visual details that build a coherent experience matter too.",
      },
    },
  ],
  links: [
    {
      label: { es: "GitHub", en: "GitHub" },
      icon: "github",
      href: "https://github.com/antemortem22",
    },
    {
      label: { es: "LinkedIn", en: "LinkedIn" },
      icon: "linkedin",
      href: "https://www.linkedin.com/in/agostina-di-napoli/",
    },
    {
      label: { es: "Descargar CV", en: "Download CV" },
      icon: "download",
      href: {
        es: "/cv-agostina-di-napoli-es.pdf",
        en: "/cv-agostina-di-napoli-en.pdf",
      },
      variant: "primary",
    },
  ],
};
