import type { Metadata } from "next";
import { IconoEscogidos, IconoTrato, IconoOrigen, IconoFresco } from "@/components/IconosPorque";

export const metadata: Metadata = {
  title: "Por qué elegirnos",
  description: "Productos escogidos, atención de los propietarios y todo fresco.",
};

const razones = [
  {
    icono: <IconoEscogidos />,
    titulo: "Productos escogidos",
    texto: (
      <>
        Cada semilla, queso y dulce pasa por las manos de los propietarios antes de llegar al mostrador.{" "}
        <strong>Si no lo comerían ellos, no se vende.</strong>
      </>
    ),
  },
  {
    icono: <IconoTrato />,
    titulo: "Trato directo",
    texto: (
      <>
        Sin intermediarios ni respuestas automáticas: <strong>te atienden directamente los propietarios</strong>, que conocen
        cada producto y a cada cliente.
      </>
    ),
  },
  {
    icono: <IconoOrigen />,
    titulo: "Hecho aquí cerca",
    texto: (
      <>
        Buena parte de lo que vendemos se produce aquí cerca:{" "}
        <strong>comprarlo deja el dinero en Chiapas</strong>, no en una bodega lejana.
      </>
    ),
  },
  {
    icono: <IconoFresco />,
    titulo: "Todo fresco",
    texto: (
      <>
        Semillas y quesos que se venden rápido y se reponen seguido:{" "}
        <strong>lo que te llevas no lleva meses en un anaquel.</strong>
      </>
    ),
  },
];

export default function Porque() {
  return (
    <div className="v-porque">
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow eyebrow-c hero-anim d2">Nuestras razones</p>
          <h1 className="hero-anim d3">
            Cuatro razones <em>para comprar aquí</em>
          </h1>
          <p className="lead hero-anim d4" style={{ marginInline: "auto" }}>
            Las mismas que te darían nuestros clientes.
          </p>
        </div>
      </section>

      <div className="wrap libreta">
        {razones.map((r, i) => (
          <div key={r.titulo} className="renglon reveal" data-delay={Math.min(i + 1, 4)}>
            <span className="renglon-marca">{r.icono}</span>
            <h3>{r.titulo}</h3>
            <p>{r.texto}</p>
          </div>
        ))}
        <p className="libreta-cierre reveal">Ven a la tienda o mándanos un WhatsApp, y compruébalo.</p>
      </div>
    </div>
  );
}