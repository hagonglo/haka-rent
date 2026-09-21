import Link from "next/link";
import { CatalogueImage } from "@/components/catalogue-image";
import type { Equipment } from "@/lib/equipment";

export function EquipmentCard({ item, dark = false }: { item: Equipment; dark?: boolean }) {
  return (
    <Link href={`/catalogue/${item.slug}`} className={`equipment-card ${dark ? "dark" : ""}`}>
      <div className="equipment-media">
        <CatalogueImage src={item.images[0]} alt={item.alt} />
      </div>
      <div className="equipment-info">
        <div className="equipment-meta"><span>{item.category}</span><span>{item.number}</span></div>
        <h3>{item.name}</h3>
        <div className="equipment-specs">{item.specs.map((spec) => <span key={spec}>{spec}</span>)}</div>
      </div>
    </Link>
  );
}
