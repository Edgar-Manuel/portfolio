import { useEffect, useRef, useState } from "react";
import { screenshots, stack, type StackItem } from "../data/content";

type MarqueeItem =
  | { kind: "stack"; item: StackItem }
  | { kind: "shot"; src: string };

const s = (from: number, to: number): MarqueeItem[] =>
  stack.slice(from, to).map((item) => ({ kind: "stack", item }));

const baseRow1: MarqueeItem[] = [
  { kind: "shot", src: screenshots.gymbro },
  ...s(0, 5),
  { kind: "shot", src: screenshots.ebookStrategy },
  ...s(5, 10),
];
const baseRow2: MarqueeItem[] = [
  ...s(10, 15),
  { kind: "shot", src: screenshots.repos },
  ...s(15, 20),
  { kind: "shot", src: screenshots.ebookDashboard },
];

const row1 = [...baseRow1, ...baseRow1, ...baseRow1];
const row2 = [...baseRow2, ...baseRow2, ...baseRow2];

const TILE = "w-[420px] h-[270px] shrink-0 rounded-2xl";

function MarqueeTile({ entry }: { entry: MarqueeItem }) {
  if (entry.kind === "shot") {
    return (
      <img
        src={entry.src}
        alt=""
        loading="lazy"
        className={`${TILE} object-cover object-top border border-[#D7E2EA]/10`}
      />
    );
  }
  const { item } = entry;
  return (
    <div
      className={`${TILE} flex flex-col justify-between p-7 border border-[#D7E2EA]/10`}
      style={{ background: "linear-gradient(145deg, #18191e 0%, #0f0f12 100%)" }}
    >
      <div className="flex items-start justify-between">
        <span className="hero-heading font-black leading-none text-[88px]">
          {item.symbol}
        </span>
        <span className="text-[#D7E2EA]/45 uppercase tracking-widest text-xs mt-2">
          {item.category}
        </span>
      </div>
      <div>
        <div className="text-[#D7E2EA] font-medium uppercase text-2xl">{item.name}</div>
        <p className="mt-1 text-[#D7E2EA]/55 font-light text-sm leading-snug">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const section = sectionRef.current;
      if (!section) return;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      setOffset((window.scrollY - sectionTop + window.innerHeight) * 0.3);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10"
      style={{ overflowX: "clip" }}
    >
      <div className="flex flex-col gap-3">
        <div
          className="flex gap-3"
          style={{ transform: `translateX(${offset - 200}px)`, willChange: "transform" }}
        >
          {row1.map((entry, i) => (
            <MarqueeTile key={i} entry={entry} />
          ))}
        </div>
        <div
          className="flex gap-3"
          style={{ transform: `translateX(${-(offset - 200)}px)`, willChange: "transform" }}
        >
          {row2.map((entry, i) => (
            <MarqueeTile key={i} entry={entry} />
          ))}
        </div>
      </div>
    </section>
  );
}
