import { AdminCatalogue } from "./admin-client";
import { categories, equipment } from "@/lib/equipment";

export const metadata = {
  title: "Gestion du catalogue — Haka Rent",
};

export default function AdminPage() {
  return (
    <AdminCatalogue
      initialEquipment={equipment}
      categories={categories.map((category) => category.name)}
    />
  );
}
