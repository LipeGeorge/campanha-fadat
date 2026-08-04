import { useEffect, useState } from "react";
import { CAMPANHA } from "../data/game.js";
import { GameCard, PrimaryBtn, ui } from "./GameUI.jsx";
import s from "./Victory.module.css";

function Row({ label, value }) {
  return (
    <div className={s.row}>
      <dt className={s.key}>{label}</dt>
      <dd className={s.value}>{value || "—"}</dd>
    </div>
  );
}

export default function Victory({ profile, vocacao, onRestart }) {
  const [count, setCount] = useState(30);

  useEffect(() => {
    if (!onRestart) return undefined;
    const t = setInterval(() => setCount((c) => c - 1), 1000);
    return () => clearInterval(t);
  }, [onRestart]);

  useEffect(() => {
    if (onRestart && count <= 0) onRestart();
  }, [count, onRestart]);

  return (
    <section className={s.victory}>
      <div className={s.trophy} aria-hidden="true">
        🏆
      </div>

      <div>
        <div className={s.kicker}>{CAMPANHA}</div>
        <h2 className={s.title}>
          Bem-vindo(a) à FADAT,
          <br />
          <span className={ui.gradientText}>{profile.nome.trim().split(" ")[0] || "jogador"}.</span>
        </h2>
      </div>

      <GameCard>
        <div className={s.cardLabel}>· Seu perfil FADAT</div>
        <dl className={s.list}>
          <Row label="Nome" value={profile.nome} />
          <Row label="Vocação" value={vocacao ? `${vocacao.emoji} ${vocacao.label}` : ""} />
          <Row label="Cidade" value={profile.cidade} />
          <Row label="WhatsApp" value={profile.whatsapp} />
          <Row
            label="Depoimentos no WhatsApp"
            value={profile.depoimentosWhatsapp ? "Sim, quero receber" : "Agora não"}
          />
        </dl>
      </GameCard>

      <p className={s.note}>
        Nosso time entrará em contato via WhatsApp para dar prosseguimento à sua jornada.
      </p>

      <div className={s.sign}>Daqui pra frente, é FADAT.</div>

      {onRestart && (
        <>
          <PrimaryBtn variant="outline" onClick={onRestart}>
            ▶ Liberar totem para o próximo
          </PrimaryBtn>
          <p className={s.note}>Reiniciando automaticamente em {Math.max(count, 0)}s</p>
        </>
      )}
    </section>
  );
}
