import Link from "next/link";
import { Espiga } from "./Espiga";

const enlaces = [
  { href: "/nosotros", label: "Quiénes somos" },
  { href: "/porque", label: "Por qué elegirnos" },
  { href: "/contacto", label: "Contacto" },
];

export default function CasaLinks() {
  return (
    <section className="casa-links">
      <div className="wrap">
        <div className="casa-links-int reveal">
          {enlaces.map((e) => (
            <Link key={e.href} className="casa-link" href={e.href}>
              <Espiga /> {e.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
