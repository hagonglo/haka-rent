import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Haka Rent — Location de matériel cinéma à Cotonou", template: "%s — Haka Rent" },
  description: "Catalogue professionnel de matériel cinéma, caméra, lumière et machinerie à Cotonou, Bénin.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body>{children}</body></html>;
}
