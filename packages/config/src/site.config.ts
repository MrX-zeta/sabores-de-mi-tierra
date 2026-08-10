/**
 *  IDENTIDAD DEL NEGOCIO
 *  Único lugar a editar cuando se renombre la marca.
 *  (El logo vive aparte, como componente <Logo /> en web)
 */
const businessName = "El Santuario Sabores de mi Tierra";
/** Marca corta para espacios compactos (header móvil, referencias informales). */
const shortName = "Sabores de mi Tierra";

export const site = {
  businessName,
  shortName,
  legalName: "Francisca Pérez Muñoz",
  tagline:
    "Semillas, frutos secos, lácteos y dulces, en el barrio del Santuario.",
  location: {
    street: "Calle Real del Santuario #19-D",
    // TODO: afinar con el pin exacto de Google Maps
    geo: { lat: 16.7439, lng: -92.6304 },
    neighborhood: "Barrio del Santuario",
    city: "San Cristóbal de las Casas",
    state: "Chiapas",
    country: "México",
  },
  whatsapp: {
    number: "5219670000000", // ⚠ REEMPLAZAR con el número real de los propietarios
    messages: {
      general: `Hola, vengo del sitio web de ${businessName} 🌾`,
      pedido: `Hola, me gustaría hacer un pedido 🌾`,
    },
  },
  seo: {
    // TODO: cambiar por el dominio real al conectarlo en Vercel
    url: "https://sabores-de-mi-tierra.vercel.app",
    title: `${businessName} — Semillas, lácteos y dulces · San Cristóbal de las Casas`,
    description:
      "Semillas, lácteos y dulces tradicionales, escogidos por los propietarios, en el barrio del Santuario, San Cristóbal de las Casas, Chiapas.",
  },
} as const;

export const waLink = (message: string = site.whatsapp.messages.general) =>
  `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`;