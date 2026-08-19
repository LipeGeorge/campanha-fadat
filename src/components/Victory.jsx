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
  const [count, setCount] = useState(10);

  useEffect(() => {
    const exportCsv = () => {
      const rows = [
        ["Nome", "WhatsApp", "Cidade", "Depoimentos no WhatsApp", "Vocação"],
        [
          profile.nome,
          profile.whatsapp,
          profile.cidade,
          profile.depoimentosWhatsapp ? "Sim" : "Não",
          vocacao ? `${vocacao.emoji} ${vocacao.label}` : "",
        ],
      ];

      const csv = rows
        .map((row) => row.map((cell) => `"${String(cell ?? "").replace(/"/g, '""')}"`).join(","))
        .join("\n");

      if (typeof window === "undefined") return;

      const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `fadat-station-${(profile.nome || "perfil").toLowerCase().replace(/\s+/g, "-")}.csv`;
      link.style.display = "none";
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
    };

    exportCsv();
  }, [profile.nome, profile.whatsapp, profile.cidade, profile.depoimentosWhatsapp, vocacao]);

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
