import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef, type CSSProperties } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: CSSProperties;
}

export function AnimatedText({ text, className, style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });

  const total = text.length;
  const words = text.split(" ");
  const wordStarts = words.map((_, w) =>
    words.slice(0, w).reduce((sum, prev) => sum + prev.length + 1, 0),
  );

  return (
    <p ref={ref} className={className} style={style}>
      {words.map((word, w) => {
        const wordStart = wordStarts[w];
        return (
          <span key={w}>
            <span style={{ display: "inline-block", whiteSpace: "nowrap" }}>
              {word.split("").map((char, c) => {
                const start = (wordStart + c) / total;
                return (
                  <Character
                    key={c}
                    char={char}
                    progress={scrollYProgress}
                    range={[start, start + 1 / total]}
                  />
                );
              })}
            </span>
            {w < words.length - 1 && " "}
          </span>
        );
      })}
    </p>
  );
}

function Character({
  char,
  progress,
  range,
}: {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span style={{ position: "relative", display: "inline-block" }}>
      <span style={{ visibility: "hidden" }}>{char}</span>
      <motion.span style={{ position: "absolute", left: 0, top: 0, opacity }}>
        {char}
      </motion.span>
    </span>
  );
}
