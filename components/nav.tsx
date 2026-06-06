"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const links = [
  { href: "#trabajo", label: "Trabajo" },
  { href: "#stack", label: "Stack" },
  { href: "#agentes", label: "IA" },
  { href: "#github", label: "GitHub" },
  { href: "#vision", label: "Visión" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out-expo",
      )}
    >
      <div
        className={cn(
          "container-page flex h-16 items-center justify-between transition-all duration-500",
          scrolled && "h-14",
        )}
      >
        <AnimatePresence>
          <motion.div
            layout
            className={cn(
              "absolute inset-x-0 top-0 -z-10 mx-auto transition-all duration-500 ease-out-expo",
              scrolled
                ? "h-16 border-b border-border bg-bg/70 backdrop-blur-xl"
                : "h-20 border-b border-transparent bg-transparent",
            )}
            style={{
              maskImage: scrolled
                ? "linear-gradient(to bottom, black 60%, transparent)"
                : "none",
            }}
          />
        </AnimatePresence>

        <Link
          href="/"
          aria-label="Edgar Manchón — inicio"
          className="group flex items-center gap-2.5 text-sm font-medium tracking-tight"
        >
          <span className="relative flex h-7 w-7 items-center justify-center rounded-md border border-border-strong bg-bg-elevated">
            <span className="font-mono text-[11px] font-semibold tracking-tighter text-fg">
              EM
            </span>
            <span className="absolute inset-0 -z-10 rounded-md bg-gradient-to-br from-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </span>
          <span className="hidden sm:inline-flex items-center gap-1.5 text-fg">
            Edgar Manchón
            <span className="font-mono text-[10px] text-fg-faint">/builder</span>
          </span>
        </Link>

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-1 rounded-full border border-border bg-bg-elevated/50 px-1.5 py-1 backdrop-blur-md">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-3 py-1.5 text-xs font-medium text-fg-muted transition-colors duration-300 hover:bg-white/[0.05] hover:text-fg"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/Edgar-Manuel"
            target="_blank"
            rel="noreferrer noopener"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-fg-muted transition-colors hover:text-fg"
            aria-label="GitHub"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-3.5 w-3.5"
              fill="currentColor"
              aria-hidden
            >
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.55v-2.07c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.71 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.07 0 0 .97-.31 3.18 1.18a11.06 11.06 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.6.24 2.78.12 3.07.74.81 1.18 1.84 1.18 3.1 0 4.44-2.7 5.42-5.26 5.7.41.36.77 1.07.77 2.16v3.2c0 .3.21.66.8.55C20.22 21.38 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5Z" />
            </svg>
            <span>GitHub</span>
          </a>
          <a
            href="#contacto"
            className="btn-primary"
          >
            Contactar
          </a>
        </div>
      </div>
    </motion.header>
  );
}
