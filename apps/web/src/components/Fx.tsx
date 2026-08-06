"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Efectos globales del sitio (se re-ejecutan en cada cambio de ruta):
 *  · revelado al hacer scroll (.reveal → .in)
 *  · puertas táctiles: se abren al entrar en vista en dispositivos sin hover
 *  · inclinación 3D de elementos .tilt (solo puntero fino)
 */
export default function Fx() {
  const pathname = usePathname();

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(hover:hover) and (pointer:fine)").matches;

    // Revelado al hacer scroll
    const reveals = document.querySelectorAll(".reveal:not(.in)");
    let io: IntersectionObserver | undefined;
    if ("IntersectionObserver" in window && !reduce) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("in");
              io?.unobserve(e.target);
            }
          });
        },
        { threshold: 0.14, rootMargin: "0px 0px -6% 0px" }
      );
      reveals.forEach((el) => io?.observe(el));
    } else {
      reveals.forEach((el) => el.classList.add("in"));
    }

    // Puertas: en táctil se abren al entrar en vista y se cierran al salir
    let ioPuertas: IntersectionObserver | undefined;
    if (!fine) {
      const puertas = document.querySelectorAll(".puerta");
      if ("IntersectionObserver" in window) {
        ioPuertas = new IntersectionObserver(
          (entries) =>
            entries.forEach((e) =>
              e.target.classList.toggle("abierta", e.isIntersecting && e.intersectionRatio > 0.6)
            ),
          { threshold: [0, 0.6, 1] }
        );
        puertas.forEach((p) => ioPuertas?.observe(p));
      } else {
        puertas.forEach((p) => p.classList.add("abierta"));
      }
    }

    // Tilt 3D
    const cleanups: Array<() => void> = [];
    if (fine && !reduce) {
      document.querySelectorAll<HTMLElement>(".tilt").forEach((el) => {
        const max = parseFloat(el.dataset.tiltMax ?? "5");
        const move = (ev: MouseEvent) => {
          const r = el.getBoundingClientRect();
          const px = (ev.clientX - r.left) / r.width - 0.5;
          const py = (ev.clientY - r.top) / r.height - 0.5;
          el.style.transform = `rotateX(${(-py * max).toFixed(2)}deg) rotateY(${(px * max).toFixed(2)}deg)`;
        };
        const leave = () => {
          el.style.transition = "transform .6s cubic-bezier(.22,.8,.28,1)";
          el.style.transform = "";
          setTimeout(() => (el.style.transition = ""), 620);
        };
        el.addEventListener("mousemove", move);
        el.addEventListener("mouseleave", leave);
        cleanups.push(() => {
          el.removeEventListener("mousemove", move);
          el.removeEventListener("mouseleave", leave);
        });
      });
    }

    return () => {
      io?.disconnect();
      ioPuertas?.disconnect();
      cleanups.forEach((fn) => fn());
    };
  }, [pathname]);

  return null;
}
