import { useRef } from "react";
import { CAMPANHA } from "../data/game.js";
import { GameCard, LevelHeader, PrimaryBtn, Section, ui } from "./GameUI.jsx";
import s from "./LevelVocacao.module.css";

export default function LevelVocacao({ vocacao, profile, onFinish }) {
  const submitting = useRef(false);

  const submit = () => {
    if (submitting.current) return;
    submitting.current = true;
    onFinish();
  };

  return (
    <Section>
      <LevelHeader emoji="🎓" title="Boss Final" subtitle="Sua vocação" />

      <GameCard>
        <div className={s.kicker}>Vocação revelada</div>
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

      <GameCard tight>
        <p className={s.next}>
          {profile.nome.trim().split(" ")[0] || "Jogador"}, o próximo passo é o Vestibular FADAT{" "}
          <span className={ui.accent}>2027.1</span>.
        </p>
      </GameCard>

      <PrimaryBtn onClick={submit}>{CAMPANHA}</PrimaryBtn>

      <p className={s.legal}>Ao enviar, você concorda com nossa Política de Privacidade.</p>
    </Section>
  );
}
