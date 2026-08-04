import { CAMPANHA } from "../data/game.js";
import { GameCard, ui } from "./GameUI.jsx";
import s from "./Victory.module.css";

function Row({ label, value }) {
  return (
    <div className={s.row}>
      <dt className={s.key}>{label}</dt>
      <dd className={s.value}>{value || "—"}</dd>
    </div>
  );
}

export default function Victory({ profile, vocacao }) {
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
    </section>
  );
}
