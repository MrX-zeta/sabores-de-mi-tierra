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
      "Tascalate",
    ],
  },
  {
    id: "lacteos",
    icono: "#ico-lacteos",
    titulo: "Lácteos",
    texto: "Frescos, de productores cercanos.",
    items: [
      "Quesillo", "Queso asadero", "Queso panela", "Queso doble crema",
      "Queso manchego", "Queso rayado", "Crema", "Mantequilla",
    ],
  },
  {
    id: "dulces",
    icono: "#ico-dulces",
    titulo: "Dulces y antojos",
    texto: "Los clásicos de la vitrina de dulces.",
    items: ["Gomitas", "Chocolate artesanal", "Cacahuates en varias presentaciones"],
  },
];