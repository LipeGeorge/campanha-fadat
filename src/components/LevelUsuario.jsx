import { GameCard, LevelHeader, PrimaryBtn, Section, ui } from "./GameUI.jsx";
import s from "./LevelUsuario.module.css";

export default function LevelUsuario({ profile, setProfile, onNext }) {
  const ok = profile.nome.trim().length >= 2;

  return (
    <Section>
      <LevelHeader emoji="🕹️" title="Nível 1" subtitle="Criar usuário" />

      <GameCard>
        <label htmlFor="nome" className={s.prompt}>
          {"> qual é seu nome, jogador?"}
        </label>
        <input
          id="nome"
          autoFocus
          value={profile.nome}
          onChange={(e) => setProfile((p) => ({ ...p, nome: e.target.value }))}
          placeholder="Digite seu nome"
          className={`${ui.input} ${s.bigInput}`}
        />

        {profile.nome.trim() && (
          <div className={s.confirm}>
            <div>Perfil criado com sucesso.</div>
            <div>Bem-vindo(a), {profile.nome.trim().split(" ")[0]}.</div>
            <div>Nível 1 desbloqueado.</div>
          </div>
        )}
      </GameCard>

      <PrimaryBtn onClick={onNext} disabled={!ok}>
        Avançar →
      </PrimaryBtn>
    </Section>
  );
}
