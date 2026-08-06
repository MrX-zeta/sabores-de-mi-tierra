import Link from "next/link";
import { site, waLink } from "@sabores/config";
import { Espiga, IconWa } from "./Espiga";

function GrupoEspigas({ lado }: { lado: "l" | "r" }) {
  return (
    <div className={`espigas espigas-${lado}`} aria-hidden="true">
      <Espiga className="esp-a" />
      <Espiga className="esp-b" />
      <Espiga className="esp-c" />
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-arco" aria-hidden="true" />
      <GrupoEspigas lado="l" />
      <GrupoEspigas lado="r" />
      <div className="hero-int">
        <div className="hero-sello hero-anim d1"><Espiga /></div>
        <p className="eyebrow eyebrow-c hero-anim d2">Productos regionales</p>
        <h1 className="hero-anim d3">
          Sabores <em>de mi Tierra</em>
        </h1>
        <p className="hero-sub hero-anim d4">{site.tagline}</p>
        <div className="hero-cta hero-anim d5">
          <Link className="btn btn-verde" href="/productos">Ver productos</Link>
          <a className="btn btn-linea" href={waLink(site.whatsapp.messages.pedido)} target="_blank" rel="noopener">
            <IconWa /> Escríbenos
          </a>
        </div>
        <p className="hero-loc hero-anim d5">
          {site.location.city} · {site.location.state}
        </p>
      </div>
    </section>
  );
}
