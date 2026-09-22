import { redirect } from "next/navigation";
import { rowToRealisation, type RealisationRow } from "@/lib/realisation-data";
import { createClient } from "@/lib/supabase/server";
import { AdminRealisations } from "./realisations-client";

export const metadata = { title: "Gestion des réalisations — Haka Rent" };
export const dynamic = "force-dynamic";

export default async function AdminRealisationsPage() {
  const supabase = await createClient();
  const { data: authData } = await supabase.auth.getClaims();
  if (!authData?.claims) redirect("/admin/login");

  const userId = authData.claims.sub;
  const { data: admin } = await supabase.from("admin_users").select("user_id").eq("user_id", userId).maybeSingle();
  if (!admin) {
    await supabase.auth.signOut();
    redirect("/admin/login?error=unauthorized");
  }

  const { data, error } = await supabase.from("realisations").select("*").order("sort_order", { ascending: true });
  if (error) throw new Error(`Chargement des réalisations impossible : ${error.message}`);

  return <AdminRealisations initialItems={(data as RealisationRow[]).map(rowToRealisation)} />;
}
