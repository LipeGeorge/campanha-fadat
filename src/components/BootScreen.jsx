import { useEffect, useState } from "react";
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
          <ChipLabel>Fons Vitae · Vestibular 2027.1</ChipLabel>
        </div>

        <h1 className={s.title}>
          Daqui pra frente,
          <br />
          <span className={ui.gradientText}>é FADAT.</span>
        </h1>

        <p className={s.lead}>
          Uma experiência interativa pra você descobrir o curso, a carreira e a versão de você mesmo
          que começa agora.
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
