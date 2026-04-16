"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const PRODUCT_CATEGORIES = ["MINUMAN", "MERCHANDISE"] as const;
type ProductCategory = (typeof PRODUCT_CATEGORIES)[number];

const CATEGORY_INDEX: Record<ProductCategory, string> = {
  MINUMAN: "01",
  MERCHANDISE: "02",
};

interface Product {
  name: string;
  price: string;
  description: string;
  imagePath: string;
  purchaseLink: string;
}

const PRODUCTS_BY_CATEGORY: Record<ProductCategory, Product[]> = {
  MINUMAN: [
    {
      name: "Espresso",
      price: "Rp 18.000",
      description: "Single origin, full body, crema tebal.",
      imagePath: "/images/products/espresso.png",
      purchaseLink: "#",
    },
    {
      name: "Café Latte",
      price: "Rp 25.000",
      description: "Espresso shot dengan steamed milk lembut.",
      imagePath: "/images/products/latte.png",
      purchaseLink: "#",
    },
    {
      name: "Cold Brew",
      price: "Rp 28.000",
      description: "Diseduh dingin 18 jam. Smooth, low acidity.",
      imagePath: "/images/products/coldbrew.png",
      purchaseLink: "#",
    },
    {
      name: "Matcha Latte",
      price: "Rp 30.000",
      description: "Ceremonial grade matcha, oat milk.",
      imagePath: "/images/products/matcha.png",
      purchaseLink: "#",
    },
  ],
  MERCHANDISE: [
    {
      name: "Whole Bean Coffee",
      price: "Rp 95.000",
      description: "Single origin Guatemala, 340g roasted beans.",
      imagePath: "/products/beans.png",
      purchaseLink: "#",
    },
    {
      name: "Satu Satu Tumbler",
      price: "Rp 120.000",
      description: "Tumbler 12oz, 360° lid, matte putih.",
      imagePath: "/products/tumbler.png",
      purchaseLink: "#",
    },
    {
      name: "Canvas Tote Bag",
      price: "Rp 85.000",
      description: "Tote kanvas tebal, cocok untuk daily use.",
      imagePath: "/products/tote.png",
      purchaseLink: "#",
    },
  ],
};

export default function CoffeeProducts() {
  const [activeCategory, setActiveCategory] =
    useState<ProductCategory>("MINUMAN");

  const products = PRODUCTS_BY_CATEGORY[activeCategory];

  return (
    <section
      className="products-section"
      id="layanan"
      aria-label="Produk Kopi"
    >
      {/* Section header */}
      <div className="products-header scroll-reveal">
        <div className="products-header-left">
          <span className="products-eyebrow">Lini Produk</span>
          <h2 className="products-headline">
            KAMI
            <br />
            SAJIKAN.
          </h2>
        </div>
        <div className="products-header-right">
          <p className="products-tagline">
            Setiap cangkir disiapkan dengan hati. Setiap produk dirancang dengan
            teliti.
          </p>
        </div>
      </div>

      {/* Category tabs */}
      <div
        className="products-tab-bar scroll-reveal"
        role="tablist"
        aria-label="Kategori produk"
      >
        {PRODUCT_CATEGORIES.map((category) => (
          <button
            key={category}
            role="tab"
            aria-selected={activeCategory === category}
            className={`products-tab ${activeCategory === category ? "products-tab--active" : ""}`}
            onClick={() => setActiveCategory(category)}
          >
            <span className="tab-index">{CATEGORY_INDEX[category]}</span>
            {category}
          </button>
        ))}
        <div className="tab-bar-line" aria-hidden="true" />
      </div>

      {/* Product grid */}
      <div className="products-grid" role="tabpanel">
        {products.map((product, index) => (
          <article
            key={product.name}
            className="product-card scroll-reveal"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <div className="product-image-frame">
              <Image
                src={product.imagePath}
                alt={product.name}
                fill
                sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="product-image"
              />
            </div>
            <div className="product-info">
              <div className="product-name-row">
                <h3 className="product-name">{product.name}</h3>
                <span className="product-price">{product.price}</span>
              </div>
              <p className="product-description">{product.description}</p>
              <a
                href={product.purchaseLink}
                className="product-buy-link"
                aria-label={`Beli ${product.name} online`}
              >
                <span>Beli Online</span>
                <ArrowUpRight size={16} strokeWidth={2} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
