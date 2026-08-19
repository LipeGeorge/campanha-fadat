import { useEffect, useState } from "react";
import { DESAFIOS } from "../data/game.js";
import { GameCard, LevelHeader, PrimaryBtn, Section, ui } from "./GameUI.jsx";
import s from "./LevelDesafios.module.css";

export default function LevelDesafios({ onNext }) {
  const [unlocked, setUnlocked] = useState(0);

  useEffect(() => {
    if (unlocked >= DESAFIOS.length) return undefined;
    const t = setTimeout(() => setUnlocked((u) => u + 1), 700);
    return () => clearTimeout(t);
  }, [unlocked]);

  const complete = unlocked >= DESAFIOS.length;

  return (
    <Section>
      <LevelHeader emoji="🌍" title="Estação 03" subtitle="Explore os cursos" />

      <p className={ui.hint}>
        Cada diferencial da FADAT aparece como uma <span className={ui.accent}>experiência que
        te aproximará do seu futuro</span>.
      </p>

      <GameCard>
        <div className={s.list}>
          {DESAFIOS.map((d, i) => {
            const done = i < unlocked;
            return (
              <div key={d.label} className={`${s.row} ${done ? s.rowDone : ""}`}>
                <span className={s.left}>
                  <span className={done ? s.markDone : s.mark}>{done ? "✓" : "◌"}</span>
                  {d.label}
                </span>
                <span className={done ? s.gainDone : s.gain}>+{d.xp} XP</span>
              </div>
            );
          })}
        </div>
      </GameCard>

      <PrimaryBtn onClick={onNext} disabled={!complete}>
        {complete ? "Continuar →" : "Carregando conquistas..."}
      </PrimaryBtn>
    </Section>
  );
}
