import type { ReactNode } from "react";

/** Interiores de las puertas: bodegones a línea en el trazo del sitio.
 *  Inline (sin <use>) para que los selectores .puerta:hover del CSS alcancen los grupos animados. */

function Escena({ etiqueta, children }: { etiqueta: string; children: ReactNode }) {
  return (
    <svg className="escena" viewBox="0 0 220 164" preserveAspectRatio="xMidYMax meet">
      <line className="esc-suelo" x1="16" y1="146" x2="204" y2="146" />
      {children}
      <g className="esc-etiqueta">
        <circle className="clavo" cx="176" cy="8" r="2.2" />
        <line className="cordel" x1="176" y1="8" x2="176" y2="20" />
        <rect className="tag" x="146" y="20" width="60" height="27" rx="7" />
        <text x="176" y="39" textAnchor="middle">{etiqueta}</text>
      </g>
    </svg>
  );
}

export const EscenaSemillas = () => (
  <Escena etiqueta="a granel">
    {/* costal de yute abierto, colmado de grano */}
    <g className="esc-sube esc-sube-1">
      <ellipse className="esc-sombra" cx="82" cy="148" rx="38" ry="4" />
      <g fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M57 84 C 52 103, 52 128, 56 146 H 108 C 112 128, 112 103, 107 84" />
        <path d="M54 84 C 52 74, 58 67, 66 67 H 98 C 106 67, 112 74, 110 84 Z" />
        <path d="M64 67 C 70 57, 94 57, 100 67" />
        <path d="M66 92 v4 M79 92 v4 M92 92 v4 M101 92 v4" opacity=".4" strokeWidth="1.8" />
      </g>
      <g fill="var(--oro)">
        <ellipse cx="74" cy="60" rx="2.8" ry="3.8" transform="rotate(-18 74 60)" />
        <ellipse cx="82" cy="57" rx="2.8" ry="3.8" />
        <ellipse cx="90" cy="60" rx="2.8" ry="3.8" transform="rotate(18 90 60)" />
      </g>
    </g>
    {/* montoncito al peso, con el cucharón encajado */}
    <g className="esc-sube esc-sube-2">
      <g fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M128 146 C 133 131, 147 123, 159 123 C 171 123, 183 132, 187 146 Z" />
        <ellipse cx="155" cy="120" rx="8.5" ry="5.5" transform="rotate(-22 155 120)" />
        <path d="M161 116 L 174 93" strokeWidth="3.2" />
      </g>
      <g fill="var(--oro)">
        <ellipse cx="148" cy="135" rx="2.4" ry="3.2" transform="rotate(-15 148 135)" />
        <ellipse cx="161" cy="133" rx="2.4" ry="3.2" transform="rotate(12 161 133)" />
        <ellipse cx="172" cy="139" rx="2.4" ry="3.2" transform="rotate(-8 172 139)" />
      </g>
    </g>
  </Escena>
);

export const EscenaLacteos = () => (
  <Escena etiqueta="del día">
    {/* tabla con rueda de queso y cuña */}
    <g className="esc-sube esc-sube-1">
      <ellipse className="esc-sombra" cx="134" cy="150" rx="62" ry="4" />
      <g fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="76" y="138" width="120" height="8" rx="4" />
        <circle cx="70" cy="142" r="6" />
        <ellipse cx="116" cy="101" rx="28" ry="8.5" />
        <path d="M88 101 V 130 A 28 8.5 0 0 0 144 130 V 101" />
        <path d="M154 138 L 182 115 L 188 138 Z" />
      </g>
      <g fill="currentColor" opacity=".8">
        <circle cx="70" cy="142" r="1.5" />
        <circle cx="103" cy="119" r="2.3" />
        <circle cx="122" cy="115" r="1.8" />
        <circle cx="133" cy="124" r="2.1" />
        <circle cx="177" cy="131" r="1.7" />
      </g>
    </g>
    {/* botella de leche */}
    <g className="esc-sube esc-sube-2">
      <ellipse className="esc-sombra" cx="44" cy="148" rx="17" ry="3.5" />
      <g fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M32 146 V 108 C 32 100, 37 97, 37 90 V 84 H 51 V 90 C 51 97, 56 100, 56 108 V 146 Z" />
        <rect x="35" y="77" width="18" height="7" rx="2.5" />
        <path d="M34 113 C 40 110, 48 116, 54 113" opacity=".5" strokeWidth="1.7" />
      </g>
    </g>
  </Escena>
);

export const EscenaDulces = () => (
  <Escena etiqueta="antojo">
    {/* frasco de gomitas */}
    <g className="esc-sube esc-sube-1">
      <ellipse className="esc-sombra" cx="86" cy="149" rx="31" ry="4" />
      <g fill="var(--oro)">
        <circle cx="72" cy="138" r="5" />
        <circle cx="84" cy="141" r="5" fill="var(--terracota)" />
        <circle cx="97" cy="138" r="5" fill="var(--oro-claro)" />
        <circle cx="78" cy="128" r="5" fill="var(--terracota)" />
        <circle cx="91" cy="130" r="5" />
      </g>
      <g fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="60" y="90" width="52" height="56" rx="9" />
        <rect x="56" y="79" width="60" height="12" rx="4" />
        <path d="M68 100 C 66 108, 66 118, 68 126" opacity=".35" strokeWidth="1.7" />
      </g>
    </g>
    {/* tableta de chocolate, un trozo y cacahuates */}
    <g className="esc-sube esc-sube-2">
      <ellipse className="esc-sombra" cx="152" cy="149" rx="28" ry="4" />
      <g fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="130" y="100" width="38" height="46" rx="3" />
        <path d="M142.6 100 V 122 M155.3 100 V 122 M130 109 H 168" strokeWidth="1.6" />
      </g>
      {/* envoltura doblada hacia abajo, con la puntita donde empezó el rasgado */}
      <path
        d="M126 121 L 172 115 L 172 143 Q 172 146 169 146 L 129 146 Q 126 146 126 143 Z"
        fill="var(--blanco)" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round"
      />
      <path
        d="M122 121.5 L 176 114.5 L 176 120 L 170 126.5 L 166 121 L 161 129.5 L 155 122.5 L 150 132.5 L 144 124.5 L 138 140 L 132 125.5 L 127 134 L 122 127 Z"
        fill="var(--blanco)" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"
      />      <g fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="176" y="133" width="13" height="13" rx="2" />
      </g>
      <g fill="var(--terracota)" opacity=".85">
        <ellipse cx="120" cy="141" rx="2.6" ry="3.4" transform="rotate(-16 120 141)" />
        <ellipse cx="125" cy="145" rx="2.6" ry="3.4" transform="rotate(14 125 145)" />
      </g>
    </g>
  </Escena>
);
