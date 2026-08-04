import { maskPhone } from "../data/game.js";
import { Field, GameCard, LevelHeader, PrimaryBtn, Section, ui } from "./GameUI.jsx";
import s from "./LevelCadastro.module.css";

export default function LevelCadastro({ profile, setProfile, onNext }) {
  const ok =
    profile.nome.trim().length >= 2 &&
    profile.whatsapp.replace(/\D/g, "").length >= 10 &&
    profile.cidade.trim().length >= 2 &&
    profile.depoimentosWhatsapp !== null;

  const set = (key) => (e) => setProfile((p) => ({ ...p, [key]: e.target.value }));

  return (
    <Section>
      <LevelHeader emoji="🕹️" title="Nível 0" subtitle="Criar usuário" />

      <p className={ui.hint}>
        Antes de começar, monte seu <span className={ui.accent}>perfil de jogador</span>.
      </p>

      <GameCard>
        <div className={s.fields}>
          <Field label="Nome">
            <input
              autoFocus
              value={profile.nome}
              onChange={set("nome")}
              placeholder="Digite seu nome"
              maxLength={80}
              className={ui.input}
            />
          </Field>
          <Field label="WhatsApp">
            <input
              value={profile.whatsapp}
              onChange={(e) => setProfile((p) => ({ ...p, whatsapp: maskPhone(e.target.value) }))}
              inputMode="tel"
              placeholder="(00) 00000-0000"
              className={ui.input}
            />
          </Field>
          <Field label="Cidade">
            <input
              value={profile.cidade}
              onChange={set("cidade")}
              placeholder="Sua cidade"
              maxLength={60}
              className={ui.input}
            />
          </Field>
        </div>

        <div className={s.optin}>
          <div className={s.optinLabel}>
            Quer receber os depoimentos de quem já é FADAT no seu WhatsApp?
          </div>
          <div className={s.optinRow}>
            {[
              { v: true, label: "Sim, quero receber" },
              { v: false, label: "Agora não" },
            ].map((o) => (
              <button
                key={String(o.v)}
                type="button"
                onClick={() => setProfile((p) => ({ ...p, depoimentosWhatsapp: o.v }))}
                className={`${s.optinBtn} ${profile.depoimentosWhatsapp === o.v ? s.optinActive : ""}`}
              >
                {o.label}
              </button>
            ))}
          </div>
        </div>

        {profile.nome.trim() && (
          <div className={s.confirm}>
            <div>Perfil criado com sucesso.</div>
            <div>Bem-vindo(a), {profile.nome.trim().split(" ")[0]}.</div>
          </div>
        )}
      </GameCard>

      <PrimaryBtn onClick={onNext} disabled={!ok}>
        Começar missões →
      </PrimaryBtn>
    </Section>
  );
}
