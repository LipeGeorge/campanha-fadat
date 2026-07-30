import { QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import s from "./root.module.css";

export const Route = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "FADAT Educação Superior" },
      { name: "theme-color", content: "#070c1a" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }) {
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

function NotFoundComponent() {
  return (
    <div className={s.center}>
      <div className={s.box}>
        <h1 className={s.code}>404</h1>
        <h2 className={s.title}>Missão não encontrada</h2>
        <p className={s.text}>Esta página não existe ou foi movida.</p>
        <a href="/" className={s.btn}>
          Voltar ao início
        </a>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }) {
  const router = useRouter();

  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className={s.center}>
      <div className={s.box}>
        <h1 className={s.title}>Esta página não carregou</h1>
        <p className={s.text}>Algo deu errado do nosso lado. Tente novamente ou volte ao início.</p>
        <div className={s.actions}>
          <button
            type="button"
            className={s.btn}
            onClick={() => {
              router.invalidate();
              reset();
            }}
          >
            Tentar de novo
          </button>
          <a href="/" className={s.btnGhost}>
            Ir para o início
          </a>
        </div>
      </div>
    </div>
  );
}
