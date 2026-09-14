export type Equipment = {
  slug: string;
  name: string;
  brand: string;
  category: "Caméra" | "Optiques" | "Lumière" | "Grip";
  number: string;
  image?: string;
  alt: string;
  description: string;
  specs: string[];
  details: Array<[string, string]>;
};

export const categories = [
  { name: "Caméra", note: "Corps · Enregistrement · Monitoring" },
  { name: "Optiques", note: "Série · Zoom · Accessoires" },
  { name: "Lumière", note: "LED · Contrôle · Modificateurs" },
  { name: "Grip", note: "Machinerie · Stabilisation · Support" },
];

export const equipment: Equipment[] = [
  {
    slug: "sony-f55", name: "F55", brand: "Sony", category: "Caméra", number: "001", image: "/images/sony-f55.svg", alt: "Planche technique stylisée de la caméra cinéma Sony F55",
    description: "Caméra cinéma numérique Super 35 conçue pour les configurations de fiction et de publicité.",
    specs: ["Super 35", "4K", "Monture PL"],
    details: [["Format", "Super 35"], ["Résolution", "4K"], ["Monture", "PL"], ["Usage", "Fiction · Publicité · Documentaire"]],
  },
  {
    slug: "astera-titan-tube", name: "Titan Tube", brand: "Astera", category: "Lumière", number: "002", image: "/images/astera-titan.svg", alt: "Planche technique stylisée du tube LED Astera Titan Tube",
    description: "Tube LED sans fil pour les installations de décor, les effets couleur et les configurations mobiles.",
    specs: ["LED couleur", "Sans fil", "Contrôle à distance"],
    details: [["Source", "LED couleur"], ["Alimentation", "Batterie intégrée"], ["Contrôle", "Sans fil"], ["Usage", "Décor · Effets · Portrait"]],
  },
  {
    slug: "pack-camera-cinema", name: "Pack caméra cinéma", brand: "Haka Rent", category: "Caméra", number: "003", image: "/images/pack-camera.svg", alt: "Planche technique stylisée d’un pack caméra cinéma prêt à tourner",
    description: "Une configuration caméra modulaire préparée à l’atelier et adaptée au plan de tournage.",
    specs: ["Prêt à tourner", "Modulaire", "Accessoires inclus"],
    details: [["Configuration", "Sur mesure"], ["Préparation", "Atelier Haka Rent"], ["Accessoires", "Selon le projet"], ["Usage", "Tournage cinéma"]],
  },
  {
    slug: "kit-lumiere-deux-points", name: "Kit lumière 2 points", brand: "Haka Rent", category: "Lumière", number: "004", image: "/images/kit-lumiere.svg", alt: "Planche technique stylisée d’un kit lumière deux points",
    description: "Une configuration légère articulée autour d’une lumière principale et d’un contre-jour.",
    specs: ["Key light", "Back light", "Configuration mobile"],
    details: [["Configuration", "2 sources"], ["Principe", "Key light · Back light"], ["Préparation", "Atelier Haka Rent"], ["Usage", "Interview · Portrait"]],
  },
];

export function getEquipment(slug: string) { return equipment.find((item) => item.slug === slug); }
