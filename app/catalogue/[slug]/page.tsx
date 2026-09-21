import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { CatalogueImage } from "@/components/catalogue-image";
import { SiteHeader } from "@/components/site-header";
import { equipment } from "@/lib/equipment";
import { getPublishedEquipmentBySlug } from "@/lib/catalogue-store";

export function generateStaticParams() { return equipment.map((item) => ({ slug: item.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const item = await getPublishedEquipmentBySlug(slug);
  return item ? { title: `${item.brand} ${item.name}`, description: item.description } : {};
}

export default async function EquipmentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const item = await getPublishedEquipmentBySlug(slug); if (!item) notFound();
  return <main className="detail-page"><SiteHeader />
    <div className="detail-breadcrumb"><div className="page-shell"><Link href="/catalogue"><ArrowLeft aria-hidden="true" size={15} /> Catalogue</Link><span> · {item.category} · {item.name}</span></div></div>
    <article className="detail-layout">
      <div className="detail-gallery">
        <div className="detail-visual"><CatalogueImage src={item.images[0]} alt={item.alt} className="detail-image" /></div>
        {item.images.length > 1 ? <div className="detail-thumbnails">{item.images.slice(1).map((image, index) => <div className="detail-thumbnail" key={image}><CatalogueImage src={image} alt={`${item.name} — vue ${index + 2}`} /></div>)}</div> : null}
      </div>
      <div className="detail-info"><p className="eyebrow">{item.brand || item.category} · {item.number}</p><h1 className="detail-title">{item.name}</h1><p className="detail-intro">{item.description}</p>
        <dl className="spec-table">{item.details.map(([label, value]) => <div className="spec-row" key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
        <a className="arrow-link detail-contact" href={item.whatsapp} target="_blank" rel="noreferrer">Contacter Haka Rent <ArrowUpRight aria-hidden="true" size={18} /></a>
      </div>
    </article>
    {item.longDescription ? <section className="detail-description"><div className="page-shell detail-description-grid"><p className="eyebrow">Présentation</p><div>{item.longDescription.split(/\n\s*\n/).map((paragraph, index) => <p key={index}>{paragraph}</p>)}</div></div></section> : null}
  </main>;
}
