"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight } from "lucide-react";

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const message = [
      "Bonjour Haka Rent,",
      `Je suis ${name.trim()}.`,
      phone.trim() ? `Mon numéro WhatsApp : ${phone.trim()}.` : "",
      "Je souhaite recevoir votre catalogue et échanger au sujet d'une location.",
    ].filter(Boolean).join("\n");

    window.open(`https://wa.me/22997090941?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form className="transition-form" onSubmit={handleSubmit}>
      <label>
        <span>Nom ou entreprise</span>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          autoComplete="name"
          placeholder="Votre nom"
          required
        />
      </label>

      <label>
        <span>Téléphone WhatsApp</span>
        <input
          type="tel"
          name="phone"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          autoComplete="tel"
          placeholder="+229…"
          required
        />
      </label>

      <button type="submit">
        Contacter Haka Rent <ArrowUpRight aria-hidden="true" size={19} />
      </button>
    </form>
  );
}
