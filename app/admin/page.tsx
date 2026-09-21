import { redirect } from "next/navigation";
import { AdminCatalogue } from "./admin-client";
import { categories } from "@/lib/equipment";
import { rowToEquipment, type CatalogueRow } from "@/lib/catalogue-data";
import { createClient } from "@/lib/supabase/server";

export const metadata = { title: "Gestion du catalogue — Haka Rent" };
export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const supabase = await createClient();
  const { data: authData } = await supabase.auth.getClaims();
  if (!authData?.claims) redirect("/admin/login");

  const userId = authData.claims.sub;
  const { data: admin } = await supabase.from("admin_users").select("user_id").eq("user_id", userId).maybeSingle();
  if (!admin) {
    await supabase.auth.signOut();
    redirect("/admin/login?error=unauthorized");
  }

  const { data, error } = await supabase.from("catalogue_items").select("*").order("number", { ascending: true });
  if (error) throw new Error(`Chargement du catalogue impossible : ${error.message}`);

  return <AdminCatalogue initialEquipment={(data as CatalogueRow[]).map(rowToEquipment)} categories={categories.map((category) => category.name)} />;
}
