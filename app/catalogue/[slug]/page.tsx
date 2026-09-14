import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { equipment, getEquipment } from "@/lib/equipment";

export function generateStaticParams() { return equipment.map((item) => ({ slug: item.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const item = getEquipment(slug);
  return item ? { title: `${item.brand} ${item.name}`, description: item.description } : {};
}

export default async function EquipmentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const item = getEquipment(slug); if (!item) notFound();
  return <main className="detail-page"><SiteHeader />
    <div className="detail-breadcrumb"><div className="page-shell"><Link href="/catalogue"><ArrowLeft aria-hidden="true" size={15} /> Catalogue</Link><span> · {item.category} · {item.brand} {item.name}</span></div></div>
    <article className="detail-layout">
      <div className="detail-visual">{item.image ? <img src={item.image} alt={item.alt} /> : <div className="equipment-fallback">Haka Rent · Camera · Light · Grip</div>}</div>
      <div className="detail-info"><p className="eyebrow">{item.category} · {item.number}</p><h1 className="detail-title">{item.brand}<br />{item.name}</h1><p className="detail-intro">{item.description}</p>
        <dl className="spec-table">{item.details.map(([label, value]) => <div className="spec-row" key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
        <a className="arrow-link detail-contact" href="https://api.whatsapp.com/send?phone=22997090941" target="_blank" rel="noreferrer">Contacter Haka Rent <ArrowUpRight aria-hidden="true" size={18} /></a>
      </div>
    </article>
  </main>;
}
