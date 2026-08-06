export type FamiliaProducto = {
  id: string;
  icono: string;
  titulo: string;
  texto: string;
  items: string[];
};

export const familias: FamiliaProducto[] = [
  {
    id: "semillas",
    icono: "#ico-semillas",
    titulo: "Semillas y frutos secos",
    texto: "A granel y medidos a tu gusto, siempre frescos.",
    items: [
      "Almendras", "Nueces", "Pistaches", "Cacahuates",
      "Semillas de calabaza", "Dátiles", "Ciruela pasa", "Granola", "Cacao",
    ],
  },
  {
    id: "despensa",
    icono: "#ico-especias",
    titulo: "Granos y especias",
    texto: "Lo básico de la cocina y los sabores de Chiapas.",
    items: [
      "Lentejas", "Garbanzos", "Quinoa", "Alpiste", "Tapioca",
      "Chiles secos", "Especias varias", "Jamaica", "Tamarindo",
      "Tascalate", "Chocolate artesanal",
    ],
  },
  {
    id: "lacteos",
    icono: "#ico-lacteos",
    titulo: "Lácteos",
    texto: "Frescos y de productores de la región.",
    items: [
      "Quesillo", "Queso asadero", "Queso panela", "Queso doble crema",
      "Queso manchego", "Queso rayado", "Crema", "Mantequilla",
    ],
  },
  {
    id: "dulces",
    icono: "#ico-dulces",
    titulo: "Dulces tradicionales",
    texto: "Los antojos de toda la vida, de esos que saben a recuerdo.",
    items: ["Grageas", "Gomitas", "Garbanzos enchilados", "Cacahuates botaneros"],
  },
];