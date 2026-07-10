import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { projects, journey, specialties } from "@/lib/portfolio-data";
import { icons, Mail, Linkedin, Github, MessageCircle } from "lucide-react";
import catSticker from "@/assets/cat-sticker.png";
import polaroid1 from "@/assets/polaroid-1.jpg";
import polaroid2 from "@/assets/polaroid-2.jpg";
import polaroid3 from "@/assets/polaroid-3.jpg";
import polaroid4 from "@/assets/polaroid-4.jpg";
import polaroid5 from "@/assets/polaroid-5.jpg";
import polaroid6 from "@/assets/polaroid-6.jpg";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const marqueeItems = [
  "ux research", "front-end", "design system", "prototipação",
  "acessibilidade", "figma", "react", "css", "empatia", "gato",
];

function HomePage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* HERO / BANNER DINÂMICO — seção escura */}
      <section className="relative overflow-hidden bg-ink text-paper">
        <div className="max-w-6xl mx-auto px-4 pt-16 pb-24 md:pt-24 md:pb-32">
          <div className="grid md:grid-cols-[1.4fr_1fr] gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-paper/30 px-3 py-1 mb-6 font-mono text-xs text-paper/80">
                <span className="w-2 h-2 rounded-full bg-pink animate-pulse" />
                disponível pra projetos ✿
              </div>
              <h1 className="font-mono font-extrabold text-5xl md:text-7xl leading-[0.95] tracking-tight text-paper">
                oi, sou a<br />
                <span className="text-pink">~/dev.gata</span>
                <span className="caret" />
              </h1>
              <p className="mt-6 text-lg text-paper/70 max-w-xl">
                front-end dev migrando pra UX. desenho interfaces com carinho, escrevo código
                limpo e junto tudo isso numa vibe meio quarto adolescente ano 2003.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#projetos" className="px-5 py-2.5 font-mono text-sm bg-pink text-ink border-2 border-pink rounded-lg hover:bg-paper hover:border-paper transition">
                  ver projetos →
                </a>
                <a href="#contato" className="px-5 py-2.5 font-mono text-sm border-2 border-paper/40 text-paper rounded-lg hover:border-paper hover:bg-paper/10 transition">
                  falar comigo
                </a>
              </div>
            </div>

            {/* banner dinâmico: janela de código + polaroid + sticker */}
            <div className="relative h-[420px]">
              <div className="absolute top-0 right-0 w-full max-w-sm rounded-lg overflow-hidden border-2 border-paper/20 bg-white text-ink">
                <div className="flex items-center gap-1.5 bg-purple-soft px-3 py-2 border-b-2 border-ink/20">
                  <span className="w-3 h-3 rounded-full bg-pink" />
                  <span className="w-3 h-3 rounded-full bg-purple" />
                  <span className="w-3 h-3 rounded-full bg-ink" />
                  <span className="ml-2 font-mono text-xs">portfolio.tsx</span>
                </div>
                <pre className="p-4 font-mono text-[13px] leading-relaxed overflow-hidden">
