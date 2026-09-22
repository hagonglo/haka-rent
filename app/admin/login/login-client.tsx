"use client";

import { useState } from "react";
import { ArrowRight, Mail } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

const ADMIN_EMAIL = "hakaarent@gmail.com";

export function AdminLogin({ callbackError = false }: { callbackError?: boolean }) {
  const [state, setState] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState(callbackError ? "Le lien est invalide ou expiré. Demandez-en un nouveau." : "");

  async function sendLink() {
    setState("sending");
    setError("");
    const supabase = createClient();
    const { error: authError } = await supabase.auth.signInWithOtp({
      email: ADMIN_EMAIL,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/confirm?next=/admin`,
        shouldCreateUser: true,
      },
    });

    if (authError) {
      setError("Impossible d’envoyer le lien de connexion. Réessayez dans un instant.");
      setState("idle");
      return;
    }

    setState("sent");
  }

  return (
    <main className="admin-login-shell">
      <section className="admin-login-card">
        <div className="admin-logo">HAKA<span>RENT</span></div>
        <p className="admin-eyebrow">Espace sécurisé</p>
        <h1>Gestion du catalogue</h1>
        {state === "sent" ? (
          <div className="admin-login-message">
            <Mail aria-hidden="true" />
            <div>
              <strong>Consultez votre boîte mail</strong>
              <p>Un lien de connexion a été envoyé à {ADMIN_EMAIL}.</p>
            </div>
          </div>
        ) : (
          <>
            <p className="admin-login-copy">Recevez un lien de connexion à usage unique. Aucun mot de passe à retenir.</p>
            <div className="admin-login-email"><Mail size={18} aria-hidden="true" /> {ADMIN_EMAIL}</div>
            <button className="admin-primary" type="button" onClick={sendLink} disabled={state === "sending"}>
              {state === "sending" ? "Envoi…" : "Recevoir le lien"} <ArrowRight size={18} />
            </button>
          </>
        )}
        {error ? <p className="admin-login-error" role="alert">{error}</p> : null}
        <a className="admin-login-back" href="/">Retour au site</a>
      </section>
    </main>
  );
}
