import { useEffect, useState } from "react";
import { CAMPANHA } from "../data/game.js";
import { ChipLabel, PrimaryBtn, ui } from "./GameUI.jsx";
import s from "./BootScreen.module.css";

const SCRIPT = [
  "> initializing FADAT.STATION_2027.1",
  "> verifying academic passport...",
  "> unlocking your mission path...",
  "> ready for launch.",
];

export default function BootScreen({ onStart }) {
  const [lines, setLines] = useState([]);

  useEffect(() => {
    setLines([]);
    let i = 0;
    const t = setInterval(() => {
      i += 1;
      setLines(SCRIPT.slice(0, i));
      if (i >= SCRIPT.length) clearInterval(t);
    }, 450);
    return () => clearInterval(t);
  }, []);

  return (
    <section className={s.boot}>
      <div className={s.top}>
        <div>
          <ChipLabel>{CAMPANHA}</ChipLabel>
        </div>

        <h1 className={s.title}>
          Bem-vindo à
          <br />
          <span className={ui.gradientText}>FADAT Station</span>
        </h1>

        <p className={s.lead}>
          Antes do embarque, precisamos emitir seu Passaporte Acadêmico. Ele será utilizado para
          registrar sua jornada e desbloquear sua missão.
        </p>

        <div className={s.terminal}>
          {lines.map((line, i) => (
            <div key={i} className={s.line}>
              {line}
            </div>
          ))}
          <span className={s.cursor}>▊</span>
        </div>
      </div>

      <div className={s.bottom}>
        <PrimaryBtn onClick={onStart}>▶ Iniciar embarque</PrimaryBtn>
        <p className={s.tap}>Toque para começar</p>
      </div>
    </section>
  );
}
