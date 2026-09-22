"use client";

import { useMemo, useRef, useState } from "react";
import { ArrowLeft, Check, ChevronRight, Eye, FilePenLine, ImagePlus, LoaderCircle, LogOut, Plus, Search, X } from "lucide-react";
import { equipmentToRow, rowToEquipment, type AdminEquipment, type CatalogueRow, type CatalogueStatus } from "@/lib/catalogue-data";
import { createClient } from "@/lib/supabase/client";

type Props = { initialEquipment: AdminEquipment[]; categories: string[] };

function slugify(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export function AdminCatalogue({ initialEquipment, categories }: Props) {
  const [items, setItems] = useState(initialEquipment);
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<"all" | CatalogueStatus>("all");
  const [selectedId, setSelectedId] = useState(items[0]?.id ?? "");
  const [notice, setNotice] = useState("");
  const [busy, setBusy] = useState(false);
  const fileInput = useRef<HTMLInputElement>(null);

  const filteredItems = useMemo(() => {
    const needle = query.trim().toLocaleLowerCase("fr");
    return items.filter((item) => {
      const haystack = `${item.name} ${item.brand} ${item.model} ${item.reference}`.toLocaleLowerCase("fr");
      return (status === "all" || item.status === status) && (!needle || haystack.includes(needle));
    });
  }, [items, query, status]);

  const selected = items.find((item) => item.id === selectedId) ?? filteredItems[0];
  const draftCount = items.filter((item) => item.status === "draft").length;
  const publishedCount = items.length - draftCount;

  function updateSelected(patch: Partial<AdminEquipment>) {
    if (!selected) return;
    setItems((current) => current.map((item) => item.id === selected.id ? { ...item, ...patch } : item));
    setNotice("Modifications non enregistrées.");
  }

  async function createDraft() {
    setBusy(true);
    setNotice("");
    const supabase = createClient();
    const number = String(Math.max(0, ...items.map((item) => Number(item.number) || 0)) + 1).padStart(3, "0");
    const name = "Nouveau matériel";
    const base: Omit<AdminEquipment, "id"> = {
      slug: `${slugify(name)}-${Date.now()}`,
      reference: `HAKA-${number}`,
      number,
      name,
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
      alt: `${name} — matériel disponible chez Haka Rent`,
      whatsapp: "https://api.whatsapp.com/send?phone=22997090941",
      status: "draft",
    };
    const { data, error } = await supabase.from("catalogue_items").insert(baseToRow(base)).select("*").single();
    if (error) setNotice(`Création impossible : ${error.message}`);
    else {
      const created = rowToEquipment(data as CatalogueRow);
      setItems((current) => [created, ...current]);
      setSelectedId(created.id);
      setStatus("all");
      setNotice("Brouillon créé.");
    }
    setBusy(false);
  }

  async function saveSelected(nextStatus?: CatalogueStatus) {
    if (!selected) return;
    setBusy(true);
    setNotice("");
    const supabase = createClient();
    const item = { ...selected, status: nextStatus ?? selected.status };
    const { data, error } = await supabase.from("catalogue_items").update(equipmentToRow(item)).eq("id", item.id).select("*").single();
    if (error) setNotice(`Enregistrement impossible : ${error.message}`);
    else {
      const saved = rowToEquipment(data as CatalogueRow);
      setItems((current) => current.map((entry) => entry.id === saved.id ? saved : entry));
      setNotice(saved.status === "published" ? "Fiche publiée." : "Brouillon enregistré.");
    }
    setBusy(false);
  }

  async function uploadPhotos(files: FileList | null) {
    if (!selected || !files?.length) return;
    setBusy(true);
    setNotice("Envoi des photos…");
    const supabase = createClient();
    const uploaded: string[] = [];

    for (const file of Array.from(files)) {
      const safeName = slugify(file.name.replace(/\.[^.]+$/, ""));
      const extension = file.name.split(".").pop()?.toLowerCase() || "webp";
      const path = `${selected.slug}/${crypto.randomUUID()}-${safeName}.${extension}`;
      const { error } = await supabase.storage.from("catalogue-images").upload(path, file, { upsert: false });
      if (error) {
        setNotice(`Échec de l’envoi : ${error.message}`);
        setBusy(false);
        return;
      }
      uploaded.push(supabase.storage.from("catalogue-images").getPublicUrl(path).data.publicUrl);
    }

    const nextImages = [...selected.images, ...uploaded];
    const { data, error } = await supabase.from("catalogue_items").update({ images: nextImages }).eq("id", selected.id).select("*").single();
    if (error) setNotice(`Photos envoyées, mais fiche non mise à jour : ${error.message}`);
    else {
      const saved = rowToEquipment(data as CatalogueRow);
      setItems((current) => current.map((entry) => entry.id === saved.id ? saved : entry));
      setNotice(`${uploaded.length} photo${uploaded.length > 1 ? "s" : ""} ajoutée${uploaded.length > 1 ? "s" : ""}.`);
    }
    if (fileInput.current) fileInput.current.value = "";
    setBusy(false);
  }

  async function removePhoto(image: string) {
    if (!selected) return;
    const images = selected.images.filter((entry) => entry !== image);
    const supabase = createClient();
    const { data, error } = await supabase.from("catalogue_items").update({ images }).eq("id", selected.id).select("*").single();
    if (error) setNotice(`Suppression impossible : ${error.message}`);
    else {
      const saved = rowToEquipment(data as CatalogueRow);
      setItems((current) => current.map((entry) => entry.id === saved.id ? saved : entry));
      setNotice("Photo retirée de la fiche.");
    }
  }

  async function signOut() {
    const supabase = createClient();
    await supabase.auth.signOut();
    window.location.assign("/admin/login");
  }

  return (
    <main className="admin-shell">
      <aside className="admin-sidebar">
        <div className="admin-logo">HAKA<span>RENT</span></div>
        <nav aria-label="Navigation de gestion"><a className="active" href="/admin"><FilePenLine size={18} /> Catalogue</a><a href="/admin/realisations"><ImagePlus size={18} /> Réalisations</a></nav>
        <div className="admin-user"><span>Administrateur</span><button type="button" onClick={signOut} aria-label="Se déconnecter"><LogOut size={17} /></button></div>
      </aside>

      <section className="admin-workspace" id="catalogue">
        <header className="admin-topbar"><div><p className="admin-eyebrow">Espace de gestion</p><h1>Catalogue</h1></div><button type="button" className="admin-primary" onClick={createDraft} disabled={busy}><Plus size={18} /> Nouveau matériel</button></header>
        <div className="admin-stats" aria-label="Résumé du catalogue">
          <button type="button" className={status === "all" ? "active" : ""} onClick={() => setStatus("all")}><span>Total</span><strong>{items.length}</strong></button>
          <button type="button" className={status === "published" ? "active" : ""} onClick={() => setStatus("published")}><span>Publiés</span><strong>{publishedCount}</strong></button>
          <button type="button" className={status === "draft" ? "active" : ""} onClick={() => setStatus("draft")}><span>Brouillons</span><strong>{draftCount}</strong></button>
        </div>

        <div className="admin-grid">
          <section className="admin-list-panel" aria-label="Liste du matériel">
            <label className="admin-search"><Search size={18} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Rechercher une référence…" /></label>
            <div className="admin-list-meta"><span>{filteredItems.length} références</span><span>Nom · Statut</span></div>
            <div className="admin-equipment-list">{filteredItems.map((item) => <button type="button" className={item.id === selected?.id ? "selected" : ""} key={item.id} onClick={() => { setSelectedId(item.id); setNotice(""); }}><span className="admin-thumb">{item.images[0] ? <img src={item.images[0]} alt="" /> : <ImagePlus size={19} />}</span><span className="admin-item-copy"><small>{item.reference} · {item.category}</small><strong>{item.name}</strong></span><span className={`admin-status ${item.status}`}>{item.status === "published" ? "Publié" : "Brouillon"}</span><ChevronRight size={18} /></button>)}</div>
          </section>

          {selected ? <section className="admin-editor" aria-label={`Modifier ${selected.name}`}>
            <div className="admin-editor-heading"><button type="button"><ArrowLeft size={17} /> Retour</button><a href={`/catalogue/${selected.slug}`} target="_blank" rel="noreferrer"><Eye size={17} /> Prévisualiser</a></div>
            <div className="admin-editor-title"><div><p>{selected.reference}</p><h2>{selected.name}</h2></div><span className={`admin-status large ${selected.status}`}>{selected.status === "published" ? "Publié" : "Brouillon"}</span></div>
            <div className="admin-form">
              <label className="wide">Nom du matériel<input value={selected.name} onChange={(event) => updateSelected({ name: event.target.value })} /></label>
              <label>Marque<input value={selected.brand} onChange={(event) => updateSelected({ brand: event.target.value })} /></label>
              <label>Modèle<input value={selected.model} onChange={(event) => updateSelected({ model: event.target.value })} /></label>
              <label>Catégorie<select value={selected.category} onChange={(event) => updateSelected({ category: event.target.value })}>{categories.map((category) => <option key={category}>{category}</option>)}</select></label>
              <label>Sous-catégorie<input value={selected.subcategory} onChange={(event) => updateSelected({ subcategory: event.target.value })} /></label>
              <label className="wide">Description courte<textarea rows={4} value={selected.description} onChange={(event) => updateSelected({ description: event.target.value })} /></label>
              <label className="wide">Description détaillée<textarea rows={8} value={selected.longDescription} onChange={(event) => updateSelected({ longDescription: event.target.value })} /></label>
              <label className="admin-check wide"><input type="checkbox" checked={selected.featured} onChange={(event) => updateSelected({ featured: event.target.checked })} /> Mettre en avant sur la page d’accueil</label>
            </div>
            <div className="admin-photo-strip" id="photos"><div className="admin-form-section-title"><div><span>Photos</span><strong>{selected.images.length} fichier{selected.images.length > 1 ? "s" : ""}</strong></div><button type="button" onClick={() => fileInput.current?.click()} disabled={busy}><ImagePlus size={17} /> Ajouter</button><input ref={fileInput} className="admin-file-input" type="file" accept="image/jpeg,image/png,image/webp,image/avif" multiple onChange={(event) => uploadPhotos(event.target.files)} /></div><div className="admin-photo-grid">{selected.images.map((image) => <div key={image}><img src={image} alt="" /><button type="button" onClick={() => removePhoto(image)} aria-label="Retirer cette photo"><X size={15} /></button></div>)}{!selected.images.length && <div className="empty"><ImagePlus size={24} /></div>}</div></div>
            <div className="admin-actions"><span>{busy ? <><LoaderCircle className="admin-spinner" size={16} /> Enregistrement…</> : notice}</span><button type="button" className="admin-secondary" disabled={busy} onClick={() => saveSelected("draft")}>Enregistrer le brouillon</button><button type="button" className="admin-primary" disabled={busy} onClick={() => saveSelected("published")}><Check size={18} /> Publier</button></div>
          </section> : <section className="admin-editor admin-empty"><p>Aucun matériel ne correspond à cette recherche.</p></section>}
        </div>
      </section>
    </main>
  );
}

function baseToRow(item: Omit<AdminEquipment, "id">) {
  return {
    slug: item.slug, reference: item.reference, number: item.number, name: item.name, brand: item.brand, model: item.model,
    category: item.category, subcategory: item.subcategory, description: item.description, long_description: item.longDescription,
    specs: item.specs, details: item.details, included: item.included, compatibilities: item.compatibilities,
    availability: item.availability, featured: item.featured, images: item.images, alt: item.alt, whatsapp: item.whatsapp, status: item.status,
  };
}
