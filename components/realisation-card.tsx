import Link from "next/link";
import { ArrowUpRight, ImageIcon } from "lucide-react";
import type { Realisation } from "@/lib/realisation-data";

export function RealisationCard({ item, index }: { item: Realisation; index: number }) {
  return (
    <Link href={`/realisations/${item.slug}`} className="realisation-card">
      <div className="realisation-card-media">
        {item.images[0] ? <img src={item.images[0]} alt={`${item.title} — ${item.client || "production Haka Rent"}`} /> : <div className="realisation-fallback"><ImageIcon aria-hidden="true" /><span>Visuel à venir</span></div>}
        <span className="realisation-index">{String(index + 1).padStart(2, "0")}</span>
      </div>
      <div className="realisation-card-copy">
        <div><span>{item.category || "Production"}</span><span>{item.year}</span></div>
        <h2>{item.title}</h2>
        <p>{item.client || item.location}</p>
        <ArrowUpRight aria-hidden="true" />
      </div>
    </Link>
  );
}
