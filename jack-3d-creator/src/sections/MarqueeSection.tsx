import { useEffect, useRef, useState } from "react";
import { marqueeRow1, marqueeRow2, type AssetRef } from "../data/assets";

function tripled(arr: AssetRef[]): AssetRef[] {
  return [...arr, ...arr, ...arr];
}

const row1 = tripled(marqueeRow1);
const row2 = tripled(marqueeRow2);

export function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const section = sectionRef.current;
      if (!section) return;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const raw = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(raw);
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
          {row1.map((img, i) => (
            <img
              key={`${img.local}-${i}`}
              src={img.local}
              alt=""
              loading="lazy"
              className="w-[420px] h-[270px] shrink-0 rounded-2xl object-cover"
            />
          ))}
        </div>
        <div
          className="flex gap-3"
          style={{ transform: `translateX(${-(offset - 200)}px)`, willChange: "transform" }}
        >
          {row2.map((img, i) => (
            <img
              key={`${img.local}-${i}`}
              src={img.local}
              alt=""
              loading="lazy"
              className="w-[420px] h-[270px] shrink-0 rounded-2xl object-cover"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
