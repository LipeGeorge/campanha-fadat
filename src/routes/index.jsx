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
import { BASE_XP, CAMPANHA, calcularVocacao, initialProfile } from "../data/game.js";
import s from "./index.module.css";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FADAT Station — Daqui pra frente é FADAT" },
      {
        name: "description",
        content:
          "Embarque na FADAT Station e descubra sua rota até o futuro. Experiência interativa com perfil acadêmico e vocacional.",
      },
      { property: "og:title", content: "FADAT Station — Daqui pra frente é FADAT" },
      {
        property: "og:description",
        content: "Embarque na FADAT Station e descubra sua rota até o futuro.",
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
  const [completed, setCompleted] = useState(false);

  const resetGame = useCallback(() => {
    setStage("boot");
    setProfile(initialProfile);
    setRespostas({});
    setCompleted(false);
  }, []);

  const vocacao = useMemo(() => calcularVocacao(respostas), [respostas]);

  const saveLeadSilently = useCallback(() => {
    const payload = {
      nome: profile.nome,
      whatsapp: profile.whatsapp,
      cidade: profile.cidade,
      depoimentosWhatsapp: profile.depoimentosWhatsapp ? "Sim" : "Não",
      vocacao: vocacao ? `${vocacao.emoji} ${vocacao.label}` : "",
      respostas: JSON.stringify(respostas),
      timestamp: new Date().toISOString(),
    };

    const sheetEndpoint = "";

    if (!sheetEndpoint) {
      return;
    }

    fetch(sheetEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      mode: "cors",
    }).catch(() => {});
  }, [profile, respostas, vocacao]);

  const handleFinish = useCallback(() => {
    saveLeadSilently();
    setCompleted(true);
  }, [saveLeadSilently]);

  // Modo totem: volta para a tela inicial após inatividade
  useEffect(() => {
    if (stage === "boot") return undefined;
    let timer = window.setTimeout(resetGame, 10000);
    const bump = () => {
      window.clearTimeout(timer);
      timer = window.setTimeout(resetGame, 10000);
    };
    const events = ["pointerdown", "keydown", "touchstart"];
    events.forEach((e) => window.addEventListener(e, bump, { passive: true }));
    return () => {
      window.clearTimeout(timer);
      events.forEach((e) => window.removeEventListener(e, bump));
    };
  }, [stage, resetGame]);

  const totalXP = useMemo(() => {
    if (completed) return 100;
    const respondidas = Object.keys(respostas).length;
    return Math.min(100, (BASE_XP[stage] ?? 0) + respondidas * 7);
  }, [completed, stage, respostas]);

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
        {stage === "futuro" && (
          <LevelFuturo profile={profile} onNext={() => setStage("vocacao")} />
        )}
        {stage === "vocacao" && (
          <LevelVocacao
            vocacao={vocacao}
            profile={profile}
            onFinish={handleFinish}
            finalMode={completed}
            onRestart={resetGame}
          />
        )}
      </div>

      <footer className={s.footer}>{CAMPANHA} · FADAT 2027.1</footer>
    </main>
  );
}
