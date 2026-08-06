"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
        <a className="btn btn-verde btn-wa-mini" href={waLink()} target="_blank" rel="noopener">
          <IconWa /> WhatsApp
        </a>
      </div>
    </header>
  );
}