<span className="text-purple">const</span> <span className="text-pink">me</span> = {"{"}
{"\n"}  role: <span className="text-purple">"UX + FE"</span>,
{"\n"}  loves: [<span className="text-purple">"gato"</span>,
{"\n"}    <span className="text-purple">"pixel"</span>],
{"\n"}  fuel: <span className="text-pink">☕ + ♡</span>,
{"\n"}{"}"}<span className="caret" />
                </pre>
              </div>

              <div
                className="absolute bottom-0 left-0 polaroid w-56 rotate-[-6deg] animate-float-y"
                style={{ animationDelay: "0.4s" }}
              >
                <span className="tape" />
                <img src={polaroid2} alt="Gato dormindo no teclado" width={768} height={768} className="w-full aspect-square object-cover" loading="lazy" />
                <p className="mt-2 text-center font-mono text-xs text-muted-foreground">meu QA principal 🐾</p>
              </div>

              <img
                src={catSticker}
                alt=""
                width={100}
                height={100}
                className="absolute -top-4 left-8 w-24 h-24 rotate-12 animate-wiggle"
              />
            </div>
          </div>
        </div>

        {/* marquee tipo fita cassete */}
        <div className="border-t border-paper/10 bg-pink text-ink overflow-hidden py-3">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...marqueeItems, ...marqueeItems].map((w, i) => (
              <span key={i} className="mx-6 font-mono text-sm uppercase tracking-widest font-bold">
                ✦ {w}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE MIM */}
      <section id="sobre" className="max-w-6xl mx-auto px-4 py-24">
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 items-start">
          <div className="relative">
            <div className="polaroid w-full max-w-xs mx-auto rotate-[-3deg]">
              <span className="tape" />
              <img src={polaroid1} alt="Meu setup" width={768} height={768} className="w-full aspect-square object-cover" loading="lazy" />
              <p className="mt-2 text-center font-mono text-sm">o quarto-escritório 💻</p>
            </div>
            <img src={catSticker} alt="" width={80} height={80} className="absolute -bottom-4 -right-2 w-20 h-20 rotate-[-20deg]" />
          </div>
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-purple">/* sobre */</span>
            <h2 className="mt-2 text-4xl md:text-5xl font-extrabold">alguém que ama pixels e gatos.</h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                comecei escrevendo <code className="font-mono text-pink">&lt;div&gt;</code> em 2020 e me apaixonei por
                interfaces. hoje, depois de 4 anos como front-end, tô no meio da minha transição pra UX —
                unindo o técnico com a pesquisa e a empatia.
              </p>
              <p>
                gosto de projetos que resolvem problemas reais, times pequenos e barulhentos,
                e docs bem escritas. no tempo livre, jogo the sims, colo polaroid na parede e brigo pelo
                colo do meu gato.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                { Icon: Mail, label: "email", href: "mailto:oi@meow.dev" },
                { Icon: Linkedin, label: "linkedin", href: "https://linkedin.com/in/meow" },
                { Icon: Github, label: "github", href: "https://github.com/meow" },
                { Icon: MessageCircle, label: "whatsapp", href: "https://wa.me/5511999999999" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={label}
                  title={label}
                  className="sticker-card sticker-card-hover w-14 h-14 flex items-center justify-center text-ink hover:text-pink transition-colors"
                >
                  <Icon size={22} strokeWidth={2} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJETOS */}
      <section id="projetos" className="max-w-6xl mx-auto px-4 py-24">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-purple">/* projetos */</span>
            <h2 className="mt-2 text-4xl md:text-5xl font-extrabold">coisas que eu construí</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <Link
              key={p.slug}
              to="/projetos/$slug"
              params={{ slug: p.slug }}
              className="sticker-card sticker-card-hover overflow-hidden block group"
              style={{ transform: `rotate(${i % 2 === 0 ? "-1deg" : "1deg"})` }}
            >
              <div className="aspect-[4/3] overflow-hidden bg-pink-soft">
                <img
                  src={p.cover}
                  alt={p.title}
                  width={1280}
                  height={900}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-5 border-t-2 border-ink">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs text-purple">{p.year}</span>
                  <span className="font-mono text-xs text-muted-foreground">{p.role}</span>
                </div>
                <h3 className="text-xl font-bold">{p.title}</h3>
                <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{p.tagline}</p>
                <div className="mt-3 flex gap-1.5 flex-wrap">
                  {p.tools.slice(0, 3).map((t) => (
                    <span key={t} className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-purple-soft border border-ink/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* JORNADA */}
      <section id="jornada" className="max-w-6xl mx-auto px-4 py-24">
        <div className="text-center mb-14">
          <span className="font-mono text-xs uppercase tracking-widest text-purple">/* jornada */</span>
          <h2 className="mt-2 text-4xl md:text-5xl font-extrabold">de onde vim, pra onde vou</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Esquerda: experiência + estudo */}
          <div className="space-y-8">
            <div className="sticker-card p-6">
              <h3 className="font-mono text-sm uppercase tracking-widest text-pink mb-4">💼 trabalho</h3>
              <ul className="space-y-4">
                {journey.work.map((w) => (
                  <li key={w.place} className="pl-4 border-l-2 border-pink">
                    <div className="font-mono text-xs text-muted-foreground">{w.year}</div>
                    <div className="font-bold">{w.place}</div>
                    <div className="text-sm text-muted-foreground">{w.note}</div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="sticker-card p-6">
              <h3 className="font-mono text-sm uppercase tracking-widest text-purple mb-4">🎓 estudos</h3>
              <ul className="space-y-4">
                {journey.study.map((s) => (
                  <li key={s.place} className="pl-4 border-l-2 border-purple">
                    <div className="font-mono text-xs text-muted-foreground">{s.year}</div>
                    <div className="font-bold">{s.place}</div>
                    <div className="text-sm text-muted-foreground">{s.note}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Direita: skills */}
          <div className="sticker-card p-6">
            <h3 className="font-mono text-sm uppercase tracking-widest text-pink mb-4">✧ skills</h3>
            <div className="grid grid-cols-2 gap-3">
              {journey.skills.map((s) => {
                const LucideIcon = icons[s.icon as keyof typeof icons];
                return (
                  <div key={s.name} className="flex items-center gap-3 p-3 rounded-lg bg-pink-soft/50 border border-ink/10 hover:bg-pink-soft transition">
                    <span className="w-8 h-8 flex items-center justify-center rounded-md bg-paper border border-ink/20 text-purple shrink-0" aria-hidden>
                      {LucideIcon ? <LucideIcon size={18} strokeWidth={2} /> : null}
                    </span>
                    <span className="font-mono text-sm font-medium">{s.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ESPECIALIDADES */}
      <section className="max-w-6xl mx-auto px-4 py-24">
        <div className="text-center mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-purple">/* especialidades */</span>
          <h2 className="mt-2 text-4xl md:text-5xl font-extrabold">no que eu sou boa</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {specialties.map((s, i) => (
            <div
              key={s.title}
              className="sticker-card sticker-card-hover p-6"
              style={{ transform: `rotate(${i % 2 === 0 ? "-1.5deg" : "1.5deg"})` }}
            >
              <div className="text-4xl mb-3">{s.emoji}</div>
              <h3 className="font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GALERIA POLAROID (parede do quarto) */}
      <section className="max-w-6xl mx-auto px-4 py-24">
        <div className="text-center mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-purple">/* a parede */</span>
          <h2 className="mt-2 text-4xl md:text-5xl font-extrabold">um pouco do meu dia</h2>
          <p className="mt-3 text-muted-foreground">a mesma parede que tá cheia de post-it na vida real ✿</p>
        </div>

        <div
          className="relative rounded-3xl p-8 md:p-12 border-2 border-ink/10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, oklch(0.94 0.02 350) 0 2px, transparent 2px 40px), repeating-linear-gradient(90deg, oklch(0.94 0.02 350) 0 2px, transparent 2px 40px)",
            backgroundColor: "oklch(0.98 0.01 350)",
          }}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
            {[
              { src: polaroid1, cap: "setup dos sonhos", rot: -4 },
              { src: polaroid2, cap: "meu QA 🐾", rot: 3 },
              { src: polaroid3, cap: "wireframe day", rot: -2 },
              { src: polaroid4, cap: "3am coding", rot: 4 },
              { src: polaroid5, cap: "leituras da semana", rot: -3 },
              { src: polaroid6, cap: "ele revisa tudo", rot: 2 },
            ].map((p, i) => (
              <div
                key={i}
                className="polaroid"
                style={{ transform: `rotate(${p.rot}deg)` }}
              >
                <span className="tape" />
                <img src={p.src} alt={p.cap} width={768} height={768} className="w-full aspect-square object-cover" loading="lazy" />
                <p className="mt-2 text-center font-mono text-sm">{p.cap}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
