import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Satu Satu — Coffee, Kos & Laundry",
  description:
    "Satu atap, tiga layanan. Coffee shop specialty, kos-kosan nyaman, dan laundry bersih. Satu Satu hadir untuk kebutuhan keseharian Anda.",
  metadataBase: new URL("https://satusatu.id"),
  openGraph: {
    title: "Satu Satu — Coffee, Kos & Laundry",
    description:
      "Satu atap, tiga layanan. Coffee shop specialty, kos-kosan nyaman, dan laundry bersih.",
    siteName: "Satu Satu",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
