"use client";

import React, { useEffect, useState, useRef } from "react";
import styles from "./raphael.module.css";

export interface DialogueLine {
  isNotice?: boolean;
  text: string;
}

const DIALOGUE_SCRIPT: DialogueLine[] = [
  { isNotice: true, text: "« NOTICE »" },
  { isNotice: false, text: "Individual identified: Guest User." },
  { isNotice: false, text: "Executing analysis... Access granted." },
  { isNotice: false, text: "Initializing Portfolio protocols." },
  { isNotice: false, text: "Welcome to JAJulveLabs." },
];

interface VoiceOfTheWorldHUDProps {
  onComplete: () => void;
  onSkip: () => void;
  isExiting?: boolean;
}

export const VoiceOfTheWorldHUD: React.FC<VoiceOfTheWorldHUDProps> = ({
  onComplete,
  onSkip,
  isExiting = false,
}) => {
  const [currentLineIndex, setCurrentLineIndex] = useState<number>(0);
  const [displayedText, setDisplayedText] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(true);

  const completedRef = useRef(false);

  useEffect(() => {
    if (completedRef.current || isExiting) return;

    if (currentLineIndex >= DIALOGUE_SCRIPT.length) {
      completedRef.current = true;
      const timeout = setTimeout(() => {
        onComplete();
      }, 500);
      return () => clearTimeout(timeout);
    }

    const currentLine = DIALOGUE_SCRIPT[currentLineIndex];

    // « NOTICE » displays immediately without character-by-character typing
    if (currentLine.isNotice) {
      const noticeTimer = setTimeout(() => {
        setDisplayedText(currentLine.text);
        setIsTyping(false);
      }, 0);

      const holdTimer = setTimeout(() => {
        setCurrentLineIndex((prev) => prev + 1);
        setDisplayedText("");
      }, 800);

      return () => {
        clearTimeout(noticeTimer);
        clearTimeout(holdTimer);
      };
    }

    // Typewriter effect for normal dialogue lines
    const startTypingTimer = setTimeout(() => {
      setIsTyping(true);
    }, 0);

    let charIndex = 0;
    const fullText = currentLine.text;

    let advanceTimer: ReturnType<typeof setTimeout> | undefined;

    const typeInterval = setInterval(() => {
      charIndex++;
      setDisplayedText(fullText.slice(0, charIndex));

      if (charIndex >= fullText.length) {
        clearInterval(typeInterval);
        setIsTyping(false);

        // Hold line before advancing to next line
        advanceTimer = setTimeout(() => {
          setCurrentLineIndex((prev) => prev + 1);
          setDisplayedText("");
        }, 750);
      }
    }, 34);

    return () => {
      clearTimeout(startTypingTimer);
      clearInterval(typeInterval);
      if (advanceTimer) clearTimeout(advanceTimer);
    };
  }, [currentLineIndex, onComplete, isExiting]);

  return (
    <>
      {/* Top right skip button */}
      <button
        type="button"
        onClick={onSkip}
        className={styles.skipButton}
        aria-label="Skip Intro"
      >
        [ Skip &gt;&gt; ]
      </button>

      {/* Lower Third Dialogue HUD */}
      <div className={styles.dialogueHud}>
        <div className={styles.noticeTag}>« NOTICE »</div>

        <div className={styles.lineContent}>
          {currentLineIndex > 0 && (
            <span>
              {displayedText}
              {isTyping && <span className={styles.cursor} aria-hidden="true" />}
            </span>
          )}
        </div>

        <div className={styles.skipHint}>[ Press Esc or Space to Skip ]</div>
      </div>
    </>
  );
};
