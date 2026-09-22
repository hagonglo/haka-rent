"use client";

import { useState } from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export function ConfirmLogin({ tokenHash, next }: { tokenHash: string; next: string }) {
  const [state, setState] = useState<"idle" | "verifying">("idle");
  const [error, setError] = useState(tokenHash ? "" : "Ce lien est incomplet. Demandez-en un nouveau.");

  async function confirmLogin() {
    if (!tokenHash) return;

    setState("verifying");
    setError("");

    const supabase = createClient();
    const { error: authError } = await supabase.auth.verifyOtp({
      token_hash: tokenHash,
      type: "email",
    });

    if (authError) {
      setError("Le lien est invalide ou expiré. Demandez-en un nouveau.");
      setState("idle");
      return;
    }

    window.location.assign(next);
  }

  return (
    <main className="admin-login-shell">
      <section className="admin-login-card">
        <div className="admin-logo">HAKA<span>RENT</span></div>
        <p className="admin-eyebrow">Espace sécurisé</p>
        <h1>Confirmer la connexion</h1>
        <div className="admin-login-message admin-login-confirmation">
          <ShieldCheck aria-hidden="true" />
          <div>
            <strong>Une dernière étape</strong>
            <p>Cliquez ci-dessous pour ouvrir votre espace de gestion.</p>
          </div>
        </div>
        <button
          className="admin-primary"
          type="button"
          onClick={confirmLogin}
          disabled={!tokenHash || state === "verifying"}
        >
          {state === "verifying" ? "Vérification…" : "Se connecter"} <ArrowRight size={18} />
        </button>
        {error ? <p className="admin-login-error" role="alert">{error}</p> : null}
        <a className="admin-login-back" href="/admin/login">Demander un nouveau lien</a>
      </section>
    </main>
  );
}
