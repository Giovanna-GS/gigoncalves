import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { projects } from "@/lib/portfolio-data";
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
        <Link to="/" className="mt-6 inline-block sticker-card sticker-card-hover px-5 py-2 font-mono">
          ← voltar
        </Link>
      </div>
      <SiteFooter />
    </div>
  );
}

function ProjectPage() {
  const { project } = Route.useLoaderData();

  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-4 pt-16 pb-8">
        <Link to="/" className="font-mono text-sm text-muted-foreground hover:text-pink">
          ← /projetos
        </Link>
        <div className="mt-6 grid md:grid-cols-[1.4fr_1fr] gap-8 items-end">
          <div>
            <div className="flex gap-2 flex-wrap mb-4">
              <span className="font-mono text-xs px-2 py-1 rounded-full bg-pink-soft border border-ink/20">
                {project.year}
              </span>
              <span className="font-mono text-xs px-2 py-1 rounded-full bg-purple-soft border border-ink/20">
                {project.role}
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-none">
              {project.title}
              <span className="text-pink">.</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl">{project.tagline}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((t) => (
              <span key={t} className="sticker-card px-3 py-1.5 font-mono text-xs">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* COVER */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="sticker-card overflow-hidden">
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
      <section className="max-w-3xl mx-auto px-4 py-16">
        <span className="font-mono text-xs uppercase tracking-widest text-purple">01 / desafio</span>
        <h2 className="mt-2 text-3xl md:text-4xl font-extrabold">O desafio</h2>
        <p className="mt-4 text-lg text-muted-foreground">{project.challenge}</p>
      </section>

      {/* IMAGEM HORIZONTAL WIDE */}
      <section className="w-full py-8">
        <div className="relative">
          <img
            src={project.wide}
            alt="Visão ampla do projeto"
            width={1920}
            height={800}
            loading="lazy"
            className="w-full h-[260px] md:h-[420px] object-cover border-y-2 border-ink"
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
      <section className="max-w-3xl mx-auto px-4 py-16">
        <span className="font-mono text-xs uppercase tracking-widest text-purple">02 / problema</span>
        <h2 className="mt-2 text-3xl md:text-4xl font-extrabold">O problema real</h2>
        <p className="mt-4 text-lg text-muted-foreground">{project.problem}</p>
      </section>

      {/* PROCESSO + IMAGEM DETALHE */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-purple">03 / processo</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold">Como cheguei lá</h2>
            <ol className="mt-6 space-y-4">
              {project.process.map((step, i) => (
                <li key={i} className="flex gap-4">
                  <span className="shrink-0 w-8 h-8 rounded-full bg-pink text-white font-mono font-bold flex items-center justify-center text-sm">
                    {i + 1}
                  </span>
                  <p className="pt-1 text-muted-foreground">{step}</p>
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
      <section className="bg-gradient-to-br from-pink-soft to-purple-soft py-20">
        <div className="max-w-3xl mx-auto px-4">
          <span className="font-mono text-xs uppercase tracking-widest text-purple">04 / solução</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold">A solução</h2>
          <p className="mt-4 text-lg">{project.solution}</p>
        </div>
      </section>

      {/* RESULTADOS */}
      <section className="max-w-5xl mx-auto px-4 py-20">
        <span className="font-mono text-xs uppercase tracking-widest text-purple">05 / resultados</span>
        <h2 className="mt-2 text-3xl md:text-4xl font-extrabold mb-10">Resultados</h2>
        <div className="grid sm:grid-cols-3 gap-5">
          {project.results.map((r, i) => (
            <div
              key={r.label}
              className="sticker-card p-8 text-center"
              style={{ transform: `rotate(${i === 1 ? 0 : i === 0 ? -1.5 : 1.5}deg)` }}
            >
              <div className="font-mono text-5xl font-extrabold bg-gradient-to-br from-pink to-purple bg-clip-text text-transparent">
                {r.value}
              </div>
              <div className="mt-2 font-mono text-sm uppercase tracking-widest text-muted-foreground">
                {r.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* NAVEGAÇÃO ENTRE PROJETOS */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="border-t-2 border-ink/10 pt-8 flex flex-wrap items-center justify-between gap-4">
          <Link to="/" className="sticker-card sticker-card-hover px-4 py-2 font-mono text-sm">
            ← todos os projetos
          </Link>
          <a href="#contato" className="sticker-card sticker-card-hover px-5 py-2.5 font-mono text-sm bg-ink text-white">
            gostou? bora conversar ♡
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
