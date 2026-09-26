import { FadeIn } from "../components/FadeIn";
import { Magnet } from "../components/Magnet";
import { ContactButton } from "../components/ContactButton";
import { AnimatedHead } from "../components/AnimatedHead";
import { CONTACT_HREF, heroHead } from "../data/content";

const NAV_LINKS: Array<{ label: string; href: string }> = [
  { label: "Sobre mí", href: "#about" },
  { label: "Servicios", href: "#services" },
  { label: "Proyectos", href: "#projects" },
  { label: "Contacto", href: CONTACT_HREF },
];

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative h-screen flex flex-col"
      style={{ overflowX: "clip" }}
    >
      <FadeIn
        as="nav"
        delay={0}
        y={-20}
        className="flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8"
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70"
          >
            {link.label}
          </a>
        ))}
      </FadeIn>

      <div className="overflow-hidden w-full mt-6 sm:mt-4 md:-mt-5 px-6 md:px-10">
        <FadeIn delay={0.15} y={40} immediate>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[calc((100vw-48px)/8.6)] md:text-[calc((100vw-80px)/8.6)]">
            Hola, soy 3D64R
          </h1>
        </FadeIn>
      </div>

      <div
        className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]"
      >
        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
        >
          <FadeIn delay={0.6} y={30}>
            <AnimatedHead
              src={heroHead.plain}
              shadesSrc={heroHead.shades}
              alt="3D64R, Python Backend & AI Developer"
            />
          </FadeIn>
        </Magnet>
      </div>

      <div className="flex-1" />

      <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10">
        <FadeIn
          as="p"
          delay={0.35}
          y={20}
          className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
          style={{ fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)" }}
        >
          Python backend & IA que construye APIs, pipelines RAG y agentes
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
