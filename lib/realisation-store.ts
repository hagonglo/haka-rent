import "server-only";

import { rowToRealisation, type Realisation, type RealisationRow } from "@/lib/realisation-data";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

async function requestPublished(query = "") {
  if (!url || !key) return [];

  const response = await fetch(
    `${url}/rest/v1/realisations?select=*&status=eq.published${query}`,
    {
      headers: { apikey: key, authorization: `Bearer ${key}` },
      next: { revalidate: 60, tags: ["realisations"] },
    },
  );

  if (!response.ok) return [];
  return (await response.json()) as RealisationRow[];
}

export async function getPublishedRealisations(): Promise<Realisation[]> {
  const rows = await requestPublished("&order=sort_order.asc,published_at.desc");
  return rows.map(rowToRealisation);
}

export async function getPublishedRealisationBySlug(slug: string): Promise<Realisation | undefined> {
  const rows = await requestPublished(`&slug=eq.${encodeURIComponent(slug)}&limit=1`);
  return rows[0] && rowToRealisation(rows[0]);
}
