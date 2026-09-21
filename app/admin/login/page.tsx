import { AdminLogin } from "./login-client";

export const metadata = { title: "Connexion — Gestion Haka Rent" };

export default async function LoginPage({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  const { error } = await searchParams;
  return <AdminLogin callbackError={Boolean(error)} />;
}
