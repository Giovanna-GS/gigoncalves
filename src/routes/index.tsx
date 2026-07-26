import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { projects, journey, specialties } from "@/lib/portfolio-data";
import { icons, Mail, Linkedin, Globe, Phone } from "lucide-react";
import { StarIcon } from "@/components/star-icon";
import polaroid1 from "@/assets/perfil.png";
import polaroid2 from "@/assets/polaroid-2.jpg";
import polaroid3 from "@/assets/polaroid-3.jpg";
import polaroid4 from "@/assets/polaroid-4.jpg";
import polaroid5 from "@/assets/polaroid-5.jpg";
import polaroid6 from "@/assets/polaroid-6.jpg";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen stars-subtle">
      <SiteHeader />

      {/* HERO — banner retro com estática */}
      <section className="relative overflow-hidden bg-void text-stardust min-h-[85vh] flex flex-col justify-start">
        {/* Banner retro CSS */}
        <div className="absolute inset-0 overflow-hidden">
          {/* fundo */}
          <div className="absolute inset-0" style={{ backgroundColor: "oklch(0.15 0.10 300)" }} />

          {/* grade sutil */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: "repeating-linear-gradient(0deg, oklch(1 0 0) 0 1px, transparent 1px 40px), repeating-linear-gradient(90deg, oklch(1 0 0) 0 1px, transparent 1px 40px)",
            }}
          />

          {/* círculo grande */}
          <div
            className="absolute rounded-full"
            style={{
              width: "700px", height: "700px",
              top: "-200px", right: "-150px",
              background: "radial-gradient(circle, oklch(0.55 0.20 340 / 0.3) 0%, oklch(0.22 0.16 300 / 0.1) 60%, transparent 70%)",
            }}
          />

          {/* círculo menor */}
          <div
            className="absolute rounded-full"
            style={{
              width: "400px", height: "400px",
              bottom: "10%", left: "60%",
              background: "radial-gradient(circle, oklch(0.70 0.14 300 / 0.2) 0%, transparent 60%)",
            }}
          />

          {/* faixas horizontais retro */}
          <div className="absolute top-[15%] left-0 right-0 h-[2px] bg-cosmic/20" />
          <div className="absolute top-[25%] left-0 right-0 h-[1px] bg-stellar/15" />
          <div className="absolute top-[70%] left-0 right-0 h-[2px] bg-cosmic/20" />
          <div className="absolute top-[80%] left-0 right-0 h-[1px] bg-stellar/15" />

          {/* estrela cadente */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="shooting-star" />
          </div>

          {/* losango decorativo */}
          <div
            className="absolute"
            style={{
              width: "120px", height: "120px",
              top: "20%", left: "8%",
              border: "2px solid oklch(0.55 0.20 340 / 0.25)",
              transform: "rotate(45deg)",
            }}
          />

          {/* estrela 4 pontas */}
          <div className="absolute top-[15%] right-[15%]">
            <div className="w-[1px] h-10 bg-stellar/30 absolute left-1/2 -translate-x-1/2" />
            <div className="h-[1px] w-10 bg-stellar/30 absolute top-1/2 -translate-y-1/2" />
            <div className="w-[1px] h-6 bg-stellar/20 absolute left-1/2 -translate-x-1/2 rotate-45" />
            <div className="h-[1px] w-6 bg-stellar/20 absolute top-1/2 -translate-y-1/2 rotate-45" />
          </div>

          {/* planeta 1 — com anel, topo direita */}
          <svg className="absolute" style={{ top: "10%", right: "10%", width: "120px", height: "120px" }} viewBox="0 0 120 120" fill="none">
            <circle cx="60" cy="60" r="30" stroke="oklch(0.55 0.20 340 / 0.3)" strokeWidth="2" fill="oklch(0.55 0.20 340 / 0.06)" />
            <ellipse cx="60" cy="60" rx="55" ry="14" stroke="oklch(0.70 0.14 300 / 0.25)" strokeWidth="1.5" fill="none" />
            <circle cx="50" cy="52" r="5" fill="oklch(0.55 0.20 340 / 0.1)" />
            <circle cx="68" cy="65" r="3" fill="oklch(0.55 0.20 340 / 0.08)" />
          </svg>

          {/* planeta 2 — com anel, baixo direita */}
          <svg className="absolute" style={{ bottom: "15%", right: "25%", width: "130px", height: "130px" }} viewBox="0 0 130 130" fill="none">
            <circle cx="65" cy="65" r="35" stroke="oklch(0.22 0.16 300 / 0.3)" strokeWidth="2" fill="oklch(0.22 0.16 300 / 0.06)" />
            <ellipse cx="65" cy="65" rx="60" ry="15" stroke="oklch(0.55 0.20 340 / 0.2)" strokeWidth="1.5" fill="none" />
            <circle cx="55" cy="58" r="6" fill="oklch(0.22 0.16 300 / 0.08)" />
            <circle cx="72" cy="72" r="4" fill="oklch(0.22 0.16 300 / 0.06)" />
          </svg>

          {/* estrela 5 pontas — SVG */}
          <svg className="absolute" style={{ top: "60%", left: "5%", width: "28px", height: "28px" }} viewBox="0 0 24 24" fill="none">
            <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8l-6.2 4.5 2.4-7.4L2 9.4h7.6z" fill="oklch(0.55 0.20 340 / 0.25)" />
          </svg>

          {/* triângulo decorativo */}
          <div
            className="absolute"
            style={{
              width: 0, height: 0,
              bottom: "25%", right: "12%",
              borderLeft: "40px solid transparent",
              borderRight: "40px solid transparent",
              borderBottom: "70px solid oklch(0.22 0.16 300 / 0.2)",
            }}
          />

          {/* círculo com ponto central — planeta */}
          <div className="absolute" style={{ top: "70%", right: "25%" }}>
            <div className="w-10 h-10 rounded-full border border-cosmic/25 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cosmic/30" />
            </div>
          </div>

          {/* onda decorativa */}
          <svg className="absolute" style={{ bottom: "15%", left: "20%", width: "80px", height: "20px" }} viewBox="0 0 80 20" fill="none">
            <path d="M0 10 Q10 0 20 10 T40 10 T60 10 T80 10" stroke="oklch(0.55 0.20 340 / 0.2)" strokeWidth="1.5" fill="none" />
          </svg>

          {/* cruz small */}
          <div className="absolute top-[45%] left-[30%]">
            <div className="w-[1px] h-5 bg-stellar/20 absolute left-1/2 -translate-x-1/2" />
            <div className="h-[1px] w-5 bg-stellar/20 absolute top-1/2 -translate-y-1/2" />
          </div>

          {/* bolinhas decorativas */}
          <div className="absolute w-3 h-3 rounded-full bg-cosmic/30" style={{ top: "30%", left: "15%" }} />
          <div className="absolute w-2 h-2 rounded-full bg-stellar/25" style={{ top: "60%", left: "25%" }} />
          <div className="absolute w-4 h-4 rounded-full bg-cosmic/20" style={{ top: "45%", right: "20%" }} />
          <div className="absolute w-2 h-2 rounded-full bg-nebula-soft/20" style={{ top: "75%", left: "45%" }} />
          <div className="absolute w-3 h-3 rounded-full bg-stellar/15" style={{ top: "20%", right: "35%" }} />
          <div className="absolute w-2 h-2 rounded-full bg-cosmic/25" style={{ top: "80%", right: "40%" }} />
          <div className="absolute w-3 h-3 rounded-full bg-stellar/20" style={{ top: "50%", left: "40%" }} />
        </div>

        {/* SVG filter pro noise */}
        <svg className="absolute w-0 h-0">
          <defs>
            <filter id="tv-static">
              <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" seed="0" result="noise">
                <animate attributeName="seed" from="0" to="100" dur="0.5s" repeatCount="indefinite" />
              </feTurbulence>
              <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
            </filter>
            <filter id="tv-static-color">
              <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" seed="5" result="noise">
                <animate attributeName="seed" from="0" to="80" dur="0.4s" repeatCount="indefinite" />
              </feTurbulence>
            </filter>
          </defs>
        </svg>

        {/* estática cinza */}
        <div
          className="absolute inset-0 pointer-events-none z-[2]"
          style={{ filter: "url(#tv-static)", opacity: 0.45, mixBlendMode: "screen" }}
        />
        {/* estática colorida sutil */}
        <div
          className="absolute inset-0 pointer-events-none z-[2]"
          style={{ filter: "url(#tv-static-color)", opacity: 0.15, mixBlendMode: "color" }}
        />
        {/* scanlines */}
        <div
          className="absolute inset-0 pointer-events-none z-[3]"
          style={{
            background: "repeating-linear-gradient(to bottom, rgba(0,0,0,0.4) 0 1px, transparent 1px 3px)",
          }}
        />
        {/* flicker */}
        <div className="absolute inset-0 pointer-events-none z-[5] animate-[crt-flicker_4s_steps(1)_infinite]" />

        {/* Gradiente escuro na base */}
        <div className="absolute inset-0 z-[6] bg-gradient-to-b from-transparent via-transparent to-void/80" />

        {/* Conteúdo */}
        <div className="relative z-10 max-w-6xl mx-auto w-full px-6 pt-24 md:pt-32 pb-16 md:pb-20" style={{ minHeight: "50vh" }}>
          <div className="grid md:grid-cols-[1.2fr_1fr] gap-10 items-center h-full">
            {/* Texto */}
            <div className="flex flex-col justify-center">
              <p className="font-mono text-sm text-stardust/40 mb-4">~/giovanna $</p>
              <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.15] tracking-wide max-w-md">
                <span className="inline-block overflow-hidden whitespace-nowrap border-r-2 border-cosmic-soft text-cosmic-soft" style={{ animation: "typing 2.5s steps(17) forwards, blink-terminal 0.8s steps(1) infinite" }}>
                  oi, sou a Giovanna
                </span>
              </h1>
              <p className="mt-5 text-base md:text-lg text-stardust/60 max-w-lg font-sans leading-relaxed">
                UX/UI Designer & front-end dev de São Paulo. transformo ideias em interfaces com personalidade — do wireframe ao código final.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#projetos" className="px-5 py-2.5 font-mono text-sm bg-cosmic text-stardust border-2 border-cosmic rounded-lg hover:bg-cosmic-soft/20 hover:border-cosmic-soft transition">
                  ver projetos →
                </a>
                <a href="#contato" className="px-5 py-2.5 font-mono text-sm border-2 border-stardust/20 text-stardust/70 rounded-lg hover:border-stardust/40 hover:text-stardust hover:bg-stardust/5 transition backdrop-blur-sm bg-void/20">
                  currículo
                </a>
              </div>
            </div>

            {/* Polaroid da foto */}
            <div className="hidden md:flex justify-center items-center">
              <div className="w-[260px] lg:w-[300px] rotate-[3deg] hover:rotate-0 transition-transform duration-300">
                <div className="polaroid">
                  <span className="pin" />
                  <img src={polaroid1} alt="Foto da Giovanna" className="w-full aspect-square object-cover" loading="lazy" />
                  <p className="mt-2 text-center font-mono text-xs text-void">eu :)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE MIM — fundo claro */}
      <section id="sobre" className="max-w-6xl mx-auto px-4 py-24">
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 items-start">
          <div className="relative">
            <div className="polaroid w-full max-w-xs mx-auto rotate-[-3deg]">
              <span className="tape" />
              <img src={polaroid1} alt="Meu setup" width={768} height={768} className="w-full aspect-square object-cover" loading="lazy" />
              <p className="mt-2 text-center font-mono text-sm">o quarto-escritório</p>
            </div>
            <StarIcon
              size={56}
              className="absolute -bottom-4 -right-2 rotate-[-20deg] text-cosmic"
            />
          </div>
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-cosmic">/* sobre */</span>
            <h2 className="mt-2 text-4xl md:text-5xl font-extrabold text-void">UX/UI Designer & dev front-end.</h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                sou Giovanna, UX/UI Designer e front-end dev de São Paulo. comecei escrevendo
                <code className="font-mono text-cosmic font-semibold"> &lt;div&gt;</code> e hoje
                uno design com código pra criar interfaces que funcionam de verdade.
              </p>
              <p>
                tô cursando pós em UX pela Belas Artes e formada em Análise e Desenvolvimento de Sistemas.
                no dia a dia, trabalho com HTML, CSS, JavaScript, PHP, Figma e IA generativa — sempre
                buscando usabilidade, acessibilidade e performance.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                { Icon: Mail, label: "email", href: "mailto:giovanna.ggs99@gmail.com" },
                { Icon: Linkedin, label: "linkedin", href: "https://linkedin.com/in/giovanna-goncalves" },
                { Icon: Globe, label: "portfólio", href: "https://gigoncalves.framer.website" },
                { Icon: Phone, label: "whatsapp", href: "https://wa.me/5511989189746" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={label}
                  title={label}
                  className="sticker-card sticker-card-hover w-14 h-14 flex items-center justify-center text-void hover:text-cosmic transition-colors"
                >
                  <Icon size={22} strokeWidth={2} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJETOS — fundo claro */}
      <section id="projetos" className="max-w-6xl mx-auto px-4 py-24">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-cosmic">/* projetos */</span>
            <h2 className="mt-2 text-4xl md:text-5xl font-extrabold text-void">coisas que eu construí</h2>
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
              <div className="aspect-[4/3] overflow-hidden bg-cosmic-soft">
                <img
                  src={p.cover}
                  alt={p.title}
                  width={1280}
                  height={900}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-5 border-t-2 border-void">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs text-cosmic font-semibold">{p.year}</span>
                  <span className="font-mono text-xs text-muted-foreground">{p.role}</span>
                </div>
                <h3 className="text-xl font-bold text-void">{p.title}</h3>
                <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{p.tagline}</p>
                <div className="mt-3 flex gap-1.5 flex-wrap">
                  {p.tools.slice(0, 3).map((t) => (
                    <span key={t} className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-nebula-soft text-nebula border border-nebula/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* JORNADA — fundo claro */}
      <section id="jornada" className="max-w-6xl mx-auto px-4 py-24">
        <div className="text-center mb-14">
          <span className="font-mono text-xs uppercase tracking-widest text-cosmic">/* jornada */</span>
          <h2 className="mt-2 text-4xl md:text-5xl font-extrabold text-void">de onde vim, pra onde vou</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-8">
            <div className="sticker-card p-6">
              <h3 className="font-mono text-sm uppercase tracking-widest text-cosmic mb-4">💼 trabalho</h3>
              <ul className="space-y-4">
                {journey.work.map((w) => (
                  <li key={w.place} className="pl-4 border-l-2 border-cosmic">
                    <div className="font-mono text-xs text-muted-foreground">{w.year}</div>
                    <div className="font-bold text-void">{w.place}</div>
                    <div className="text-sm text-muted-foreground">{w.note}</div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="sticker-card p-6">
              <h3 className="font-mono text-sm uppercase tracking-widest text-nebula mb-4">🎓 estudos</h3>
              <ul className="space-y-4">
                {journey.study.map((s) => (
                  <li key={s.place} className="pl-4 border-l-2 border-nebula">
                    <div className="font-mono text-xs text-muted-foreground">{s.year}</div>
                    <div className="font-bold text-void">{s.place}</div>
                    <div className="text-sm text-muted-foreground">{s.note}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="sticker-card p-6">
            <h3 className="font-mono text-sm uppercase tracking-widest text-cosmic mb-4">✧ skills</h3>
            <div className="grid grid-cols-2 gap-3">
              {journey.skills.map((s) => {
                const LucideIcon = icons[s.icon as keyof typeof icons];
                return (
                  <div key={s.name} className="flex items-center gap-3 p-3 rounded-lg bg-cosmic-soft/40 border border-cosmic/10 hover:bg-cosmic-soft transition">
                    <span className="w-8 h-8 flex items-center justify-center rounded-md bg-stardust border border-nebula/20 text-nebula shrink-0" aria-hidden>
                      {LucideIcon ? <LucideIcon size={18} strokeWidth={2} /> : null}
                    </span>
                    <span className="font-mono text-sm font-medium text-void">{s.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ESPECIALIDADES — fundo claro */}
      <section className="max-w-6xl mx-auto px-4 py-24">
        <div className="text-center mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-cosmic">/* especialidades */</span>
          <h2 className="mt-2 text-4xl md:text-5xl font-extrabold text-void">no que eu sou boa</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {specialties.map((s, i) => {
            const LucideIcon = icons[s.icon as keyof typeof icons];
            return (
              <div
                key={s.title}
                className="sticker-card sticker-card-hover p-6"
                style={{ transform: `rotate(${i % 2 === 0 ? "-1.5deg" : "1.5deg"})` }}
              >
                <div className="w-12 h-12 mb-3 flex items-center justify-center rounded-lg bg-nebula-soft border-2 border-void text-nebula">
                  {LucideIcon ? <LucideIcon size={24} strokeWidth={2} /> : null}
                </div>
                <h3 className="font-bold text-lg mb-2 text-void">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* GALERIA POLAROID — quadro de memórias */}
      <section className="max-w-6xl mx-auto px-4 py-24">
        <div className="text-center mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-cosmic">/* a parede */</span>
          <h2 className="mt-2 text-4xl md:text-5xl font-extrabold text-void">um pouco do meu dia</h2>
          <p className="mt-3 text-muted-foreground">a parede do quarto-escritório</p>
        </div>

        {/* Quadro */}
        <div className="relative mx-auto max-w-5xl">
          {/* interior — lilas quadriculado */}
          <div
            className="relative rounded-2xl overflow-hidden p-6 md:p-10"
            style={{
              backgroundColor: "oklch(0.92 0.04 300)",
              backgroundImage:
                "repeating-linear-gradient(0deg, oklch(0.85 0.05 300) 0 1px, transparent 1px 24px), repeating-linear-gradient(90deg, oklch(0.85 0.05 300) 0 1px, transparent 1px 24px)",
            }}
          >
            {/* grid 2x3 de polaroids */}
            <div className="grid grid-cols-3 gap-5 md:gap-8">
              {[
                { src: polaroid1, cap: "setup dos sonhos", rot: -4 },
                { src: polaroid2, cap: "coding noturno", rot: 3 },
                { src: polaroid3, cap: "wireframe day", rot: -2 },
                { src: polaroid4, cap: "3am coding", rot: 5 },
                { src: polaroid5, cap: "leituras da semana", rot: -3 },
                { src: polaroid6, cap: "pausa pra estrelas", rot: 2 },
              ].map((p, i) => (
                <div
                  key={i}
                  className="hover:scale-105 hover:z-10 transition-transform duration-200"
                  style={{ transform: `rotate(${p.rot}deg)` }}
                >
                  <div className="polaroid">
                    <span className="pin" />
                    <img src={p.src} alt={p.cap} className="w-full aspect-square object-cover" loading="lazy" />
                    <p className="mt-2 text-center font-mono text-[11px] text-void">{p.cap}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
