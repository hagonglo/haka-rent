import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function SiteHeader({ theme = "light" }: { theme?: "light" | "dark" }) {
  return (
    <header className={`site-header ${theme === "dark" ? "dark-theme" : "light-theme"}`}>
      <div className="page-shell nav-inner">
        <Link href="/" aria-label="Haka Rent — Accueil"><img className="brand-logo" src="/haka-rent-logo.png" alt="Haka Rent" /></Link>
        <nav className="desktop-nav" aria-label="Navigation principale">
          <Link href="/catalogue">Catalogue</Link><Link href="/realisations">Réalisations</Link><Link href="/#apropos">À propos</Link>
        </nav>
        <a className="header-contact" href="https://api.whatsapp.com/send?phone=22997090941" target="_blank" rel="noreferrer">
          Contact <ArrowUpRight aria-hidden="true" size={16} />
        </a>
        <details className="mobile-menu">
          <summary>Menu</summary>
          <nav aria-label="Navigation mobile">
            <Link href="/catalogue">Catalogue</Link><Link href="/realisations">Réalisations</Link><Link href="/#apropos">À propos</Link>
            <a href="https://api.whatsapp.com/send?phone=22997090941" target="_blank" rel="noreferrer">Contact</a>
          </nav>
        </details>
      </div>
    </header>
  );
}
