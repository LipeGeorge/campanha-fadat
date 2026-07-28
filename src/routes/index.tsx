import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

/* ============================================================
   FADAT STATION 2027.1 — Gamified landing (mobile-first / totem)
   ============================================================ */

type Profile = {
  nome: string;
  whatsapp: string;
  cidade: string;
  interesse: string;
  momento: string;
  formato: string;
  motivacao: string;
};

const initialProfile: Profile = {
  nome: "",
  whatsapp: "",
  cidade: "",
  interesse: "",
  momento: "",
  formato: "",
  motivacao: "",
};

const AREAS = [
  { id: "saude", label: "Saúde & Bem-estar", emoji: "🩺" },
  { id: "negocios", label: "Negócios & Gestão", emoji: "📈" },
  { id: "tech", label: "Tecnologia & Dados", emoji: "💻" },
  { id: "direito", label: "Direito & Sociedade", emoji: "⚖️" },
  { id: "educacao", label: "Educação & Humanas", emoji: "📚" },
  { id: "eng", label: "Engenharias", emoji: "🛠️" },
];

const MOMENTOS = [
  { id: "3ano", label: "Estou no 3º ano do Ensino Médio" },
  { id: "concluido", label: "Já concluí o Ensino Médio" },
  { id: "trabalho", label: "Trabalho e quero crescer" },
  { id: "retorno", label: "Vou retomar os estudos" },
];

const FORMATOS = [
  { id: "presencial", label: "Presencial", emoji: "🏫" },
  { id: "noturno", label: "Noturno", emoji: "🌙" },
  { id: "hibrido", label: "Híbrido", emoji: "🔀" },
];

const MOTIVACOES = [
  { id: "carreira", label: "Crescer na carreira" },
  { id: "renda", label: "Aumentar minha renda" },
  { id: "proposito", label: "Encontrar propósito" },
  { id: "familia", label: "Orgulho da família" },
];

const DESAFIOS = [
  { label: "Professores especialistas", xp: 100 },
  { label: "Experiência prática", xp: 250 },
  { label: "Conexão com empresas", xp: 500 },
];

const CONQUISTAS = [
  { icon: "🎤", title: "Depoimentos", desc: "Histórias reais de quem já é FADAT." },
  { icon: "🚀", title: "Projetos", desc: "Do primeiro semestre ao mercado." },
  { icon: "🎓", title: "FADAT Experience", desc: "Imersão viva no campus." },
  { icon: "🔬", title: "Laboratórios", desc: "Estrutura pra colocar a mão na massa." },
  { icon: "🤝", title: "Empresas parceiras", desc: "Rede que abre portas de verdade." },
];

function Index() {
  const [stage, setStage] = useState<"boot" | "level1" | "level2" | "level3" | "level4" | "boss" | "done">("boot");
  const [profile, setProfile] = useState<Profile>(initialProfile);
  const [sound, setSound] = useState(false);

  const totalXP = useMemo(() => {
    const filled = Object.values(profile).filter(Boolean).length;
    const base = { boot: 0, level1: 10, level2: 30, level3: 55, level4: 80, boss: 95, done: 100 }[stage];
    return Math.min(100, base + filled * 1);
  }, [stage, profile]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground scanline"
          style={{ backgroundImage: "var(--gradient-hero)" }}>
      <GridBackdrop />
      {stage !== "boot" && <ProgressHUD xp={totalXP} stage={stage} sound={sound} setSound={setSound} />}

      <div className="relative z-10 mx-auto flex min-h-screen max-w-md flex-col px-5 pb-16 pt-6">
        {stage === "boot" && <BootScreen onStart={() => setStage("level1")} />}
        {stage === "level1" && (
          <Level1
            profile={profile}
            setProfile={setProfile}
            onNext={() => setStage("level2")}
          />
        )}
        {stage === "level2" && (
          <Level2
            profile={profile}
            setProfile={setProfile}
            onNext={() => setStage("level3")}
          />
        )}
        {stage === "level3" && <Level3 onNext={() => setStage("level4")} />}
        {stage === "level4" && <Level4 onNext={() => setStage("boss")} />}
        {stage === "boss" && (
          <BossFinal
            profile={profile}
            setProfile={setProfile}
            onFinish={() => setStage("done")}
          />
        )}
        {stage === "done" && <Victory profile={profile} />}
      </div>

      <footer className="relative z-10 pb-6 text-center text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60">
        FADAT Station · 2027.1
      </footer>
    </main>
  );
}

