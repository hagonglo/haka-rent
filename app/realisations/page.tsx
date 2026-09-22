import { RealisationCard } from "@/components/realisation-card";
import { SiteHeader } from "@/components/site-header";
import { getPublishedRealisations } from "@/lib/realisation-store";

export const metadata = {
  title: "Réalisations — Haka Rent",
  description: "Découvrez les productions accompagnées par Haka Rent à Cotonou : fiction, documentaire, publicité et clip.",
};

export default async function RealisationsPage() {
  const realisations = await getPublishedRealisations();

  return (
    <main className="realisations-page">
      <SiteHeader />
      <section className="realisations-hero">
        <div className="page-shell">
          <p className="eyebrow">Image · Lumière · Machinerie</p>
          <h1>Réali<span>sations.</span></h1>
          <div className="realisations-intro">
            <p>Des productions accompagnées depuis la préparation jusqu’au plateau, à Cotonou et ailleurs.</p>
            <span>{String(realisations.length).padStart(2, "0")} projets publiés</span>
          </div>
        </div>
      </section>
      <section className="realisations-body">
        <div className="page-shell">
          {realisations.length ? <div className="realisations-grid">{realisations.map((item, index) => <RealisationCard item={item} index={index} key={item.id} />)}</div> : <div className="realisations-empty"><p className="eyebrow">Bientôt</p><h2>Les premiers projets arrivent.</h2><p>Notre sélection de productions est en cours de préparation.</p></div>}
        </div>
      </section>
    </main>
  );
}
