import type { Metadata, Viewport } from "next";
import "./globals.css";
import ScrollRevealFallback from "./components/ScrollRevealFallback";

export const metadata: Metadata = {
  title: "Ruang Usaha — Coffee, Kos & Laundry",
  description:
    "Satu atap, tiga layanan. Coffee shop specialty, kos-kosan nyaman, dan laundry bersih. Ruang Usaha hadir untuk kebutuhan keseharian Anda.",
  metadataBase: new URL("https://satusatu.id"),
  openGraph: {
    title: "Ruang Usaha — Coffee, Kos & Laundry",
    description:
      "Satu atap, tiga layanan. Coffee shop specialty, kos-kosan nyaman, dan laundry bersih.",
    type: "website",
    locale: "id_ID",
    siteName: "Satu Satu",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#964233",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="h-full">
      <body className="min-h-full flex flex-col">
        {children}
        <ScrollRevealFallback />
      </body>
    </html>
  );
}
