"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { site } from "@sabores/config";
import { Espiga } from "./Espiga";

const enlaces = [
  { href: "/nosotros", label: "Nosotros" },
  { href: "/productos", label: "Productos" },
  { href: "/porque", label: "Por qué" },
  { href: "/contacto", label: "Contacto" },
];

export default function Footer() {
  const [armado, setArmado] = useState(false);
  const reduceRef = useRef(false);

  useEffect(() => {
    reduceRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const check = () => {
      const doc = document.documentElement;
      setArmado(window.innerHeight + window.scrollY >= doc.scrollHeight - 4);
    };
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    check();
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, []);

  const subir = () => {
    if (!armado) return;
    window.scrollTo({ top: 0, behavior: reduceRef.current ? "auto" : "smooth" });
  };

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <Link href="/" className="brand" aria-label={`${site.businessName}, inicio`}>
            <span className="brand-badge"><Espiga /></span>
            <span className="brand-name">
              <span className="brand-arriba">El Santuario</span>
              <span>Sabores de mi Tierra</span>
            </span>
          </Link>
          <nav className="footer-nav" aria-label="Navegación de pie de página">
            {enlaces.map((e) => (
              <Link key={e.href} href={e.href}>{e.label}</Link>
            ))}
          </nav>
        </div>
        <div className="footer-fin">
          <span>
            © {new Date().getFullYear()} {site.businessName} · {site.location.neighborhood},{" "}
            {site.location.city}
            <span className="legal-links">
              <Link href="/aviso-de-privacidad">Aviso de privacidad</Link>
              {" · "}
              <Link href="/terminos">Términos de uso</Link>
            </span>
          </span>
          <button
            className={`top-btn${armado ? " armed" : ""}`}
            onClick={subir}
            aria-label="Volver al inicio de la página"
            aria-disabled={!armado}
          >
            <span className="top-texto">Volver arriba</span>
            <span className="top-circ">
              <svg viewBox="0 0 24 24" aria-hidden="true"><use href="#ico-arriba" /></svg>
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
