import { Mail, Linkedin, Globe, Phone } from "lucide-react";
import { PlanetIcon } from "./planet-icon";

const contacts = [
  { Icon: Mail, label: "email", value: "giovanna.ggs99@gmail.com", href: "mailto:giovanna.ggs99@gmail.com" },
  { Icon: Linkedin, label: "linkedin", value: "/in/giovanna-goncalves", href: "https://linkedin.com/in/giovanna-goncalves" },
  { Icon: Globe, label: "portfólio", value: "gigoncalves.framer.website", href: "https://gigoncalves.framer.website" },
  { Icon: Phone, label: "whatsapp", value: "(11) 98918-9746", href: "https://wa.me/5511989189746" },
];

export function SiteFooter() {
  return (
    <footer id="contato" className="mt-24 bg-void text-stardust relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 py-16 relative">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <PlanetIcon size={32} className="text-nebula" />
              <span className="font-mono font-bold text-xl text-stardust">gg<span className="text-cosmic">.</span>dev</span>
            </div>
            <p className="text-sm text-stardust/50 max-w-xs">
              UX/UI Designer & Front-end dev de São Paulo.
            </p>
          </div>
          <div>
            <h4 className="font-mono text-sm uppercase tracking-widest mb-4 text-cosmic">Fala comigo</h4>
            <ul className="space-y-2 text-sm text-stardust/70">
              {contacts.map(({ Icon, label, value, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="group inline-flex items-center gap-3 hover:text-cosmic-soft transition-colors"
                    aria-label={label}
                  >
                    <span className="w-8 h-8 flex items-center justify-center rounded-md border border-stardust/15 group-hover:border-cosmic group-hover:bg-cosmic/10 transition">
                      <Icon size={16} strokeWidth={2} />
                    </span>
                    <span className="font-mono">{value}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-sm uppercase tracking-widest mb-3 text-cosmic">Agora</h4>
            <p className="text-sm text-stardust/60">
              Aberta pra oportunidades em UX/UI<br />
              Baseada em São Paulo, remoto ok.
            </p>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-stardust/10 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-stardust/40">
          <span>© {new Date().getFullYear()} Giovanna Gonçalves — feito com ☕</span>
          <span className="caret">console.log("bye")</span>
        </div>
      </div>
    </footer>
  );
}
