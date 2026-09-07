# Changelog

All notable changes to the **JAJulveLabs** portfolio project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.0.1] - 2026-09-07

### Fixed & Improved
- **Universal Resilient Scroll Reveal Engine**:
  - Re-architected [`ScrollReveal.tsx`](file:///d:/System%20Projects/JAJulveLabs/src/components/ui/ScrollReveal.tsx) with a native `IntersectionObserver`, generous entry margin (`150px`), hardware-accelerated CSS `translate3d` transitions, and an unconditional 800ms fallback safety timer.
  - Completely resolves blank section rendering on deployed environments (such as Vercel), guaranteeing that `[Core Skills]`, `[Project Portfolio]`, `[Growth & Evolution]`, and `[Thought Communication]` reveal reliably across all browsers.
- **Above-The-Fold Hero Mount Animation**:
  - Replaced scroll-dependent `whileInView` with direct mount animation (`animate={{ opacity: 1 }}`) in [`HeroSection.tsx`](file:///d:/System%20Projects/JAJulveLabs/src/features/hero/HeroSection.tsx), ensuring the headline, Existence Value bar, and portrait fade in immediately without waiting for user scroll.
- **System Version Indicators**:
  - Bumped version to `v1.0.1` in [`package.json`](file:///d:/System%20Projects/JAJulveLabs/package.json) and updated the status badge in [`Footer.tsx`](file:///d:/System%20Projects/JAJulveLabs/src/components/layout/Footer.tsx).

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
