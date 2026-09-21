"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import {
  ArrowLeft,
  Check,
  ChevronRight,
  Eye,
  FilePenLine,
  ImagePlus,
  LogOut,
  Plus,
  Search,
} from "lucide-react";
import type { Equipment } from "@/lib/equipment";

type Status = "published" | "draft";
type AdminEquipment = Equipment & { status: Status };

type Props = {
  initialEquipment: Equipment[];
  categories: string[];
};

export function AdminCatalogue({ initialEquipment, categories }: Props) {
  const [items, setItems] = useState<AdminEquipment[]>(
    initialEquipment.map((item) => ({ ...item, status: "published" as const })),
  );
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<"all" | Status>("all");
  const [selectedSlug, setSelectedSlug] = useState(items[0]?.slug ?? "");
  const [notice, setNotice] = useState("");

  const filteredItems = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase("fr");
    return items.filter((item) => {
      const matchesStatus = status === "all" || item.status === status;
      const haystack = `${item.name} ${item.brand} ${item.model} ${item.reference}`.toLocaleLowerCase("fr");
      return matchesStatus && (!normalizedQuery || haystack.includes(normalizedQuery));
    });
  }, [items, query, status]);

  const selected = items.find((item) => item.slug === selectedSlug) ?? filteredItems[0];
  const draftCount = items.filter((item) => item.status === "draft").length;
  const publishedCount = items.length - draftCount;

  function updateSelected(patch: Partial<AdminEquipment>) {
    if (!selected) return;
    setItems((current) =>
      current.map((item) => (item.slug === selected.slug ? { ...item, ...patch } : item)),
    );
    setNotice("Modifications conservées dans cette prévisualisation.");
  }

  function createDraft() {
    const number = String(items.length + 1).padStart(3, "0");
    const slug = `nouveau-materiel-${Date.now()}`;
    const newItem: AdminEquipment = {
      ...items[0],
      slug,
      reference: `HAKA-${number}`,
      number,
      name: "Nouveau matériel",
      brand: "",
      model: "",
      category: categories[0] ?? "Caméra",
      subcategory: "",
      description: "",
      longDescription: "",
      specs: [],
      details: [],
      included: [],
      compatibilities: [],
      availability: "Disponible",
      featured: false,
      images: [],
      alt: "",
      whatsapp: "",
      status: "draft",
    };
    setItems((current) => [newItem, ...current]);
    setSelectedSlug(slug);
    setStatus("all");
    setNotice("Nouveau brouillon créé.");
  }

  return (
    <main className="admin-shell">
      <aside className="admin-sidebar">
        <div className="admin-logo">HAKA<span>RENT</span></div>
        <nav aria-label="Navigation de gestion">
          <a className="active" href="#catalogue"><FilePenLine size={18} /> Catalogue</a>
          <a href="#photos"><ImagePlus size={18} /> Médiathèque</a>
        </nav>
        <div className="admin-user">
          <span>Administrateur</span>
          <button type="button" aria-label="Se déconnecter"><LogOut size={17} /></button>
        </div>
      </aside>

      <section className="admin-workspace" id="catalogue">
        <header className="admin-topbar">
          <div>
            <p className="admin-eyebrow">Espace de gestion</p>
            <h1>Catalogue</h1>
          </div>
          <button type="button" className="admin-primary" onClick={createDraft}>
            <Plus size={18} /> Nouveau matériel
          </button>
        </header>

        <div className="admin-stats" aria-label="Résumé du catalogue">
          <button type="button" className={status === "all" ? "active" : ""} onClick={() => setStatus("all")}>
            <span>Total</span><strong>{items.length}</strong>
          </button>
          <button type="button" className={status === "published" ? "active" : ""} onClick={() => setStatus("published")}>
            <span>Publiés</span><strong>{publishedCount}</strong>
          </button>
          <button type="button" className={status === "draft" ? "active" : ""} onClick={() => setStatus("draft")}>
            <span>Brouillons</span><strong>{draftCount}</strong>
          </button>
        </div>

        <div className="admin-grid">
          <section className="admin-list-panel" aria-label="Liste du matériel">
            <label className="admin-search">
              <Search size={18} aria-hidden="true" />
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Rechercher une référence…" />
            </label>
            <div className="admin-list-meta"><span>{filteredItems.length} références</span><span>Nom · Statut</span></div>
            <div className="admin-equipment-list">
              {filteredItems.map((item) => (
                <button
                  type="button"
                  className={item.slug === selected?.slug ? "selected" : ""}
                  key={item.slug}
                  onClick={() => { setSelectedSlug(item.slug); setNotice(""); }}
                >
                  <span className="admin-thumb">
                    {item.images[0] ? <Image src={item.images[0]} alt="" fill sizes="64px" /> : <ImagePlus size={19} />}
                  </span>
                  <span className="admin-item-copy">
                    <small>{item.reference} · {item.category}</small>
                    <strong>{item.name}</strong>
                  </span>
                  <span className={`admin-status ${item.status}`}>{item.status === "published" ? "Publié" : "Brouillon"}</span>
                  <ChevronRight size={18} />
                </button>
              ))}
            </div>
          </section>

          {selected ? (
            <section className="admin-editor" aria-label={`Modifier ${selected.name}`}>
              <div className="admin-editor-heading">
                <button type="button" className="admin-back"><ArrowLeft size={17} /> Retour</button>
                <a href={`/catalogue/${selected.slug}`} target="_blank" rel="noreferrer"><Eye size={17} /> Prévisualiser</a>
              </div>

              <div className="admin-editor-title">
                <div>
                  <p>{selected.reference}</p>
                  <h2>{selected.name}</h2>
                </div>
                <span className={`admin-status large ${selected.status}`}>{selected.status === "published" ? "Publié" : "Brouillon"}</span>
              </div>

              <div className="admin-form">
                <label className="wide">Nom du matériel<input value={selected.name} onChange={(event) => updateSelected({ name: event.target.value })} /></label>
                <label>Marque<input value={selected.brand} onChange={(event) => updateSelected({ brand: event.target.value })} /></label>
                <label>Modèle<input value={selected.model} onChange={(event) => updateSelected({ model: event.target.value })} /></label>
                <label>Catégorie<select value={selected.category} onChange={(event) => updateSelected({ category: event.target.value })}>{categories.map((category) => <option key={category}>{category}</option>)}</select></label>
                <label>Sous-catégorie<input value={selected.subcategory} onChange={(event) => updateSelected({ subcategory: event.target.value })} /></label>
                <label className="wide">Description courte<textarea rows={4} value={selected.description} onChange={(event) => updateSelected({ description: event.target.value })} /></label>
                <label className="admin-check wide"><input type="checkbox" checked={selected.featured} onChange={(event) => updateSelected({ featured: event.target.checked })} /> Mettre en avant sur la page d’accueil</label>
              </div>

              <div className="admin-photo-strip">
                <div className="admin-form-section-title"><div><span>Photos</span><strong>{selected.images.length} fichier{selected.images.length > 1 ? "s" : ""}</strong></div><button type="button"><ImagePlus size={17} /> Ajouter</button></div>
                <div className="admin-photo-grid">
                  {selected.images.slice(0, 4).map((image) => <div key={image}><Image src={image} alt="" fill sizes="120px" /></div>)}
                  {!selected.images.length && <div className="empty"><ImagePlus size={24} /></div>}
                </div>
              </div>

              <div className="admin-actions">
                <span>{notice}</span>
                <button type="button" className="admin-secondary" onClick={() => updateSelected({ status: "draft" })}>Enregistrer le brouillon</button>
                <button type="button" className="admin-primary" onClick={() => updateSelected({ status: "published" })}><Check size={18} /> Publier</button>
              </div>
            </section>
          ) : (
            <section className="admin-editor admin-empty"><p>Aucun matériel ne correspond à cette recherche.</p></section>
          )}
        </div>
      </section>
    </main>
  );
}
