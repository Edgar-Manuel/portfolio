interface StackBadgeProps {
  symbol: string;
  label: string;
  tilt: number;
}

export function StackBadge({ symbol, label, tilt }: StackBadgeProps) {
  return (
    <div
      className="aspect-square w-full rounded-[22%] border border-[#D7E2EA]/15 flex flex-col items-center justify-center gap-[6%] shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
      style={{
        background: "linear-gradient(145deg, #1d1f25 0%, #111114 100%)",
        transform: `rotate(${tilt}deg)`,
      }}
    >
      <span
        className="hero-heading font-black leading-none"
        style={{ fontSize: "clamp(2.2rem, 5.5vw, 5rem)" }}
      >
        {symbol}
      </span>
      <span
        className="text-[#D7E2EA]/60 uppercase tracking-widest text-center px-[8%]"
        style={{ fontSize: "clamp(0.55rem, 0.9vw, 0.8rem)" }}
      >
        {label}
      </span>
    </div>
  );
}
