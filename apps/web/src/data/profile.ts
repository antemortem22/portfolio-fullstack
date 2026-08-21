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
    es: "Más allá del código.",
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
    es: "Buenos Aires, Argentina | REMOTE",
    en: "Buenos Aires, Argentina | REMOTE",
  },
  sideNote: {
    es: "Construyo soluciones desde la lógica de negocio hasta la interfaz.",
    en: "I build solutions from business logic to the user interface.",
  },
  pillars: [
    {
      title: {
        es: "EXPERIENCIA EN PRODUCTO REAL",
        en: "CODE THAT REACHES PRODUCTION",
      },
      body: {
        es: "Trabajé sobre aplicaciones utilizadas en entornos productivos, participando en análisis de requerimientos, resolución de incidencias y desarrollo de funcionalidades alineadas a necesidades concretas del negocio.",
        en: "I have worked on applications used in production environments, contributing to requirements analysis, incident resolution, and the development of features aligned with real business needs.",
      },
    },
    {
      title: {
        es: "BACKEND COMO FORTALEZA",
        en: "BACKEND AS MY CORE STRENGTH",
      },
      body: {
        es: "Mi foco está en .NET, APIs, lógica de negocio y datos. Busco construir soluciones claras y mantenibles, sin perder de vista cómo cada decisión impacta en el resto del producto.",
        en: "My main focus is on .NET, APIs, business logic, and data. I aim to build clear, maintainable solutions while considering how each technical decision impacts the rest of the product.",
      },
    },
    {
      title: {
        es: "VISIÓN END-TO-END",
        en: "END-TO-END PERSPECTIVE",
      },
      body: {
        es: "Me interesa entender el flujo completo: desde el modelo de datos y la API hasta la interfaz que utiliza el usuario. Esa mirada me permite comunicarme mejor entre áreas y tomar decisiones técnicas con más contexto.",
        en: "I like to understand the complete flow of a product: from the data model and API to the interface used by the end user. This perspective helps me collaborate across areas and make technical decisions with more context.",
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
