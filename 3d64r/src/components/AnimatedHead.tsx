import { motion, useAnimationControls, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

interface AnimatedHeadProps {
  src: string;
  shadesSrc: string;
  alt: string;
}

const HOLD_PLAIN_MS = 3200;
const HOLD_SHADES_MS = 2400;

export function AnimatedHead({ src, shadesSrc, alt }: AnimatedHeadProps) {
  const reduceMotion = useReducedMotion();
  const pop = useAnimationControls();
  const [autoShades, setAutoShades] = useState(false);
  const [hovered, setHovered] = useState(false);
  const shades = hovered || autoShades;

  useEffect(() => {
    if (reduceMotion || hovered) return;
    const id = window.setTimeout(
      () => setAutoShades((s) => !s),
      autoShades ? HOLD_SHADES_MS : HOLD_PLAIN_MS,
    );
    return () => window.clearTimeout(id);
  }, [autoShades, hovered, reduceMotion]);

  useEffect(() => {
    if (reduceMotion) return;
    pop.start({
      scale: [1, 1.06, 0.98, 1],
      rotate: shades ? [0, -3, 1.5, 0] : [0, 3, -1.5, 0],
      transition: { duration: 0.55, ease: "easeOut" },
    });
  }, [shades, pop, reduceMotion]);

  return (
    <motion.div
      className="relative aspect-square w-full cursor-pointer"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onTap={() => setAutoShades((s) => !s)}
      animate={reduceMotion ? undefined : { y: [0, -14, 0], rotate: [-1.5, 1.5, -1.5] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      <motion.div animate={pop} className="absolute inset-0 origin-bottom">
        <motion.img
          src={src}
          alt={alt}
          draggable={false}
          className="absolute inset-0 h-full w-full select-none object-contain"
          animate={{ opacity: shades ? 0 : 1 }}
          transition={{ duration: 0.35 }}
        />
        <motion.img
          src={shadesSrc}
          alt=""
          aria-hidden
          draggable={false}
          className="absolute inset-0 h-full w-full select-none object-contain"
          initial={{ opacity: 0 }}
          animate={{ opacity: shades ? 1 : 0 }}
          transition={{ duration: 0.35 }}
        />
      </motion.div>
    </motion.div>
  );
}
