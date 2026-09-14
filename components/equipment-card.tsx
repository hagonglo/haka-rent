import Link from "next/link";
import type { Equipment } from "@/lib/equipment";

export function EquipmentCard({ item, dark = false }: { item: Equipment; dark?: boolean }) {
  return (
    <Link href={`/catalogue/${item.slug}`} className={`equipment-card ${dark ? "dark" : ""}`}>
      <div className="equipment-media">
        {item.image ? <img src={item.image} alt={item.alt} /> : <div className="equipment-fallback">Haka Rent · Camera · Light · Grip</div>}
      </div>
      <div className="equipment-info">
        <div className="equipment-meta"><span>{item.category}</span><span>{item.number}</span></div>
        <h3>{item.brand} {item.name}</h3>
        <div className="equipment-specs">{item.specs.map((spec) => <span key={spec}>{spec}</span>)}</div>
      </div>
    </Link>
  );
}
