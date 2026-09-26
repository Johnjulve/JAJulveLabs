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

### 🚀 Release Highlights (v1.2.0)
- **Light & Dark Dual-Mode Theme Engine**: Full CSS custom property design system (`globals.css`) in the curated Rimuru Slime palette (`#040d16` to `#F7FCFC`) with smooth theme transitions.
- **3-Column Hero Transformation & Architectural Telemetry Strip**: High-density engineering overview with interactive cards for UniversalTester, Web Platform, AI & Governance, and 4-node telemetry metrics.
- **Tensura Skills Matrix Deep Blue & Azure Refactoring**: Complete color harmonization, eliminating clash colors, with modernized technical categories and tokenized cards.
- **Component & File Version Tracking**: Granular per-file version matrix documenting the exact lifecycle and state of core UI components and schemas.

#### Previous Highlights (v1.1.2)
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

## Component & File Version Inventory

| File / Component | Version | Role / Layer | Status |
| :--- | :--- | :--- | :--- |
| [`src/app/globals.css`](file:///d:/System%20Projects/JAJulveLabs/src/app/globals.css) | `v1.2.0` | Rimuru Slime CSS tokens & dual-theme variables | Stable |
| [`src/app/page.tsx`](file:///d:/System%20Projects/JAJulveLabs/src/app/page.tsx) | `v1.2.0` | Main canvas & theme color transition container | Stable |
| [`src/lib/schemas/portfolioSchema.ts`](file:///d:/System%20Projects/JAJulveLabs/src/lib/schemas/portfolioSchema.ts) | `v1.2.0` | Zod runtime telemetry & system badge schema | Stable |
| [`src/data/portfolioData.ts`](file:///d:/System%20Projects/JAJulveLabs/src/data/portfolioData.ts) | `v1.2.0` | Validated portfolio datasets & telemetry copy | Stable |
| [`src/components/layout/Navbar.tsx`](file:///d:/System%20Projects/JAJulveLabs/src/components/layout/Navbar.tsx) | `v1.2.0` | Navigation & Light/Dark mode toggle controller | Stable |
| [`src/components/layout/TopTicker.tsx`](file:///d:/System%20Projects/JAJulveLabs/src/components/layout/TopTicker.tsx) | `v1.1.2` | Notice beacon & quick-action social bar | Stable |
| [`src/components/layout/Footer.tsx`](file:///d:/System%20Projects/JAJulveLabs/src/components/layout/Footer.tsx) | `v1.2.0` | Rimuru vector slime orb & version indicator | Stable |
| [`src/components/layout/SlimeAssistant.tsx`](file:///d:/System%20Projects/JAJulveLabs/src/components/layout/SlimeAssistant.tsx) | `v1.1.3` | Mobile-responsive Raphael dialogue HUD | Stable |
| [`src/features/hero/HeroSection.tsx`](file:///d:/System%20Projects/JAJulveLabs/src/features/hero/HeroSection.tsx) | `v1.2.0` | 3-Column telemetry dashboard & feature cards | Stable |
| [`src/features/skills/TensuraSkillsMatrix.tsx`](file:///d:/System%20Projects/JAJulveLabs/src/features/skills/TensuraSkillsMatrix.tsx) | `v1.2.0` | Deep blue/azure themed skills matrix & filtering | Stable |
| [`src/features/projects/ProjectsSection.tsx`](file:///d:/System%20Projects/JAJulveLabs/src/features/projects/ProjectsSection.tsx) | `v1.2.0` | Systems portfolio cards with `systemBadge` tags | Stable |
| [`src/features/evolution/EvolutionSection.tsx`](file:///d:/System%20Projects/JAJulveLabs/src/features/evolution/EvolutionSection.tsx) | `v1.1.2` | Interactive chronological evolution timeline | Stable |
| [`src/features/contact/ContactSection.tsx`](file:///d:/System%20Projects/JAJulveLabs/src/features/contact/ContactSection.tsx) | `v1.1.2` | Direct thought transmission form & action pills | Stable |

---

## License

This project is open source and available under the [MIT License](LICENSE).
