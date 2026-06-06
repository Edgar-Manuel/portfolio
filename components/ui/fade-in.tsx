"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  once?: boolean;
  as?: "div" | "section" | "article" | "header" | "span" | "li" | "ul";
};

export function FadeIn({
  children,
  className,
  delay = 0,
  duration = 0.8,
  y = 24,
  once = true,
  as = "div",
}: FadeInProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: "-80px 0px -80px 0px" });

  const variants: Variants = {
    hidden: { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration, delay, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className={cn(className)}
    >
      {children}
    </MotionTag>
  );
}

type StaggerProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
};

export function Stagger({
  children,
  className,
  delay = 0,
  stagger = 0.08,
  once = true,
}: StaggerProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: "-80px 0px -80px 0px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        visible: {
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  y = 20,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
        },
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
