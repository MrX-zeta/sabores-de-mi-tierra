"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site, waLink } from "@sabores/config";
import { Espiga, IconWa } from "./Espiga";

const enlaces = [
  { href: "/nosotros", label: "Nosotros" },
  { href: "/productos", label: "Productos" },
  { href: "/porque", label: "Por qué" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  const pathname = usePathname();
  const [abierto, setAbierto] = useState(false);

  // Cerrar el menú al navegar y bloquear el scroll del fondo mientras está abierto
  useEffect(() => setAbierto(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = abierto ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [abierto]);

  return (
    <header className="header">
      <div className="wrap">
        <Link href="/" className="brand" aria-label={`${site.businessName}, inicio`}>
          <span className="brand-badge"><Espiga /></span>
          <span className="brand-name">
            Sabores <span>de mi Tierra</span>
          </span>
        </Link>
        <nav className="nav" aria-label="Navegación principal">
          {enlaces.map((e) => (
            <Link key={e.href} href={e.href} className={pathname === e.href ? "act" : undefined}>
              {e.label}
            </Link>
          ))}
        </nav>
        <div className="header-acciones">
          <a className="btn btn-verde btn-wa-mini" href={waLink()} target="_blank" rel="noopener">
            <IconWa /> WhatsApp
          </a>
          <button
            className={`menu-btn${abierto ? " abierto" : ""}`}
            onClick={() => setAbierto(!abierto)}
            aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={abierto}
            aria-controls="menu-movil"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      <nav id="menu-movil" className={`menu-movil${abierto ? " abierto" : ""}`} aria-label="Menú móvil">
        <ul>
          <li>
            <Link href="/" className={pathname === "/" ? "act" : undefined}>
              <Espiga /> Inicio
            </Link>
          </li>
          {enlaces.map((e) => (
            <li key={e.href}>
              <Link href={e.href} className={pathname === e.href ? "act" : undefined}>
                <Espiga /> {e.label}
              </Link>
            </li>
          ))}
        </ul>
        <a className="btn btn-whatsapp menu-movil-wa" href={waLink()} target="_blank" rel="noopener">
          <IconWa /> Escríbenos por WhatsApp
        </a>
      </nav>
    </header>
  );
}