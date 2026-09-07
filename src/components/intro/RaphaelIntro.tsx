"use client";

import React, { useEffect, useState, useCallback } from "react";
import { RaphaelMagicCircle } from "./RaphaelMagicCircle";
import { VoiceOfTheWorldHUD } from "./VoiceOfTheWorldHUD";
import styles from "./raphael.module.css";

interface RaphaelIntroProps {
  onIntroFinished?: () => void;
  forceShow?: boolean;
}

const STORAGE_KEY = "portfolio_intro_seen";

export const RaphaelIntro: React.FC<RaphaelIntroProps> = ({
  onIntroFinished,
  forceShow = false,
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isExiting, setIsExiting] = useState<boolean>(false);

  // Check sessionStorage on client mount
  useEffect(() => {
    if (typeof window === "undefined") return;

    const urlParams = new URLSearchParams(window.location.search);
    const replayRequested = urlParams.get("intro") === "replay" || urlParams.get("intro") === "true";

    if (!forceShow && !replayRequested) {
      const hasSeen = sessionStorage.getItem(STORAGE_KEY);
      if (hasSeen === "true") {
        onIntroFinished?.();
        return;
      }
    }

    // New visitor: activate overlay & lock scroll
    const timer = setTimeout(() => {
      setIsVisible(true);
      document.body.style.overflow = "hidden";
    }, 0);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [forceShow, onIntroFinished]);

  // Handle clean exit sequence
  const handleExit = useCallback(() => {
    if (isExiting) return;
    setIsExiting(true);

    if (typeof window !== "undefined") {
      sessionStorage.setItem(STORAGE_KEY, "true");
    }

    // Unlock body scrolling
    document.body.style.overflow = "";

    // 750ms zoom bloom transition before unmounting
    const timer = setTimeout(() => {
      setIsVisible(false);
      onIntroFinished?.();
    }, 750);

    return () => clearTimeout(timer);
  }, [isExiting, onIntroFinished]);

  // Keyboard shortcut listener: Escape or Space to skip
  useEffect(() => {
    if (!isVisible || isExiting) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === "Escape" || event.code === "Space") {
        event.preventDefault();
        handleExit();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isVisible, isExiting, handleExit]);

  if (!isVisible) return null;

  return (
    <div
      className={`${styles.overlay} ${isExiting ? styles.overlayExiting : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label="Raphael Wisdom Lord Intro Screen"
    >
      <RaphaelMagicCircle isExiting={isExiting} />
      <VoiceOfTheWorldHUD
        onComplete={handleExit}
        onSkip={handleExit}
        isExiting={isExiting}
      />
    </div>
  );
};
