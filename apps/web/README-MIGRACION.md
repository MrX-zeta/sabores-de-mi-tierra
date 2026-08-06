# Migración del diseño → apps/web

Contenido de este paquete (todo va DENTRO de `apps/web/`, sobrescribiendo lo del starter):

```
apps/web/
├── next.config.ts          ← sobrescribir
└── src/
    ├── app/
    │   ├── globals.css     ← sobrescribir
    │   ├── layout.tsx      ← sobrescribir
    │   ├── page.tsx        ← sobrescribir (Inicio)
    │   ├── nosotros/page.tsx
    │   ├── productos/page.tsx
    │   ├── porque/page.tsx
    │   └── contacto/page.tsx
    └── components/
        ├── SvgDefs.tsx     (símbolos: espiga, voluta, íconos)
        ├── Espiga.tsx      (Espiga, Voluta, IconWa)
        ├── Fx.tsx          (reveals, puertas táctiles, tilt — client)
        ├── Header.tsx      (client: link activo)
        ├── Footer.tsx      (client: botón "Volver arriba" solo en el fondo)
        ├── Hero.tsx
        ├── Marquee.tsx
        ├── PuertasProducto.tsx
        ├── CasaLinks.tsx
        ├── CtaWhatsApp.tsx
        └── Herreria.tsx
```

## Pasos

1. Copia las carpetas/archivos sobre `apps/web/` (reemplaza los existentes).
2. Borra lo que ya no aplica del starter si sigue ahí: `src/app/favicon.ico` puede quedarse;
   elimina `public/*.svg` de Vercel/Next si quieres limpiar.
3. Si no lo hiciste ya: `rm apps/web/pnpm-workspace.yaml` (lockfile fantasma del starter).
4. Verifica que `packages/config` exista con `site.config.ts` (paso 3 de la preparación)
   y que web lo tenga como dependencia (`pnpm add @sabores/config --filter web --workspace`).
5. Levanta: `pnpm --filter web dev`

## Notas

- ⚠ El número de WhatsApp sigue como placeholder en `packages/config/src/site.config.ts`.
- El renombre futuro del negocio = editar `site.config.ts` + logo + 2 frases
  ("la tierra que nos da nombre" en /nosotros y /porque, y el wordmark "Sabores de mi Tierra"
  en Header/Footer/Hero, que quedó en texto fijo a propósito para el juego tipográfico
  de dos colores — al renombrar, ajustar esos tres componentes).
- Deploy en Vercel: Root Directory = `apps/web`.
