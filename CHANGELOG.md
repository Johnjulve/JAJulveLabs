# Changelog

All notable changes to the **JAJulveLabs** portfolio project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.1.1] - 2026-09-10

### Fixed
- **Mobile Top Header Layout & Ticker Wrapping** ([`TopTicker.tsx`](file:///d:/System%20Projects/JAJulveLabs/src/components/layout/TopTicker.tsx)):
  - Eliminated awkward flex-wrapping that forced socials and contact buttons onto an orphaned second line with empty left space on narrow screens.
  - Formatted `TopTicker` as a single, sleek, compact cybernetic announcement bar with `min-w-0` graceful text truncation (`truncate`).
  - Streamlined mobile ticker presentation by moving the bulky desktop contact button to `sm:inline-flex`, maintaining quick-tap social icons (GitHub, LinkedIn, Email) on the bar.
- **Next.js Dev Indicator Collision** ([`next.config.ts`](file:///d:/System%20Projects/JAJulveLabs/next.config.ts)):
  - Disabled the Next.js dev indicator overlay badge (`devIndicators: false`) to prevent it from floating over and obscuring the top-left `« NOTICE »` beacon in the ticker and the `GS` logo emblem in the sticky navbar during development.
- **Responsive Header Proportions & Mobile Drawer Actions** ([`Navbar.tsx`](file:///d:/System%20Projects/JAJulveLabs/src/components/layout/Navbar.tsx)):
  - Adjusted header height to `h-16 sm:h-20` for balanced mobile vertical real-estate.
  - Enriched the mobile navigation drawer with a prominent full-width `» Contact Me` action, direct social links (GitHub, LinkedIn, Email), and Raphael replay controls.

## [1.1.0] - 2026-09-07

### Added
- **Top Cybernetic Mana Scroll Progress Bar** ([`ScrollProgressBar.tsx`](file:///d:/System%20Projects/JAJulveLabs/src/components/ui/ScrollProgressBar.tsx)):
  - Fixed top telemetry progress bar powered by Framer Motion's `useScroll` and `useSpring` physics smoothing (`stiffness: 140, damping: 30`).
  - Luminous cyan-to-emerald-to-amber mana gradient with a glowing leading-edge beacon that responds dynamically to page scroll depth.
- **Hero Scroll Exploration Prompt** ([`HeroSection.tsx`](file:///d:/System%20Projects/JAJulveLabs/src/features/hero/HeroSection.tsx)):
  - Centered bottom scroll cue (`"SCROLL TO EXPLORE ARCHIVES"`) with a pulsing emerald chevron guiding visitors into the Skills Matrix.
- **Stagger Container Animation Helpers** ([`ScrollReveal.tsx`](file:///d:/System%20Projects/JAJulveLabs/src/components/ui/ScrollReveal.tsx)):
  - Exported `ScrollStaggerContainer` and `ScrollStaggerItem` utilities for clean cascading reveals across grid components.

### Changed & Improved
- **Bidirectional Repeating Scroll Transitions (`once: false`)**:
  - Re-architected [`ScrollReveal.tsx`](file:///d:/System%20Projects/JAJulveLabs/src/components/ui/ScrollReveal.tsx) with Framer Motion (`motion.div`) and `once = false` to ensure animations re-trigger whenever users scroll up or down.
  - Implemented asymmetric exits (`0.25s` with 0 delay) for instant resets upon viewport exit, paired with smooth cinematic entrances (`ease: [0.22, 1, 0.36, 1]`) on re-entry.
- **Centered Hero Section Layout**:
  - Configured `<section id="hero">` with `flex-col` and positioned the scroll cue with `absolute bottom-4 left-1/2 -translate-x-1/2 z-20`, eliminating horizontal displacement between the hero grid, portrait cutout, and scroll indicator.
- **Timeline Marker Alignment & Scaled Node** ([`EvolutionSection.tsx`](file:///d:/System%20Projects/JAJulveLabs/src/features/evolution/EvolutionSection.tsx)):
  - Aligned marker node coordinates (`left-6 sm:left-8 -translate-x-1/2`) to sit concentric with the vertical gradient line (`before:left-6 sm:before:left-8`), eliminating the 10px offset.
  - Scaled the marker node to `w-11 sm:w-12` and the `Milestone` icon to `w-5 sm:w-6` with an inner Great Sage concentric ring and enhanced neon aura (`shadow-[0_0_22px_rgba(16,185,129,0.7)]`).
  - Vertically aligned the marker node to `top-6 sm:top-7` level with the milestone card header.
- **System Version Indicators**:
  - Bumped version to `v1.1.0` across [`package.json`](file:///d:/System%20Projects/JAJulveLabs/package.json) and [`Footer.tsx`](file:///d:/System%20Projects/JAJulveLabs/src/components/layout/Footer.tsx).

---

## [1.0.1] - 2026-09-07

- **Dynamic Scroll-Driven Section Transitions**:
  - Re-architected [`ScrollReveal.tsx`](file:///d:/System%20Projects/JAJulveLabs/src/components/ui/ScrollReveal.tsx) to dynamically trigger as the user scrolls into each section.
  - Implemented a cyberpunk/anime unblur-scale-slide transition (`translate3d(0, 36px, 0) scale(0.97) blur(4px) -> translate3d(0, 0, 0) scale(1) blur(0px)`) with spring-like cubic-bezier easing (`cubic-bezier(0.16, 1, 0.3, 1)`).
  - Paired IntersectionObserver with a real-time window scroll listener fallback so content always triggers smoothly without getting stuck.
- **Cascading Skill & Project Card Waves**:
  - Wrapped each card in [`TensuraSkillsMatrix.tsx`](file:///d:/System%20Projects/JAJulveLabs/src/features/skills/TensuraSkillsMatrix.tsx) in individual staggered scroll reveals (`delay={index * 0.08}s`), creating a fluid cascade as visitors scroll into Ultimate, Intrinsic, and Extra skills.
- **Above-The-Fold Hero Mount Animation**:
  - Direct mount animation in [`HeroSection.tsx`](file:///d:/System%20Projects/JAJulveLabs/src/features/hero/HeroSection.tsx) so the headline, Existence Value bar, and portrait are instantly active.
- **System Version Indicators**:
  - Bumped version to `v1.0.1` in [`package.json`](file:///d:/System%20Projects/JAJulveLabs/package.json) and [`Footer.tsx`](file:///d:/System%20Projects/JAJulveLabs/src/components/layout/Footer.tsx).

---

## [1.0.0] - 2026-09-07

### Production Release — JAJulveLabs Developer Portfolio & Tensura Great Sage Architecture

#### Added
- **Tensura (Voice of the World / Raphael) Cinematic Intro**:
  - **Vector SVG Magic Circle Engine** ([`RaphaelMagicCircle.tsx`](file:///d:/System%20Projects/JAJulveLabs/src/components/intro/RaphaelMagicCircle.tsx)): Concentric geometric rings, 12-pointed star polygon, dual circular `<textPath>` runic curves, and 60fps CSS keyframe rotations (22s clockwise, 28s counter-clockwise, 60s radiant rays, 1.8s core pulse).
  - **Typewriter Dialogue HUD** ([`VoiceOfTheWorldHUD.tsx`](file:///d:/System%20Projects/JAJulveLabs/src/components/intro/VoiceOfTheWorldHUD.tsx)): Dialogue typewriter engine with « NOTICE » gold tag, configurable character streaming, and `[ Skip >> ]` button.
  - **Root Orchestrator** ([`RaphaelIntro.tsx`](file:///d:/System%20Projects/JAJulveLabs/src/components/intro/RaphaelIntro.tsx)): Manages session storage caching (`portfolio_intro_seen`), body scroll lock, `Escape` / `Space` keyboard shortcuts, and scale-out zoom/bloom exit transition.
  - **Replay Capability**: Dedicated Replay Intro button in the navigation bar to replay the cinematic experience anytime.

- **Glint & Great Sage UI Architecture Fusion** ([`src/app/page.tsx`](file:///d:/System%20Projects/JAJulveLabs/src/app/page.tsx)):
  - **Hero Section** ([`HeroSection.tsx`](file:///d:/System%20Projects/JAJulveLabs/src/features/hero/HeroSection.tsx)): Desktop two-column split layout with massive typographic punch, `Existence Value (EP): 1,250,000+` energy gauge, tailored developer portrait cutout, and glowing concentric Great Sage magic rings.
  - **Top Protocol Ticker** ([`TopTicker.tsx`](file:///d:/System%20Projects/JAJulveLabs/src/components/layout/TopTicker.tsx)): Voice of the World announcement bar with live GitHub and LinkedIn links and direct contact protocol.
  - **Great Sage Bracketed Navbar** ([`Navbar.tsx`](file:///d:/System%20Projects/JAJulveLabs/src/components/layout/Navbar.tsx)): `[Status]`, `[Core Skills]`, `[Project Portfolio]`, `[Growth & Evolution]`, `[Thought Communication]` with active scroll spy.
  - **Mini Raphael (Wisdom Lord) Core Assistant** ([`RaphaelAssistant.tsx`](file:///d:/System%20Projects/JAJulveLabs/src/components/layout/RaphaelAssistant.tsx)): Floating vector SVG core anchored at `bottom-6 left-6` with non-shifting vertical dialogue cards cycling through Great Sage insights.
  - **Tensura Skills Matrix** ([`TensuraSkillsMatrix.tsx`](file:///d:/System%20Projects/JAJulveLabs/src/features/skills/TensuraSkillsMatrix.tsx)): Three-tier capability matrix (`[Intrinsic Skills]`, `[Extra Skills]`, `[Ultimate Skills]`) with RPG stat gauges.
  - **Project Showcase** ([`ProjectsSection.tsx`](file:///d:/System%20Projects/JAJulveLabs/src/features/projects/ProjectsSection.tsx)): Showcasing `UniversalTester`, `E_Botar`, and `E_Botar-Lite` with architectural metrics and repository links.
  - **Growth & Evolution Timeline** ([`EvolutionSection.tsx`](file:///d:/System%20Projects/JAJulveLabs/src/features/evolution/EvolutionSection.tsx)): Interactive milestone chronology and system breakthroughs.
  - **Thought Communication Protocol** ([`ContactSection.tsx`](file:///d:/System%20Projects/JAJulveLabs/src/features/contact/ContactSection.tsx)): Direct transmission channels, 1-click clipboard email copy (`johnandrei.julve@gmail.com`), and interactive telemetry transmission form.

- **Animation & Motion Utilities**:
  - Reusable Framer Motion viewport reveal utility ([`ScrollReveal.tsx`](file:///d:/System%20Projects/JAJulveLabs/src/components/ui/ScrollReveal.tsx)) supporting multi-directional entry and staggered child triggers.
  - Global smooth scrolling (`scroll-smooth`) and sticky navbar scroll offset (`scroll-pt-24`).

#### Changed & Improved
- **Flexible Project Metrics Architecture**:
  - Made `metrics` optional (`metrics?:`) in [`ProjectItem`](file:///d:/System%20Projects/JAJulveLabs/src/data/portfolioData.ts).
  - Updated [`ProjectsSection.tsx`](file:///d:/System%20Projects/JAJulveLabs/src/features/projects/ProjectsSection.tsx) to conditionally render the metrics box only when metrics exist and contain entries, allowing projects to omit or comment out metrics cleanly without type errors or layout artifacts.
- **Dynamic Portfolio Data Architecture**:
  - Centralized portfolio source of truth in [`src/data/portfolioData.ts`](file:///d:/System%20Projects/JAJulveLabs/src/data/portfolioData.ts) bound dynamically to profile title, rank, bio, project metrics, and contact information.
- **Header Spacing & Word-Wrap Elimination**:
  - Added strict `whitespace-nowrap` and `shrink-0` across brand title, rank pill, subtitle, bracketed nav links, and the Replay Intro button to eliminate wrapping onto multiple lines.
  - Configured responsive breakpoints (`xl:flex` for desktop bracketed links, `xl:hidden` for mobile drawer toggle) for clean spacing across all screen sizes.
- **Footer Version Badge**:
  - Added official `v1.0.0` pill badge directly beside `JAJULVELABS` in [`Footer.tsx`](file:///d:/System%20Projects/JAJulveLabs/src/components/layout/Footer.tsx).
- **Portrait Bottom Edge Gradient Fade**:
  - Applied CSS gradient alpha mask (`[mask-image:linear-gradient(to_bottom,black_65%,transparent_98%)]`) to hero portrait container to smoothly feather out into the ambient dark backdrop.

#### Security & Repository Privacy
- Enforced `.gitignore` rules for `.agents/`, `AGENTS.md`, `CLAUDE.md`, and `GEMINI.md` to ensure AI instructions and local project guidelines remain uncommitted to public repositories.
