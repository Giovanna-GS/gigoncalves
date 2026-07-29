import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/#projetos", label: "projetos" },
  { href: "/#jornada", label: "jornada" },
  { href: "/#sobre", label: "sobre" },
  { href: "/#contato", label: "contato" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-void/80 border-b border-stardust/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center group">
          <span className="font-mono font-bold text-lg text-stardust">
            <span className="text-cosmic">&lt;</span>giovanna
            <span className="text-cosmic">/&gt;</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-1 text-sm font-mono">
          {navLinks.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              className="px-3 py-1.5 rounded-md text-stardust/70 hover:text-cosmic-soft hover:bg-cosmic/10 transition"
            >
              {label}
            </a>
          ))}
        </nav>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2.5 text-stardust/70 hover:text-cosmic-soft transition"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden border-t border-stardust/10 bg-void/95 backdrop-blur-md">
          <nav className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-2 text-sm font-mono">
            {navLinks.map(({ href, label }) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="px-3 py-2.5 rounded-md text-stardust/70 hover:text-cosmic-soft hover:bg-cosmic/10 transition"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
