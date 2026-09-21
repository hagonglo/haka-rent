import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { CatalogueClient } from "./catalogue-client";
import { categories } from "@/lib/equipment";
import { getPublishedEquipment } from "@/lib/catalogue-store";

export const metadata: Metadata = { title: "Catalogue", description: "Parcourez la sélection caméra, lumière et machinerie de Haka Rent à Cotonou." };

export default async function CataloguePage({ searchParams }: { searchParams: Promise<{ categorie?: string }> }) {
  const { categorie } = await searchParams;
  const initialCategory = categories.some((item) => item.name === categorie) ? categorie : "Tout";
  const equipment = await getPublishedEquipment();
  return <main className="catalogue-page"><SiteHeader /><section className="catalogue-hero"><div className="page-shell"><p className="eyebrow">Matériel</p><h1 className="catalogue-title">Catalogue</h1></div></section><CatalogueClient equipment={equipment} initialCategory={initialCategory} /></main>;
}
