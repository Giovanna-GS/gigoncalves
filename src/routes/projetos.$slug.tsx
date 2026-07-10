import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { projects, type Project } from "@/lib/portfolio-data";
import catSticker from "@/assets/cat-sticker.png";

export const Route = createFileRoute("/projetos/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.project.title} — meow.dev` },
          { name: "description", content: loaderData.project.tagline },
          { property: "og:title", content: `${loaderData.project.title} — case UX` },
          { property: "og:description", content: loaderData.project.tagline },
          { property: "og:image", content: loaderData.project.cover },
        ]
      : [{ title: "Projeto não encontrado" }, { name: "robots", content: "noindex" }],
  }),
  component: ProjectPage,
  notFoundComponent: ProjectNotFound,
});

function ProjectNotFound() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <div className="max-w-2xl mx-auto px-4 py-32 text-center">
        <h1 className="text-4xl font-bold">Projeto não encontrado 🙀</h1>
        <p className="mt-3 text-muted-foreground">Talvez o gato tenha derrubado esse arquivo…</p>
        <Link to="/" className="mt-6 inline-block px-5 py-2 font-mono border-2 border-ink rounded-lg hover:bg-ink hover:text-paper transition">
          ← voltar
        </Link>
      </div>
      <SiteFooter />
    </div>
  );
}

function SectionLabel({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <span className="font-mono text-xs px-2 py-1 rounded bg-ink text-paper">{n}</span>
      <span className="font-mono text-xs uppercase tracking-widest text-purple">{children}</span>
    </div>
  );
}

