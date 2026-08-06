import type { Metadata } from "next";
import { site } from "@sabores/config";
import { Espiga } from "@/components/Espiga";
import Herreria from "@/components/Herreria";

export const metadata: Metadata = {
  title: "Nosotros",
  description: `Quiénes somos: una tienda de barrio en ${site.location.neighborhood}, ${site.location.city}.`,
};

export default function Nosotros() {
  return (
    <div className="v-nosotros">
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow eyebrow-c hero-anim d2">Quiénes somos</p>
          <h1 className="hero-anim d3">
            Una tienda de barrio, <em>con alma de mercado</em>
          </h1>
          <p className="cita-grande hero-anim d4">
            Lo nuestro es sencillo: buen producto, trato de vecino y la palabra por delante.
          </p>
          <p className="cita-firma hero-anim d5">Los propietarios · {site.location.neighborhood}</p>
        </div>
      </section>

      <Herreria />

      <section className="historia">
        <div className="wrap historia-grid">
          <div className="historia-texto">
            <p className="eyebrow reveal">Nuestra historia</p>
            <h2 className="reveal" data-delay="1">
              Del mostrador <em>a tu mesa</em>
            </h2>
            <div className="lead reveal" data-delay="2">
              <p>
                {site.businessName} nace en el {site.location.neighborhood}, en {site.location.city}: una tienda
                pequeña, atendida por sus propietarios, donde cada producto se conoce por nombre y procedencia.
              </p>
              <p>
                Aquí no hay anaqueles infinitos ni prisa. Hay semillas a granel, lácteos frescos de la región y los
                dulces de siempre, escogidos con calma, uno por uno.
              </p>
            </div>
          </div>
          <div className="historia-visual reveal" data-delay="2">
            <div className="arco-marco tilt" data-tilt-max="5">
              <div className="arco-int">
                <span className="brand-badge"><Espiga /></span>
                <p className="arco-nombre">{site.businessName}</p>
                <p className="arco-sub">
                  {site.location.neighborhood}
                  <br />
                  Desde el corazón de {site.location.state}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="barrio">
        <div className="wrap">
          <p className="eyebrow reveal">El barrio</p>
          <h2 className="reveal" data-delay="1">
            En el Santuario, <em>no en el centro</em>
          </h2>
          <div className="barrio-grid">
            <div className="barrio-dato reveal" data-delay="1">
              <h3>Tienda de vecinos</h3>
              <p>Estamos donde vive la gente, no donde pasa el turismo. Eso define nuestros precios y nuestro trato.</p>
            </div>
            <div className="barrio-dato reveal" data-delay="2">
              <h3>Atienden los propietarios</h3>
              <p>Las mismas personas que eligen el producto son quienes te lo venden y te responden el WhatsApp.</p>
            </div>
            <div className="barrio-dato reveal" data-delay="3">
              <h3>Raíz chiapaneca</h3>
              <p>
                Trabajamos con productores de la región siempre que es posible: comprar aquí es apoyar a la tierra que
                nos da nombre.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
