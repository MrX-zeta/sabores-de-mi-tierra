import type { Metadata } from "next";
import { familias } from "@/data/productos";
import { Espiga } from "@/components/Espiga";

export const metadata: Metadata = {
  title: "Productos",
  description:
    "Semillas y frutos secos a granel, granos, especias regionales, lácteos y dulces tradicionales.",
};

export default function Productos() {
  return (
    <div className="v-productos">
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow eyebrow-c hero-anim d2">Qué vendemos</p>
          <h1 className="hero-anim d3">
            Lo que encontrarás <em>en la tienda</em>
          </h1>
          <p className="lead hero-anim d4" style={{ marginInline: "auto" }}>
            Cuatro familias de productos, una misma promesa: frescura, origen y precio justo.
          </p>
        </div>
      </section>

      <div className="wrap prod-grid">
        {familias.map((f, i) => (
          <article key={f.id} className="card reveal" data-delay={Math.min(i + 1, 4)}>
            <div className="card-icono">
              <svg viewBox="0 0 48 48" aria-hidden="true"><use href={f.icono} /></svg>
            </div>
            <h3>{f.titulo}</h3>
            <p>{f.texto}</p>
            <ul className="card-lista">
              {f.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
        ))}
      </div>

      <div className="granel-nota reveal">
        <p className="granel-titulo">
          <Espiga /> Y mucho más <Espiga />
        </p>
        <p className="granel-sub">
          ¿Buscas algo en especial? Pregúntanos por WhatsApp: si no lo tenemos, te decimos cuándo llega.
        </p>
      </div>
    </div>
  );
}