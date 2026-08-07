export function IconoEscogidos() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 26 C 8 34, 15 40, 24 40 C 33 40, 40 34, 40 26 Z" />
        <path d="M8 26 H40" />
      </g>
      <g fill="currentColor">
        <g className="anim-grano-a"><ellipse cx="17" cy="19" rx="2.6" ry="3.4" transform="rotate(-18 17 19)" /></g>
        <ellipse cx="24" cy="14" rx="2.6" ry="3.4" />
        <g className="anim-grano-b"><ellipse cx="31" cy="19" rx="2.6" ry="3.4" transform="rotate(18 31 19)" /></g>
      </g>
    </svg>
  );
}

export function IconoTrato() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 8 h22 a4 4 0 0 1 4 4 v10 a4 4 0 0 1 -4 4 h-12 l-7 6 v-6 h-3 a4 4 0 0 1 -4 -4 V12 a4 4 0 0 1 4 -4 Z" />
        <g className="anim-burbuja"><path d="M38 22 h2 a4 4 0 0 1 4 4 v8 a4 4 0 0 1 -4 4 h-2 v5 l-6 -5 h-6" /></g>
      </g>
      <g fill="currentColor">
        <circle className="anim-punto-1" cx="14" cy="17" r="1.9" />
        <circle className="anim-punto-2" cx="20" cy="17" r="1.9" />
        <circle className="anim-punto-3" cx="26" cy="17" r="1.9" />
      </g>
    </svg>
  );
}

export function IconoOrigen() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 36 L16 16 L23 27 L29 18 L44 36 Z" />
        <path d="M20 36 C 20 30, 28 30, 28 36" />
        <g className="anim-sol"><circle cx="35" cy="10" r="3.6" /></g>
        <circle className="anim-halo" cx="35" cy="10" r="3.6" strokeWidth="1.5" opacity="0" />
      </g>
    </svg>
  );
}

export function IconoFresco() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 42 V22" />
        <g className="anim-hoja-i"><path d="M24 26 C 24 16, 16 10, 7 10 C 7 20, 14 26, 24 26 Z" /></g>
        <g className="anim-hoja-d"><path d="M24 22 C 24 14, 30 9, 41 9 C 41 17, 34 22, 24 22 Z" /></g>
      </g>
    </svg>
  );
}