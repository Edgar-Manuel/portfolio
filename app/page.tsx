"use client";

import { useState, useEffect } from "react";
import { Nav } from "@/components/nav";
import { Hero } from "@/components/sections/hero";
import { Availability } from "@/components/sections/availability";
import { About } from "@/components/sections/about";
import { Stack } from "@/components/sections/stack";
import { Projects } from "@/components/sections/projects";
import { AIAgents } from "@/components/sections/ai-agents";
import { AIPlayground } from "@/components/sections/ai-playground";
import { GitHubSection } from "@/components/sections/github";
import { Vision } from "@/components/sections/vision";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/footer";
import { CommandPalette } from "@/components/ui/command-palette";
import { RecruiterModal } from "@/components/ui/recruiter-modal";

export default function Home() {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isRecruiterModalOpen, setIsRecruiterModalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <main className="relative">
      <Nav
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        onOpenRecruiterModal={() => setIsRecruiterModalOpen(true)}
      />
      <Hero
        onOpenRecruiterModal={() => setIsRecruiterModalOpen(true)}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
      />
      <Availability />
      <About />
      <Projects />
      <Stack />
      <AIAgents />
      <AIPlayground />
      <GitHubSection />
      <Vision />
      <CTA />
      <Footer />

      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onOpenRecruiterModal={() => setIsRecruiterModalOpen(true)}
      />

      <RecruiterModal
        isOpen={isRecruiterModalOpen}
        onClose={() => setIsRecruiterModalOpen(false)}
      />
    </main>
  );
}
