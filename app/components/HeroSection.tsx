"use client";

import { useEffect, useCallback, useState } from "react";
import Image from "next/image";

const BUSINESS_LABELS = ["COFFEE", "LIVING", "LAUNDRY"] as const;
type BusinessLabel = (typeof BUSINESS_LABELS)[number];

const BUSINESS_IMAGES: Record<BusinessLabel, string> = {
  COFFEE: "https://3dskyfree.com/wp-content/uploads/cafe-caffeeshop-3d-model-1.webp",
  LIVING: "https://lbcdn.airpaz.com/hotelimages/2564148/living-kost-syariah-d153a71927ba2b1ebf3cba28548fbaf8.jpg",
  LAUNDRY: "https://cdn.prod.website-files.com/65dde60bfb5a3b09523f0bed/662a14bab823700dc7739309_modern-laundry-room-with-stacked-washer-dryer-and-wood-cabinetry-scaled.webp",
};

const ANIMATION_INTERVAL_MS = 2800;
const EXIT_ANIMATION_MS = 400;

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  const currentLabel = BUSINESS_LABELS[activeIndex];
  const currentImage = BUSINESS_IMAGES[currentLabel];

  const advanceSlide = useCallback(() => {
    setIsAnimatingOut(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % BUSINESS_LABELS.length);
      setIsAnimatingOut(false);
    }, EXIT_ANIMATION_MS);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(advanceSlide, ANIMATION_INTERVAL_MS);
    return () => clearInterval(intervalId);
  }, [advanceSlide]);

  return (
    <section className="hero-section" aria-label="Hero section">
      {/* Grain texture overlay */}
      <div className="grain-overlay" aria-hidden="true" />

      <div className="hero-inner">
        {/* Main headline with slot ticker */}
        <div className="hero-headline-wrapper">
          <h1 className="hero-headline">
            <span className="headline-prefix">Satu Satu.</span>
            <span className="headline-ticker-row" aria-live="polite">
              <span
                className={`headline-ticker-word ${isAnimatingOut ? "ticker-exit" : "ticker-enter"}`}
                style={{ color: "#964233" }}
              >
                {currentLabel}
              </span>
            </span>
          </h1>
        </div>

        {/* CTA */}
        <div className="hero-cta-group">
          <a href="#layanan" className="cta-primary">
            Jelajahi Layanan
          </a>
          <a href="#kontak" className="cta-ghost">
            Hubungi Kami
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>

      <div className="hero-image-wrapper">
        <Image
          src={currentImage}
          alt={`Ruang Usaha layanan ${currentLabel.toLowerCase()}`}
          fill
          sizes="38vw"
          className={`hero-image ${isAnimatingOut ? "image-exit" : "image-enter"}`}
          style={{ objectFit: "cover" }}
          unoptimized
        />
      </div>
    </section>
  );
}
