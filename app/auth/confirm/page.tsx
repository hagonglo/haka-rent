import { ConfirmLogin } from "./confirm-login";

export const metadata = { title: "Confirmer la connexion — Gestion Haka Rent" };

function safeNextPath(value: string | undefined) {
  if (!value?.startsWith("/") || value.startsWith("//")) return "/admin";
  return value;
}

export default async function ConfirmPage({
  searchParams,
}: {
  searchParams: Promise<{ token_hash?: string; next?: string }>;
}) {
  const { token_hash: tokenHash, next } = await searchParams;

  return <ConfirmLogin tokenHash={tokenHash ?? ""} next={safeNextPath(next)} />;
}
