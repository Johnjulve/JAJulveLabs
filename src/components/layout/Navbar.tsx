"use client";

import React, { useState, useEffect, useSyncExternalStore } from "react";
import { Sparkles, Menu, X, Mail, Sun, Moon } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { cn } from "@/lib/utils";

interface NavbarProps {
  onReplayIntro: () => void;
}

const NAV_LINKS = [
  { label: "[Overview]", href: "#hero", id: "hero" },
  { label: "[Core Skills]", href: "#skills", id: "skills" },
  { label: "[Projects]", href: "#projects", id: "projects" },
  { label: "[Evolution]", href: "#evolution", id: "evolution" },
  { label: "[Contact]", href: "#contact", id: "contact" },
];

function subscribeTheme(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getThemeSnapshot(): "dark" | "light" {
  if (typeof window === "undefined") return "dark";
  return (localStorage.getItem("jajulvelabs_theme") as "dark" | "light") || "dark";
}

function getThemeServerSnapshot(): "dark" | "light" {
  return "dark";
}

export const Navbar: React.FC<NavbarProps> = ({ onReplayIntro }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");
  const theme = useSyncExternalStore(subscribeTheme, getThemeSnapshot, getThemeServerSnapshot);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("jajulvelabs_theme", nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    window.dispatchEvent(new Event("storage"));
  };


  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ["hero", "skills", "projects", "evolution", "contact"];
      const scrollPosition = window.scrollY + 160;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-40 w-full max-w-full overflow-x-clip bg-[var(--bg-primary)]/90 backdrop-blur-md border-b border-[var(--border-subtle)] transition-colors duration-250"
      style={{ top: 0, paddingTop: "env(safe-area-inset-top, 0px)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 sm:h-20 flex items-center justify-between gap-4 lg:gap-6">
        {/* Brand Logo & Rimuru Slime Core Orb (Replaced GS with Pure Circle) */}
        <a href="#hero" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#93B9E8]/60 bg-gradient-to-br from-[#0c233c] to-[#040b14] flex items-center justify-center shadow-[0_0_15px_rgba(147,185,232,0.35)] group-hover:scale-105 transition-transform shrink-0 overflow-hidden">
            {/* Concentric Rotating Dash Ring */}
            <div className="absolute inset-0.5 rounded-full border border-dashed border-[#CCE9F6]/40 animate-spin" style={{ animationDuration: "16s" }} />
            {/* Inner Slime Core Glowing Orb */}
            <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-[#3A71A4] via-[#93B9E8] to-[#F7FCFC] shadow-[0_0_10px_rgba(147,185,232,0.8)]" />
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="font-bold text-sm sm:text-base lg:text-lg tracking-wider text-[var(--text-primary)] group-hover:text-[#93B9E8] transition-colors uppercase whitespace-nowrap">
                {PORTFOLIO_DATA.profile.alias}
              </span>
              <span className="text-[9px] sm:text-[10px] font-mono font-semibold text-[#93B9E8] bg-[var(--bg-secondary)] border border-[#93B9E8]/40 px-1.5 sm:px-2 py-0.5 rounded-md whitespace-nowrap tracking-wider shadow-[0_0_10px_rgba(147,185,232,0.2)]">
                {PORTFOLIO_DATA.profile.roleBadge}
              </span>
            </div>
            <span className="text-[9px] sm:text-[10px] font-mono text-[var(--text-muted)] tracking-wider uppercase whitespace-nowrap">
              {PORTFOLIO_DATA.profile.title}
            </span>
          </div>
        </a>

        {/* Desktop Bracketed Links (Rimuru Slime UI) - Protected with whitespace-nowrap */}
        <nav className="hidden xl:flex items-center gap-1 bg-[var(--bg-secondary)]/80 border border-[var(--border-subtle)] rounded-full px-3.5 py-1.5 shadow-[inset_0_0_12px_rgba(147,185,232,0.08)] shrink-0">
          {NAV_LINKS.map((link, idx) => {
            const isActive = activeSection === link.id;
            return (
              <React.Fragment key={link.href}>
                {idx > 0 && <span className="text-[#3A71A4]/60 text-xs select-none px-0.5">•</span>}
                <a
                  href={link.href}
                  className={cn(
                    "px-3 py-1 font-mono text-xs rounded-full whitespace-nowrap transition-all duration-200",
                    isActive
                      ? "text-[#F7FCFC] bg-[#3A71A4] border border-[#93B9E8]/60 shadow-[0_0_12px_rgba(147,185,232,0.35)] font-semibold"
                      : "text-[var(--text-secondary)] hover:text-[#93B9E8] hover:bg-[#93B9E8]/10"
                  )}
                >
                  {link.label}
                </a>
              </React.Fragment>
            );
          })}
        </nav>

        {/* Right CTA / Theme Toggle & Replay Button */}
        <div className="hidden sm:flex items-center gap-2.5 shrink-0">
          {/* Light / Dark Mode Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            suppressHydrationWarning
            className="p-2 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] hover:border-[var(--accent-azure)] text-[var(--text-primary)] transition-all duration-200 shadow-sm hover:scale-105 active:scale-95 cursor-pointer"
            title={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
            aria-label={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-[var(--accent-azure)] hover:text-[#F7FCFC] transition-colors" />
            ) : (
              <Moon className="w-4 h-4 text-[var(--accent-azure)] hover:text-[#0A1C2E] transition-colors" />
            )}
          </button>

          <button
            type="button"
            onClick={onReplayIntro}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-[var(--border-prominent)] bg-[var(--accent-azure)]/10 hover:bg-[var(--accent-azure)]/20 text-[var(--accent-azure)] text-xs font-mono tracking-wider transition-all duration-200 shadow-sm hover:scale-105 whitespace-nowrap shrink-0 cursor-pointer"
            title="Replay Voice of the World Raphael Intro Screen"
          >
            <Sparkles className="w-3.5 h-3.5 text-[var(--accent-azure)]" />
            <span>Replay Intro</span>
          </button>
        </div>

        {/* Mobile Actions (Theme Toggle & Menu) */}
        <div className="xl:hidden flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={toggleTheme}
            suppressHydrationWarning
            className="p-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-secondary)] text-[var(--text-primary)] cursor-pointer"
            title={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
            aria-label={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-[var(--accent-azure)]" />
            ) : (
              <Moon className="w-4 h-4 text-[var(--accent-azure)]" />
            )}
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[var(--text-primary)] hover:text-[#93B9E8]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#93B9E8]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[var(--bg-primary)]/98 backdrop-blur-xl border-b border-[var(--border-subtle)] px-5 py-5 space-y-4 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="space-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block font-mono text-xs text-[var(--text-secondary)] hover:text-[#93B9E8] py-2.5 px-3 rounded-md hover:bg-[var(--bg-secondary)] border-b border-[var(--border-subtle)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex justify-center items-center gap-2 py-2.5 rounded-lg bg-[#3A71A4] hover:bg-[#2A547A] text-[#F7FCFC] font-mono text-xs font-bold tracking-wider transition-all duration-150 shadow-[0_0_15px_rgba(58,113,164,0.35)]"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>» Contact Me</span>
            </a>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onReplayIntro();
              }}
              className="w-full inline-flex justify-center items-center gap-2 py-2.5 rounded-lg border border-[#93B9E8]/40 bg-[#93B9E8]/10 hover:bg-[#93B9E8]/20 text-[#93B9E8] text-xs font-mono transition-all duration-150"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#93B9E8]" />
              <span>Replay Raphael Intro</span>
            </button>

            {/* Mobile Socials */}
            <div className="flex items-center justify-center gap-6 pt-2 border-t border-slate-900 text-slate-400">
              <a
                href={PORTFOLIO_DATA.profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 transition-colors p-2"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_DATA.profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 transition-colors p-2"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PORTFOLIO_DATA.profile.socials.email}`}
                className="hover:text-emerald-400 transition-colors p-2"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
