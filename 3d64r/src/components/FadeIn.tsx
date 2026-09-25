import { motion } from "framer-motion";
import { useMemo, type CSSProperties, type ElementType, type ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
  style?: CSSProperties;
  as?: ElementType;
  // animate on mount instead of on scroll; for above-the-fold content that starts clipped
  immediate?: boolean;
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className,
  style,
  as = "div",
  immediate = false,
}: FadeInProps) {
  // memoized per `as` so identity is stable across renders, not created fresh each time
  const MotionTag = useMemo(() => motion.create(as), [as]);

  return (
    <MotionTag
      className={className}
      style={style}
      initial={{ opacity: 0, x, y }}
      {...(immediate
        ? { animate: { opacity: 1, x: 0, y: 0 } }
        : { whileInView: { opacity: 1, x: 0, y: 0 }, viewport: { once: true, margin: "50px", amount: 0 } })}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </MotionTag>
  );
}
