import { equipment } from "../lib/equipment.ts";

const supabaseUrl = process.env.SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceRoleKey) {
  throw new Error("SUPABASE_URL et SUPABASE_SERVICE_ROLE_KEY sont requis.");
}

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

const response = await fetch(
  `${supabaseUrl}/rest/v1/catalogue_items?on_conflict=slug`,
  {
    method: "POST",
    headers: {
      apikey: serviceRoleKey,
      authorization: `Bearer ${serviceRoleKey}`,
      "content-type": "application/json",
      prefer: "resolution=merge-duplicates,return=representation",
    },
    body: JSON.stringify(rows),
  },
);

if (!response.ok) {
  throw new Error(`Import impossible (${response.status}) : ${await response.text()}`);
}

const imported = (await response.json()) as Array<{ slug: string }>;

if (imported.length !== equipment.length) {
  throw new Error(`${imported.length}/${equipment.length} références importées.`);
}

console.log(`${imported.length} références importées et vérifiées.`);
