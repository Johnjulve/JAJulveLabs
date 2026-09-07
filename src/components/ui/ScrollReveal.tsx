"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";

export type RevealDirection = "up" | "down" | "left" | "right" | "zoom" | "blur" | "none";

export interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: RevealDirection;
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  once?: boolean;
  amount?: number | "some" | "all";
}

const getVariants = (
  direction: RevealDirection,
  distance: number,
  duration: number,
  delay: number
): Variants => {
  const getHiddenTransform = () => {
    switch (direction) {
      case "up":
        return { y: distance, x: 0, scale: 1 };
      case "down":
        return { y: -distance, x: 0, scale: 1 };
      case "left":
        return { x: distance, y: 0, scale: 1 };
      case "right":
        return { x: -distance, y: 0, scale: 1 };
      case "zoom":
        return { scale: 0.94, x: 0, y: 0 };
      case "blur":
      case "none":
      default:
        return { x: 0, y: 0, scale: 1 };
    }
  };

  return {
    hidden: {
      opacity: 0,
      filter: direction === "blur" ? "blur(10px)" : "blur(4px)",
      ...getHiddenTransform(),
      transition: {
        duration: 0.25,
        ease: "easeOut",
      },
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
};

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = "up",
  delay = 0,
  duration = 0.65,
  distance = 32,
  className = "",
  once = false, // Set to false so animations re-trigger when scrolling back
  amount = 0.12,
}) => {
  const variants = getVariants(direction, distance, duration, delay);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount, margin: "0px 0px -40px 0px" }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export interface ScrollStaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  delayChildren?: number;
  once?: boolean;
  amount?: number | "some" | "all";
}

export const ScrollStaggerContainer: React.FC<ScrollStaggerContainerProps> = ({
  children,
  className = "",
  staggerDelay = 0.1,
  delayChildren = 0.05,
  once = false,
  amount = 0.12,
}) => {
  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount, margin: "0px 0px -40px 0px" }}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export interface ScrollStaggerItemProps {
  children: React.ReactNode;
  direction?: RevealDirection;
  distance?: number;
  duration?: number;
  className?: string;
}

export const ScrollStaggerItem: React.FC<ScrollStaggerItemProps> = ({
  children,
  direction = "up",
  distance = 28,
  duration = 0.6,
  className = "",
}) => {
  const itemVariants = getVariants(direction, distance, duration, 0);

  return (
    <motion.div
      variants={itemVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
};
