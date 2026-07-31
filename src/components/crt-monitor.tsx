"use client";

import { useCallback, useEffect, useState } from "react";

export function CrtMonitor() {
  const [booted, setBooted] = useState(false);

  const boot = useCallback(() => {
    setBooted(true);
  }, []);

  useEffect(() => {
    const t = setTimeout(boot, 3200);
    return () => clearTimeout(t);
  }, [boot]);

  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col items-center">
      {/* corpo do monitor */}
      <div className="relative w-full rounded-[26px] rounded-b-[36px] bg-gradient-to-b from-stone-300 via-stone-400 to-stone-500 p-4 md:p-7 shadow-2xl">
        {/* moldura da tela */}
        <div className="rounded-2xl border-2 border-stone-700 bg-stone-950/90 p-2.5 md:p-3.5">
          {/* tela de vidro */}
          <button
            type="button"
            onClick={boot}
            disabled={booted}
            aria-label="Iniciar giovanna.os"
            className={`relative block aspect-[4/3] w-full overflow-hidden rounded-lg bg-[#14092d] shadow-[inset_0_0_50px_rgba(0,0,0,0.7)] focus:outline-none ${
              booted ? "cursor-default" : "cursor-pointer"
            }`}
          >
            {/* filtro de ruído estático */}
            <svg className="absolute h-0 w-0" aria-hidden="true">
              <defs>
                <filter id="crt-noise">
                  <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.9"
                    numOctaves="4"
                    seed="7"
                  >
                    <animate
                      attributeName="seed"
                      from="0"
                      to="100"
                      dur="0.4s"
                      repeatCount="indefinite"
                    />
                  </feTurbulence>
                  <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
                </filter>
              </defs>
            </svg>

            {/* estática */}
            <div
              className="pointer-events-none absolute inset-0 z-[2]"
              style={{
                filter: "url(#crt-noise)",
                opacity: booted ? 0 : 0.55,
                mixBlendMode: "screen",
                transition: "opacity 1.4s ease",
              }}
            />
            {/* scanlines */}
            <div
              className="pointer-events-none absolute inset-0 z-[3]"
              style={{
                background:
                  "repeating-linear-gradient(to bottom, rgba(0,0,0,0.35) 0 1px, transparent 1px 3px)",
              }}
            />
            {/* flicker */}
            <div className="pointer-events-none absolute inset-0 z-[5] animate-[crt-flicker_4s_steps(1)_infinite]" />
            {/* brilho suave no vidro */}
            <div className="pointer-events-none absolute inset-0 z-[4] bg-gradient-to-tr from-transparent via-white/5 to-white/10" />

            {/* conteúdo */}
            <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-4 px-4 text-center">
              {booted ? (
                <>
                  <p
                    className="font-mono text-2xl font-bold text-[#d485c9] sm:text-4xl md:text-5xl"
                    style={{
                      textShadow: "0 0 14px rgba(212,133,201,0.7), 0 0 36px rgba(212,133,201,0.35)",
                    }}
                  >
                    giovanna.os
                    <span className="ml-1 inline-block h-[0.85em] w-[0.55em] translate-y-[0.12em] bg-[#d485c9] animate-[crt-blink_1s_steps(1)_infinite]" />
                  </p>
                  <a
                    href="https://giovanna-os.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-md border-2 border-[#d485c9] px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-[#d485c9] transition hover:bg-[#d485c9] hover:text-[#14092d] sm:text-sm"
                    style={{ boxShadow: "0 0 10px rgba(212,133,201,0.4)" }}
                  >
                    clique para iniciar →
                  </a>
                </>
              ) : (
                <>
                  <p className="font-mono text-[10px] tracking-[0.3em] text-[#d485c9] sm:text-xs">
                    CARREGANDO SISTEMA…
                  </p>
                  <div className="h-2 w-44 max-w-full overflow-hidden rounded-full bg-[#d485c9]/40 sm:w-52">
                    <div
                      className="h-full rounded-full bg-[#d485c9] animate-[crt-load_2.4s_ease-in-out_infinite]"
                      style={{ boxShadow: "0 0 6px rgba(212,133,201,0.6)" }}
                    />
                  </div>
                  <p className="font-mono text-[10px] text-[#d485c9]/70">aguarde…</p>
                </>
              )}
            </div>
          </button>
        </div>

        {/* barra inferior do gabinete */}
        <div className="mt-3 flex items-center justify-between px-1 sm:px-2">
          <span className="font-mono text-xs font-bold tracking-[0.2em] text-stone-700 sm:text-sm">
            giovanna.os
          </span>
          <div className="flex items-center gap-3">
            <span
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                booted ? "bg-green-400" : "bg-amber-400"
              }`}
              style={{ boxShadow: booted ? "0 0 8px #4ade80" : "0 0 8px #fbbf24" }}
            />
            <span className="crt-knob" />
            <span className="crt-knob" />
          </div>
        </div>
      </div>

      {/* haste + base */}
      <div className="h-10 w-24 rounded-b bg-gradient-to-b from-stone-500 to-stone-600" />
      <div className="h-3 w-56 max-w-full rounded-[50%] bg-stone-600 shadow-lg" />
    </div>
  );
}
