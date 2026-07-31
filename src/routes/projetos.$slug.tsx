import { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { projects, type Project } from "@/lib/portfolio-data";
import { StarIcon } from "@/components/star-icon";
import { Lightbox, LightboxTrigger } from "@/components/lightbox";
import { CrtMonitor } from "@/components/crt-monitor";

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
        <Link
          to="/"
          className="mt-6 inline-block px-5 py-2 font-mono border-2 border-void rounded-lg hover:bg-void hover:text-stardust transition"
        >
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

function RenderText({ text, className }: { text: string; className?: string }) {
  const pClass = className ?? "";
  const listClass = "mt-3 space-y-2 list-disc list-inside " + pClass;
  return (
    <>
      {text.split("\n\n").map((block, i) => {
        const lines = block.split("\n");
        const isList = lines.every((l) => l.startsWith("• "));
        if (isList) {
          return (
            <ul key={i} className={listClass}>
              {lines.map((line, j) => (
                <li key={j}>{line.replace(/^• /, "")}</li>
              ))}
            </ul>
          );
        }
        if (lines.length === 1 && lines[0].length < 40 && !lines[0].endsWith(".")) {
          return (
            <h3 key={i} className="mt-8 mb-2 text-xl font-bold text-void">
              {lines[0]}
            </h3>
          );
        }
        return (
          <p key={i} className={pClass}>
            {lines.join(" ")}
          </p>
        );
      })}
    </>
  );
}

function ProjectPage() {
  const { project } = Route.useLoaderData() as { project: Project };

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const projectImages = [
    { src: project.cover, alt: project.title },
    { src: project.palette, alt: "Paleta de cores do projeto" },
    { src: project.detail, alt: "Detalhe do processo — pesquisas" },
    { src: project.wide, alt: "Visão ampla do projeto" },
  ];

  return (
    <div className="min-h-screen stars-subtle">
      <SiteHeader />

      {/* HERO */}
      <section className="bg-void text-stardust">
        <div className="max-w-5xl mx-auto px-4 pt-20 md:pt-24 pb-16 md:pb-20">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 font-mono text-xs md:text-sm text-stardust/50 mb-6 md:mb-8">
            <Link to="/" className="hover:text-cosmic transition py-1">
              home
            </Link>
            <span className="text-stardust/30">/</span>
            <span className="text-stardust/80">{project.title}</span>
          </nav>
          <div className="mt-4 md:mt-6 grid md:grid-cols-[1.4fr_1fr] gap-6 md:gap-8 items-end">
            <div>
              <div className="flex gap-2 flex-wrap mb-4">
                <span className="font-mono text-xs px-2 py-1 rounded-full border border-stardust/20 text-stardust/70">
                  {project.year}
                </span>
                <span className="font-mono text-xs px-2 py-1 rounded-full border border-stardust/20 text-stardust/70">
                  {project.role}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-7xl font-extrabold leading-none text-stardust">
                {project.title}
                <span className="text-nebula">.</span>
              </h1>
              <p className="mt-3 md:mt-4 text-base md:text-lg text-stardust/60 max-w-xl">
                {project.tagline}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 font-mono text-xs bg-stardust/10 border border-stardust/15 rounded-md text-stardust"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COVER */}
      <section className="max-w-4xl mx-auto px-4 -mt-10">
        <div className="border-2 border-void rounded-lg overflow-hidden bg-white">
          <LightboxTrigger onClick={() => setLightboxIndex(0)} label={project.title}>
            <img
              src={project.cover}
              alt={project.title}
              width={1280}
              height={900}
              className="w-full object-contain"
            />
          </LightboxTrigger>
        </div>
      </section>

      {/* DESAFIO */}
      <article className="max-w-4xl mx-auto px-4 py-12 md:py-20">
        <SectionLabel n="01">desafio</SectionLabel>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">O desafio</h2>
        <RenderText
          text={project.challenge}
          className="mt-5 text-base md:text-lg leading-relaxed text-foreground/80"
        />
      </article>

      {/* PROBLEMA */}
      <article className="max-w-4xl mx-auto px-4 py-12 md:py-20">
        <SectionLabel n="02">problema</SectionLabel>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">O problema real</h2>
        <RenderText
          text={project.problem}
          className="mt-5 text-base md:text-lg leading-relaxed text-foreground/80"
        />
      </article>

      {/* DESIGN + PALETA */}
      <article className="max-w-4xl mx-auto px-4 py-12 md:py-20">
        <SectionLabel n="03">design</SectionLabel>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">Decisões visuais</h2>
        <RenderText
          text={project.design}
          className="mt-5 text-base md:text-lg leading-relaxed text-foreground/80"
        />
      </article>

      <section className="max-w-4xl mx-auto px-4 pb-12 md:pb-20">
        <div className="polaroid rotate-[-1deg]">
          <span className="tape" />
          <LightboxTrigger onClick={() => setLightboxIndex(1)} label="Paleta de cores do projeto">
            <img
              src={project.palette}
              alt="Paleta de cores do projeto"
              width={1024}
              height={512}
              loading="lazy"
              className="w-full object-contain"
            />
          </LightboxTrigger>
          <p className="mt-2 text-center font-mono text-sm">paleta de cores</p>
        </div>
      </section>

      {/* PROCESSO */}
      <section className="max-w-6xl mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
          <div>
            <SectionLabel n="04">processo</SectionLabel>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">Como cheguei lá</h2>
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
            <LightboxTrigger
              onClick={() => setLightboxIndex(2)}
              label="Detalhe do processo — pesquisas"
            >
              <img
                src={project.detail}
                alt="Detalhe do processo"
                width={1280}
                height={900}
                loading="lazy"
                className="w-full max-h-[400px] object-contain"
              />
            </LightboxTrigger>
            <p className="mt-2 text-center font-mono text-sm">pesquisas</p>
          </div>
        </div>
      </section>

      {/* SOLUÇÃO */}
      <section className="bg-nebula/10 text-void">
        <div className="max-w-4xl mx-auto px-4 py-16 md:py-24">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs px-2 py-1 rounded bg-nebula text-stardust">05</span>
            <span className="font-mono text-xs uppercase tracking-widest text-nebula">solução</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-void">A solução</h2>
          <RenderText
            text={project.solution}
            className="mt-5 text-base md:text-lg leading-relaxed text-void/80"
          />
        </div>
      </section>

      {/* RESULTADOS + WIDE IMAGE */}
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-[1fr_1.2fr] gap-8 md:gap-10 items-center">
        <div className="polaroid rotate-[1deg]">
          <span className="tape" />
          <LightboxTrigger onClick={() => setLightboxIndex(3)} label="Visão ampla do projeto">
            <img
              src={project.wide}
              alt="Visão ampla do projeto"
              width={1920}
              height={800}
              loading="lazy"
              className="w-full object-contain"
            />
          </LightboxTrigger>
          <p className="mt-2 text-center font-mono text-sm">visão ampla</p>
        </div>
        <div>
          <SectionLabel n="06">resultados</SectionLabel>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">Resultados</h2>
          <div className="mt-5 space-y-4 text-base md:text-lg leading-relaxed text-foreground/80">
            {typeof project.results === "string" ? (
              <RenderText text={project.results} />
            ) : (
              <>
                {project.results.map((r) => (
                  <p key={r.label}>
                    <span className="font-mono font-bold text-void">{r.label}:</span>{" "}
                    <span className="text-nebula font-bold">{r.value}</span>.
                  </p>
                ))}
              </>
            )}
          </div>
        </div>
      </section>

      {/* CRT MONITOR — só no petshop checkout */}
      {project.slug === "petshop-checkout" && (
        <section className="bg-void text-stardust">
          <div className="max-w-5xl mx-auto px-4 py-16 md:py-24 text-center">
            <div className="flex items-center gap-3 mb-3 justify-center">
              <span className="font-mono text-xs px-2 py-1 rounded bg-stardust/10 border border-stardust/20 text-stardust">
                07
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-cosmic">
                experiência
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stardust">
              Reviva o desktop dos anos 2000
            </h2>
            <p className="mt-3 text-stardust/60 max-w-xl mx-auto">
              Botei o monitor pra funcionar de novo — clica pra dar boot.
            </p>
            <div className="mt-10">
              <CrtMonitor />
            </div>
          </div>
        </section>
      )}

      {/* NAVEGAÇÃO */}
      <section className="max-w-5xl mx-auto px-4 pb-16 md:pb-24">
        <div className="border-t-2 border-void/10 pt-8 flex flex-wrap items-center justify-between gap-4">
          <Link
            to="/"
            className="px-4 py-2 font-mono text-sm border-2 border-void rounded-lg hover:bg-void hover:text-stardust transition"
          >
            ← todos os projetos
          </Link>
          <a
            href="/#contato"
            className="px-5 py-2.5 font-mono text-sm bg-nebula text-stardust border-2 border-void rounded-lg hover:bg-void hover:text-stardust transition"
          >
            gostou? bora conversar ♡
          </a>
        </div>
      </section>

      <SiteFooter />

      {lightboxIndex !== null && (
        <Lightbox
          images={projectImages}
          index={lightboxIndex}
          onIndexChange={setLightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </div>
  );
}
