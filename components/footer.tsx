import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-bg">
      <div className="container-page py-12">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="flex items-center gap-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-md border border-border-strong bg-bg-elevated font-mono text-[11px] font-semibold tracking-tighter text-fg">
              EM
            </span>
            <div>
              <div className="text-sm font-medium text-fg">Edgar Manchón</div>
              <div className="font-mono text-[11px] text-fg-faint">
                AI Systems Builder · Web Developer
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-fg-muted">
            <Link href="#trabajo" className="transition-colors hover:text-fg">
              Proyectos
            </Link>
            <Link href="#stack" className="transition-colors hover:text-fg">
              Stack
            </Link>
            <Link href="#agentes" className="transition-colors hover:text-fg">
              IA & Agentes
            </Link>
            <Link href="#github" className="transition-colors hover:text-fg">
              GitHub
            </Link>
            <Link href="#vision" className="transition-colors hover:text-fg">
              Visión
            </Link>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 md:flex-row md:items-center">
          <p className="font-mono text-[11px] text-fg-faint">
            © 2026 Edgar Manchón. Construido con Next.js,
            TypeScript y algo de IA.
          </p>
          <div className="flex items-center gap-2 font-mono text-[11px] text-fg-faint">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            <span>Todos los sistemas operativos</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
