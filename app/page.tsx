import { Nav } from "@/components/nav";
import { Hero } from "@/components/sections/hero";
import { Availability } from "@/components/sections/availability";
import { About } from "@/components/sections/about";
import { Stack } from "@/components/sections/stack";
import { Projects } from "@/components/sections/projects";
import { AIAgents } from "@/components/sections/ai-agents";
import { GitHubSection } from "@/components/sections/github";
import { Vision } from "@/components/sections/vision";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Availability />
      <About />
      <Projects />
      <Stack />
      <AIAgents />
      <GitHubSection />
      <Vision />
      <CTA />
      <Footer />
    </main>
  );
}