/* ---------- shared UI ---------- */

function GridBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-[0.15]"
      style={{
        backgroundImage:
          "linear-gradient(oklch(0.79 0.14 82 / 0.35) 1px, transparent 1px), linear-gradient(90deg, oklch(0.79 0.14 82 / 0.35) 1px, transparent 1px)",
        backgroundSize: "44px 44px",
        maskImage: "radial-gradient(circle at 50% 30%, black, transparent 75%)",
      }}
    />
  );
}

function ProgressHUD({
  xp,
  stage,
  sound,
  setSound,
}: {
  xp: number;
  stage: string;
  sound: boolean;
  setSound: (v: boolean) => void;
}) {
  const levelLabel: Record<string, string> = {
    level1: "LV.01 · Criar usuário",
    level2: "LV.02 · Escolha seu destino",
    level3: "LV.03 · Desafios",
    level4: "LV.04 · Desbloqueie seu futuro",
    boss: "BOSS · Missão final",
    done: "COMPLETO",
  };
  return (
    <div className="sticky top-0 z-20 border-b border-border/60 bg-background/80 px-5 py-3 backdrop-blur-md">
      <div className="mx-auto flex max-w-md items-center gap-3">
        <div className="font-mono text-[10px] uppercase tracking-widest text-primary">
          {levelLabel[stage] ?? "FADAT"}
        </div>
        <div className="relative flex-1 overflow-hidden rounded-full border border-primary/30 bg-muted/40 h-2">
          <div
            className="h-full rounded-full transition-all duration-700 ease-out"
            style={{ width: `${xp}%`, background: "var(--gradient-primary)", boxShadow: "0 0 12px var(--primary)" }}
          />
        </div>
        <div className="font-mono text-[10px] tabular-nums text-muted-foreground">{xp}%</div>
        <button
          onClick={() => setSound(!sound)}
          aria-label={sound ? "Desligar som" : "Ligar som"}
          className="rounded border border-border/60 bg-secondary/60 px-2 py-1 font-mono text-[10px] text-muted-foreground hover:text-primary transition"
        >
          {sound ? "♪ ON" : "♪ OFF"}
        </button>
      </div>
    </div>
  );
}

function ChipLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
      <span className="h-1.5 w-1.5 animate-blink rounded-full bg-primary" />
      {children}
    </div>
  );
}

function GameCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative rounded-2xl border border-border bg-card/80 p-5 backdrop-blur-sm ${className}`}
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <span className="pointer-events-none absolute -left-px top-4 h-8 w-1 rounded-r bg-primary" />
      {children}
    </div>
  );
}

function PrimaryBtn({
  children,
  onClick,
  disabled,
  variant = "solid",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: "solid" | "outline";
}) {
  const base =
    "group relative w-full rounded-xl px-5 py-4 text-sm font-semibold uppercase tracking-[0.2em] transition-all active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed";
  const solid =
    "text-primary-foreground animate-pulse-glow";
  const outline =
    "border border-primary/50 bg-transparent text-primary hover:bg-primary/10";
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variant === "solid" ? solid : outline}`}
      style={variant === "solid" ? { background: "var(--gradient-primary)" } : undefined}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
}

/* ---------- BOOT / START ---------- */

function BootScreen({ onStart }: { onStart: () => void }) {
  const [lines, setLines] = useState<string[]>([]);
  const script = useMemo(
    () => [
      "> booting FADAT.STATION_2027.1",
      "> loading vestibular_module...",
      "> conectando com seu futuro...",
      "> pronto.",
    ],
    [],
  );
  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      setLines((l) => [...l, script[i]]);
      i++;
      if (i >= script.length) clearInterval(t);
    }, 450);
    return () => clearInterval(t);
  }, [script]);

  return (
    <section className="flex flex-1 flex-col justify-between pt-20">
      <div className="space-y-8">
        <ChipLabel>Fons Vitae · Vestibular 2027.1</ChipLabel>

        <h1 className="font-display text-[44px] leading-[0.95] font-bold tracking-tight">
          Daqui pra frente,
          <br />
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "var(--gradient-primary)" }}
          >
            é FADAT.
          </span>
        </h1>

        <p className="max-w-sm text-base leading-relaxed text-muted-foreground">
          Uma experiência interativa pra você descobrir o curso, a carreira e a versão de você mesmo que começa agora.
        </p>

        <div className="rounded-xl border border-border bg-card/70 p-4 font-mono text-xs text-primary/90 min-h-[128px]">
          {lines.map((l, i) => (
            <div key={i} className="opacity-90">{l}</div>
          ))}
          <span className="animate-blink text-primary">▊</span>
        </div>
      </div>

      <div className="mt-10 space-y-3">
        <PrimaryBtn onClick={onStart}>▶ Iniciar missão</PrimaryBtn>
        <p className="text-center font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground/70">
          Toque para começar
        </p>
      </div>
    </section>
  );
}

