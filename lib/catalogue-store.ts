import "server-only";

import { equipment as fallbackEquipment, type Equipment } from "@/lib/equipment";
import { rowToEquipment, type CatalogueRow } from "@/lib/catalogue-data";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

async function requestPublished(query = "") {
  if (!url || !key) return null;

  const response = await fetch(
    `${url}/rest/v1/catalogue_items?select=*&status=eq.published${query}`,
    {
      headers: { apikey: key, authorization: `Bearer ${key}` },
      next: { revalidate: 60, tags: ["catalogue"] },
    },
  );

  if (!response.ok) return null;
  return (await response.json()) as CatalogueRow[];
}

export async function getPublishedEquipment(): Promise<Equipment[]> {
  const rows = await requestPublished("&order=number.asc");
  return rows ? rows.map(rowToEquipment) : fallbackEquipment;
}

export async function getPublishedEquipmentBySlug(slug: string): Promise<Equipment | undefined> {
  const rows = await requestPublished(`&slug=eq.${encodeURIComponent(slug)}&limit=1`);
  return rows ? rows[0] && rowToEquipment(rows[0]) : fallbackEquipment.find((item) => item.slug === slug);
}
