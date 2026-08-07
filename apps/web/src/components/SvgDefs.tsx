/** Símbolos SVG globales (espiga, voluta, íconos). Se montan una vez en el layout. */
export default function SvgDefs() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
      <defs>
        <symbol id="espiga" viewBox="0 0 64 160">
          <path d="M32 158 L32 52" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
          <g fill="currentColor">
            <path d="M32 140 C 20 136, 13 126, 15 112 C 27 118, 32 128, 32 140 Z" />
            <path d="M32 140 C 44 136, 51 126, 49 112 C 37 118, 32 128, 32 140 Z" />
            <path d="M32 120 C 20 116, 13 106, 15 92 C 27 98, 32 108, 32 120 Z" />
            <path d="M32 120 C 44 116, 51 106, 49 92 C 37 98, 32 108, 32 120 Z" />
            <path d="M32 100 C 20 96, 13 86, 15 72 C 27 78, 32 88, 32 100 Z" />
            <path d="M32 100 C 44 96, 51 86, 49 72 C 37 78, 32 88, 32 100 Z" />
            <path d="M32 80 C 20 76, 13 66, 15 52 C 27 58, 32 68, 32 80 Z" />
            <path d="M32 80 C 44 76, 51 66, 49 52 C 37 58, 32 68, 32 80 Z" />
            <path d="M32 60 C 21 56, 15 47, 17 34 C 28 40, 32 49, 32 60 Z" />
            <path d="M32 60 C 43 56, 49 47, 47 34 C 36 40, 32 49, 32 60 Z" />
          </g>
          <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none">
            <path d="M32 40 L21 6" /><path d="M32 40 L32 2" /><path d="M32 40 L43 6" />
          </g>
        </symbol>
        <symbol id="voluta" viewBox="0 0 280 26">
          <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <path d="M128 13 H36 C 24 13, 18 6, 24 3 C 29 1, 32 7, 27 9" />
            <path d="M152 13 H244 C 256 13, 262 6, 256 3 C 251 1, 248 7, 253 9" />
          </g>
          <path d="M140 4 L148 13 L140 22 L132 13 Z" fill="currentColor" />
        </symbol>
        <symbol id="wa" viewBox="0 0 24 24">
          <path fill="currentColor" d="M12 2A10 10 0 0 0 3.5 17.3L2.4 21.6l4.4-1.1A10 10 0 1 0 12 2Zm0 18.1c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-2.6.7.7-2.6-.2-.3A8.1 8.1 0 1 1 12 20.1Zm4.5-6c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1a6.6 6.6 0 0 1-3.3-2.9c-.2-.4.2-.4.5-1 .1-.2 0-.4 0-.5l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1 2.7c.1.2 1.8 2.8 4.4 3.9 1.6.7 2.3.8 3.1.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2 0-.1-.2-.2-.4-.2Z" />
        </symbol>
        <symbol id="ico-semillas" viewBox="0 0 48 48">
          <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 26 C 8 34, 15 40, 24 40 C 33 40, 40 34, 40 26 Z" />
            <path d="M8 26 H40" />
          </g>
          <g fill="currentColor">
            <g className="anim-grano-a"><ellipse cx="17" cy="19" rx="2.6" ry="3.4" transform="rotate(-18 17 19)" /></g>
            <ellipse cx="24" cy="14" rx="2.6" ry="3.4" />
            <g className="anim-grano-b"><ellipse cx="31" cy="19" rx="2.6" ry="3.4" transform="rotate(18 31 19)" /></g>
          </g>
        </symbol>
        <symbol id="ico-lacteos" viewBox="0 0 48 48">
          <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
            <path d="M6 34 H42 V23 C 32 12, 15 13, 6 22 Z" />
            <path d="M6 22 C 15 13, 32 12, 42 23" />
          </g>
          <g fill="currentColor" opacity=".85">
            <circle cx="16" cy="27" r="2.4" /><circle cx="27" cy="24" r="1.9" /><circle cx="34" cy="29" r="2.2" />
          </g>
        </symbol>
        <symbol id="ico-dulces" viewBox="0 0 48 48">
          <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
            <circle cx="24" cy="24" r="8.5" />
            <path d="M15 24 L6 17 V31 Z" />
            <path d="M33 24 L42 17 V31 Z" />
            <path d="M20 18.5 C 18 22, 18 26, 20 29.5 M27.5 18.5 C 29.5 22, 29.5 26, 27.5 29.5" strokeLinecap="round" />
          </g>
        </symbol>
        <symbol id="ico-trato" viewBox="0 0 48 48">
          <g fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 8 h22 a4 4 0 0 1 4 4 v10 a4 4 0 0 1 -4 4 h-12 l-7 6 v-6 h-3 a4 4 0 0 1 -4 -4 V12 a4 4 0 0 1 4 -4 Z" />
            <g className="anim-burbuja"><path d="M38 22 h2 a4 4 0 0 1 4 4 v8 a4 4 0 0 1 -4 4 h-2 v5 l-6 -5 h-6" /></g>
          </g>
          <g fill="currentColor">
            <circle className="anim-punto-1" cx="14" cy="17" r="1.9" />
            <circle className="anim-punto-2" cx="20" cy="17" r="1.9" />
            <circle className="anim-punto-3" cx="26" cy="17" r="1.9" />
          </g>
        </symbol>
        <symbol id="ico-origen" viewBox="0 0 48 48">
          <g fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 36 L16 16 L23 27 L29 18 L44 36 Z" />
            <path d="M20 36 C 20 30, 28 30, 28 36" />
            <g className="anim-sol"><circle cx="35" cy="10" r="3.6" /></g>
            <circle className="anim-halo" cx="35" cy="10" r="3.6" strokeWidth="1.5" opacity="0" />
          </g>
        </symbol>
        <symbol id="ico-fresco" viewBox="0 0 48 48">
          <g fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M24 42 V22" />
            <g className="anim-hoja-i"><path d="M24 26 C 24 16, 16 10, 7 10 C 7 20, 14 26, 24 26 Z" /></g>
            <g className="anim-hoja-d"><path d="M24 22 C 24 14, 30 9, 41 9 C 41 17, 34 22, 24 22 Z" /></g>
          </g>
        </symbol>
        <symbol id="ico-flecha" viewBox="0 0 34 12">
          <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 6 H29" />
            <path d="M24 1.8 L29.5 6 L24 10.2" />
            <path d="M6 6 C 2.8 6, 2 3.2, 4.2 2.6 C 6 2.2, 6.4 4.6, 4.6 4.8" />
          </g>
        </symbol>
        <symbol id="ico-especias" viewBox="0 0 48 48">
          <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
            <path strokeWidth="3.2" d="M23.5 12.5 C 25 8.5, 28.5 6, 33 6.5" />
            <path strokeWidth="2.6" d="M17 14.5 C 15 20.5, 14.6 28, 16.6 33.6 C 18.4 38.6, 21.6 42.4, 25.6 44 C 28.2 45, 30 43.4, 29 41.2 C 28.2 39.4, 28.6 37.6, 29.8 35.6 C 32.8 30.4, 34.4 24, 33.6 18 C 33.2 14.6, 30.8 12.6, 27.6 12.5 C 23.4 12.4, 19 12.9, 17 14.5 Z" />
            <path strokeWidth="2.2" d="M21 17 c-1.4 5, -1.4 11, 0.4 15.6 M26.4 16.6 c0.8 5.4, 0 11.4, -2.2 16" />
          </g>
        </symbol>
        <symbol id="ico-arriba" viewBox="0 0 24 24">
          <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 20 V5 M5.5 11.5 L12 5 l6.5 6.5" />
        </symbol>
      </defs>
    </svg>
  );
}
