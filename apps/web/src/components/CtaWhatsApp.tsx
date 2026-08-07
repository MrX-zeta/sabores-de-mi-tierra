import { waLink } from "@sabores/config";
import { Espiga, IconWa, Voluta } from "./Espiga";

export default function CtaWhatsApp() {
  return (
    <section className="cta-banda">
      <div className="wrap">
        <div className="cta-banda-int reveal">
          <Voluta className="cta-banda-voluta" />
          <h3>¿Se te antojó algo?</h3>
          <p>Pedidos, apartados y dudas, sin formularios: te contestan directo los propietarios.</p>
          <span className="cta-halo">
            <a className="btn btn-whatsapp" href={waLink()} target="_blank" rel="noopener">
              <IconWa /> Escríbenos por WhatsApp
            </a>
          </span>
          <div className="cta-espiga cta-espiga-l" aria-hidden="true"><Espiga /></div>
          <div className="cta-espiga cta-espiga-r" aria-hidden="true"><Espiga /></div>
        </div>
      </div>
    </section>
  );
}
