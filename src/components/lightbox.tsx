"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export type LightboxImage = {
  src: string;
  alt: string;
};

export function Lightbox({
  images,
  index,
  onIndexChange,
  onClose,
}: {
  images: LightboxImage[];
  index: number;
  onIndexChange: (index: number) => void;
  onClose: () => void;
}) {
  const count = images.length;
  const current = images[index] ?? images[0];
  const showNav = count > 1;

  const prev = React.useCallback(() => {
    onIndexChange((index - 1 + count) % count);
  }, [index, count, onIndexChange]);

  const next = React.useCallback(() => {
    onIndexChange((index + 1) % count);
  }, [index, count, onIndexChange]);

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        next();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  return (
    <Dialog open onOpenChange={(open) => !open && onClose()}>
      <DialogPortal>
        <DialogOverlay onClick={onClose} className="z-[60] bg-void/95 backdrop-blur-sm" />
        <DialogContent className="z-[60] grid w-auto max-w-[94vw] gap-0 border-0 bg-transparent p-0 shadow-none sm:rounded-none">
          <DialogTitle className="sr-only">{current.alt}</DialogTitle>

          <figure className="flex flex-col items-center gap-4">
            <img
              src={current.src}
              alt={current.alt}
              className="max-h-[82vh] max-w-[90vw] object-contain rounded-lg bg-white shadow-2xl"
            />
            <figcaption className="flex items-center gap-2 font-mono text-xs text-stardust/70">
              <span>{current.alt}</span>
              {showNav && (
                <>
                  <span className="text-stardust/30">/</span>
                  <span className="text-stardust/90">
                    {index + 1} de {count}
                  </span>
                </>
              )}
            </figcaption>
          </figure>

          {showNav && (
            <>
              <button
                type="button"
                onClick={prev}
                aria-label="Imagem anterior"
                className="absolute left-2 md:left-5 top-1/2 -translate-y-1/2 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full border border-stardust/20 bg-stardust/10 text-stardust cursor-pointer transition hover:bg-stardust/20"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Próxima imagem"
                className="absolute right-2 md:right-5 top-1/2 -translate-y-1/2 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full border border-stardust/20 bg-stardust/10 text-stardust cursor-pointer transition hover:bg-stardust/20"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}

          <DialogClose
            aria-label="Fechar"
            className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full border border-stardust/20 bg-stardust/10 text-stardust cursor-pointer transition hover:bg-stardust/20"
          >
            <X className="h-5 w-5" />
          </DialogClose>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}

export function LightboxTrigger({
  onClick,
  label,
  className,
  children,
}: {
  onClick: () => void;
  label: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Ampliar: ${label}`}
      title="Clique para ampliar"
      className={cn(
        "group relative block w-full cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-nebula focus-visible:ring-offset-2",
        className,
      )}
    >
      {children}
      <span className="pointer-events-none absolute right-3 top-3 flex items-center gap-1 rounded-md bg-void/70 px-2 py-1 font-mono text-[10px] text-stardust opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
        <ZoomIn className="h-3.5 w-3.5" />
        ampliar
      </span>
    </button>
  );
}
