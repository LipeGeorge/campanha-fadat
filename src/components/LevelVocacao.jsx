import { useEffect, useRef, useState } from "react";
import { CAMPANHA } from "../data/game.js";
import { GameCard, LevelHeader, PrimaryBtn, Section, ui } from "./GameUI.jsx";
import s from "./LevelVocacao.module.css";

export default function LevelVocacao({ vocacao, profile, onFinish, onRestart, finalMode = false }) {
  const submitting = useRef(false);
  const [count, setCount] = useState(10);

  useEffect(() => {
    if (!onRestart) return undefined;
    const interval = setInterval(() => setCount((c) => Math.max(0, c - 1)), 1000);
    return () => clearInterval(interval);
  }, [onRestart]);

  useEffect(() => {
    if (onRestart && count <= 0) onRestart();
  }, [count, onRestart]);

  const submit = () => {
    if (submitting.current) return;
    submitting.current = true;
    onFinish();
  };

  return (
    <Section>
      <LevelHeader emoji="⭐" title={finalMode ? "Sua vocação" : "Estação Final"} subtitle={finalMode ? "Conquiste seu futuro" : "Sua vocação"} />

      <GameCard>
        <div className={s.kicker}>{finalMode ? "Sua área ideal" : "Vocação revelada"}</div>
        <div className={s.emoji} aria-hidden="true">
          {vocacao?.emoji ?? "🎯"}
        </div>
        <h2 className={s.title}>
          <span className={ui.gradientText}>{vocacao?.label ?? "Sua área"}</span>
        </h2>
        <p className={s.sub}>{vocacao?.desc}</p>
        {vocacao && (
          <div className={s.match}>
            {vocacao.pontos}/{vocacao.total} missões apontam para essa vocação
          </div>
        )}
      </GameCard>

      {finalMode ? (
        <>
          <PrimaryBtn onClick={onRestart}>Voltar ao início</PrimaryBtn>
          <p className={s.legal}>Retornando ao início em {count}s.</p>
        </>
      ) : (
        <>
          <PrimaryBtn onClick={submit}>🎓 Finalizar jornada</PrimaryBtn>
          <p className={s.legal}>Ao enviar, você concorda com nossa Política de Privacidade.</p>
        </>
      )}
    </Section>
  );
}
