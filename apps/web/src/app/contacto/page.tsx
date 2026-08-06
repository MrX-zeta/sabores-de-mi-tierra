import type { Metadata } from "next";
import { site, waLink } from "@sabores/config";
import { Espiga, IconWa } from "@/components/Espiga";

export const metadata: Metadata = {
  title: "Contacto",
  description: `Escríbenos por WhatsApp. ${site.location.neighborhood}, ${site.location.city}, ${site.location.state}.`,
};

const pasos = [
  { t: "1 · Escribe", d: "Cuéntanos qué se te antoja o qué necesitas.", delay: 1 },
  { t: "2 · Apartamos", d: "Te confirmamos qué hay y te lo guardamos.", delay: 2 },
  { t: "3 · Pasas por él", d: "Lo recoges en la tienda, listo y a tu nombre.", delay: 3 },
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
            Pedidos, apartados o cualquier duda: escríbeles a los propietarios por WhatsApp y te responden ellos mismos,
            sin formularios ni vueltas.
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
          <strong>{site.location.neighborhood}</strong>
          <span>
            {site.location.city} · {site.location.state} · {site.location.country}
          </span>
        </div>
        <p className="contacto-nota reveal" data-delay="4">Te esperamos con las puertas blancas abiertas.</p>
      </div>
    </div>
  );
}
