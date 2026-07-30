import s from "./GameUI.module.css";

export function ChipLabel({ children }) {
  return (
    <div className={s.chip}>
      <span className={s.chipDot} />
      {children}
    </div>
  );
}

export function GameCard({ children, tight = false, className = "" }) {
  return (
    <div className={`${s.card} ${tight ? s.cardTight : ""} ${className}`.trim()}>
      {children}
    </div>
  );
}

export function PrimaryBtn({ children, onClick, disabled, variant = "solid" }) {
  const variantClass = variant === "solid" ? s.btnSolid : s.btnOutline;
  return (
    <button type="button" onClick={onClick} disabled={disabled} className={`${s.btn} ${variantClass}`}>
      {children}
    </button>
  );
}

export function LevelHeader({ emoji, title, subtitle }) {
  return (
    <header className={s.levelHeader}>
      <div className={s.levelKicker}>{title}</div>
      <h2 className={s.levelTitle}>
        <span aria-hidden="true">{emoji}</span> {subtitle}
      </h2>
    </header>
  );
}

export function Field({ label, children }) {
  return (
    <label className={s.field}>
      <span className={s.fieldLabel}>{label}</span>
      {children}
    </label>
  );
}

export function Section({ children }) {
  return <section className={s.section}>{children}</section>;
}

export { s as ui };
