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
    es: "Buenos Aires, Argentina",
    en: "Buenos Aires, Argentina",
  },
  sideNote: {
    es: "Especializada en Backend, APIs escalables y experiencias web cuidadosamente diseñadas.",
    en: "Specialized in Backend, scalable APIs and carefully crafted web experiences.",
  },
  pillars: [
    {
      title: {
        es: "EXPERIENCIA EN SISTEMAS REALES",
        en: "REAL-WORLD SYSTEMS",
      },
      body: {
        es: "Participé en el desarrollo y mantenimiento de aplicaciones utilizadas en entornos productivos empresariales, colaborando en la interpretación de necesidades del cliente, el análisis de requerimientos y la construcción de soluciones alineadas al negocio.",
        en: "I have worked on enterprise applications used in production environments, collaborating in understanding client needs, analyzing requirements and building solutions aligned with business goals.",
      },
    },
    {
      title: {
        es: "BACKEND Y FRONTEND CONECTADOS",
        en: "CONNECTED BACKEND AND FRONTEND",
      },
      body: {
        es: "Mi especialización está en Backend con ecosistema .NET, pero me interesa comprender el producto de punta a punta: desde la API y el modelo de datos hasta la interfaz que finalmente utiliza el usuario. No me limito a una tecnología específica; prefiero elegir la herramienta adecuada para cada problema y aprender lo necesario para construir soluciones sólidas.",
        en: "While my specialization is Backend .NET ecosystem, I enjoy working across the entire product, from the API and data model to the user experience. I don't define myself by a single language or framework; I believe in choosing the right tool for each challenge and continuously learning what's needed to build reliable, well-crafted software.",
      },
    },
    {
      title: {
        es: "TECNOLOGÍA CON IDENTIDAD",
        en: "TECHNOLOGY WITH IDENTITY",
      },
      body: {
        es: "No considero que una aplicación esté terminada solo porque funciona. También importa que sea clara, usable y visualmente coherente, para que la solución no solo resuelva un problema, sino que también represente lo que el cliente necesita.",
        en: "I don't consider an application finished just because it works. It also needs to be clear, usable and visually consistent, so the solution not only solves a problem but also represents what the client needs.",
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
