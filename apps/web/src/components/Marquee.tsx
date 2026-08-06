import { Fragment } from "react";
import { Espiga } from "./Espiga";

const items = ["Semillas", "Lácteos", "Congelados", "Gomitas", "Frutos secos", "Productos regionales"];

function Grupo() {
  return (
    <div className="marquee-grupo">
      {items.map((it) => (
        <Fragment key={it}>
          <span>{it}</span>
          <Espiga />
        </Fragment>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        <Grupo />
        <Grupo />
      </div>
    </div>
  );
}
