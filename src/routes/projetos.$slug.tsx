import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { projects, type Project } from "@/lib/portfolio-data";
import { StarIcon } from "@/components/star-icon";

export const Route = createFileRoute("/projetos/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.project.title} — Giovanna Gonçalves` },
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
        <h1 className="text-4xl font-bold">Projeto não encontrado</h1>
        <p className="mt-3 text-muted-foreground">Talvez tenha se perdido no cosmos…</p>
        <Link to="/" className="mt-6 inline-block px-5 py-2 font-mono border-2 border-void rounded-lg hover:bg-void hover:text-stardust transition">
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
      <span className="font-mono text-xs px-2 py-1 rounded bg-void text-stardust">{n}</span>
      <span className="font-mono text-xs uppercase tracking-widest text-cosmic">{children}</span>
    </div>
  );
}

function ProjectPage() {
  const { project } = Route.useLoaderData() as { project: Project };

  return (
    <div className="min-h-screen stars-subtle">
      <SiteHeader />

      {/* HERO */}
      <section className="bg-void text-stardust">
        <div className="max-w-5xl mx-auto px-4 pt-16 pb-20">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 font-mono text-sm text-stardust/50 mb-8">
            <Link to="/" className="hover:text-cosmic transition">home</Link>
            <span className="text-stardust/30">/</span>
            <span className="text-stardust/80">{project.title}</span>
          </nav>
          <div className="mt-6 grid md:grid-cols-[1.4fr_1fr] gap-8 items-end">
            <div>
              <div className="flex gap-2 flex-wrap mb-4">
                <span className="font-mono text-xs px-2 py-1 rounded-full border border-stardust/20 text-stardust/70">
                  {project.year}
                </span>
                <span className="font-mono text-xs px-2 py-1 rounded-full border border-stardust/20 text-stardust/70">
                  {project.role}
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold leading-none text-stardust">
                {project.title}<span className="text-nebula">.</span>
              </h1>
              <p className="mt-4 text-lg text-stardust/60 max-w-xl">{project.tagline}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((t) => (
                <span key={t} className="px-3 py-1.5 font-mono text-xs bg-stardust/10 border border-stardust/15 rounded-md text-stardust">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COVER */}
      <section className="max-w-6xl mx-auto px-4 -mt-10">
        <div className="border-2 border-void rounded-lg overflow-hidden bg-white">
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

      {/* WIDE IMAGE */}
      <section className="w-full">
        <div className="relative">
          <img
            src={project.wide}
            alt="Visão ampla do projeto"
            width={1920}
            height={800}
            loading="lazy"
            className="w-full h-[280px] md:h-[440px] object-cover border-y-2 border-void"
          />
          <StarIcon
            size={56}
            className="absolute -bottom-6 right-8 rotate-12 animate-twinkle text-nebula"
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

      {/* PROCESSO */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionLabel n="04">processo</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-extrabold">Como cheguei lá</h2>
            <ol className="mt-6 space-y-4">
              {project.process.map((step: string, i: number) => (
                <li key={i} className="flex gap-4">
                  <span className="shrink-0 w-8 h-8 rounded-full bg-nebula text-stardust font-mono font-bold flex items-center justify-center text-sm border-2 border-void">
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

      {/* SOLUÇÃO */}
      <section className="bg-void text-stardust mt-16">
        <div className="max-w-3xl mx-auto px-4 py-20">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs px-2 py-1 rounded bg-nebula text-stardust">05</span>
            <span className="font-mono text-xs uppercase tracking-widest text-nebula">solução</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-stardust">A solução</h2>
          <p className="mt-5 text-lg leading-relaxed text-stardust/80">{project.solution}</p>
        </div>
      </section>

      {/* RESULTADOS */}
      <article className="max-w-3xl mx-auto px-4 py-20">
        <SectionLabel n="06">resultados</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-extrabold">Resultados</h2>
        <div className="mt-5 space-y-4 text-lg leading-relaxed text-foreground/80">
          {project.results.map((r) => (
            <p key={r.label}>
              <span className="font-mono font-bold text-void">{r.label}:</span>{" "}
              <span className="text-nebula font-bold">{r.value}</span>. Depois da entrega, esse foi um dos
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
        <div className="border-t-2 border-void/10 pt-8 flex flex-wrap items-center justify-between gap-4">
          <Link to="/" className="px-4 py-2 font-mono text-sm border-2 border-void rounded-lg hover:bg-void hover:text-stardust transition">
            ← todos os projetos
          </Link>
          <a href="/#contato" className="px-5 py-2.5 font-mono text-sm bg-nebula text-stardust border-2 border-void rounded-lg hover:bg-void hover:text-stardust transition">
            gostou? bora conversar ♡
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
