import { useState } from "react";
import { MISSOES } from "../data/game.js";
import { GameCard, LevelHeader, Section, ui } from "./GameUI.jsx";
import s from "./LevelMissoes.module.css";

export default function LevelMissoes({ respostas, setRespostas, onNext }) {
  const [step, setStep] = useState(0);
  const missao = MISSOES[step];

  const pick = (optionId) => {
    setRespostas((r) => ({ ...r, [missao.id]: optionId }));
    setTimeout(() => {
      if (step === MISSOES.length - 1) onNext();
      else setStep((v) => v + 1);
    }, 220);
  };

  return (
    <Section>
      <LevelHeader emoji="🧩" title={`Missão ${step + 1}`} subtitle={missao.titulo} />

      <div className={s.steps}>
        {MISSOES.map((m, i) => (
          <div key={m.id} className={`${s.step} ${i <= step ? s.stepActive : ""}`} />
        ))}
      </div>

      <GameCard>
        <div className={s.counter}>
          Missão {step + 1}/{MISSOES.length}
        </div>
        <h3 className={s.question}>{missao.pergunta}</h3>

        <div className={s.options}>
          {missao.options.map((opt) => {
            const active = respostas[missao.id] === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => pick(opt.id)}
                className={`${s.option} ${active ? s.optionActive : ""}`}
              >
                <span className={s.emoji} aria-hidden="true">
                  {opt.emoji}
                </span>
                <span className={s.optionBody}>
                  <span className={s.optionLabel}>{opt.label}</span>
                  {opt.hint && <span className={s.optionHint}>{opt.hint}</span>}
                </span>
                <span className={s.xp}>＋10 XP</span>
              </button>
            );
          })}
        </div>
      </GameCard>

      <p className={ui.hintCenter}>
        Cada resposta revela um pedaço da sua <span className={ui.accent}>vocação</span>.
      </p>
    </Section>
  );
}
