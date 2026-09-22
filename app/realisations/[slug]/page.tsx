import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Play } from "lucide-react";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { getPublishedRealisationBySlug } from "@/lib/realisation-store";

export default async function RealisationDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = await getPublishedRealisationBySlug(slug);
  if (!item) notFound();

  return (
    <main className="realisation-detail-page">
      <SiteHeader />
      <div className="page-shell realisation-breadcrumb"><Link href="/realisations"><ArrowLeft size={15} /> Toutes les réalisations</Link></div>
      <section className="realisation-project-head">
        <div className="page-shell realisation-project-grid">
          <div><p className="eyebrow">{item.category || "Production"} · {item.year}</p><h1>{item.title}</h1></div>
          <div className="realisation-project-meta"><dl><div><dt>Client</dt><dd>{item.client || "—"}</dd></div><div><dt>Lieu</dt><dd>{item.location || "—"}</dd></div></dl><p>{item.summary}</p></div>
        </div>
      </section>
      <section className="realisation-project-gallery">
        <div className="page-shell">
          {item.images.length ? <div className="realisation-gallery-grid">{item.images.map((image, index) => <img src={image} alt={`${item.title} — image ${index + 1}`} key={image} />)}</div> : <div className="realisation-gallery-empty">Visuels à venir</div>}
        </div>
      </section>
      <section className="realisation-project-story">
        <div className="page-shell realisation-story-grid">
          <p className="eyebrow light">Le projet</p>
          <div><p>{item.description || item.summary}</p><div className="realisation-project-links">{item.videoUrl && <a href={item.videoUrl} target="_blank" rel="noreferrer"><Play size={17} /> Voir la vidéo</a>}{item.externalUrl && <a href={item.externalUrl} target="_blank" rel="noreferrer">Voir le projet <ArrowUpRight size={17} /></a>}</div></div>
        </div>
      </section>
    </main>
  );
}
