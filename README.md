# 🖤 Agos Portfolio – Fullstack Microservices Architecture

> A production-oriented portfolio built with modern frontend technologies and a microservices backend architecture.

<p align="center">
  <img src="https://img.shields.io/badge/Frontend-Next.js-black?style=for-the-badge&logo=next.js" />
  <img src="https://img.shields.io/badge/Backend-.NET_9-purple?style=for-the-badge&logo=dotnet" />
  <img src="https://img.shields.io/badge/Architecture-Microservices-darkred?style=for-the-badge" />
  <img src="https://img.shields.io/badge/CI-GitHub_Actions-blue?style=for-the-badge&logo=githubactions" />
  <img src="https://img.shields.io/badge/Status-In_Progress-9cf?style=for-the-badge" />
</p>

---

## 🌐 Overview | Descripción

### 🇺🇸 English
This project combines a public portfolio landing page with a secure administrative panel, powered by a clean microservices backend architecture.

It is designed not only as a personal portfolio but also as a demonstration of real-world practices.

### 🇪🇸 Español
Este proyecto combina una landing pública con un panel administrativo privado, respaldado por una arquitectura backend basada en microservicios.

Está diseñado no solo como portfolio personal, sino como demostración de prácticas reales.

---

## 🏗 Architecture

```
Next.js (Landing + Admin)
          ↓
       BFF / API Gateway
          ↓
 ┌──────────────────────┐
 │ Identity Service     │
 │ Portfolio Service    │
 │ Messaging Service    │
 └──────────────────────┘
```

### Frontend
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Feature-based architecture
- Route protection via middleware

### Backend
- .NET 9
- Entity Framework Core (Database First)
- Clean Architecture
- REST APIs
- JWT Authentication

---

## 🔐 Authentication Flow

1. Admin login via `/admin`
2. JWT issued by Identity Service
3. Protected routes via middleware
4. Backend authorization enforcement

Security is handled at both frontend and backend levels.

---

## 📂 Repository Structure

```
portfolio-fullstack/
│
├── apps/
│   └── web/
│
├── services/
│   ├── identity-service/
│   ├── portfolio-service/
│   └── messaging-service/
│
├── infra/
│
└── .github/
```

---

## 🌍 Environments

| Branch | Purpose |
|--------|----------|
| dev    | Development |
| test   | Staging |
| main   | Production |

Promotion flow:

```
feature → dev → test → main
```

---

## 🚀 Roadmap

- [x] Monorepo setup
- [x] Environment strategy
- [ ] Bootstrap Next.js frontend
- [ ] Implement Portfolio Service
- [ ] Implement Identity Service
- [ ] Admin Dashboard
- [ ] Messaging system
- [ ] Event-driven notifications
- [ ] Docker containerization
- [ ] Production deployment

---

## 🎯 Why this architecture?

### 🇺🇸 English
This project intentionally adopts a microservices-based architecture to simulate real enterprise scenarios.

The goal is to practice:
- Service isolation
- Authentication flows
- CI/CD strategies
- Environment promotion
- Clean architecture principles

### 🇪🇸 Español
La arquitectura de microservicios fue elegida intencionalmente para simular escenarios reales de entornos empresariales.

El objetivo es practicar:
- Separación de responsabilidades
- Flujos de autenticación
- Estrategias de CI/CD
- Promoción entre ambientes
- Principios de Clean Architecture

---

## 👩‍💻 About the Author

Agos – Fullstack Developer  
Focused on backend development with .NET and modern frontend architecture.

Building scalable systems with clean design and production mindset.

