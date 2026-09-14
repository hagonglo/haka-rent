import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { ContactForm } from "@/components/contact-form";

export default function Home() {
  return (
    <main className="transition-page">
      <header className="transition-header">
        <Link href="/" className="transition-brand" aria-label="Haka Rent — Accueil">
          <Image src="/haka-rent-logo.png" alt="Haka Rent" width={190} height={80} priority />
        </Link>

        <nav aria-label="Navigation principale">
          <a href="#contact">Contact</a>
          <a href="https://www.instagram.com/haka_rent" target="_blank" rel="noreferrer">
            Nous suivre <ArrowUpRight aria-hidden="true" size={15} />
          </a>
        </nav>
      </header>

      <section className="coming-hero" aria-labelledby="coming-title">
        <div className="coming-orbit" aria-hidden="true">
          <span>Camera</span><i />
          <span>Light</span><i />
          <span>Grip</span>
        </div>

        <p className="coming-kicker">Location de matériel cinéma · Cotonou, Bénin</p>
        <h1 id="coming-title">
          <span>Coming</span>
          <span className="coming-blue">Soon</span>
        </h1>

        <div className="coming-intro">
          <p>
            Notre nouveau catalogue professionnel arrive bientôt. En attendant,
            notre équipe reste disponible pour préparer vos tournages.
          </p>
          <a href="#contact" className="round-link" aria-label="Aller au contact">
            <ArrowDownRight aria-hidden="true" size={30} />
          </a>
        </div>

        <div className="coming-watermark" aria-hidden="true">HK</div>
      </section>

      <section id="contact" className="transition-contact" aria-labelledby="contact-title">
        <div className="contact-heading">
          <p className="transition-label">Restons en contact</p>
          <h2 id="contact-title">Recevoir le catalogue.<br />Préparer un tournage.</h2>
        </div>

        <div className="contact-panel">
          <p className="contact-copy">
            Dites-nous qui vous êtes et ce que vous recherchez. Votre message sera
            préparé automatiquement dans WhatsApp, sans stockage de vos données.
          </p>
          <ContactForm />
        </div>
      </section>

      <footer className="transition-footer">
        <div className="footer-identity">
          <Image src="/haka-rent-logo.png" alt="" width={170} height={70} />
          <p>Camera · Light · Grip</p>
        </div>

        <div className="transition-footer-links">
          <a href="tel:+2290197090941">+229 01 97 09 09 41</a>
          <a href="mailto:hakaarent@gmail.com">hakaarent@gmail.com</a>
          <a href="https://api.whatsapp.com/send?phone=22997090941" target="_blank" rel="noreferrer">WhatsApp</a>
        </div>

        <div className="transition-socials">
          <a href="https://www.instagram.com/haka_rent" target="_blank" rel="noreferrer">Instagram <ArrowUpRight aria-hidden="true" size={14} /></a>
          <a href="https://www.facebook.com/hakarent/" target="_blank" rel="noreferrer">Facebook <ArrowUpRight aria-hidden="true" size={14} /></a>
        </div>

        <p className="transition-copyright">© {new Date().getFullYear()} Haka Rent · Cotonou, Bénin</p>
      </footer>
    </main>
  );
}
