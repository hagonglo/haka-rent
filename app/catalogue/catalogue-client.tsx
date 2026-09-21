"use client";

import { useMemo, useState } from "react";
import { EquipmentCard } from "@/components/equipment-card";
import { categories, type Equipment } from "@/lib/equipment";

export function CatalogueClient({ equipment, initialCategory = "Tout" }: { equipment: Equipment[]; initialCategory?: string }) {
  const [category, setCategory] = useState(initialCategory);
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const needle = query.trim().toLocaleLowerCase("fr");
    return equipment.filter((item) => {
      const matchesCategory = category === "Tout" || item.category === category;
      const haystack = `${item.brand} ${item.name} ${item.model} ${item.category} ${item.subcategory} ${item.description} ${item.specs.join(" ")}`.toLocaleLowerCase("fr");
      return matchesCategory && (!needle || haystack.includes(needle));
    });
  }, [category, equipment, query]);

  return <>
    <section className="catalogue-controls" aria-label="Filtres du catalogue"><div className="page-shell controls-inner">
      <div className="category-toggle" role="group" aria-label="Filtrer par catégorie">
        {["Tout", ...categories.map((item) => item.name)].map((name) => <button type="button" data-state={category === name ? "on" : "off"} onClick={() => setCategory(name)} key={name} aria-pressed={category === name}>{name}</button>)}
      </div>
      <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Rechercher une référence" aria-label="Rechercher dans le catalogue" className="catalogue-search" />
    </div></section>
    <section className="catalogue-body"><div className="page-shell"><p className="catalogue-count">{filtered.length} références</p>
      {filtered.length ? <div className="equipment-grid catalogue-grid">{filtered.map((item) => <EquipmentCard item={item} key={item.slug} />)}</div> : <p className="empty-state">Aucune référence ne correspond à cette recherche.</p>}
    </div></section>
  </>;
}