/* ---------- LEVEL 1 — Criar usuário ---------- */

function Level1({
  profile,
  setProfile,
  onNext,
}: {
  profile: Profile;
  setProfile: React.Dispatch<React.SetStateAction<Profile>>;
  onNext: () => void;
}) {
  const ok = profile.nome.trim().length >= 2;
  return (
    <section className="flex flex-1 flex-col gap-6 pt-6">
      <LevelHeader emoji="🕹️" title="Nível 1" subtitle="Criar usuário" />

      <GameCard>
        <label className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          {"> qual é seu nome, jogador?"}
        </label>
        <input
          autoFocus
          value={profile.nome}
          onChange={(e) => setProfile((p) => ({ ...p, nome: e.target.value }))}
          placeholder="Digite seu nome"
          className="w-full rounded-lg border border-border bg-muted/40 px-4 py-3 font-mono text-lg text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
        />

        {profile.nome.trim() && (
          <div className="mt-4 rounded-lg border border-primary/30 bg-primary/5 p-3 font-mono text-xs text-primary animate-fade-in">
            <div>Perfil criado com sucesso.</div>
            <div>Bem-vindo(a), {profile.nome.split(" ")[0]}.</div>
            <div>Nível 1 desbloqueado.</div>
          </div>
        )}
      </GameCard>

      <PrimaryBtn onClick={onNext} disabled={!ok}>
        Avançar →
      </PrimaryBtn>
    </section>
  );
}

/* ---------- LEVEL 2 — Escolha seu destino ---------- */

