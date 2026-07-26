import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="min-h-screen bg-void text-stardust stars flex items-center justify-center px-4">
      <div className="max-w-md text-center relative z-10">
        <p className="font-mono text-xs uppercase tracking-[0.4em] text-cosmic mb-6">erro 404</p>
        <h1 className="font-display font-black text-7xl md:text-8xl text-stardust/90">404</h1>
        <p className="mt-6 text-lg text-stardust/50 font-sans">
          essa página foi pra outra galáxia.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Link
            to="/"
            className="px-5 py-2.5 font-mono text-sm bg-cosmic text-stardust border-2 border-cosmic rounded-lg hover:bg-cosmic-soft/20 hover:border-cosmic-soft transition"
          >
            voltar pra home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">Ops, algo travou</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Tenta recarregar ou voltar pra home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Tentar de novo
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent"
          >
            Home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Giovanna Gonçalves — UX/UI Designer & Front-end" },
      { name: "description", content: "Portfólio de Giovanna Gonçalves — UX/UI Designer e front-end dev de São Paulo. Projetos, jornada e skills." },
      { property: "og:title", content: "Giovanna Gonçalves — portfólio UX/UI & Front-end" },
      { property: "og:description", content: "UX/UI Designer e front-end dev. Interfaces com usabilidade e código limpo." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700;800&family=Inter:wght@400;500;600&family=Space+Mono:wght@400;700&family=VT323&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
