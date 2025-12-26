"use client"

import Link from "next/link"
import { Card } from "@/components/ui/card"

export default function ProductShowcase() {
  const products = [
    {
      name: "Bamboo Salt Collection",
      category: "Salt",
      link: "/products/bamboo-salt",
      image: "/assets/bamboo-salt-info.webp",
      description: "Single collection image representing Bamboo Salt variants from 3x to 9x. Click to view the Bamboo Salt collection page where 3x–5x details are available on request.",
      variants: [
        "Bamboo Salt 3x Roasted",
        "Bamboo Salt 4x Roasted",
        "Bamboo Salt 5x Roasted",
        "Bamboo Salt 6x Roasted",
        "Bamboo Salt 7x Roasted",
        "Bamboo Salt 8x Roasted",
        "Bamboo Salt 9x Roasted",
      ],
    },
    {
      name: "Bamboo Salt 6x Roasted",
      category: "Salt",
      link: "/products/bamboo-salt-6x",
      image: "/assets/bamboo-salt-6x.jpg",
      tagline: "Deep, robust mineral flavor.",
      detail: "Higher roast intensity with deep mineral notes — suited for therapeutic formulations and premium culinary use.",
    },
    {
      name: "Bamboo Salt 7x Roasted",
      category: "Salt",
      link: "/products/bamboo-salt-7x",
      image: "/assets/bamboo-salt-7x.jpg",
      tagline: "Ultra-refined premium salt.",
      detail: "Expertly processed for superior purity and unique flavor profiles for connoisseurs and professional use.",
    },
    {
      name: "Bamboo Salt 8x Roasted",
      category: "Salt",
      link: "/products/bamboo-salt-8x",
      image: "/assets/bamboo-salt-8x.jpg",
      tagline: "Collector-grade mineral salt.",
      detail: "Near-maximum roast transforming minerals into rich, rare profiles; ideal for premium wellness formulations.",
    },
    {
      name: "Bamboo Salt 9x Roasted",
      category: "Salt",
      link: "/products/bamboo-salt-9x",
      image: "/assets/bamboo-salt-9x.jpg",
      tagline: "The ultimate roast — masterpiece.",
      detail: "Our flagship 9x roast delivering unparalleled mineral concentration and ceremonial-grade quality.",
    },
    {
      name: "Bamboo Stone Collection",
      category: "Stone",
      link: "/products/bamboo-stone",
      image: "/assets/bamboo-stone-3x.png",
      description: "Single collection image representing Bamboo Stone variants from 3x to 9x. Click to view the full Bamboo Stone collection page.",
      variants: [
        "Bamboo Stone 3x Roasted",
        "Bamboo Stone 4x Roasted",
        "Bamboo Stone 5x Roasted",
        "Bamboo Stone 6x Roasted",
        "Bamboo Stone 7x Roasted",
        "Bamboo Stone 8x Roasted",
        "Bamboo Stone 9x Roasted",
      ],
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-background-light">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="line-accent"></div>
          </div>
          <h2 className="section-title">Our Premium Product Range</h2>
          <p className="section-subtitle">
            Expertly crafted bamboo salt and stone products with multiple roasting levels for diverse applications
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link key={product.name} href={product.link}>
              <Card className="card-premium p-6 h-full flex flex-col items-center justify-center text-center cursor-pointer group">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-40 h-40 object-cover rounded-lg mb-4 group-hover:shadow-lg transition-shadow"
                />
                <h3 className="font-serif font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                {/* If a product has variants (collection), show description + bold variant bullets; otherwise show tagline/detail */}
                {product.variants ? (
                  <>
                    <p className="text-sm text-muted-foreground mb-2">{product.description}</p>
                    <ul className="list-disc list-inside">
                      {product.variants?.map((v) => (
                        <li key={v} className="font-semibold text-sm text-foreground">{v}</li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <>
                    <p className="text-sm font-semibold text-foreground mb-1">{(product as any).tagline}</p>
                    <p className="text-xs text-muted-foreground">{(product as any).detail}</p>
                  </>
                )}
                <div className="mt-6 text-primary font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  View Details →
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
