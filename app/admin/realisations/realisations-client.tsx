"use client";

import { useMemo, useRef, useState } from "react";
import { ArrowLeft, Check, ChevronRight, Eye, FilePenLine, ImagePlus, LoaderCircle, LogOut, Plus, Search, X } from "lucide-react";
import { realisationToRow, rowToRealisation, type Realisation, type RealisationRow, type RealisationStatus } from "@/lib/realisation-data";
import { createClient } from "@/lib/supabase/client";

function slugify(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export function AdminRealisations({ initialItems }: { initialItems: Realisation[] }) {
  const [items, setItems] = useState(initialItems);
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<"all" | RealisationStatus>("all");
  const [selectedId, setSelectedId] = useState(initialItems[0]?.id ?? "");
  const [notice, setNotice] = useState("");
  const [busy, setBusy] = useState(false);
  const fileInput = useRef<HTMLInputElement>(null);

  const filteredItems = useMemo(() => {
    const needle = query.trim().toLocaleLowerCase("fr");
    return items.filter((item) => {
      const haystack = `${item.title} ${item.client} ${item.category} ${item.year}`.toLocaleLowerCase("fr");
      return (status === "all" || item.status === status) && (!needle || haystack.includes(needle));
    });
  }, [items, query, status]);

  const selected = items.find((item) => item.id === selectedId) ?? filteredItems[0];
  const draftCount = items.filter((item) => item.status === "draft").length;

  function updateSelected(patch: Partial<Realisation>) {
    if (!selected) return;
    setItems((current) => current.map((item) => item.id === selected.id ? { ...item, ...patch } : item));
    setNotice("Modifications non enregistrées.");
  }

  async function createDraft() {
    setBusy(true);
    setNotice("");
    const supabase = createClient();
    const title = "Nouvelle réalisation";
    const base = {
      slug: `${slugify(title)}-${Date.now()}`,
      title,
      client: "",
      category: "",
      year: String(new Date().getFullYear()),
      location: "Cotonou, Bénin",
      summary: "",
      description: "",
      images: [] as string[],
      video_url: "",
      external_url: "",
      featured: false,
      sort_order: Math.max(0, ...items.map((item) => item.sortOrder)) + 10,
      status: "draft" as const,
    };
    const { data, error } = await supabase.from("realisations").insert(base).select("*").single();
    if (error) setNotice(`Création impossible : ${error.message}`);
    else {
      const created = rowToRealisation(data as RealisationRow);
      setItems((current) => [...current, created]);
      setSelectedId(created.id);
      setStatus("all");
      setNotice("Brouillon créé.");
    }
    setBusy(false);
  }

  async function saveSelected(nextStatus?: RealisationStatus) {
    if (!selected) return;
    setBusy(true);
    setNotice("");
    const supabase = createClient();
    const item = { ...selected, status: nextStatus ?? selected.status };
    const { data, error } = await supabase.from("realisations").update(realisationToRow(item)).eq("id", item.id).select("*").single();
    if (error) setNotice(`Enregistrement impossible : ${error.message}`);
    else {
      const saved = rowToRealisation(data as RealisationRow);
      setItems((current) => current.map((entry) => entry.id === saved.id ? saved : entry));
      setNotice(saved.status === "published" ? "Réalisation publiée." : "Brouillon enregistré.");
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
      const { error } = await supabase.storage.from("realisation-images").upload(path, file, { upsert: false });
      if (error) { setNotice(`Échec de l’envoi : ${error.message}`); setBusy(false); return; }
      uploaded.push(supabase.storage.from("realisation-images").getPublicUrl(path).data.publicUrl);
    }
    const images = [...selected.images, ...uploaded];
    const { data, error } = await supabase.from("realisations").update({ images }).eq("id", selected.id).select("*").single();
    if (error) setNotice(`Photos envoyées, mais projet non mis à jour : ${error.message}`);
    else {
      const saved = rowToRealisation(data as RealisationRow);
      setItems((current) => current.map((entry) => entry.id === saved.id ? saved : entry));
      setNotice(`${uploaded.length} photo${uploaded.length > 1 ? "s" : ""} ajoutée${uploaded.length > 1 ? "s" : ""}.`);
    }
    if (fileInput.current) fileInput.current.value = "";
    setBusy(false);
  }

  async function removePhoto(image: string) {
    if (!selected) return;
    const supabase = createClient();
    const images = selected.images.filter((entry) => entry !== image);
    const { data, error } = await supabase.from("realisations").update({ images }).eq("id", selected.id).select("*").single();
    if (error) setNotice(`Suppression impossible : ${error.message}`);
    else {
      const saved = rowToRealisation(data as RealisationRow);
      setItems((current) => current.map((entry) => entry.id === saved.id ? saved : entry));
      setNotice("Photo retirée du projet.");
    }
  }

  async function signOut() {
    await createClient().auth.signOut();
    window.location.assign("/admin/login");
  }

  return (
    <main className="admin-shell">
      <aside className="admin-sidebar">
        <div className="admin-logo">HAKA<span>RENT</span></div>
        <nav aria-label="Navigation de gestion"><a href="/admin"><FilePenLine size={18} /> Catalogue</a><a className="active" href="/admin/realisations"><ImagePlus size={18} /> Réalisations</a></nav>
        <div className="admin-user"><span>Administrateur</span><button type="button" onClick={signOut} aria-label="Se déconnecter"><LogOut size={17} /></button></div>
      </aside>
      <section className="admin-workspace">
        <header className="admin-topbar"><div><p className="admin-eyebrow">Espace de gestion</p><h1>Réalisations</h1></div><button type="button" className="admin-primary" onClick={createDraft} disabled={busy}><Plus size={18} /> Nouveau projet</button></header>
        <div className="admin-stats" aria-label="Résumé des réalisations"><button type="button" className={status === "all" ? "active" : ""} onClick={() => setStatus("all")}><span>Total</span><strong>{items.length}</strong></button><button type="button" className={status === "published" ? "active" : ""} onClick={() => setStatus("published")}><span>Publiées</span><strong>{items.length - draftCount}</strong></button><button type="button" className={status === "draft" ? "active" : ""} onClick={() => setStatus("draft")}><span>Brouillons</span><strong>{draftCount}</strong></button></div>
        <div className="admin-grid">
          <section className="admin-list-panel" aria-label="Liste des réalisations">
            <label className="admin-search"><Search size={18} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Rechercher un projet…" /></label>
            <div className="admin-list-meta"><span>{filteredItems.length} projets</span><span>Titre · Statut</span></div>
            <div className="admin-equipment-list">{filteredItems.map((item) => <button type="button" className={item.id === selected?.id ? "selected" : ""} key={item.id} onClick={() => { setSelectedId(item.id); setNotice(""); }}><span className="admin-thumb">{item.images[0] ? <img src={item.images[0]} alt="" /> : <ImagePlus size={19} />}</span><span className="admin-item-copy"><small>{item.category || "Projet"} · {item.year}</small><strong>{item.title}</strong></span><span className={`admin-status ${item.status}`}>{item.status === "published" ? "Publié" : "Brouillon"}</span><ChevronRight size={18} /></button>)}</div>
          </section>
          {selected ? <section className="admin-editor" aria-label={`Modifier ${selected.title}`}>
            <div className="admin-editor-heading"><button type="button"><ArrowLeft size={17} /> Retour</button><a href={`/realisations/${selected.slug}`} target="_blank" rel="noreferrer"><Eye size={17} /> Prévisualiser</a></div>
            <div className="admin-editor-title"><div><p>{selected.category || "RÉALISATION"}</p><h2>{selected.title}</h2></div><span className={`admin-status large ${selected.status}`}>{selected.status === "published" ? "Publié" : "Brouillon"}</span></div>
            <div className="admin-form">
              <label className="wide">Titre du projet<input value={selected.title} onChange={(event) => updateSelected({ title: event.target.value })} /></label>
              <label>Client ou production<input value={selected.client} onChange={(event) => updateSelected({ client: event.target.value })} /></label>
              <label>Catégorie<input value={selected.category} onChange={(event) => updateSelected({ category: event.target.value })} placeholder="Fiction, publicité, clip…" /></label>
              <label>Année<input value={selected.year} onChange={(event) => updateSelected({ year: event.target.value })} /></label>
              <label>Lieu<input value={selected.location} onChange={(event) => updateSelected({ location: event.target.value })} /></label>
              <label>Ordre d’affichage<input type="number" value={selected.sortOrder} onChange={(event) => updateSelected({ sortOrder: Number(event.target.value) || 0 })} /></label>
              <label>Adresse de la page<input value={selected.slug} onChange={(event) => updateSelected({ slug: slugify(event.target.value) })} /></label>
              <label className="wide">Résumé<textarea rows={4} value={selected.summary} onChange={(event) => updateSelected({ summary: event.target.value })} /></label>
              <label className="wide">Présentation détaillée<textarea rows={8} value={selected.description} onChange={(event) => updateSelected({ description: event.target.value })} /></label>
              <label className="wide">Lien vidéo<input type="url" value={selected.videoUrl} onChange={(event) => updateSelected({ videoUrl: event.target.value })} placeholder="https://…" /></label>
              <label className="wide">Lien externe du projet<input type="url" value={selected.externalUrl} onChange={(event) => updateSelected({ externalUrl: event.target.value })} placeholder="https://…" /></label>
              <label className="admin-check wide"><input type="checkbox" checked={selected.featured} onChange={(event) => updateSelected({ featured: event.target.checked })} /> Mettre en avant sur la page d’accueil</label>
            </div>
            <div className="admin-photo-strip"><div className="admin-form-section-title"><div><span>Photos du projet</span><strong>{selected.images.length} fichier{selected.images.length > 1 ? "s" : ""}</strong></div><button type="button" onClick={() => fileInput.current?.click()} disabled={busy}><ImagePlus size={17} /> Ajouter</button><input ref={fileInput} className="admin-file-input" type="file" accept="image/jpeg,image/png,image/webp,image/avif" multiple onChange={(event) => uploadPhotos(event.target.files)} /></div><div className="admin-photo-grid">{selected.images.map((image) => <div key={image}><img src={image} alt="" /><button type="button" onClick={() => removePhoto(image)} aria-label="Retirer cette photo"><X size={15} /></button></div>)}{!selected.images.length && <div className="empty"><ImagePlus size={24} /></div>}</div></div>
            <div className="admin-actions"><span>{busy ? <><LoaderCircle className="admin-spinner" size={16} /> Enregistrement…</> : notice}</span><button type="button" className="admin-secondary" disabled={busy} onClick={() => saveSelected("draft")}>Enregistrer le brouillon</button><button type="button" className="admin-primary" disabled={busy} onClick={() => saveSelected("published")}><Check size={18} /> Publier</button></div>
          </section> : <section className="admin-editor admin-empty"><p>Aucune réalisation ne correspond à cette recherche.</p></section>}
        </div>
      </section>
    </main>
  );
}
