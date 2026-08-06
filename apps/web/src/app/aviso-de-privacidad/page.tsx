import type { Metadata } from "next";
import { site } from "@sabores/config";

export const metadata: Metadata = {
  title: "Aviso de privacidad",
  description: `Aviso de privacidad de ${site.businessName}.`,
  robots: { index: false },
};

export default function AvisoDePrivacidad() {
  return (
    <div className="v-legal">
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow eyebrow-c hero-anim d2">Legal</p>
          <h1 className="hero-anim d3">Aviso de <em>privacidad</em></h1>
        </div>
      </section>

      <div className="wrap legal-cuerpo">
        <p className="legal-fecha">Última actualización: febrero de 2026</p>

        <h2>Responsable de tus datos</h2>
        <p>
          {site.legalName}, propietaria de {site.businessName}, con domicilio en {site.location.street},{" "}
          {site.location.neighborhood},{" "}
          {site.location.city}, {site.location.state}, {site.location.country}, es responsable del
          tratamiento de los datos personales que nos compartas, conforme a la Ley Federal de
          Protección de Datos Personales en Posesión de los Particulares.
        </p>

        <h2>Qué datos recabamos</h2>
        <p>
          Este sitio web no tiene formularios de registro y no solicita datos personales para
          navegarlo. Los únicos datos que podemos recibir son los que tú nos compartes
          voluntariamente al escribirnos por WhatsApp: tu nombre, tu número de teléfono y el
          contenido de tu mensaje.
        </p>

        <h2>Para qué los usamos</h2>
        <p>
          Únicamente para atender tu pedido o tu consulta: confirmarte productos y precios,
          apartar tu pedido y avisarte cuando esté listo. No usamos tus datos para publicidad, no
          los compartimos con terceros y no los vendemos.
        </p>

        <h2>Cookies y tecnologías de rastreo</h2>
        <p>
          Este sitio no utiliza cookies de rastreo ni herramientas de publicidad. Si esto cambia
          en el futuro (por ejemplo, al habilitar la venta en línea), actualizaremos este aviso
          antes de hacerlo.
        </p>

        <h2>WhatsApp</h2>
        <p>
          La comunicación por WhatsApp se rige además por las políticas de privacidad de WhatsApp
          (Meta Platforms, Inc.). Te recomendamos consultarlas en su sitio oficial.
        </p>

        <h2>Tus derechos (ARCO)</h2>
        <p>
          Puedes solicitar en cualquier momento el acceso, rectificación, cancelación u oposición
          al tratamiento de tus datos, así como revocar tu consentimiento, escribiéndonos por
          WhatsApp o visitándonos en la tienda. Responderemos en un plazo máximo de 20 días
          hábiles.
        </p>

        <h2>Cambios a este aviso</h2>
        <p>
          Cualquier cambio a este aviso se publicará en esta misma página, indicando la fecha de
          su última actualización.
        </p>
      </div>
    </div>
  );
}