function ProjectPage() {
  const { project } = Route.useLoaderData() as { project: Project };

  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* HERO escuro */}
      <section className="bg-ink text-paper">
        <div className="max-w-5xl mx-auto px-4 pt-16 pb-20">
          <Link to="/" className="font-mono text-sm text-paper/60 hover:text-pink transition">
            ← /projetos
          </Link>
          <div className="mt-6 grid md:grid-cols-[1.4fr_1fr] gap-8 items-end">
            <div>
              <div className="flex gap-2 flex-wrap mb-4">
                <span className="font-mono text-xs px-2 py-1 rounded-full border border-paper/25 text-paper/80">
                  {project.year}
                </span>
                <span className="font-mono text-xs px-2 py-1 rounded-full border border-paper/25 text-paper/80">
                  {project.role}
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold leading-none text-paper">
                {project.title}
                <span className="text-pink">.</span>
              </h1>
              <p className="mt-4 text-lg text-paper/70 max-w-xl">{project.tagline}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((t) => (
                <span key={t} className="px-3 py-1.5 font-mono text-xs bg-paper/10 border border-paper/20 rounded-md text-paper">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COVER */}
      <section className="max-w-6xl mx-auto px-4 -mt-10">
        <div className="border-2 border-ink rounded-lg overflow-hidden bg-white">
          <img
            src={project.cover}
            alt={project.title}
            width={1280}
            height={900}
            className="w-full aspect-[4/3] md:aspect-[16/9] object-cover"
          />
        </div>
      </section>

      {/* DESAFIO */}
      <article className="max-w-3xl mx-auto px-4 py-20">
        <SectionLabel n="01">desafio</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-extrabold">O desafio</h2>
        <p className="mt-5 text-lg leading-relaxed text-foreground/80">{project.challenge}</p>
      </article>

      {/* IMAGEM HORIZONTAL WIDE */}
      <section className="w-full">
        <div className="relative">
          <img
            src={project.wide}
            alt="Visão ampla do projeto"
            width={1920}
            height={800}
            loading="lazy"
            className="w-full h-[280px] md:h-[440px] object-cover border-y-2 border-ink"
          />
          <img
            src={catSticker}
            alt=""
            width={80}
            height={80}
            className="absolute -bottom-6 right-8 w-20 h-20 rotate-12 animate-wiggle"
          />
        </div>
      </section>

      {/* PROBLEMA */}
      <article className="max-w-3xl mx-auto px-4 py-20">
        <SectionLabel n="02">problema</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-extrabold">O problema real</h2>
        <p className="mt-5 text-lg leading-relaxed text-foreground/80">{project.problem}</p>
      </article>

      {/* DESIGN + PALETA */}
      <article className="max-w-3xl mx-auto px-4 py-8">
        <SectionLabel n="03">design</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-extrabold">Decisões visuais</h2>
        <p className="mt-5 text-lg leading-relaxed text-foreground/80">{project.design}</p>
      </article>

      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="polaroid rotate-[-1deg]">
          <span className="tape" />
          <img
            src={project.palette}
            alt="Paleta de cores do projeto"
            width={1024}
            height={512}
            loading="lazy"
            className="w-full aspect-[16/9] object-cover"
          />
          <p className="mt-2 text-center font-mono text-sm">paleta de cores</p>
        </div>
      </section>

      {/* PROCESSO + IMAGEM DETALHE */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionLabel n="04">processo</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-extrabold">Como cheguei lá</h2>
            <ol className="mt-6 space-y-4">
              {project.process.map((step: string, i: number) => (
                <li key={i} className="flex gap-4">
                  <span className="shrink-0 w-8 h-8 rounded-full bg-pink text-ink font-mono font-bold flex items-center justify-center text-sm border-2 border-ink">
                    {i + 1}
                  </span>
                  <p className="pt-1 text-foreground/80">{step}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="polaroid rotate-[-2deg]">
            <span className="tape" />
            <img
              src={project.detail}
              alt="Detalhe do processo"
              width={1280}
              height={900}
              loading="lazy"
              className="w-full aspect-[4/3] object-cover"
            />
            <p className="mt-2 text-center font-mono text-sm">rascunhos + post-its</p>
          </div>
        </div>
      </section>

      {/* SOLUÇÃO — bloco escuro sólido */}
      <section className="bg-ink text-paper mt-16">
        <div className="max-w-3xl mx-auto px-4 py-20">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs px-2 py-1 rounded bg-pink text-ink">05</span>
            <span className="font-mono text-xs uppercase tracking-widest text-pink">solução</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-paper">A solução</h2>
          <p className="mt-5 text-lg leading-relaxed text-paper/80">{project.solution}</p>
        </div>
      </section>

      {/* RESULTADOS — texto corrido */}
      <article className="max-w-3xl mx-auto px-4 py-20">
        <SectionLabel n="06">resultados</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-extrabold">Resultados</h2>
        <div className="mt-5 space-y-4 text-lg leading-relaxed text-foreground/80">
          {project.results.map((r) => (
            <p key={r.label}>
              <span className="font-mono font-bold text-ink">{r.label}:</span>{" "}
              <span className="text-pink font-bold">{r.value}</span>. Depois da entrega, esse foi um dos
              indicadores que se moveu de forma mais consistente ao longo dos meses seguintes.
            </p>
          ))}
          <p>
            No geral, o projeto validou a hipótese de que empatia e clareza no fluxo são mais eficazes que
            adicionar novas features. O time seguiu iterando em cima da base entregue, e a documentação
            gerada durante o processo virou referência interna pra próximos redesigns.
          </p>
        </div>
      </article>

      {/* NAVEGAÇÃO */}
      <section className="max-w-5xl mx-auto px-4 pb-20">
        <div className="border-t-2 border-ink/10 pt-8 flex flex-wrap items-center justify-between gap-4">
          <Link to="/" className="px-4 py-2 font-mono text-sm border-2 border-ink rounded-lg hover:bg-ink hover:text-paper transition">
            ← todos os projetos
          </Link>
          <a href="/#contato" className="px-5 py-2.5 font-mono text-sm bg-pink text-ink border-2 border-ink rounded-lg hover:bg-ink hover:text-paper transition">
            gostou? bora conversar ♡
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
