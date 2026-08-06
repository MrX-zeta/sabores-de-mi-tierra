import type { Metadata } from "next";
import { site } from "@sabores/config";

export const metadata: Metadata = {
  title: "Términos de uso",
  description: `Términos de uso del sitio web de ${site.businessName}.`,
  robots: { index: false },
};

export default function Terminos() {
  return (
    <div className="v-legal">
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow eyebrow-c hero-anim d2">Legal</p>
          <h1 className="hero-anim d3">Términos <em>de uso</em></h1>
        </div>
      </section>

      <div className="wrap legal-cuerpo">
        <p className="legal-fecha">Última actualización: febrero de 2026</p>

        <h2>Sobre este sitio</h2>
        <p>
          Este sitio web es informativo: presenta los productos y datos de contacto de{" "}
          {site.businessName}. Por ahora no realizamos ventas en línea; los pedidos se atienden
          por WhatsApp o directamente en la tienda.
        </p>

        <h2>Productos y disponibilidad</h2>
        <p>
          Los productos mostrados son una referencia de lo que solemos manejar. La disponibilidad
          y los precios pueden variar día con día; te los confirmamos por WhatsApp o en el
          mostrador antes de cualquier compra.
        </p>

        <h2>Propiedad del contenido</h2>
        <p>
          Los textos, ilustraciones y diseño de este sitio pertenecen a {site.businessName}. No
          está permitido reproducirlos con fines comerciales sin autorización.
        </p>

        <h2>Enlaces a terceros</h2>
        <p>
          El botón de WhatsApp abre un servicio operado por Meta Platforms, Inc., con sus propios
          términos y políticas, que no dependen de nosotros.
        </p>
      </div>
    </div>
  );
}