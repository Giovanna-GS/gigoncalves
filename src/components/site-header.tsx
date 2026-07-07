import { Link } from "@tanstack/react-router";
import catSticker from "@/assets/cat-sticker.png";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b-2 border-ink/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <img src={catSticker} alt="" width={36} height={36} className="animate-wiggle" />
          <span className="font-mono font-bold text-lg">
            meow<span className="text-pink">.</span>dev
          </span>
        </Link>
        <nav className="flex items-center gap-1 text-sm font-mono">
          <a href="/#projetos" className="px-3 py-1.5 rounded-md hover:bg-pink-soft transition">projetos</a>
          <a href="/#jornada" className="px-3 py-1.5 rounded-md hover:bg-pink-soft transition">jornada</a>
          <a href="/#sobre" className="px-3 py-1.5 rounded-md hover:bg-pink-soft transition">sobre</a>
          <a href="/#contato" className="px-3 py-1.5 rounded-md hover:bg-pink-soft transition">contato</a>
        </nav>
      </div>
    </header>
  );
}
