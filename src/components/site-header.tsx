import { Link } from "@tanstack/react-router";
import { PlanetIcon } from "./planet-icon";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-void/80 border-b border-stardust/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <PlanetIcon size={28} className="text-cosmic" />
          <span className="font-mono font-bold text-lg text-stardust">
            gg<span className="text-cosmic">.</span>dev
          </span>
        </Link>
        <nav className="flex items-center gap-1 text-sm font-mono">
          <a href="/#projetos" className="px-3 py-1.5 rounded-md text-stardust/70 hover:text-cosmic-soft hover:bg-cosmic/10 transition">projetos</a>
          <a href="/#jornada" className="px-3 py-1.5 rounded-md text-stardust/70 hover:text-cosmic-soft hover:bg-cosmic/10 transition">jornada</a>
          <a href="/#sobre" className="px-3 py-1.5 rounded-md text-stardust/70 hover:text-cosmic-soft hover:bg-cosmic/10 transition">sobre</a>
          <a href="/#contato" className="px-3 py-1.5 rounded-md text-stardust/70 hover:text-cosmic-soft hover:bg-cosmic/10 transition">contato</a>
        </nav>
      </div>
    </header>
  );
}
