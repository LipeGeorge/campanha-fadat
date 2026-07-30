import { CONQUISTAS } from "../data/game.js";
import { GameCard, LevelHeader, PrimaryBtn, Section, ui } from "./GameUI.jsx";
import s from "./LevelFuturo.module.css";

export default function LevelFuturo({ onNext }) {
  return (
    <Section>
      <LevelHeader emoji="🏆" title="Nível 4" subtitle="Desbloqueie seu futuro" />

      <p className={ui.hint}>
        Cada seção é uma <span className={ui.accent}>conquista desbloqueada</span> por quem já é FADAT.
      </p>

      <div className={s.grid}>
        {CONQUISTAS.map((c, i) => (
          <GameCard key={c.title} tight>
            <div className={s.item}>
              <div className={s.icon} aria-hidden="true">
                {c.icon}
              </div>
              <div className={s.body}>
                <div className={s.top}>
                  <h4 className={s.name}>{c.title}</h4>
                  <span className={s.badge}>· desbloqueado</span>
                </div>
                <p className={s.desc}>{c.desc}</p>
              </div>
              <span className={s.index}>0{i + 1}</span>
            </div>
          </GameCard>
        ))}
      </div>

      <PrimaryBtn onClick={onNext}>Encarar o boss final →</PrimaryBtn>
    </Section>
  );
}
