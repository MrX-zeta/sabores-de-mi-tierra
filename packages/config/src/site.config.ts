/**
 *  IDENTIDAD DEL NEGOCIO
 *  Único lugar a editar cuando se renombre la marca.
 *  (El logo vive aparte, como componente <Logo /> en web)
 */
const businessName = "Sabores de mi Tierra";

export const site = {
  businessName,
  legalName: "Francisca Pérez Muñoz",
  tagline:
    "Semillas, frutos secos, lácteos y dulces, en el barrio del Santuario de San Cristóbal.",
  location: {
    street: "Calle Real del Santuario #19-D",
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
    title: `${businessName} — Semillas, lácteos y dulces · San Cristóbal de las Casas`,
    description:
      "Semillas, lácteos y dulces tradicionales escogidos a mano en el barrio del Santuario, San Cristóbal de las Casas, Chiapas.",
  },
} as const;

export const waLink = (message: string = site.whatsapp.messages.general) =>
  `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`;