import Link from "next/link";
import { Espiga, IconFlecha } from "./Espiga";
import { EscenaSemillas, EscenaLacteos, EscenaDulces } from "./EscenasPuerta";

const puertas = [
  {
    letrero: "Semillas",
    escena: <EscenaSemillas />,
    nota: "A granel y al peso que pidas: te llevas justo lo que necesitas.",
    delay: 1,
  },
  {
    letrero: "Lácteos",
    escena: <EscenaLacteos />,
    nota: "Quesos, crema y mantequilla frescos, de productores cercanos.",
    delay: 2,
  },
  {
    letrero: "Dulces",
    escena: <EscenaDulces />,
    nota: "Gomitas, chocolate artesanal y cacahuates para el antojo de la tarde.",
    delay: 3,
  },
] as const;

export default function PuertasProducto() {
  return (
    <section className="explora">
      <div className="wrap">
        <div className="explora-head">
          <p className="eyebrow eyebrow-c reveal">Asómate a la tienda</p>
          <h2 className="reveal" data-delay="1">
            Lo que hay <em>detrás de estas puertas</em>
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
                <span className="puerta-interior">{p.escena}</span>
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