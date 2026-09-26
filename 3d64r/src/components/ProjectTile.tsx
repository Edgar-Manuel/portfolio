import type { CSSProperties } from "react";
import type { Tile } from "../data/content";

const RADIUS = "rounded-[40px] sm:rounded-[50px] md:rounded-[60px]";
const PANEL = `${RADIUS} relative overflow-hidden border border-[#D7E2EA]/15 bg-gradient-to-br from-[#17181d] to-[#0f0f12] p-5 sm:p-7 md:p-9`;
const LABEL = "text-[#D7E2EA]/45 uppercase tracking-widest font-medium";
const labelSize: CSSProperties = { fontSize: "clamp(0.55rem, 0.85vw, 0.75rem)" };
const bodySize: CSSProperties = { fontSize: "clamp(0.7rem, 1.15vw, 1rem)" };

function Fade() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0f0f12] to-transparent" />
  );
}

export function ProjectTile({
  tile,
  className = "",
  style,
  compact = false,
}: {
  tile: Tile;
  className?: string;
  style?: CSSProperties;
  compact?: boolean;
}) {
  switch (tile.kind) {
    case "image":
      return (
        <img
          src={tile.src}
          alt={tile.alt}
          loading="lazy"
          className={`${RADIUS} w-full object-cover object-top border border-[#D7E2EA]/15 ${className}`}
          style={style}
        />
      );

    case "code":
      return (
        <div className={`${PANEL} font-mono ${className}`} style={style}>
          <div className="flex items-center gap-1.5 mb-3">
            <span className="h-2 w-2 rounded-full bg-[#D7E2EA]/25" />
            <span className="h-2 w-2 rounded-full bg-[#D7E2EA]/25" />
            <span className="h-2 w-2 rounded-full bg-[#D7E2EA]/25" />
            <span className="ml-2 truncate text-[#D7E2EA]/50" style={labelSize}>
              {tile.filename}
            </span>
          </div>
          <pre
            className="text-[#D7E2EA]/80 leading-relaxed whitespace-pre overflow-hidden"
            style={{ fontSize: "clamp(0.5rem, 0.8vw, 0.78rem)" }}
          >
            <code>{tile.code}</code>
          </pre>
          <Fade />
        </div>
      );

    case "architecture":
      return (
        <div className={`${PANEL} flex flex-col ${className}`} style={style}>
          <span className={LABEL} style={labelSize}>
            Arquitectura
          </span>
          <ol className="mt-3 sm:mt-5 flex flex-col gap-3 sm:gap-5">
            {tile.steps.map((s, i) => (
              <li key={s.step} className="flex gap-3 sm:gap-4">
                <span
                  className="hero-heading font-black leading-none shrink-0"
                  style={{ fontSize: "clamp(1.1rem, 2.4vw, 2.2rem)" }}
                >
                  0{i + 1}
                </span>
                <div className="min-w-0">
                  <div className={LABEL} style={labelSize}>
                    {s.step}
                  </div>
                  <div className="text-[#D7E2EA] font-medium leading-snug" style={bodySize}>
                    {s.title}
                  </div>
                  <div className={`${compact ? "hidden" : "hidden md:block"} text-[#D7E2EA]/55 font-light leading-snug mt-0.5`} style={bodySize}>
                    {s.desc}
                  </div>
                </div>
              </li>
            ))}
          </ol>
          <Fade />
        </div>
      );

    case "stack":
      return (
        <div className={`${PANEL} flex flex-col ${className}`} style={style}>
          <span className={LABEL} style={labelSize}>
            Stack
          </span>
          <div className="mt-3 flex flex-wrap gap-1.5 sm:gap-2">
            {tile.items.map((item) => (
              <span
                key={item}
                className="rounded-full border border-[#D7E2EA]/20 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[#D7E2EA]/80"
                style={labelSize}
              >
                {item}
              </span>
            ))}
          </div>
          <Fade />
        </div>
      );

    case "caseStudy":
      return (
        <div className={`${PANEL} flex flex-col gap-4 sm:gap-6 ${className}`} style={style}>
          <div>
            <span className={LABEL} style={labelSize}>
              Problema
            </span>
            <p className="mt-1.5 text-[#D7E2EA]/70 font-light leading-relaxed" style={bodySize}>
              {tile.problem}
            </p>
          </div>
          <div>
            <span className={LABEL} style={labelSize}>
              Solución
            </span>
            <p className="mt-1.5 text-[#D7E2EA] font-light leading-relaxed" style={bodySize}>
              {tile.solution}
            </p>
          </div>
          <Fade />
        </div>
      );

    case "result":
      return (
        <div className={`${PANEL} flex flex-col ${className}`} style={style}>
          <span className={LABEL} style={labelSize}>
            Resultado
          </span>
          <p
            className="mt-2 sm:mt-3 text-[#D7E2EA] font-medium leading-snug"
            style={{ fontSize: "clamp(0.75rem, 1.5vw, 1.35rem)" }}
          >
            {tile.text}
          </p>
          <Fade />
        </div>
      );
  }
}
