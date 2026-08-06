import type { Metadata } from "next";
import { site, waLink } from "@sabores/config";
import { Espiga, IconWa } from "@/components/Espiga";

export const metadata: Metadata = {
  title: "Contacto",
  description: `Escríbenos por WhatsApp. ${site.location.neighborhood}, ${site.location.city}, ${site.location.state}.`,
};

const pasos = [
  { t: "1 · Nos escribes", d: "Nos cuentas qué necesitas por WhatsApp.", delay: 1 },
  { t: "2 · Te lo apartamos", d: "Te confirmamos qué hay y te lo guardamos.", delay: 2 },
  { t: "3 · Pasas a recogerlo", d: "Tu pedido te espera listo en la tienda.", delay: 3 },
];

export default function Contacto() {
  return (
    <div className="v-contacto">
      <div className="contacto-espigas ce-l" aria-hidden="true"><Espiga /></div>
      <div className="contacto-espigas ce-r" aria-hidden="true"><Espiga /></div>
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow eyebrow-c hero-anim d2">Contacto</p>
          <h1 className="hero-anim d3">
            Hablemos <em>directo</em>
          </h1>
          <p className="lead hero-anim d4">
            Para pedidos, apartados o cualquier duda, mándanos un WhatsApp y con gusto e atendemos.
          </p>
        </div>
      </section>
      <div className="wrap contacto-cuerpo">
        <div className="hero-anim d5">
          <a
            className="btn btn-whatsapp btn-wa-grande"
            href={waLink(site.whatsapp.messages.pedido)}
            target="_blank"
            rel="noopener"
          >
            <IconWa /> Escríbenos por WhatsApp
          </a>
        </div>
        <div className="contacto-pasos">
          {pasos.map((p) => (
            <div key={p.t} className="paso reveal" data-delay={p.delay}>
              <b>{p.t}</b>
              <span>{p.d}</span>
            </div>
          ))}
        </div>
        <div className="contacto-dir reveal" data-delay="3">
          <strong>{site.location.street}</strong>
          <span>
            {site.location.neighborhood} · {site.location.city} · {site.location.state}
          </span>
        </div>
        <section className="faq reveal" data-delay="4" aria-label="Preguntas frecuentes">
          <h2 className="faq-titulo">Preguntas <em>frecuentes</em></h2>
          <div className="faq-grid">
          <div className="faq-col">
          <details className="faq-item">
            <summary>¿Cómo hago un pedido?</summary>
            <p>
              Por ahora, de dos formas: escribiéndonos por WhatsApp para apartar lo que necesite, o visitándonos
              directamente en la tienda, en el barrio del Santuario.
            </p>
          </details>
          <details className="faq-item">
            <summary>¿Venden a granel?</summary>
            <p>Sí: semillas, granos y especias se miden a su gusto, sin empaques de más.</p>
          </details>
          <details className="faq-item">
            <summary>¿Dónde están exactamente?</summary>
            <p>
              En Calle Real del Santuario #19-D, barrio del Santuario, San Cristóbal de las Casas. Si no ubicas la
              calle, mándanos un WhatsApp y te pasamos la ubicación.
            </p>
          </details>
          </div>
          <div className="faq-col">
          <details className="faq-item">
            <summary>¿Cuál es el horario?</summary>
            <p>Abrimos de lunes a sábado, de 10 de la mañana a 8 de la noche.</p>
          </details>
          <details className="faq-item">
            <summary>¿Aceptan pagos con tarjeta?</summary>
            <p>Por el momento solo manejamos efectivo.</p>
          </details>
          <details className="faq-item">
            <summary>¿Hacen entregas a domicilio?</summary>
            <p>Aún no: hoy tu pedido te espera en la tienda. Pero viene en camino junto con la venta en línea…</p>
          </details>
          <details className="faq-item">
            <summary>¿Puedo comprar en línea?</summary>
            <p>
              Todavía no — pero es lo siguiente en la lista, y está más cerca de lo que parece. Mientras tanto,
              WhatsApp es el camino directo.
            </p>
          </details>
          </div>
          </div>
        </section>
        <p className="contacto-nota reveal" data-delay="4">Aquí te esperamos. Pregunta sin compromiso.</p>
      </div>
    </div>
  );
}
