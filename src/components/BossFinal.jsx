import { useRef } from "react";
import { maskPhone } from "../data/game.js";
import { Field, GameCard, LevelHeader, PrimaryBtn, Section, ui } from "./GameUI.jsx";
import s from "./BossFinal.module.css";

export default function BossFinal({ profile, setProfile, onFinish }) {
  const submitting = useRef(false);

  const canSubmit =
    profile.whatsapp.replace(/\D/g, "").length >= 10 && profile.cidade.trim().length >= 2;

  const submit = () => {
    if (!canSubmit || submitting.current) return;
    submitting.current = true;
    onFinish();
  };

  return (
    <Section>
      <LevelHeader emoji="🎓" title="Boss Final" subtitle="Missão final" />

      <GameCard>
        <div className={s.kicker}>MISSÃO FINAL</div>
        <h2 className={s.title}>
          Vestibular FADAT
          <br />
          <span className={ui.accent}>2027.1</span>
        </h2>
        <p className={s.sub}>Você está preparado(a)?</p>

        <div className={s.fields}>
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
              onChange={(e) => setProfile((p) => ({ ...p, cidade: e.target.value }))}
              placeholder="Sua cidade"
              className={ui.input}
            />
          </Field>
        </div>
      </GameCard>

      <PrimaryBtn onClick={submit} disabled={!canSubmit}>
        [ Quero me inscrever ]
      </PrimaryBtn>

      <p className={s.legal}>Ao enviar, você concorda com nossa Política de Privacidade.</p>
    </Section>
  );
}
