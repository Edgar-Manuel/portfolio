import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FadeIn } from "../components/FadeIn";
import { LiveProjectButton } from "../components/LiveProjectButton";
import { ProjectTile } from "../components/ProjectTile";
import { projects, type Project } from "../data/content";

const TOTAL_CARDS = projects.length;

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative z-10 bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-20"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          Proyectos
        </h2>
      </FadeIn>

      <div className="max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  });

  const targetScale = 1 - (TOTAL_CARDS - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={cardRef}
      className="h-[85vh] sticky top-24 md:top-32"
      style={{ top: `${index * 28}px` }}
    >
      <motion.div
        style={{ scale }}
        className="h-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col origin-top"
      >
        <div className="flex flex-wrap items-start justify-between gap-4 sm:gap-6">
          <div className="flex items-center gap-4 sm:gap-6 min-w-0">
            <span
              className="text-[#D7E2EA] font-black shrink-0 leading-none"
              style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
            >
              {project.number}
            </span>
            <div className="flex flex-col gap-1 sm:gap-2 min-w-0">
              <span className="text-[#D7E2EA]/50 uppercase tracking-widest text-xs sm:text-sm">
                {project.status}
              </span>
              <span
                className="text-[#D7E2EA] font-medium uppercase break-words"
                style={{ fontSize: "clamp(1.25rem, 3.2vw, 2.6rem)" }}
              >
                {project.name}
              </span>
              <span className="hidden sm:block text-[#D7E2EA]/55 font-light text-sm md:text-base">
                {project.tagline}
              </span>
            </div>
          </div>
          <LiveProjectButton
            href={project.demo ?? project.href}
            label={project.demo ? "Ver demo" : "Ver código"}
          />
        </div>

        <div className="flex gap-3 sm:gap-4 mt-6 sm:mt-8 flex-1 min-h-0">
          <div className="flex flex-col gap-3 sm:gap-4" style={{ width: "40%" }}>
            <ProjectTile tile={project.col1[0]} compact style={{ height: "clamp(130px, 16vw, 230px)" }} />
            <ProjectTile tile={project.col1[1]} compact style={{ height: "clamp(160px, 22vw, 340px)" }} />
          </div>
          <div className="flex-1 min-w-0">
            <ProjectTile tile={project.col2} className="h-full" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
