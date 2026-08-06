import type { Metadata } from "next";
import { Espiga } from "@/components/Espiga";

export const metadata: Metadata = {
  title: "Productos",
  description: "Semillas y granos a granel, lácteos de la región y dulces tradicionales.",
};

const familias = [
  {
    icono: "#ico-semillas",
    titulo: "Semillas y granos",
    texto: "La base de la cocina de casa, medida a tu gusto y sin empaques de más.",
    items: ["Frijol", "Maíz", "Arroz", "Lenteja", "Garbanzo", "Y más a granel"],
    delay: 1,
  },
  {
    icono: "#ico-lacteos",
    titulo: "Lácteos",
    texto: "Frescos y de productores de la región, con el sabor de lo hecho cerca de casa.",
    items: ["Quesos", "Crema", "Frescos del día", "De la región"],
    delay: 2,
  },
  {
    icono: "#ico-dulces",
    titulo: "Dulces tradicionales",
    texto: "Los antojos de toda la vida, de esos que saben a recuerdo.",
    items: ["Grageas", "Gomitas", "Garbanzos enchilados", "Y más antojos"],
    delay: 3,
  },
];

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
            Tres familias de productos, una misma promesa: frescura, origen y precio justo.
          </p>
        </div>
      </section>

      <div className="wrap prod-grid">
        {familias.map((f) => (
          <article key={f.titulo} className="card reveal" data-delay={f.delay}>
            <div className="card-icono">
              <svg viewBox="0 0 48 48" aria-hidden="true"><use href={f.icono} /></svg>
            </div>
            <h3>{f.titulo}</h3>
            <p>{f.texto}</p>
            <ul className="card-lista">
              {f.items.map((i) => <li key={i}>{i}</li>)}
            </ul>
          </article>
        ))}
      </div>

      <div className="granel-nota reveal">
        <p className="granel-nota-int">
          <Espiga />
          ¿Buscas algo en especial? Pregúntanos por WhatsApp: si no lo tenemos, te decimos cuándo llega.
          <Espiga />
        </p>
      </div>
    </div>
  );
}
