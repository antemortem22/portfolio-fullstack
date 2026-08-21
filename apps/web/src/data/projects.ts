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
    es: "Todavía no hay proyectos publicados.",
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
    category: "Landing Page",
    description: {
      es: "Next.js 15 + React 19 + TypeScript + Tailwind CSS. Aplicación Full Stack con arquitectura basada en microservicios utilizando .NET 10, ASP.NET Core Web API, Entity Framework Core (DB First) y SQL Server. Internacionalización completa EN/ES, comunicación mediante APIs REST, CI con GitHub Actions y despliegue continuo del frontend en Vercel. Arquitectura preparada para escalar con servicios independientes de Portfolio, Identity y Messaging, siguiendo una separación por capas (Controller -> Service -> Repository -> Data) y enfocada en mantenibilidad, escalabilidad y buenas prácticas de desarrollo.",
      en: "Next.js 15 + React 19 + TypeScript + Tailwind CSS. Full Stack application built around a microservices-oriented architecture using .NET 10, ASP.NET Core Web API, Entity Framework Core (DB First), and SQL Server. Full EN/ES internationalization, REST APIs, continuous integration with GitHub Actions, and continuous frontend deployment on Vercel. Designed to scale through independent Portfolio, Identity, and Messaging services, following a layered architecture (Controller -> Service -> Repository -> Data) with a strong focus on maintainability, scalability, and clean engineering practices.",
    },
    tags: [".NET 10", "NEXT.JS", "REACT 19", "TAILWIND CSS", "MOTION", "ASP.NET CORE", "SQL SERVER", "REST API", "GITHUB ACTIONS"],
    repositoryUrl: "https://github.com/antemortem22/portfolio-fullstack",
    projectUrl: "https://agosdev-portfolio.vercel.app",
    image: "/project-portfolio-preview-v2.png",
    statusLabel: "In progress",
  },
  {
    id: 2,
    published: true,
    order: 2,
    title: "RestaurantApp",
    category: "Web App",
    description: {
      es: "Challenge técnico de reservas para restaurante, diseñado para administrar turnos, disponibilidad y operaciones de reserva desde una interfaz web funcional conectada a una API segura y documentada. ASP.NET Core Web API + Blazor Server sobre .NET 8, con SQL Server y Entity Framework Core 8. Implementa autenticación JWT, autorización por rol, rate limiting, caché de lecturas, seed de datos y Swagger con Bearer Auth. La solución expone calendario semanal de cupos, reservas confirmadas y canceladas, además de ABM de reservas con validaciones de negocio sobre fechas, capacidad por franja horaria y prevención de duplicados.",
      en: "Restaurant booking challenge built to manage reservations, availability and operations from a functional web interface connected to a secure and documented API. Built with ASP.NET Core Web API and Blazor Server on .NET 8, using SQL Server and Entity Framework Core 8. It includes JWT authentication, role-based authorization, rate limiting, read caching, seed data and Swagger with Bearer Auth. The solution exposes a weekly availability calendar, confirmed and cancelled reservations, plus reservation CRUD with business validations for dates, time-slot capacity and duplicate prevention.",
    },
    tags: [".NET 8", "BLAZOR SERVER", "SQL SERVER", "ENTITY FRAMEWORK", "JWT", "SWAGGER"],
    repositoryUrl: "https://github.com/antemortem22/RestaurantApp",
    image: "/project-restaurant-app.png",
    statusLabel: "Completed",
  },
  {
    id: 3,
    published: true,
    order: 3,
    title: "Invitación BabyShower",
    category: "Landing Page",
    description: {
      es: "Aplicación web desarrollada como landing interactiva para un baby shower, enfocada en centralizar la información del evento, mejorar la experiencia de los invitados y simplificar la organización de asistencia y regalos desde una única interfaz. React 19 + TypeScript + Vite. UI responsive con Tailwind CSS v4 y estilos visuales personalizados mediante CSS variables, cuenta regresiva en tiempo real, galería interactiva con lightbox, confirmación de asistencia por WhatsApp con mensaje prearmado, archivo .ics para agregar el evento al calendario, música de fondo y gestión de regalos con Supabase, incluyendo carga remota, reserva de ítems y fallback local en modo demo.",
      en: "Interactive baby shower landing page designed to centralize event information, improve the guest experience, and simplify RSVP and gift coordination through a single interface. Built with React 19, TypeScript and Vite. It features a responsive UI with Tailwind CSS v4, custom styling through CSS variables, a real-time countdown, an interactive gallery with lightbox, WhatsApp RSVP with a pre-filled message, an .ics file to add the event to a calendar, background music, and gift management through Supabase, including remote data loading, item reservations and a local demo fallback.",
    },
    tags: ["GITHUB", "REACT 19", "SUPABASE", "TAILWIND CSS", "VERCEL", "TYPESCRIPT"],
    repositoryUrl: "https://github.com/antemortem22/landing-invitation-public",
    projectUrl: "https://landing-invitation-public.vercel.app",
    image: "/project-invitation.png",
    statusLabel: "Completed",
  },
];
