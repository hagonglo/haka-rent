import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { EquipmentCard } from "@/components/equipment-card";
import { SiteHeader } from "@/components/site-header";
import { categories, equipment } from "@/lib/equipment";

export default function Home() {
  return (
    <main>
      <SiteHeader theme="dark" />

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-index" aria-hidden="true">01</div>
        <div className="page-shell hero-content">
          <p className="eyebrow light">Cotonou · Bénin</p>
          <h1 id="hero-title">Camera.<br />Light. <span>Grip.</span></h1>
          <div className="hero-bottom">
            <p>Matériel cinéma pour les productions exigeantes.</p>
            <Link href="/catalogue" className="arrow-link light-link">
              Explorer le catalogue <ArrowRight aria-hidden="true" size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="category-section" aria-labelledby="category-title">
        <div className="page-shell">
          <div className="section-heading">
            <p className="eyebrow">Catalogue</p>
            <h2 id="category-title">Par famille</h2>
          </div>
          <div className="category-list">
            {categories.map((category, index) => (
              <Link href={`/catalogue?categorie=${encodeURIComponent(category.name)}`} className="category-row" key={category.name}>
                <span className="category-number">0{index + 1}</span>
                <span>{category.name}</span>
                <span className="category-note">{category.note}</span>
                <ArrowRight aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="selection-section" aria-labelledby="selection-title">
        <div className="page-shell">
          <div className="section-heading inverse">
            <p className="eyebrow light">Sélection</p>
            <h2 id="selection-title">À l’atelier</h2>
            <Link href="/catalogue" className="arrow-link light-link">Tout voir <ArrowRight aria-hidden="true" size={18} /></Link>
          </div>
          <div className="equipment-grid home-equipment-grid">
            {equipment.slice(0, 4).map((item) => <EquipmentCard item={item} key={item.slug} dark />)}
          </div>
        </div>
      </section>

      <section id="realisations" className="editorial-section">
        <div className="page-shell editorial-grid">
          <div>
            <p className="eyebrow">Sur les plateaux</p>
            <h2>Des outils au service de l’image.</h2>
          </div>
          <div className="editorial-copy">
            <p>Haka Rent accompagne les équipes de fiction, documentaire, clip et publicité avec un parc préparé pour le tournage.</p>
            <a href="https://www.instagram.com/haka_rent" target="_blank" rel="noreferrer" className="arrow-link">
              Voir les productions <ArrowRight aria-hidden="true" size={18} />
            </a>
          </div>
        </div>
      </section>

      <section id="apropos" className="about-section">
        <div className="page-shell about-grid">
          <p className="eyebrow light">Haka Rent</p>
          <h2>Un partenaire technique ancré à Cotonou.</h2>
          <p>Caméra, lumière et machinerie. Une sélection professionnelle, entretenue et préparée pour les réalités de chaque production.</p>
        </div>
      </section>

      <footer id="contact" className="site-footer">
        <div className="page-shell footer-grid">
          <div><p className="eyebrow light">Contact</p><h2>Parlons matériel.</h2></div>
          <div className="footer-links">
            <a href="tel:+2290197090941">+229 01 97 09 09 41</a>
            <a href="mailto:hakaarent@gmail.com">hakaarent@gmail.com</a>
            <a href="https://api.whatsapp.com/send?phone=22997090941" target="_blank" rel="noreferrer">WhatsApp</a>
          </div>
          <div className="footer-meta">
            <span>Cotonou · Bénin</span>
            <div>
              <a href="https://www.instagram.com/haka_rent" target="_blank" rel="noreferrer">Instagram</a>
              <a href="https://www.facebook.com/hakarent/" target="_blank" rel="noreferrer">Facebook</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
