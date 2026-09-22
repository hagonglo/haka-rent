export type RealisationStatus = "draft" | "published";

export type RealisationRow = {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: string;
  year: string;
  location: string;
  summary: string;
  description: string;
  images: string[];
  video_url: string;
  external_url: string;
  featured: boolean;
  sort_order: number;
  status: RealisationStatus;
};

export type Realisation = {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: string;
  year: string;
  location: string;
  summary: string;
  description: string;
  images: string[];
  videoUrl: string;
  externalUrl: string;
  featured: boolean;
  sortOrder: number;
  status: RealisationStatus;
};

export function rowToRealisation(row: RealisationRow): Realisation {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    client: row.client,
    category: row.category,
    year: row.year,
    location: row.location,
    summary: row.summary,
    description: row.description,
    images: row.images,
    videoUrl: row.video_url,
    externalUrl: row.external_url,
    featured: row.featured,
    sortOrder: row.sort_order,
    status: row.status,
  };
}

export function realisationToRow(item: Realisation) {
  return {
    slug: item.slug,
    title: item.title,
    client: item.client,
    category: item.category,
    year: item.year,
    location: item.location,
    summary: item.summary,
    description: item.description,
    images: item.images,
    video_url: item.videoUrl,
    external_url: item.externalUrl,
    featured: item.featured,
    sort_order: item.sortOrder,
    status: item.status,
  };
}
