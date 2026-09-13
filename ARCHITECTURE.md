# JAJulveLabs System Architecture

## 1. Architectural Principles

JAJulveLabs follows a modular, feature-sliced architecture designed for maximum maintainability, performance, and type safety.

```text
               ┌───────────────────────────────┐
               │    Next.js 15 App Router      │
               │       (src/app/page.tsx)      │
               └──────────────┬────────────────┘
                              │
               ┌──────────────┴──────────────┐
               │                             │
    [Session Check: New Visitor]    [Returning Visitor]
               │                             │
               ▼                             ▼
   ┌───────────────────────┐                 │
   │  Tensura (Raphael)    │                 │
   │  Intro Overlay        │                 │
   │  - Cosmic Canvas      │                 │
   │  - SVG Magic Circle   │                 │
   │  - Typewriter HUD     │                 │
   └───────────┬───────────┘                 │
               │ [Complete / Skip / Esc]     │
               └──────────────┬──────────────┘
                              │
                              ▼
               ┌─────────────────────────────┐
               │   Main Portfolio Canvas     │
               │  - TopTicker (Protocol Announce)
               │  - Navbar (Great Sage Spies)│
               │  - Hero Section (Glint Split│
               │    + Great Sage Avatar Ring)│
               │  - Tensura Skills Matrix    │
               │    ([Intrinsic/Extra/Ult])  │
               │  - Projects (UniversalTester│
               │    & E_Botar Showcase)       │
               │  - Evolution Timeline       │
               │  - Thought Communication    │
               │  - Footer                   │
               │  - SlimeAssistant (Rimuru)  │
               └─────────────────────────────┘
```

---

## 2. Tensura (Raphael) Intro State Engine
Path: [`src/components/intro/`](file:///d:/System%20Projects/JAJulveLabs/src/components/intro)

The intro component is organized into 4 distinct modular layers:

1. **Layer 1: Cosmic Canvas (DOM Overlay)** (`RaphaelIntro.tsx`): Fixed full-viewport container (`z-index: 9999`) with deep teal-to-black radial gradient (`#091a29` -> `#02070c`). Locks `document.body.style.overflow` while active.
2. **Layer 2: SVG Magic Circle Engine** (`RaphaelMagicCircle.tsx`): Pure vector geometry consisting of concentric rings, a 12-pointed star, radiant rays, and dual counter-rotating circular `<textPath>` elements running at 60fps via CSS keyframe transforms (`22s` clockwise outer runic ring, `28s` counter-clockwise inner skill ring, `1.8s` pulsating central core).
3. **Layer 3: Voice of the World HUD** (`VoiceOfTheWorldHUD.tsx`): Anime-style terminal display rendering « NOTICE » in gold (`#ffd24d`) and a 34ms typewriter character stream with 750ms line-hold delays.
4. **Layer 4: State & Transition Handler** (`RaphaelIntro.tsx`):
   - Manages exit bloom/scale outward animations (`scale(2.8)` and opacity 0).
   - Listens to `Escape` or `Space` keyboard events for instant skipping.
   - Saves `portfolio_intro_seen: true` to `sessionStorage` so refreshing or navigating does not repeatedly show the intro.
   - Provides a developer replay trigger via query param `?intro=replay` or the interactive UI button.

---

## 3. Data Integrity & Validation

All portfolio content is decoupled from UI presentation and strictly validated through **Zod**:
- `src/lib/schemas/portfolioSchema.ts`: Contains runtime validation schemas (`SkillItemSchema`, `ProjectItemSchema`, `EvolutionMilestoneSchema`, `PortfolioDataSchema`).
- `src/data/portfolioData.ts`: Single source of truth. Validated at module load and build time via `PortfolioDataSchema.parse(...)`. Any schema violation terminates compilation with diagnostic error details.

---

## 4. Motion & Accessibility Architecture

- **Scroll Reveal Pipeline**: Powered by Framer Motion (`ScrollReveal.tsx`) utilizing `useReducedMotion`. When OS accessibility motion suppression is active, animations, transforms, and blur filters are immediately bypassed.
- **Mana Scroll Depth Bar**: Physics-smoothed scroll depth telemetry rendered with `useScroll` and `useSpring` on a GPU-accelerated `scaleX` transform.
