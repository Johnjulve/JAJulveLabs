"use client";

import React, { useState } from "react";
import { RaphaelIntro } from "@/components/intro";
import { ScrollProgressBar } from "@/components/ui/ScrollProgressBar";
import { TopTicker } from "@/components/layout/TopTicker";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/features/hero/HeroSection";
import { TensuraSkillsMatrix } from "@/features/skills/TensuraSkillsMatrix";
import { ProjectsSection } from "@/features/projects/ProjectsSection";
import { EvolutionSection } from "@/features/evolution/EvolutionSection";
import { ContactSection } from "@/features/contact/ContactSection";
import { Footer } from "@/components/layout/Footer";
import { RaphaelAssistant } from "@/components/layout/SlimeAssistant";

export default function Home() {
  const [replayKey, setReplayKey] = useState<number>(0);
  const [forceShow, setForceShow] = useState<boolean>(false);

  const handleReplayIntro = () => {
    if (typeof window !== "undefined") {
      sessionStorage.removeItem("portfolio_intro_seen");
    }
    setForceShow(true);
    setReplayKey((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-[#02070c] text-slate-100 selection:bg-emerald-500 selection:text-slate-950">
      {/* Top Cybernetic Mana Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Tensura (Raphael / Voice of the World) Intro Screen */}
      <RaphaelIntro
        key={replayKey}
        forceShow={forceShow}
        onIntroFinished={() => setForceShow(false)}
      />

      {/* 1. Top Announcement & Protocol Ticker (Glint-inspired) */}
      <TopTicker />

      {/* 2. Great Sage Bracketed Navbar */}
      <Navbar onReplayIntro={handleReplayIntro} />

      {/* Main Content Layout */}
      <main className="w-full">
        {/* 3. Hero Section (Glint Split Layout + Great Sage Avatar Frame + EP Bar) */}
        <HeroSection onReplayIntro={handleReplayIntro} />

        {/* 4. Skills Matrix (Intrinsic, Extra, Ultimate Skills) */}
        <TensuraSkillsMatrix />

        {/* 5. Project Portfolio (UniversalTester, E_Botar, E_Botar-Lite) */}
        <ProjectsSection />

        {/* 6. Growth & Evolution (Milestone Timeline) */}
        <EvolutionSection />

        {/* 7. Thought Communication (Contact Form) */}
        <ContactSection />
      </main>

      {/* 8. Footer */}
      <Footer />

      {/* 9. Interactive Mini Raphael Wisdom Lord Assistant */}
      <RaphaelAssistant />
    </div>
  );
}
