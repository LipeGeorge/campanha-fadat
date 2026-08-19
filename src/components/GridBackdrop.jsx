import s from "./GridBackdrop.module.css";

export default function GridBackdrop() {
  return (
    <>
      <div aria-hidden="true" className={s.grid} />
      <div aria-hidden="true" className={s.smoke} />
      <div aria-hidden="true" className={s.smokeAlt} />
      <div aria-hidden="true" className={s.scan} />
    </>
  );
}
