import type { HeroData } from "@/types/content";

export const heroTickerItems = [
  "OPEN TO WORK",
  "FULL STACK DEVELOPER",
  "BACKEND .NET",
  "C# / ASP.NET CORE",
  "REST APIS",
  "REACT / NEXT.JS",
  "SQL SERVER",
  "BUENOS AIRES",
  "REMOTE READY",
] as const;

const tickerLine = `${heroTickerItems.join(" ✦ ")} ✦`;

export const hero: HeroData = {
  intro: {
    es: "¡Hola Mundo! Soy ~",
    en: "Hello World! I'm ~",
  },
  firstName: "AGOSTINA",
  lastName: "DI NAPOLI",
  role: {
    es: "FULL STACK DEVELOPER",
    en: "FULL STACK DEVELOPER",
  },
  editorialEyebrow: {
    es: "Code as ritual, logic as art - turning code into meaning.",
    en: "Code as ritual, logic as art - turning code into meaning.",
  },
  description: {
    es: "Desarrolladora Full Stack especializada en backend y el ecosistema .NET. Construyo aplicaciones web escalables de punta a punta, combinando arquitecturas sólidas, APIs robustas e interfaces cuidadas con React. Participo en todo el ciclo de desarrollo, desde el diseño técnico hasta el despliegue en producción, seleccionando tecnologías según las necesidades reales del producto.",
    en: "Full Stack Developer focused on backend development with .NET ecosystem. I design and build scalable web applications, combining robust APIs, thoughtful architecture, and polished React interfaces. I work across the full development lifecycle, from technical decisions to production deployment, choosing technologies based on what the product actually needs.",
  },
  ticker: {
    es: tickerLine,
    en: tickerLine,
  },
  primaryAction: {
    label: {
      es: "Ver mis proyectos",
      en: "View my projects",
    },
    href: "#projects",
  },
  secondaryAction: {
    label: {
      es: "Hablemos",
      en: "Let's talk",
    },
    href: "#contact",
  },
};
