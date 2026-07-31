"use client";

import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CrtMonitor } from "@/components/crt-monitor";
import { Lightbox, LightboxTrigger } from "@/components/lightbox";
import type { Project } from "@/lib/portfolio-data";

function SectionLabel({
  n,
  children,
  dark = false,
}: {
  n: string;
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <span
        className={`font-mono text-xs px-2 py-1 rounded ${
          dark ? "bg-stardust/10 border border-stardust/20 text-stardust" : "bg-void text-stardust"
        }`}
      >
        {n}
      </span>
      <span className="font-mono text-xs uppercase tracking-widest text-cosmic">{children}</span>
    </div>
  );
}

export function ProjectPageGiovannaOs({ project }: { project: Project }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const images = [
    { src: project.wide, alt: "Visão ampla do projeto" },
    { src: project.palette, alt: "Paleta de cores do projeto" },
    { src: project.detail, alt: "Detalhe do processo" },
  ];

  return (
    <div className="min-h-screen stars-subtle">
      <SiteHeader />

      {/* HERO */}
      <section className="bg-void text-stardust">
        <div className="max-w-5xl mx-auto px-4 pt-20 md:pt-24 pb-16 md:pb-20">
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

      {/* IMAGEM DE ABERTURA */}
      <section className="max-w-4xl mx-auto px-4 -mt-10">
        <div className="border-2 border-void rounded-lg overflow-hidden bg-white">
          <LightboxTrigger onClick={() => setLightboxIndex(0)} label="Visão ampla do projeto">
            <img
              src={images[0].src}
              alt={images[0].alt}
              width={1920}
              height={800}
              className="w-full object-contain"
            />
          </LightboxTrigger>
        </div>
      </section>

      {/* 01 IDEIA */}
      <article className="max-w-4xl mx-auto px-4 py-12 md:py-20">
        <SectionLabel n="01">ideia</SectionLabel>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">De onde tudo começou</h2>
        <p className="mt-5 text-base md:text-lg leading-relaxed text-foreground/80">
          Criar um portfólio que fosse além de uma vitrine de projetos. Inspirado na nostalgia do
          Windows 7, o objetivo foi desenvolver uma experiência interativa que refletisse minha
          personalidade e transformasse a navegação em algo divertido e memorável.
        </p>
      </article>

      {/* 02 CONCEITO VISUAL — imagem à direita */}
      <article className="max-w-5xl mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
          <div>
            <SectionLabel n="02">conceito visual</SectionLabel>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">
              Construindo a identidade
            </h2>
            <p className="mt-5 text-base md:text-lg leading-relaxed text-foreground/80">
              O conceito visual combina referências dos anos 2000 com elementos do meu estilo
              pessoal. A paleta foi inspirada em cores marcantes da época, adaptadas para uma
              estética mais moderna, enquanto a temática de galáxia traz identidade ao projeto. Para
              reforçar a nostalgia, também incluí um player de música inspirado nas playlists do
              Tumblr.
            </p>
          </div>
          <div className="polaroid rotate-[2deg]">
            <span className="tape" />
            <LightboxTrigger onClick={() => setLightboxIndex(1)} label="Paleta de cores do projeto">
              <img
                src={images[0].src}
                alt={images[0].alt}
                width={1024}
                height={512}
                loading="lazy"
                className="w-full object-contain"
              />
            </LightboxTrigger>
            <p className="mt-2 text-center font-mono text-sm">paleta de cores</p>
          </div>
        </div>
      </article>

      {/* 03 EXPERIÊNCIA — texto alinhado como a ideia */}
      <article className="max-w-4xl mx-auto px-4 py-12 md:py-20">
        <SectionLabel n="03">experiência</SectionLabel>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">Navegando pelo desktop</h2>
        <p className="mt-5 text-base md:text-lg leading-relaxed text-foreground/80">
          A navegação recria a experiência do Windows 7 por meio de janelas que representam cada
          seção do portfólio. Além das páginas principais, foram adicionados elementos como Diário,
          Guestbook, Lixeira e Menu Iniciar, tornando a exploração mais dinâmica e imersiva.
        </p>
      </article>

      {/* 04 DESENVOLVIMENTO — imagem à esquerda */}
      <article className="max-w-5xl mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
          <div className="polaroid rotate-[-2deg] md:order-1">
            <span className="tape" />
            <LightboxTrigger onClick={() => setLightboxIndex(2)} label="Detalhe do processo">
              <img
                src={images[2].src}
                alt={images[2].alt}
                width={1280}
                height={900}
                loading="lazy"
                className="w-full object-contain"
              />
            </LightboxTrigger>
            <p className="mt-2 text-center font-mono text-sm">detalhes do processo</p>
          </div>
          <div className="md:order-2">
            <SectionLabel n="04">desenvolvimento</SectionLabel>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">
              Como foi desenvolvido
            </h2>
            <p className="mt-5 text-base md:text-lg leading-relaxed text-foreground/80">
              O projeto foi desenvolvido com React, TypeScript e Vite, utilizando CSS para recriar
              os elementos da interface do Windows 7. A inteligência artificial foi utilizada como
              ferramenta de apoio durante a implementação de algumas funcionalidades, enquanto as
              decisões de design e experiência foram definidas por mim.
            </p>
          </div>
        </div>
      </article>

      {/* 05 EXPERIMENTE + CRT */}
      <section className="bg-void text-stardust">
        <div className="max-w-5xl mx-auto px-4 py-16 md:py-24 text-center">
          <div className="flex justify-center">
            <SectionLabel n="05" dark>
              experimente
            </SectionLabel>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stardust">
            Explore a experiência
          </h2>
          <p className="mt-3 text-stardust/60 max-w-xl mx-auto">
            Este projeto foi pensado para ser explorado. Abra as janelas, descubra os detalhes e
            navegue por uma experiência inspirada no Windows 7.
          </p>
          <div className="mt-10">
            <CrtMonitor />
          </div>
        </div>
      </section>

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
          images={images}
          index={lightboxIndex}
          onIndexChange={setLightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </div>
  );
}
