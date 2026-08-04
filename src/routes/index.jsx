import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useState } from "react";

import GridBackdrop from "../components/GridBackdrop.jsx";
import ProgressHUD from "../components/ProgressHUD.jsx";
import BootScreen from "../components/BootScreen.jsx";
import LevelCadastro from "../components/LevelCadastro.jsx";
import LevelMissoes from "../components/LevelMissoes.jsx";
import LevelDesafios from "../components/LevelDesafios.jsx";
import LevelFuturo from "../components/LevelFuturo.jsx";
import LevelVocacao from "../components/LevelVocacao.jsx";
import Victory from "../components/Victory.jsx";
import { BASE_XP, CAMPANHA, calcularVocacao, initialProfile } from "../data/game.js";
import s from "./index.module.css";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FADAT 2027.1 — Se torne quem você nasceu pra ser!" },
      {
        name: "description",
        content:
          "Experiência interativa e gamificada para descobrir sua vocação na FADAT. Pré-inscrição do Vestibular 2027.1.",
      },
      { property: "og:title", content: "FADAT 2027.1 — Se torne quem você nasceu pra ser!" },
      {
        property: "og:description",
        content: "Sete missões para descobrir sua vocação. Pré-inscrição do Vestibular FADAT 2027.1.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [stage, setStage] = useState("boot");
  const [profile, setProfile] = useState(initialProfile);
  const [respostas, setRespostas] = useState({});
  const [sound, setSound] = useState(false);

  const resetGame = useCallback(() => {
    setStage("boot");
    setProfile(initialProfile);
    setRespostas({});
  }, []);

  // Modo totem: volta para a tela inicial após inatividade
  useEffect(() => {
    if (stage === "boot") return undefined;
    let timer = window.setTimeout(resetGame, 120000);
    const bump = () => {
      window.clearTimeout(timer);
      timer = window.setTimeout(resetGame, 120000);
    };
    const events = ["pointerdown", "keydown", "touchstart"];
    events.forEach((e) => window.addEventListener(e, bump, { passive: true }));
    return () => {
      window.clearTimeout(timer);
      events.forEach((e) => window.removeEventListener(e, bump));
    };
  }, [stage, resetGame]);

  const vocacao = useMemo(() => calcularVocacao(respostas), [respostas]);

  const totalXP = useMemo(() => {
    const respondidas = Object.keys(respostas).length;
    return Math.min(100, (BASE_XP[stage] ?? 0) + respondidas * 7);
  }, [stage, respostas]);

  return (
    <main className={s.page}>
      <GridBackdrop />

      {stage !== "boot" && (
        <ProgressHUD
          xp={totalXP}
          stage={stage}
          sound={sound}
          onToggleSound={() => setSound((v) => !v)}
        />
      )}

      <div className={s.shell}>
        {stage === "boot" && <BootScreen onStart={() => setStage("cadastro")} />}
        {stage === "cadastro" && (
          <LevelCadastro profile={profile} setProfile={setProfile} onNext={() => setStage("missoes")} />
        )}
        {stage === "missoes" && (
          <LevelMissoes
            respostas={respostas}
            setRespostas={setRespostas}
            onNext={() => setStage("desafios")}
          />
        )}
        {stage === "desafios" && <LevelDesafios onNext={() => setStage("futuro")} />}
        {stage === "futuro" && <LevelFuturo onNext={() => setStage("vocacao")} />}
        {stage === "vocacao" && (
          <LevelVocacao vocacao={vocacao} profile={profile} onFinish={() => setStage("done")} />
        )}
        {stage === "done" && <Victory profile={profile} vocacao={vocacao} onRestart={resetGame} />}
      </div>

      <footer className={s.footer}>{CAMPANHA} · FADAT 2027.1</footer>
    </main>
  );
}
