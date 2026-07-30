import { AREAS, FORMATOS, MOMENTOS, MOTIVACOES } from "../data/game.js";
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

export default function Victory({ profile }) {
  const area = AREAS.find((a) => a.id === profile.interesse);
  const formato = FORMATOS.find((f) => f.id === profile.formato);
  const momento = MOMENTOS.find((m) => m.id === profile.momento);
  const motivacao = MOTIVACOES.find((m) => m.id === profile.motivacao);

  return (
    <section className={s.victory}>
      <div className={s.trophy} aria-hidden="true">
        🏆
      </div>

      <div>
        <div className={s.kicker}>Missão concluída</div>
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
          <Row label="Área" value={area ? `${area.emoji} ${area.label}` : ""} />
          <Row label="Momento" value={momento?.label} />
          <Row label="Formato" value={formato ? `${formato.emoji} ${formato.label}` : ""} />
          <Row label="Motivação" value={motivacao?.label} />
          <Row label="Cidade" value={profile.cidade} />
          <Row label="WhatsApp" value={profile.whatsapp} />
        </dl>
      </GameCard>

      <p className={s.note}>
        Nosso time entrará em contato via WhatsApp para dar prosseguimento à sua jornada.
      </p>

      <div className={s.sign}>Daqui pra frente, é FADAT.</div>
    </section>
  );
}
