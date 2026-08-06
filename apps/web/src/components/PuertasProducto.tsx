import Link from "next/link";
import { Espiga, IconFlecha } from "./Espiga";

type Puerta = {
  letrero: string;
  icono: string;
  chips: string[];
  nota: string;
  delay: 1 | 2 | 3;
};

const puertas: Puerta[] = [
  {
    letrero: "Semillas",
    icono: "#ico-semillas",
    chips: ["Almendras", "Nueces", "Pistaches", "Quinoa"],
    nota: "A granel y al peso que pidas: te llevas justo lo que necesitas.",
    delay: 1,
  },
  {
    letrero: "Lácteos",
    icono: "#ico-lacteos",
    chips: ["Quesillo", "Asadero", "Crema"],
    nota: "Quesos, crema y mantequilla frescos, de productores cercanos.",
    delay: 2,
  },
  {
    letrero: "Dulces",
    icono: "#ico-dulces",
    chips: ["Gomitas", "Chocolate artesanal", "Cacahuates"],
    nota: "Gomitas, especias y garbanzos enchilados para el antojo de la tarde.",
    delay: 3,
  },
];

export default function PuertasProducto() {
  return (
    <section className="explora">
      <div className="wrap">
        <div className="explora-head">
          <p className="eyebrow eyebrow-c reveal">Asómate a la tienda</p>
          <h2 className="reveal" data-delay="1">
            Abre las puertas, <em>mira lo que hay</em>
          </h2>
          <p className="lead reveal" data-delay="2">
            Semillas, lácteos y dulces: esto es lo que encuentras al entrar.
          </p>
        </div>
        <div className="puertas">
          {puertas.map((p) => (
            <Link
              key={p.letrero}
              className="puerta reveal"
              data-delay={p.delay}
              href="/productos"
              aria-label={`${p.letrero}, ver en productos`}
            >
              <span className="puerta-letrero"><Espiga /> {p.letrero}</span>
              <span className="puerta-escena" aria-hidden="true">
                <span className="puerta-interior">
                  <svg viewBox="0 0 48 48"><use href={p.icono} /></svg>
                  <ul className="puerta-chips">
                    {p.chips.map((c) => <li key={c}>{c}</li>)}
                  </ul>
                </span>
                <span className="puerta-hoja izq" />
                <span className="puerta-hoja der" />
              </span>
              <p className="puerta-nota">{p.nota}</p>
              <span className="puerta-cta">Ver en la tienda <IconFlecha className="flecha" /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
