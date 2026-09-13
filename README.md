# JAJulveLabs

> Personal developer portfolio showcasing software engineering projects, system architecture, skills, and technical discipline.

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?style=flat&logo=tailwindcss)](https://tailwindcss.com/)
[![React](https://img.shields.io/badge/React-19-61dafb?style=flat&logo=react)](https://react.dev/)

---

## Overview

**JAJulveLabs** is the official portfolio and engineering showcase for **Johnjulve**. Designed with an emphasis on code quality, performance, and modern architecture, this project highlights key full-stack platforms, system testing engines, and interactive web experiences.

### Key Highlights & Features
- **Tensura (Voice of the World / Raphael) Intro**: A lightweight, vector-based anime-inspired introductory screen powered by pure SVG geometry, CSS hardware-accelerated transforms, and a typewriter dialogue engine.
- **Architectural Discipline**: Strict TypeScript typings, schema validation via **Zod**, and modular feature-sliced directory layout.
- **Modern Design System**: Semantic color tokens, glassmorphism, responsive mobile-first layouts, and smooth micro-interactions via **Framer Motion**.
- **Performance & Accessibility**: 100/100 Core Web Vitals target, zero layout shift (CLS), semantic HTML5 hierarchy, and reduced-motion fallbacks.

### 🚀 Release Highlights (v1.1.2)
- **Runtime Schema Validation via Zod**: Active contract enforcement validating portfolio profile, skill hierarchy, and projects via `PortfolioDataSchema`.
- **Reduced Motion Support**: WCAG 2.1 motion-sensitive compliance across all Framer Motion scroll triggers via `useReducedMotion`.
- **Typewriter Timer Leak Fix**: Deterministic timer cleanup during rapid intro skips and unmount cycles.
- **Enriched SEO & Social Sharing**: OpenGraph, Twitter cards, and semantic metadata for rich link previews.

---

## Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Framework** | Next.js 16 (App Router, Turbopack, React Server Components) |
| **Language** | TypeScript 5 (Strict mode) |
| **Styling** | Tailwind CSS v4, Vanilla CSS Design Tokens |
| **Animation** | Framer Motion, CSS Keyframes (Hardware Accelerated) |
| **Icons** | Lucide React |
| **Data & Validation** | Zod schemas for projects, experience, and skills |
| **Code Quality** | ESLint 9 Flat Config, Prettier |

---

## Getting Started

### Prerequisites
- **Node.js**: v20.x or higher (tested on Node v24)
- **npm**: v10.x or higher

### Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the local development server**:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm run start
```

---

## Project Structure

```text
JAJulveLabs/
├── .agents/                    # Agent discipline rules & continuous doc sync
│   ├── rules/
│   └── skills/
├── public/                     # Static public assets
├── src/
│   ├── app/                    # Next.js App Router (layouts, pages, globals)
│   ├── components/
│   │   ├── intro/              # Tensura (Raphael) intro screen & SVG magic circle
│   │   ├── layout/             # Navbar, Footer, Mobile Drawer, Assistant
│   │   └── ui/                 # Visual primitives & motion wrappers (ScrollReveal, ScrollProgressBar, Icons)
│   ├── data/                   # Validated portfolio datasets (Projects, Experience, Skills)
│   ├── features/               # Feature-sliced modules (Hero, Projects, Skills, Contact)
│   └── lib/                    # Shared utilities (cn helper) & Zod validation schemas
├── ARCHITECTURE.md             # System architecture & design token specifications
├── CHANGELOG.md                # Semantic version release log
├── package.json
└── tsconfig.json
```

---

## License

This project is open source and available under the [MIT License](LICENSE).
