import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0a0a0b",
          subtle: "#0e0e10",
          elevated: "#111114",
          card: "#131316",
        },
        border: {
          DEFAULT: "rgba(255, 255, 255, 0.06)",
          strong: "rgba(255, 255, 255, 0.10)",
          focus: "rgba(255, 255, 255, 0.20)",
        },
        fg: {
          DEFAULT: "#fafafa",
          muted: "#a1a1aa",
          subtle: "#71717a",
          faint: "#52525b",
        },
        accent: {
          DEFAULT: "#e4e4e7",
          glow: "rgba(255, 255, 255, 0.08)",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        mono: [
          "var(--font-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },
      fontSize: {
        "display-2xl": ["clamp(3.5rem, 7vw, 5.5rem)", { lineHeight: "0.95", letterSpacing: "-0.04em" }],
        "display-xl": ["clamp(2.75rem, 5.5vw, 4.25rem)", { lineHeight: "1", letterSpacing: "-0.035em" }],
        "display-lg": ["clamp(2.25rem, 4.5vw, 3.5rem)", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "display-md": ["clamp(1.875rem, 3.5vw, 2.5rem)", { lineHeight: "1.1", letterSpacing: "-0.025em" }],
        "display-sm": ["clamp(1.5rem, 2.5vw, 1.875rem)", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.025em",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      backgroundImage: {
        "grid-fade": "radial-gradient(ellipse at top, rgba(255,255,255,0.04), transparent 60%)",
        "noise": "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.08 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
      },
      animation: {
        "fade-in": "fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-up": "fadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "shimmer": "shimmer 2.5s linear infinite",
        "pulse-soft": "pulseSoft 3s ease-in-out infinite",
        "marquee": "marquee 40s linear infinite",
        "border-flow": "borderFlow 6s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        borderFlow: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
