"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const PRODUCT_CATEGORIES = ["MINUMAN", "MERCHANDISE"] as const;
type ProductCategory = (typeof PRODUCT_CATEGORIES)[number];

interface Product {
  name: string;
  price: string;
  description: string;
  imagePath: string;
  imageAlt: string;
  purchaseLink: string;
}

const CATEGORY_INDEX_MAP: Record<ProductCategory, string> = {
  MINUMAN: "01",
  MERCHANDISE: "02",
};

const PRODUCTS_BY_CATEGORY: Record<ProductCategory, Product[]> = {
  MINUMAN: [
    {
      name: "Espresso",
      price: "Rp 18.000",
      description: "Single origin, full body, crema tebal.",
      imagePath: "/images/products/espresso.png",
      imageAlt: "Secangkir espresso single origin dengan crema tebal dari Satu Satu",
      purchaseLink: "#",
    },
    {
      name: "Café Latte",
      price: "Rp 25.000",
      description: "Espresso shot dengan steamed milk lembut.",
      imagePath: "/images/products/latte.png",
      imageAlt: "Café latte dengan latte art dan steamed milk lembut dari Satu Satu",
      purchaseLink: "#",
    },
    {
      name: "Cold Brew",
      price: "Rp 28.000",
      description: "Diseduh dingin 18 jam. Smooth, low acidity.",
      imagePath: "/images/products/coldbrew.png",
      imageAlt: "Segelas cold brew kopi diseduh 18 jam dari Satu Satu",
      purchaseLink: "#",
    },
    {
      name: "Matcha Latte",
      price: "Rp 30.000",
      description: "Ceremonial grade matcha, oat milk.",
      imagePath: "/images/products/matcha.png",
      imageAlt: "Matcha latte ceremonial grade dengan oat milk dari Satu Satu",
      purchaseLink: "#",
    },
  ],
  MERCHANDISE: [
    {
      name: "Whole Bean Coffee",
      price: "Rp 95.000",
      description: "Single origin Guatemala, 340g roasted beans.",
      imagePath: "/products/beans.png",
      imageAlt: "Biji kopi single origin Guatemala 340g dari Satu Satu",
      purchaseLink: "#",
    },
    {
      name: "Satu Satu Tumbler",
      price: "Rp 120.000",
      description: "Tumbler 12oz, 360° lid, matte putih.",
      imagePath: "/products/tumbler.png",
      imageAlt: "Tumbler matte putih 12oz merchandise Satu Satu",
      purchaseLink: "#",
    },
    {
      name: "Canvas Tote Bag",
      price: "Rp 85.000",
      description: "Tote kanvas tebal, cocok untuk daily use.",
      imagePath: "/products/tote.png",
      imageAlt: "Tote bag kanvas tebal merchandise Satu Satu",
      purchaseLink: "#",
    },
  ],
};

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card scroll-reveal-stagger">
      <div className="product-image-frame">
        <Image
          src={product.imagePath}
          alt={product.imageAlt}
          fill
          sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="product-image"
          loading="lazy"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="product-info">
        <div className="product-name-row">
          <h3 className="product-name">{product.name}</h3>
          <span className="product-price">{product.price}</span>
        </div>
        <p className="product-description">{product.description}</p>

      </div>
    </article>
  );
}

export default function CoffeeProducts() {
  const [activeCategory, setActiveCategory] =
    useState<ProductCategory>("MINUMAN");

  const products = PRODUCTS_BY_CATEGORY[activeCategory];

  return (
    <section className="products-section scroll-reveal" id="layanan" aria-label="Produk Kopi">
      <div className="products-header">
        <div className="products-header-left scroll-reveal-left">
          <span className="products-eyebrow">Lini Produk</span>
          <h2 className="products-headline">
            KAMI<br />SAJIKAN.
          </h2>
        </div>
      </div>

      {/* Category tabs */}
      <div className="products-tab-bar" role="tablist" aria-label="Kategori produk">
        {PRODUCT_CATEGORIES.map((category) => (
          <button
            key={category}
            role="tab"
            aria-selected={activeCategory === category}
            className={`products-tab ${activeCategory === category ? "products-tab--active" : ""}`}
            onClick={() => setActiveCategory(category)}
          >
            <span className="tab-index">
              {CATEGORY_INDEX_MAP[category]}
            </span>
            {category}
          </button>
        ))}
        <div className="tab-bar-line" aria-hidden="true" />
      </div>

      {/* Product grid */}
      <div className="products-grid" role="tabpanel">
        {products.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>

      {/* Section bottom CTA */}
      <div className="products-footer scroll-reveal" style={{ marginTop: "3rem", display: "flex", justifyContent: "center" }}>
        <a href="#" className="cta-primary" aria-label="Pesan delivery online">
          Pesan Delivery Online
          <ArrowUpRight size={18} strokeWidth={2} style={{ marginLeft: "0.5rem" }} />
        </a>
      </div>
    </section>
  );
}
