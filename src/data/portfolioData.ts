import {
  PortfolioDataSchema,
  type SkillItem,
  type ProjectItem,
  type EvolutionMilestone,
  type Profile,
  type PortfolioData,
} from "@/lib/schemas/portfolioSchema";

export type { SkillItem, ProjectItem, EvolutionMilestone, Profile, PortfolioData };

const rawPortfolioData = {
  profile: {
    name: "Johnjulve",
    alias: "JAJulveLabs",
    title: "Full-Stack Junior Software Developer",
    rank: "S Class Programmer",
    existenceValue: "1,250,000+",
    epProgress: 88,
    status: "Active • Available for Strategic Roles",
    location: "Philippines",
    tagline: "IMAGINATION & RIGOR",
    subheadline: "ARCHITECTING RESILIENT HIGH-PERFORMANCE SYSTEMS",
    bio: "Specializing in polyglot test execution harnesses, modular full-stack web platforms, and continuous engineering discipline. Turning complex distributed requirements into elegant, type-safe, and self-documenting codebases.",
    socials: {
      github: "https://github.com/Johnjulve",
      linkedin: "https://linkedin.com",
      email: "johnandrei.julve@gmail.com",
    },
  },

  skills: {
    intrinsic: [
      {
        name: "System Architecture",
        category: "Intrinsic",
        iconName: "Cpu",
        proficiency: 95,
        description: "Modular separation of concerns, adapter engines, and decoupled domain layers.",
        tags: ["Clean Architecture", "Adapter Pattern", "Hexagonal"],
      },
      {
        name: "Full-Stack Development",
        category: "Intrinsic",
        iconName: "Layers",
        proficiency: 92,
        description: "Next.js 15 App Router, React 19, Node.js, and serverless edge functions.",
        tags: ["Next.js", "React 19", "Node.js", "TypeScript"],
      },
      {
        name: "Type Safety & Contracts",
        category: "Intrinsic",
        iconName: "ShieldCheck",
        proficiency: 96,
        description: "Zero-any TypeScript policies, runtime schema validation via Zod.",
        tags: ["Strict TypeScript", "Zod", "Schema Validation"],
      },
      {
        name: "API & Protocol Design",
        category: "Intrinsic",
        iconName: "Workflow",
        proficiency: 90,
        description: "Standardized RESTful APIs, SSE streaming, and CLI IPC bridges.",
        tags: ["REST", "SSE", "IPC", "JSON-RPC"],
      },
    ] as SkillItem[],

    extra: [
      {
        name: "Automated Testing Engines",
        category: "Extra",
        iconName: "Terminal",
        proficiency: 94,
        description: "Polyglot test harnesses, Pytest, Vitest, and unified JSON reporter streams.",
        tags: ["UniversalTester", "Vitest", "Pytest", "Load Testing"],
      },
      {
        name: "Performance Engineering",
        category: "Extra",
        iconName: "Gauge",
        proficiency: 90,
        description: "Hardware-accelerated CSS, zero-CLS web pages, sub-100ms cold starts.",
        tags: ["Core Web Vitals", "Turbopack", "Bundle Optimization"],
      },
      {
        name: "CI/CD & Release Runbooks",
        category: "Extra",
        iconName: "GitBranch",
        proficiency: 88,
        description: "Automated verification pipelines, pre-release forensic audits, SemVer.",
        tags: ["GitHub Actions", "SemVer", "Changelog Sync"],
      },
      {
        name: "Responsive UI & Aesthetics",
        category: "Extra",
        iconName: "Palette",
        proficiency: 93,
        description: "Tailwind CSS v4 design tokens, glassmorphism, Framer Motion transitions.",
        tags: ["Tailwind v4", "Framer Motion", "Design Tokens"],
      },
    ] as SkillItem[],

    ultimate: [
      {
        name: "Wisdom Lord Raphael",
        category: "Ultimate",
        iconName: "Sparkles",
        proficiency: 99,
        description: "Automated continuous documentation synchronization, architecture tracking, and self-auditing repositories.",
        tags: ["Auto-Sync", "Forensic Audits", "Living Docs"],
      },
      {
        name: "Universal Test Harness Engine",
        category: "Ultimate",
        iconName: "Binary",
        proficiency: 96,
        description: "Cross-ecosystem runner executing algorithm benchmarks and multi-language suites without external dependencies.",
        tags: ["Multi-Adapter", "Polyglot", "Zero-Dependency"],
      },
    ] as SkillItem[],
  },

  projects: [
    {
      id: "universal-tester",
      title: "UniversalTester",
      tagline: "Autonomous Polyglot Test Harness & Benchmarking Engine",
      classification: "System Infrastructure",
      epValue: "480,000 EP",
      description:
        "A modular test execution engine featuring a hybrid architecture: a dependency-free native testing engine for algorithm & logic tests paired with an extensible multi-language adapter framework (Python, Node.js/TypeScript, Java, PHP).",
      architectureHighlights: [
        "Two-pillar hybrid architecture: Native Core Engine + Pluggable Adapter Registry",
        "Zero-dependency Python execution with standardized TestResult schema",
        "Integrated performance profiling, concurrency load stress tests, and automated forensic changelogs",
      ],
      techStack: ["Python 3", "Node.js", "TypeScript", "CLI Toolchains", "JSON Schema"],
      githubUrl: "https://github.com/Johnjulve/UniversalTester",
      //metrics: [],
    },
    {
      id: "e-botar",
      title: "E_Botar",
      tagline: "Enterprise Full-Stack Voting & Governance Platform",
      classification: "Full-Stack Enterprise",
      epValue: "520,000 EP",
      description:
        "A multi-tenant electronic voting system architected with strict separation of frontend state layers, cryptographically verified voter authorization, and real-time ballot aggregation.",
      architectureHighlights: [
        "Layered CSS Architecture Strategy with strict design token governance",
        "Secure JWT authentication with automated session recovery and role barriers",
        "Automated report generation with dynamic client-side PDF export and audit trails",
      ],
      techStack: ["React 19", "Vite 7", "Python", "Bootstrap 5", "JWT", "REST API"],
      githubUrl: "https://github.com/Johnjulve/E_Botar",
      //metrics: [],
    },
    {
      id: "e-botar-lite",
      title: "E_Botar-Lite",
      tagline: "Ultra-Lightweight Micro-Platform for Edge Deployments",
      classification: "Micro-Architecture",
      epValue: "250,000 EP",
      description:
        "A hyper-optimized variant of E_Botar engineered specifically for low-bandwidth environments, localized server hardware, and edge deployment targets.",
      architectureHighlights: [
        "Stripped runtime dependencies for sub-second page loads on 3G connections",
        "Local database cache fallback during network partition events",
      ],
      techStack: ["React", "Lightweight State", "Tailwind CSS", "SQLite"],
      githubUrl: "https://github.com/Johnjulve/E_Botar-Lite",
      //metrics: [],
    },
  ],

  evolution: [
    {
      period: "2024 - Present",
      title: "Lead Systems & Full-Stack Architect",
      rank: "Command Class",
      organization: "JAJulveLabs",
      description: "Directing architecture, core engines, and continuous documentation pipelines across flagship software projects.",
      achievements: [
        "Architected UniversalTester with zero-dependency native orchestrator and multi-language adapters.",
        "Engineered E_Botar platform to v4.0.0 with formalized CSS architecture strategy and audit protocols.",
        "Authored the Continuous Documentation Sync discipline for automated repository synchronization.",
      ],
    },
  ],
};

export const PORTFOLIO_DATA: PortfolioData = PortfolioDataSchema.parse(rawPortfolioData);
