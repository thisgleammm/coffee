"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface Room {
  name: string;
  description: string;
  imagePath: string;
  imageAlt: string;
  detailLink: string;
}

const ROOMS: Room[] = [
  {
    name: "Single Room",
    description: "Kamar nyaman dilengkapi AC, Wi-Fi berkecepatan tinggi, dan kamar mandi dalam eksklusif.",
    imagePath: "/images/living/single-room.png",
    imageAlt: "Kamar kost single room",
    detailLink: "/living-detail",
  },
  {
    name: "Double Room",
    description: "Ruangan lebih luas dengan fasilitas lengkap, cocok untuk berbagi kenyamanan atau ruang ekstra.",
    imagePath: "/images/living/double-room.png",
    imageAlt: "Kamar kost double room",
    detailLink: "/living-detail",
  },
  {
    name: "Suite Room",
    description: "Kamar premium dengan area bersantai pribadi dan furnitur eksklusif untuk pengalaman terbaik.",
    imagePath: "/images/living/suite-room.png",
    imageAlt: "Kamar kost suite room",
    detailLink: "/living-detail",
  },
];

function RoomCard({ room }: { room: Room }) {
  return (
    <article className="product-card scroll-reveal-stagger">
      <div className="product-image-frame">
        <Image
          src={room.imagePath}
          alt={room.imageAlt}
          fill
          sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="product-image"
          loading="lazy"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="product-info">
        <div className="product-name-row">
          <h3 className="product-name">{room.name}</h3>
        </div>
        <p className="product-description">{room.description}</p>
        <Link
          href={room.detailLink}
          className="product-buy-link"
          aria-label={`Lihat detail dan harga ${room.name}`}
        >
          <span>Lihat Detail & Harga</span>
          <ArrowUpRight size={16} strokeWidth={2} />
        </Link>
      </div>
    </article>
  );
}

export default function LivingSection() {
  return (
    <section className="products-section scroll-reveal" id="living" aria-label="Layanan Kos">
      {/* Section header */}
      <div className="products-header">
        <div className="products-header-left scroll-reveal-left">
          <span className="products-eyebrow">Fasilitas Living</span>
          <h2 className="products-headline">
            TEMPAT<br />TINGGAL.
          </h2>
        </div>
        <div className="products-header-right scroll-reveal-right">
          <p className="products-tagline">
            Kos eksklusif dengan sirkulasi cahaya alami.
            Kenyamanan dan ketenangan ruang tinggal Anda adalah prioritas kami.
          </p>
        </div>
      </div>

      {/* Product grid */}
      <div className="products-grid">
        {ROOMS.map((room) => (
          <RoomCard key={room.name} room={room} />
        ))}
      </div>
    </section>
  );
}
