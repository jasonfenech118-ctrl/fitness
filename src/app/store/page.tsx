"use client";

import { useState } from "react";
import { products, storeCategories } from "@/data/store";

export default function StorePage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("popular");

  const filteredProducts = products
    .filter((p) => selectedCategory === "All" || p.category === selectedCategory)
    .sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return b.reviews - a.reviews;
    });

  return (
    <>
      <section className="bg-secondary text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Supplement Store
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Premium supplements, equipment, and accessories to fuel your training.
            Free shipping on orders over $49.
          </p>
        </div>
      </section>

      <section className="py-8 bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            <div className="flex flex-wrap gap-2">
              {storeCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${
                    selectedCategory === cat
                      ? "bg-primary text-white"
                      : "bg-background border border-border hover:border-primary"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:border-primary"
            >
              <option value="popular">Most Popular</option>
              <option value="rating">Highest Rated</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-sm text-muted mb-6">
            {filteredProducts.length} products
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-surface border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all group"
              >
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 p-8 relative">
                  {product.badge && (
                    <span
                      className={`absolute top-3 left-3 text-white text-xs font-bold px-2 py-1 rounded-md ${
                        product.badge === "Sale"
                          ? "bg-green-500"
                          : product.badge === "Top Rated"
                          ? "bg-yellow-500"
                          : "bg-primary"
                      }`}
                    >
                      {product.badge}
                    </span>
                  )}
                  <div className="w-24 h-24 mx-auto bg-white/50 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-12 h-12 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      />
                    </svg>
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-xs text-muted uppercase tracking-wide mb-1">
                    {product.category}
                  </div>
                  <h3 className="font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-xs text-muted mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center gap-1 mb-3">
                    <div className="flex text-yellow-400 text-sm">
                      {"★".repeat(Math.floor(product.rating))}
                      {product.rating % 1 >= 0.5 && "½"}
                    </div>
                    <span className="text-xs text-muted">
                      ({product.reviews.toLocaleString()})
                    </span>
                  </div>
                  <ul className="space-y-1 mb-4">
                    {product.features.slice(0, 2).map((f) => (
                      <li key={f} className="text-xs text-muted flex items-start gap-1">
                        <svg
                          className="w-3 h-3 text-success flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-black text-primary">
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                  <button className="w-full mt-3 bg-primary hover:bg-primary-dark text-white py-2 rounded-lg text-sm font-bold transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
