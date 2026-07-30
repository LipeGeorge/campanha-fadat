import { useState } from "react";
import { AREAS, FORMATOS, MOMENTOS, MOTIVACOES } from "../data/game.js";
import { GameCard, LevelHeader, Section, ui } from "./GameUI.jsx";
import s from "./LevelDestino.module.css";

const STEPS = [
  { key: "interesse", title: "Qual área te chama?", options: AREAS },
  { key: "momento", title: "Onde você está agora?", options: MOMENTOS },
  { key: "formato", title: "Como você quer estudar?", options: FORMATOS },
  { key: "motivacao", title: "O que te move?", options: MOTIVACOES },
];

export default function LevelDestino({ profile, setProfile, onNext }) {
  const [step, setStep] = useState(0);
  const current = STEPS[step];

  const pick = (value) => {
    setProfile((p) => ({ ...p, [current.key]: value }));
    setTimeout(() => {
      if (step === STEPS.length - 1) onNext();
      else setStep((v) => v + 1);
    }, 220);
  };

  return (
    <Section>
      <LevelHeader emoji="🧭" title="Nível 2" subtitle="Escolha seu destino" />

      <div className={s.steps}>
        {STEPS.map((item, i) => (
          <div key={item.key} className={`${s.step} ${i <= step ? s.stepActive : ""}`} />
        ))}
      </div>

      <GameCard>
        <div className={s.counter}>
          Missão {step + 1}/{STEPS.length}
        </div>
        <h3 className={s.question}>{current.title}</h3>

        <div className={s.options}>
          {current.options.map((opt) => {
            const active = profile[current.key] === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => pick(opt.id)}
                className={`${s.option} ${active ? s.optionActive : ""}`}
              >
                {opt.emoji && (
                  <span className={s.emoji} aria-hidden="true">
                    {opt.emoji}
                  </span>
                )}
                <span className={s.optionLabel}>{opt.label}</span>
                <span className={s.xp}>＋10 XP</span>
              </button>
            );
          })}
        </div>
      </GameCard>

      <p className={ui.hintCenter}>
        Cada resposta monta seu perfil. O comercial da FADAT começa a conversa já te conhecendo.
      </p>
    </Section>
  );
}
