import type { BrandData } from "@/types/content";

export const brand: BrandData = {
  name: "AGOS",
  initials: "AD",
  logo: "/icono-ad.svg",
  cvUrl: {
    es: "/cv-agostina-di-napoli-es.pdf",
    en: "/cv-agostina-di-napoli-en.pdf",
  },
  navItems: [
    { label: { es: "Proyectos", en: "Projects" }, href: "#projects" },
    { label: { es: "Skills", en: "Skills" }, href: "#skills" },
    { label: { es: "Sobre mí", en: "About" }, href: "#about" },
    { label: { es: "Contacto", en: "Contact" }, href: "#contact" },
  ],
  cvLabel: {
    es: "Descargar CV",
    en: "Download CV",
  },
  footerRights: {
    es: "Todos los derechos reservados.",
    en: "All rights reserved.",
  },
  socialLinks: [
    { label: "GitHub", href: "https://github.com/antemortem22" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/agostina-di-napoli/" },
  ],
};
