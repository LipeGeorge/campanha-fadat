import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";

import GridBackdrop from "../components/GridBackdrop.jsx";
import ProgressHUD from "../components/ProgressHUD.jsx";
import BootScreen from "../components/BootScreen.jsx";
import LevelUsuario from "../components/LevelUsuario.jsx";
import LevelDestino from "../components/LevelDestino.jsx";
import LevelDesafios from "../components/LevelDesafios.jsx";
import LevelFuturo from "../components/LevelFuturo.jsx";
import BossFinal from "../components/BossFinal.jsx";
import Victory from "../components/Victory.jsx";
import { BASE_XP, initialProfile } from "../data/game.js";
import s from "./index.module.css";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FADAT Station 2027.1 — Daqui pra frente, é FADAT!" },
      {
        name: "description",
        content:
          "Experiência interativa e gamificada para descobrir seu curso ideal na FADAT. Pré-inscrição do Vestibular 2027.1.",
      },
      { property: "og:title", content: "FADAT Station 2027.1 — Comece sua missão" },
      {
        property: "og:description",
        content:
          "Cinco níveis para descobrir seu futuro na FADAT. Pré-inscrição do Vestibular 2027.1.",
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
  const [sound, setSound] = useState(false);

  const totalXP = useMemo(() => {
    const filled = Object.values(profile).filter(Boolean).length;
    return Math.min(100, (BASE_XP[stage] ?? 0) + filled);
  }, [stage, profile]);

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
        {stage === "boot" && <BootScreen onStart={() => setStage("level1")} />}
        {stage === "level1" && (
          <LevelUsuario profile={profile} setProfile={setProfile} onNext={() => setStage("level2")} />
        )}
        {stage === "level2" && (
          <LevelDestino profile={profile} setProfile={setProfile} onNext={() => setStage("level3")} />
        )}
        {stage === "level3" && <LevelDesafios onNext={() => setStage("level4")} />}
        {stage === "level4" && <LevelFuturo onNext={() => setStage("boss")} />}
        {stage === "boss" && (
          <BossFinal profile={profile} setProfile={setProfile} onFinish={() => setStage("done")} />
        )}
        {stage === "done" && <Victory profile={profile} />}
      </div>

      <footer className={s.footer}>FADAT Station · 2027.1</footer>
    </main>
  );
}
