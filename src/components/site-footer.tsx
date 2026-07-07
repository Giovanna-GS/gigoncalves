import catSticker from "@/assets/cat-sticker.png";

export function SiteFooter() {
  return (
    <footer id="contato" className="mt-24 bg-ink text-paper">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img src={catSticker} alt="" width={40} height={40} />
              <span className="font-mono font-bold text-xl text-paper">meow<span className="text-pink">.</span>dev</span>
            </div>
            <p className="text-sm text-paper/60 max-w-xs">
              Um cantinho da internet feito com café, gato no colo e muito CSS.
            </p>
          </div>
          <div>
            <h4 className="font-mono text-sm uppercase tracking-widest mb-3 text-pink">Fala comigo</h4>
            <ul className="space-y-2 text-sm text-paper/80">
              <li><a className="hover:text-pink transition" href="mailto:oi@meow.dev">oi@meow.dev</a></li>
              <li><a className="hover:text-pink transition" href="#">linkedin.com/in/meow</a></li>
              <li><a className="hover:text-pink transition" href="#">github.com/meow</a></li>
              <li><a className="hover:text-pink transition" href="#">behance.net/meow</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-sm uppercase tracking-widest mb-3 text-pink">Agora</h4>
            <p className="text-sm text-paper/70">
              Aberta pra oportunidades em UX ✿<br />
              Baseada em São Paulo, remoto ok.
            </p>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-paper/15 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-paper/50">
          <span>© {new Date().getFullYear()} meow.dev — feito com ♡ e pêlo de gato</span>
          <span className="caret">console.log("bye")</span>
        </div>
      </div>
    </footer>
  );
}
