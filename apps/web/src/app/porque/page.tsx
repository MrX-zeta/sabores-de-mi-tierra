import type { Metadata } from "next";
import { Espiga } from "@/components/Espiga";

export const metadata: Metadata = {
  title: "Por qué elegirnos",
  description: "Selección artesanal, trato directo, origen regional y precio de barrio.",
};

const razones = [
  {
    titulo: "Selección artesanal",
    texto: (
      <>
        Cada semilla, queso y dulce pasa por las manos de los propietarios antes de llegar al mostrador.{" "}
        <strong>Si no lo comerían ellos, no se vende.</strong>
      </>
    ),
  },
  {
    titulo: "Trato directo",
    texto: (
      <>
        Sin intermediarios ni menús de espera: <strong>te atienden directamente los propietarios</strong>, que conocen
        cada producto y a cada cliente.
      </>
    ),
  },
  {
    titulo: "Origen regional",
    texto: (
      <>
        Trabajamos con productores de Chiapas siempre que es posible:{" "}
        <strong>comprar aquí es también apoyar a la tierra</strong> que nos da nombre.
      </>
    ),
  },
  {
    titulo: "Precio de barrio",
    texto: (
      <>
        Calidad cuidada sin precios de zona turística:{" "}
        <strong>estamos en el Santuario, no en el centro histórico</strong>, y eso se nota en tu bolsillo.
      </>
    ),
  },
];

export default function Porque() {
  return (
    <div className="v-porque">
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow eyebrow-c hero-anim d2">Por qué elegirnos</p>
          <h1 className="hero-anim d3">
            Pequeños por decisión, <em>cuidadosos por costumbre</em>
          </h1>
          <p className="lead hero-anim d4" style={{ marginInline: "auto" }}>
            Cuatro razones anotadas como en la libreta del mostrador.
          </p>
        </div>
      </section>

      <div className="wrap libreta">
        {razones.map((r, i) => (
          <div key={r.titulo} className="renglon reveal" data-delay={Math.min(i + 1, 4)}>
            <span className="renglon-marca"><Espiga /></span>
            <h3>{r.titulo}</h3>
            <p>{r.texto}</p>
          </div>
        ))}
        <p className="libreta-cierre reveal">La cuenta sale sencilla: mejor producto, mejor trato, mejor precio.</p>
      </div>
    </div>
  );
}
