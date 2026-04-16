import type { Metadata, Viewport } from "next";
import { Poppins, Bebas_Neue } from "next/font/google";
import "./globals.css";
import ScrollRevealFallback from "./components/ScrollRevealFallback";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-poppins",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-bebas",
});

export const metadata: Metadata = {
  title: "Ruang Usaha — Coffee, Kos & Laundry",
  description:
    "Satu atap, tiga layanan. Coffee shop specialty, kos-kosan nyaman, dan laundry bersih. Ruang Usaha hadir untuk kebutuhan keseharian Anda.",
  metadataBase: new URL("https://cafesatusatu.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ruang Usaha — Coffee, Kos & Laundry",
    description:
      "Satu atap, tiga layanan. Coffee shop specialty, kos-kosan nyaman, dan laundry bersih.",
    type: "website",
    locale: "id_ID",
    siteName: "Satu Satu",
    url: "https://cafesatusatu.vercel.app",
    images: [
      {
        url: "/images/og-cover.jpeg",
        width: 1200,
        height: 630,
        alt: "Kost, Laundry dan Cafe Satu Satu — Cilincing, Jakarta Utara",
      },
    ],
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

const LOCAL_BUSINESS_JSONLD = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Kost, Laundry dan Cafe Satu Satu",
  description:
    "Satu atap, tiga layanan. Coffee shop specialty, kos-kosan nyaman, dan laundry bersih.",
  url: "https://cafesatusatu.vercel.app",
  telephone: "",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cilincing",
    addressRegion: "Jakarta Utara",
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -6.1143063,
    longitude: 106.9381912,
  },
  sameAs: [
    "https://www.instagram.com/kost.satusatu",
  ],
  image: "https://cafesatusatu.vercel.app/images/og-cover.jpeg",
  "@id": "https://cafesatusatu.vercel.app/#local-business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`h-full ${poppins.variable} ${bebasNeue.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_JSONLD) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <ScrollRevealFallback />
      </body>
    </html>
  );
}
