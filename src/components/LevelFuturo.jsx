import { CONQUISTAS } from "../data/game.js";
import { GameCard, LevelHeader, PrimaryBtn, Section, ui } from "./GameUI.jsx";
import s from "./LevelFuturo.module.css";

export default function LevelFuturo({ onNext, profile }) {
  const items = [
    ...CONQUISTAS,
  ];

  const depoimentosStatus = profile?.depoimentosWhatsapp ? "desbloqueado" : "bloqueado";

  const mapped = items.map((c, i) => {
    if (c.title === "Depoimentos") {
      return {
        ...c,
        status: depoimentosStatus,
        order: i + 1,
      };
    }

    return {
      ...c,
      status: "desbloqueado",
      order: i + 1,
    };
  });

  return (
    <Section>
      <LevelHeader emoji="🤝" title="Estação 05" subtitle="Conecte-se ao mercado" />

      <p className={ui.hint}>
        Cada seção é uma <span className={ui.accent}>conquista de quem já vive o espírito FADAT</span>.
      </p>

      <div className={s.grid}>
        {mapped.map((c, i) => (
          <GameCard key={c.title} tight>
            <div className={s.item}>
              <div className={s.icon} aria-hidden="true">
                {c.icon}
              </div>
              <div className={s.body}>
                <div className={s.top}>
                  <h4 className={s.name}>{c.title}</h4>
                  <span className={s.badge}>· {c.status}</span>
                </div>
                <p className={s.desc}>{c.desc}</p>
              </div>
              <span className={s.index}>0{c.order}</span>
            </div>
          </GameCard>
        ))}
      </div>

      <PrimaryBtn onClick={onNext}>Revelar minha vocação →</PrimaryBtn>
    </Section>
  );
}
