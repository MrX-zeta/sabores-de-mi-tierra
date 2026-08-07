import Link from "next/link";
import { waLink } from "@sabores/config";
import { Espiga, IconWa } from "@/components/Espiga";
import Herreria from "@/components/Herreria";

export default function NotFound() {
  return (
    <div className="v-404">
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow eyebrow-c hero-anim d1">Error 404</p>
          <h1 className="hero-anim d2">
            Esta puerta <em>no existe</em>
          </h1>
          <p className="lead hero-anim d3" style={{ marginInline: "auto" }}>
            La página que buscas no está en esta tienda. Puede que el enlace esté mal escrito o que la hayamos movido.
          </p>

          <div className="puerta-404 hero-anim d4" aria-hidden="true">
            <span className="puerta-escena">
              <span className="puerta-interior">
                <Espiga />
              </span>
              <span className="puerta-hoja izq" />
              <span className="puerta-hoja der" />
              <svg className="candado" viewBox="0 0 24 24">
                <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="11" width="14" height="9" rx="2.5" fill="var(--crema)" />
                  <path d="M8.5 11 V8 a3.5 3.5 0 0 1 7 0 v3" />
                </g>
                <circle cx="12" cy="15" r="1.6" fill="currentColor" />
              </svg>
            </span>
          </div>

          <div className="hero-cta hero-anim d5">
            <Link className="btn btn-verde" href="/">Volver al inicio</Link>
            <a className="btn btn-linea" href={waLink()} target="_blank" rel="noopener">
              <IconWa /> Escríbenos
            </a>
          </div>
        </div>
      </section>
      <Herreria />
    </div>
  );
}