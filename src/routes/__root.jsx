import { QueryClientProvider } from "@tanstack/react-query";
import { Outlet, createRootRouteWithContext, useRouter } from "@tanstack/react-router";
import { useEffect } from "react";

import { reportLovableError } from "../lib/lovable-error-reporting";
import s from "./root.module.css";

export const Route = createRootRouteWithContext()({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

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
        <a href="/campanha-fadat/" className={s.btn}>
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
          <a href="/campanha-fadat/" className={s.btnGhost}>
            Ir para o início
          </a>
        </div>
      </div>
    </div>
  );
}
