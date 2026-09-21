import { equipment } from "../lib/equipment.ts";

const rows = equipment.map((item) => ({
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
  status: "published",
  published_at: new Date().toISOString(),
}));

const json = JSON.stringify(rows).replaceAll("'", "''");

process.stdout.write(`
insert into public.catalogue_items (
  slug, reference, number, name, brand, model, category, subcategory,
  description, long_description, specs, details, included, compatibilities,
  availability, featured, images, alt, whatsapp, status, published_at
)
select
  slug, reference, number, name, brand, model, category, subcategory,
  description, long_description, specs, details, included, compatibilities,
  availability, featured, images, alt, whatsapp, status, published_at
from jsonb_to_recordset('${json}'::jsonb) as x(
  slug text, reference text, number text, name text, brand text, model text,
  category text, subcategory text, description text, long_description text,
  specs jsonb, details jsonb, included jsonb, compatibilities jsonb,
  availability text, featured boolean, images jsonb, alt text, whatsapp text,
  status text, published_at timestamptz
)
on conflict (slug) do update set
  reference = excluded.reference,
  number = excluded.number,
  name = excluded.name,
  brand = excluded.brand,
  model = excluded.model,
  category = excluded.category,
  subcategory = excluded.subcategory,
  description = excluded.description,
  long_description = excluded.long_description,
  specs = excluded.specs,
  details = excluded.details,
  included = excluded.included,
  compatibilities = excluded.compatibilities,
  availability = excluded.availability,
  featured = excluded.featured,
  images = excluded.images,
  alt = excluded.alt,
  whatsapp = excluded.whatsapp,
  status = excluded.status,
  published_at = excluded.published_at;
`);
