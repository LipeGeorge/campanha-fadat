import { useEffect, useState } from "react";
import { CAMPANHA } from "../data/game.js";
import { ChipLabel, PrimaryBtn, ui } from "./GameUI.jsx";
import s from "./BootScreen.module.css";

const SCRIPT = [
  "> booting FADAT.STATION_2027.1",
  "> loading vestibular_module...",
  "> conectando com seu futuro...",
  "> pronto.",
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
          Se torne quem
          <br />
          <span className={ui.gradientText}>você nasceu pra ser!</span>
        </h1>

        <p className={s.lead}>
          Sete missões pra descobrir sua vocação e o curso que combina com quem você é.
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
        <PrimaryBtn onClick={onStart}>▶ Iniciar missão</PrimaryBtn>
        <p className={s.tap}>Toque para começar</p>
      </div>
    </section>
  );
}