function Level2({
  profile,
  setProfile,
  onNext,
}: {
  profile: Profile;
  setProfile: React.Dispatch<React.SetStateAction<Profile>>;
  onNext: () => void;
}) {
  const [step, setStep] = useState(0);
  const steps = [
    {
      key: "interesse" as const,
      title: "Qual área te chama?",
      options: AREAS,
    },
    {
      key: "momento" as const,
      title: "Onde você está agora?",
      options: MOMENTOS,
    },
    {
      key: "formato" as const,
      title: "Como você quer estudar?",
      options: FORMATOS,
    },
    {
      key: "motivacao" as const,
      title: "O que te move?",
      options: MOTIVACOES,
    },
  ];

  const current = steps[step];

  const pick = (val: string) => {
    setProfile((p) => ({ ...p, [current.key]: val }));
    setTimeout(() => {
      if (step === steps.length - 1) onNext();
      else setStep((s) => s + 1);
    }, 220);
  };

  return (
    <section className="flex flex-1 flex-col gap-6 pt-6">
      <LevelHeader emoji="🧭" title="Nível 2" subtitle="Escolha seu destino" />

      <div className="flex gap-1">
        {steps.map((_, i) => (
          <div
            key={i}
            className={`h-1 flex-1 rounded-full transition-all ${
              i <= step ? "bg-primary" : "bg-muted"
            }`}
          />
        ))}
      </div>

      <GameCard>
        <div className="font-mono text-[10px] uppercase tracking-widest text-primary">
          Missão {step + 1}/{steps.length}
        </div>
        <h3 className="mt-2 text-2xl font-semibold">{current.title}</h3>

        <div className="mt-5 grid gap-2">
          {current.options.map((opt) => {
            const active = profile[current.key] === opt.id;
            return (
              <button
                key={opt.id}
                onClick={() => pick(opt.id)}
                className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm transition-all active:scale-[0.99] ${
                  active
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border bg-muted/30 text-foreground hover:border-primary/50 hover:bg-muted/50"
                }`}
              >
                {"emoji" in opt && (
                  <span className="text-xl">{(opt as { emoji: string }).emoji}</span>
                )}
                <span className="flex-1">{opt.label}</span>
                <span className="font-mono text-[10px] text-muted-foreground">＋10 XP</span>
              </button>
            );
          })}
        </div>
      </GameCard>

      <p className="text-center text-xs text-muted-foreground">
        Cada resposta monta seu perfil. O comercial da FADAT começa a conversa já te conhecendo.
      </p>
    </section>
  );
}

/* ---------- LEVEL 3 — Desafios ---------- */

function Level3({ onNext }: { onNext: () => void }) {
  const [unlocked, setUnlocked] = useState<number>(0);
  useEffect(() => {
    if (unlocked >= DESAFIOS.length) return;
    const t = setTimeout(() => setUnlocked((u) => u + 1), 700);
    return () => clearTimeout(t);
  }, [unlocked]);

  return (
    <section className="flex flex-1 flex-col gap-6 pt-6">
      <LevelHeader emoji="🧩" title="Nível 3" subtitle="Desafios" />

      <p className="text-sm text-muted-foreground">
        Cada diferencial da FADAT aparece como uma <span className="text-primary">missão concluída</span>.
      </p>

      <GameCard>
        <div className="space-y-3 font-mono text-sm">
          {DESAFIOS.map((d, i) => {
            const done = i < unlocked;
            return (
              <div
                key={d.label}
                className={`flex items-center justify-between rounded-lg border px-3 py-2 transition-all ${
                  done
                    ? "border-primary/40 bg-primary/5 text-foreground"
                    : "border-border bg-muted/30 text-muted-foreground/60"
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className={done ? "text-primary" : "text-muted-foreground/40"}>
                    {done ? "✓" : "◌"}
                  </span>
                  {d.label}
                </span>
                <span className={done ? "text-accent" : "text-muted-foreground/40"}>
                  +{d.xp} XP
                </span>
              </div>
            );
          })}
        </div>
      </GameCard>

      <PrimaryBtn onClick={onNext} disabled={unlocked < DESAFIOS.length}>
        {unlocked < DESAFIOS.length ? "Carregando conquistas..." : "Continuar →"}
      </PrimaryBtn>
    </section>
  );
}

/* ---------- LEVEL 4 — Desbloqueie seu futuro ---------- */

function Level4({ onNext }: { onNext: () => void }) {
  return (
    <section className="flex flex-1 flex-col gap-6 pt-6">
      <LevelHeader emoji="🏆" title="Nível 4" subtitle="Desbloqueie seu futuro" />

      <p className="text-sm text-muted-foreground">
        Cada seção é uma <span className="text-primary">conquista desbloqueada</span> por quem já é FADAT.
      </p>

      <div className="grid gap-3">
        {CONQUISTAS.map((c, i) => (
          <GameCard key={c.title} className="animate-fade-in" >
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-xl">
                {c.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">{c.title}</h4>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-primary">
                    · DESBLOQUEADO
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
              </div>
              <span className="font-mono text-[10px] text-muted-foreground">0{i + 1}</span>
            </div>
          </GameCard>
        ))}
      </div>

      <PrimaryBtn onClick={onNext}>Encarar o boss final →</PrimaryBtn>
    </section>
  );
}

/* ---------- BOSS FINAL — CTA ---------- */

function BossFinal({
  profile,
  setProfile,
  onFinish,
}: {
  profile: Profile;
  setProfile: React.Dispatch<React.SetStateAction<Profile>>;
  onFinish: () => void;
}) {
  const submitting = useRef(false);
  const canSubmit =
    profile.whatsapp.replace(/\D/g, "").length >= 10 &&
    profile.cidade.trim().length >= 2;

  const submit = () => {
    if (!canSubmit || submitting.current) return;
    submitting.current = true;
    onFinish();
  };

  const maskPhone = (v: string) => {
    const d = v.replace(/\D/g, "").slice(0, 11);
    if (d.length <= 10)
      return d.replace(/(\d{0,2})(\d{0,4})(\d{0,4}).*/, (_, a, b, c) =>
        [a && `(${a}`, a && a.length === 2 ? ") " : "", b, c && `-${c}`].filter(Boolean).join("").trim(),
      );
    return d.replace(/(\d{2})(\d{5})(\d{0,4}).*/, "($1) $2-$3");
  };

  return (
    <section className="flex flex-1 flex-col gap-6 pt-6">
      <LevelHeader emoji="🎓" title="Boss Final" subtitle="Missão final" />

      <GameCard>
        <div className="font-mono text-xs text-primary">MISSÃO FINAL</div>
        <h2 className="mt-2 text-3xl font-bold leading-tight">
          Vestibular FADAT
          <br />
          <span className="text-primary">2027.1</span>
        </h2>
        <p className="mt-3 text-sm text-muted-foreground">Você está preparado(a)?</p>

        <div className="mt-5 space-y-3">
          <Field label="WhatsApp">
            <input
              value={profile.whatsapp}
              onChange={(e) =>
                setProfile((p) => ({ ...p, whatsapp: maskPhone(e.target.value) }))
              }
              inputMode="tel"
              placeholder="(00) 00000-0000"
              className="input-game"
            />
          </Field>
          <Field label="Cidade">
            <input
              value={profile.cidade}
              onChange={(e) => setProfile((p) => ({ ...p, cidade: e.target.value }))}
              placeholder="Sua cidade"
              className="input-game"
            />
          </Field>
        </div>
      </GameCard>

      <PrimaryBtn onClick={submit} disabled={!canSubmit}>
        [ Quero me inscrever ]
      </PrimaryBtn>

      <p className="text-center text-[11px] text-muted-foreground">
        Ao enviar, você concorda com nossa Política de Privacidade.
      </p>

      <style>{`
        .input-game {
          width: 100%;
          border-radius: 0.6rem;
          border: 1px solid var(--border);
          background: color-mix(in oklab, var(--muted) 40%, transparent);
          padding: 0.75rem 1rem;
          font-family: var(--font-mono);
          font-size: 0.95rem;
          color: var(--foreground);
          outline: none;
        }
        .input-game:focus {
          border-color: var(--primary);
          box-shadow: 0 0 0 3px oklch(0.79 0.14 82 / 0.25);
        }
      `}</style>
    </section>
  );
}

/* ---------- VICTORY ---------- */

function Victory({ profile }: { profile: Profile }) {
  const area = AREAS.find((a) => a.id === profile.interesse);
  const formato = FORMATOS.find((f) => f.id === profile.formato);
  const momento = MOMENTOS.find((m) => m.id === profile.momento);
  const motivacao = MOTIVACOES.find((m) => m.id === profile.motivacao);

  return (
    <section className="flex flex-1 flex-col justify-center gap-6 py-10 text-center">
      <div className="mx-auto text-6xl">🏆</div>
      <div>
        <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
          Missão concluída
        </div>
        <h2 className="mt-2 text-3xl font-bold leading-tight">
          Bem-vindo(a) à FADAT,
          <br />
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "var(--gradient-primary)" }}
          >
            {profile.nome.split(" ")[0] || "jogador"}.
          </span>
        </h2>
      </div>

      <GameCard className="text-left">
        <div className="font-mono text-[10px] uppercase tracking-widest text-primary">
          · Seu perfil FADAT
        </div>
        <dl className="mt-3 space-y-2 font-mono text-xs">
          <Row k="Nome" v={profile.nome} />
          <Row k="Área" v={area ? `${area.emoji} ${area.label}` : "—"} />
          <Row k="Momento" v={momento?.label ?? "—"} />
          <Row k="Formato" v={formato ? `${formato.emoji} ${formato.label}` : "—"} />
          <Row k="Motivação" v={motivacao?.label ?? "—"} />
          <Row k="Cidade" v={profile.cidade} />
          <Row k="WhatsApp" v={profile.whatsapp} />
        </dl>
      </GameCard>

      <p className="text-sm text-muted-foreground">
        Nosso time vai te chamar no WhatsApp com uma conversa já personalizada — sem começar do zero.
      </p>

      <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary/70">
        Daqui pra frente, é FADAT.
      </div>
    </section>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between gap-4 border-b border-border/50 pb-1.5">
      <dt className="text-muted-foreground">{k}</dt>
      <dd className="text-right text-foreground">{v || "—"}</dd>
    </div>
  );
}

function LevelHeader({
  emoji,
  title,
  subtitle,
}: {
  emoji: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div>
      <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
        {title}
      </div>
      <h2 className="mt-1 flex items-center gap-2 text-2xl font-bold">
        <span>{emoji}</span> {subtitle}
      </h2>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}
