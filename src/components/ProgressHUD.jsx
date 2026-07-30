import { LEVEL_LABELS } from "../data/game.js";
import s from "./ProgressHUD.module.css";

export default function ProgressHUD({ xp, stage, sound, onToggleSound }) {
  return (
    <div className={s.hud}>
      <div className={s.inner}>
        <div className={s.label}>{LEVEL_LABELS[stage] ?? "FADAT"}</div>
        <div
          className={s.bar}
          role="progressbar"
          aria-valuenow={xp}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Progresso da missão"
        >
          <div className={s.fill} style={{ width: `${xp}%` }} />
        </div>
        <div className={s.pct}>{xp}%</div>
        <button
          type="button"
          className={s.sound}
          onClick={onToggleSound}
          aria-label={sound ? "Desligar som" : "Ligar som"}
        >
          {sound ? "♪ ON" : "♪ OFF"}
        </button>
      </div>
    </div>
  );
}
