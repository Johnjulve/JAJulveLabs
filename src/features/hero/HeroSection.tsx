import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  Terminal,
  ChevronDown,
  Layers,
  Cpu,
  Sparkles,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

interface HeroSectionProps {
  onReplayIntro?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden py-10 lg:py-16 w-full max-w-full"
    >
      {/* Background ambient lighting in Rimuru Slime Hues */}
      <div className="absolute top-1/4 left-0 sm:left-10 w-72 sm:w-96 h-72 sm:h-96 max-w-full bg-[#93B9E8]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 sm:right-10 w-72 sm:w-96 h-72 sm:h-96 max-w-full bg-[#3A71A4]/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[var(--bg-page)] to-transparent pointer-events-none" />

      {/* Main Hero Container: 3-column desktop layout (Left Info, Center Portrait, Right Floating Cards) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* COLUMN 1 (5 cols): Typographic Info, Bio, Contact Pill, and CTAs (order-2 on mobile, order-1 on desktop) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 lg:order-1 lg:col-span-5 flex flex-col items-center text-center lg:items-start lg:text-left space-y-5"
          >
            {/* Telemetry Eyebrow */}
            <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent-azure)] tracking-wider">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-azure)] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-azure)]" />
              </span>
              <span className="text-[var(--text-muted)] font-mono">{"//"}</span>
              <span className="font-semibold uppercase tracking-widest text-[11px]">
                VOICE OF THE WORLD • ACTIVE
              </span>
            </div>

            {/* Reference-Inspired Massive Name & Title */}
            <div className="space-y-1.5">
              <span className="text-base sm:text-lg font-mono text-[var(--text-secondary)] font-medium">
                Hello, I&apos;m
              </span>
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black tracking-tight text-[var(--text-heading)] leading-[1.06] uppercase">
                <span className="text-[var(--accent-azure)] dark:drop-shadow-[0_0_20px_rgba(147,185,232,0.4)]">
                  JOHN ANDREI
                </span>
                <br />
                JULVE
              </h1>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md border border-[var(--border-prominent)] bg-[var(--bg-card)] text-[var(--accent-azure)] text-xs font-mono font-semibold shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[var(--accent-azure)]" />
                <span>{PORTFOLIO_DATA.profile.title}</span>
              </div>
            </div>

            {/* Executive Bio */}
            <p className="text-[var(--text-secondary)] text-sm sm:text-base font-light leading-relaxed max-w-lg">
              {PORTFOLIO_DATA.profile.bio}
            </p>

            {/* Email Pill & Social Hub (Reference Mockup Style) */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1">
              <a
                href={`mailto:${PORTFOLIO_DATA.profile.socials.email}`}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] hover:border-[var(--accent-azure)] text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--accent-azure)] transition-colors shadow-sm"
              >
                <Mail className="w-3.5 h-3.5 text-[var(--accent-azure)]" />
                <span>{PORTFOLIO_DATA.profile.socials.email}</span>
              </a>

              <div className="flex items-center gap-2">
                <a
                  href={PORTFOLIO_DATA.profile.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="w-8 h-8 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] hover:border-[var(--accent-azure)] hover:text-[var(--accent-azure)] flex items-center justify-center text-[var(--text-secondary)] transition-all shadow-sm"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={PORTFOLIO_DATA.profile.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="w-8 h-8 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] hover:border-[var(--accent-azure)] hover:text-[var(--accent-azure)] flex items-center justify-center text-[var(--text-secondary)] transition-all shadow-sm"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#3A71A4] hover:bg-[#2A547A] text-[#F7FCFC] font-bold font-mono text-xs tracking-wider uppercase transition-all duration-200 shadow-[0_0_22px_rgba(58,113,164,0.4)] hover:scale-105 active:scale-95 group"
              >
                <span>EXPLORE PROJECTS</span>
                <span className="w-5 h-5 rounded bg-[#040b14] text-[#93B9E8] flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-3 h-3" />
                </span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-[var(--border-prominent)] bg-[var(--bg-card)] hover:bg-[var(--accent-azure)]/15 text-[var(--text-heading)] hover:text-[var(--accent-azure)] font-mono text-xs tracking-wide transition-all duration-200 shadow-sm hover:scale-105 active:scale-95"
              >
                <Mail className="w-3.5 h-3.5 text-[var(--accent-azure)]" />
                <span>COMMENCE CONTACT</span>
              </a>
            </div>
          </motion.div>

          {/* COLUMN 2 (4 cols): Commanding Portrait with True Circular Tensura Slime Orb (order-1 on mobile, order-2 on desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2 lg:col-span-4 flex items-center justify-center relative mt-2 mb-6 lg:my-0"
          >
            {/* Portrait Wrapper */}
            <div className="relative flex items-center justify-center">
              
              {/* TRUE CIRCULAR TENSURA SLIME ORB & DYNAMIC ANIMATED MAGIC RINGS (Locked to 1:1 Aspect Ratio) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] lg:w-[440px] lg:h-[440px] xl:w-[480px] xl:h-[480px] rounded-full pointer-events-none z-0">
                {/* 1. Outer Orbiting Azure Runic Ring with 4 Cardinal Satellite Pips (Clockwise via Framer Motion for Cross-Browser Brave Support) */}
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    duration: 28,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop",
                  }}
                  style={{ transformOrigin: "center center", willChange: "transform" }}
                  className="absolute inset-0 rounded-full border-2 border-dashed border-[#93B9E8]/50"
                >
                  {/* Top Satellite Pip */}
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-3 h-3 rounded-full bg-[#93B9E8] shadow-[0_0_12px_#93B9E8,0_0_4px_#F7FCFC]">
                    <span className="w-1 h-1 rounded-full bg-white" />
                  </span>
                  {/* Bottom Satellite Pip */}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 flex items-center justify-center w-3 h-3 rounded-full bg-[#93B9E8] shadow-[0_0_12px_#93B9E8,0_0_4px_#F7FCFC]">
                    <span className="w-1 h-1 rounded-full bg-white" />
                  </span>
                  {/* Left Satellite Pip */}
                  <span className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-3 h-3 rounded-full bg-[#93B9E8] shadow-[0_0_12px_#93B9E8,0_0_4px_#F7FCFC]">
                    <span className="w-1 h-1 rounded-full bg-white" />
                  </span>
                  {/* Right Satellite Pip */}
                  <span className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-3 h-3 rounded-full bg-[#93B9E8] shadow-[0_0_12px_#93B9E8,0_0_4px_#F7FCFC]">
                    <span className="w-1 h-1 rounded-full bg-white" />
                  </span>
                </motion.div>

                {/* 2. Counter-Rotating Celestial Dotted Ring with 4 Diagonal Mana Nodes (Counter-Clockwise via Framer Motion) */}
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: [0, -360] }}
                  transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop",
                  }}
                  style={{ transformOrigin: "center center", willChange: "transform" }}
                  className="absolute inset-4 sm:inset-6 rounded-full border border-dotted border-[#CCE9F6]/65"
                >
                  {/* Northeast Mana Diamond */}
                  <span className="absolute top-[14.6%] right-[14.6%] translate-x-1/2 -translate-y-1/2 w-2 h-2 rotate-45 bg-[#CCE9F6] shadow-[0_0_8px_#CCE9F6]" />
                  {/* Southeast Mana Diamond */}
                  <span className="absolute bottom-[14.6%] right-[14.6%] translate-x-1/2 translate-y-1/2 w-2 h-2 rotate-45 bg-[#CCE9F6] shadow-[0_0_8px_#CCE9F6]" />
                  {/* Southwest Mana Diamond */}
                  <span className="absolute bottom-[14.6%] left-[14.6%] -translate-x-1/2 translate-y-1/2 w-2 h-2 rotate-45 bg-[#CCE9F6] shadow-[0_0_8px_#CCE9F6]" />
                  {/* Northwest Mana Diamond */}
                  <span className="absolute top-[14.6%] left-[14.6%] -translate-x-1/2 -translate-y-1/2 w-2 h-2 rotate-45 bg-[#CCE9F6] shadow-[0_0_8px_#CCE9F6]" />
                </motion.div>

                {/* 3. Deep Blue Stabilizer Boundary Ring with Gentle Resonant Breathing */}
                <motion.div
                  animate={{
                    scale: [0.98, 1.02, 0.98],
                    opacity: [0.75, 1, 0.75],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-8 sm:inset-12 rounded-full border-2 border-[#3A71A4]/65 dark:shadow-[0_0_35px_rgba(147,185,232,0.35)] shadow-[0_0_20px_rgba(58,113,164,0.15)]"
                />

                {/* 4. Living Rimuru Slime Core Mana Sphere (Dynamic Pulsing & Breathing) */}
                <motion.div
                  animate={{
                    scale: [0.92, 1.08, 0.92],
                    opacity: [0.55, 0.92, 0.55],
                  }}
                  transition={{
                    duration: 4.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-10 sm:inset-14 rounded-full bg-[radial-gradient(circle,rgba(204,233,246,0.48)_0%,rgba(147,185,232,0.3)_40%,rgba(58,113,164,0.18)_70%,transparent_100%)] blur-2xl"
                />

                {/* 5. Concentrated Inner Core Radiance */}
                <motion.div
                  animate={{
                    scale: [1.06, 0.94, 1.06],
                    opacity: [0.35, 0.65, 0.35],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-16 sm:inset-20 rounded-full bg-[#93B9E8]/25 blur-xl"
                />
              </div>

              {/* Commanding Full-Scale User Portrait with Bottom Soft Gradient Mask (Clean Razor-Sharp Cutout) */}
              <div className="relative w-full max-w-[280px] sm:max-w-[360px] lg:max-w-[420px] xl:max-w-[460px] h-[360px] sm:h-[460px] lg:h-[580px] xl:h-[640px] flex items-end justify-center z-10 [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]">
                <Image
                  src="/images/profile.png"
                  alt={`${PORTFOLIO_DATA.profile.name} - ${PORTFOLIO_DATA.profile.title}`}
                  width={700}
                  height={1000}
                  priority
                  className="w-auto h-full object-contain select-none pointer-events-none"
                />
              </div>

              {/* Floating Role Pill (Anchored to Portrait) */}
              <div className="absolute top-2 sm:top-4 right-0 sm:right-2 lg:-right-4 bg-[var(--bg-card)] border border-[var(--border-prominent)] rounded-xl px-3 py-1.5 text-[var(--accent-azure)] font-mono text-[11px] shadow-sm backdrop-blur-md z-20 flex items-center gap-1.5 whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-[var(--accent-azure)] animate-ping" />
                <span className="font-semibold">{PORTFOLIO_DATA.profile.roleBadge}</span>
              </div>
            </div>
          </motion.div>

          {/* COLUMN 3 (3 cols): 3 Floating Tensura Showcase Cards (order-3 on both mobile and desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="order-3 lg:order-3 lg:col-span-3 flex flex-col justify-center space-y-4"
          >
            {/* Floating Card 1: Core Engine */}
            <div className="bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--accent-azure)] rounded-2xl p-4 shadow-md hover:shadow-[0_8px_25px_rgba(147,185,232,0.2)] transition-all duration-300 hover:-translate-y-1 group backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[var(--bg-card-subtle)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--accent-azure)] group-hover:scale-110 transition-transform">
                  <Terminal className="w-5 h-5 text-[var(--accent-azure)]" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[9px] font-mono uppercase tracking-widest text-[var(--text-muted)] font-semibold">
                    {"//"} CORE HARNESS
                  </span>
                  <span className="text-xs font-bold text-[var(--text-heading)] group-hover:text-[var(--accent-azure)] transition-colors">
                    UniversalTester
                  </span>
                </div>
              </div>
              <p className="text-[11px] text-[var(--text-secondary)] font-light mt-2 leading-relaxed">
                Zero-dependency cross-language test execution framework.
              </p>
            </div>

            {/* Floating Card 2: Web Platform */}
            <div className="bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--accent-azure)] rounded-2xl p-4 shadow-md hover:shadow-[0_8px_25px_rgba(147,185,232,0.2)] transition-all duration-300 hover:-translate-y-1 group backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[var(--bg-card-subtle)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--accent-azure)] group-hover:scale-110 transition-transform">
                  <Layers className="w-5 h-5 text-[var(--accent-azure)]" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[9px] font-mono uppercase tracking-widest text-[var(--text-muted)] font-semibold">
                    {"//"} WEB PLATFORM
                  </span>
                  <span className="text-xs font-bold text-[var(--text-heading)] group-hover:text-[var(--accent-azure)] transition-colors">
                    Next.js & TypeScript
                  </span>
                </div>
              </div>
              <p className="text-[11px] text-[var(--text-secondary)] font-light mt-2 leading-relaxed">
                Strict zero-any contracts with runtime Zod schema validation.
              </p>
            </div>

            {/* Floating Card 3: Governance & AI */}
            <div className="bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--accent-azure)] rounded-2xl p-4 shadow-md hover:shadow-[0_8px_25px_rgba(147,185,232,0.2)] transition-all duration-300 hover:-translate-y-1 group backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[var(--bg-card-subtle)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--accent-azure)] group-hover:scale-110 transition-transform">
                  <Cpu className="w-5 h-5 text-[var(--accent-azure)]" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[9px] font-mono uppercase tracking-widest text-[var(--text-muted)] font-semibold">
                    {"//"} AI & GOVERNANCE
                  </span>
                  <span className="text-xs font-bold text-[var(--text-heading)] group-hover:text-[var(--accent-azure)] transition-colors">
                    Continuous Doc Sync
                  </span>
                </div>
              </div>
              <p className="text-[11px] text-[var(--text-secondary)] font-light mt-2 leading-relaxed">
                Automated multi-workspace sync, ADR logs, and release forensic audits.
              </p>
            </div>
          </motion.div>

        </div>

        {/* BOTTOM TELEMETRY STRIP: Voice of the World 4-Node Appraisal */}
        {PORTFOLIO_DATA.profile.telemetryMetrics && (
          <div className="w-full mt-10 pt-6 border-t border-[var(--border-subtle)]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {PORTFOLIO_DATA.profile.telemetryMetrics.map((metric, i) => (
                <div
                  key={i}
                  className="bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--accent-azure)]/50 rounded-xl p-3 transition-all duration-200 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-mono uppercase tracking-widest text-[var(--text-muted)] font-semibold">
                      {"//"} {metric.label}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-azure)]" />
                  </div>
                  <div className="text-xs font-mono font-bold text-[var(--accent-azure)] mt-1">
                    {metric.value}
                  </div>
                  <p className="text-[11px] text-[var(--text-secondary)] font-light mt-0.5 leading-snug">
                    {metric.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Animated Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="mt-6 flex justify-center z-20"
      >
        <a
          href="#skills"
          className="group inline-flex flex-col items-center gap-1 text-[var(--text-muted)] hover:text-[var(--accent-azure)] transition-colors"
          aria-label="Scroll to explore archives"
        >
          <span className="text-[10px] font-mono tracking-[0.2em] uppercase group-hover:tracking-[0.25em] transition-all">
            Scroll to Explore Archives
          </span>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="p-1 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] group-hover:border-[var(--accent-azure)]/50 shadow-sm"
          >
            <ChevronDown className="w-3.5 h-3.5 text-[var(--accent-azure)]" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

