import type { Equipment } from "@/lib/equipment";

export type CatalogueStatus = "draft" | "published";

export type CatalogueRow = {
  id: string;
  slug: string;
  reference: string;
  number: string;
  name: string;
  brand: string;
  model: string;
  category: string;
  subcategory: string;
  description: string;
  long_description: string;
  specs: string[];
  details: Array<[string, string]>;
  included: string[];
  compatibilities: string[];
  availability: string;
  featured: boolean;
  images: string[];
  alt: string;
  whatsapp: string;
  status: CatalogueStatus;
};

export type AdminEquipment = Equipment & { id: string; status: CatalogueStatus };

export function rowToEquipment(row: CatalogueRow): AdminEquipment {
  return {
    id: row.id,
    slug: row.slug,
    reference: row.reference,
    number: row.number,
    name: row.name,
    brand: row.brand,
    model: row.model,
    category: row.category,
    subcategory: row.subcategory,
    description: row.description,
    longDescription: row.long_description,
    specs: row.specs,
    details: row.details,
    included: row.included,
    compatibilities: row.compatibilities,
    availability: row.availability,
    featured: row.featured,
    images: row.images,
    alt: row.alt,
    whatsapp: row.whatsapp,
    status: row.status,
  };
}

export function equipmentToRow(item: AdminEquipment) {
  return {
    slug: item.slug,
    reference: item.reference,
    number: item.number,
    name: item.name,
    brand: item.brand,
    model: item.model,
    category: item.category,
    subcategory: item.subcategory,
    description: item.description,
    long_description: item.longDescription,
    specs: item.specs,
    details: item.details,
    included: item.included,
    compatibilities: item.compatibilities,
    availability: item.availability,
    featured: item.featured,
    images: item.images,
    alt: item.alt,
    whatsapp: item.whatsapp,
    status: item.status,
  };
}
