"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface ProductProps {
  product: {
    name: string
    category: string
    roastLevel?: string
    slug?: string
    image?: string
    description: string
    extraction?: string
    benefits?: string[]
    specifications?: Record<string, string>
    applications?: string[]
    handling?: string
    minOrder?: string
    delivery?: string
    advance?: string
    variants?: string[]
  }
}

export default function ProductDetail({ product }: ProductProps) {
  return (
    <section className="py-12 md:py-20">
      <div className="container-custom">
        <Link href="/products" className="text-primary hover:brightness-125 font-medium mb-8 inline-block">
          ← Back to Products
        </Link>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Product Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary-light/20 rounded-3xl blur-2xl -z-10"></div>
            <div className="rounded-3xl overflow-hidden border-2 border-primary/20 aspect-square shadow-xl">
              <img
                src={product.image || `/assets/${product.slug || product.category}-${product.roastLevel || "default"}.jpg`}
                alt={product.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  const base = product.image ? product.image : `/assets/${product.slug || product.category}-${product.roastLevel || "default"}`
                  const paths = [
                    `${base}.png`,
                    `${base}.jpeg`,
                    `${base}.webp`,
                  ]

                  const tryNextPath = (index: number) => {
                    if (index < paths.length) {
                      target.src = paths[index]
                      target.onerror = () => tryNextPath(index + 1)
                    }
                  }

                  tryNextPath(0)
                }}
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                {product.category === "bamboo-salt" ? "Bamboo Salt" : "Bamboo Stone"}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{product.name}</h1>
            <p className="text-lg text-muted-foreground mb-6">{product.description}</p>

            {product.variants && product.variants.length > 0 && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">Available Roast Levels</h3>
                <ul className="list-disc list-inside text-muted-foreground">
                  {product.variants.map((v, i) => (
                    <li key={i}>{v}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8 p-4 bg-secondary-light/10 rounded-xl">
              <div>
                <p className="text-primary font-bold text-2xl">{product.minOrder}</p>
                <p className="text-xs text-muted-foreground">Minimum Order</p>
              </div>
              <div>
                <p className="text-primary font-bold text-2xl">{product.advance}</p>
                <p className="text-xs text-muted-foreground">Advance</p>
              </div>
              <div>
                <p className="text-primary font-bold text-2xl">{product.delivery}</p>
                <p className="text-xs text-muted-foreground">Delivery Time</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`https://wa.me/919092233456?text=Hi%20SJ%20GROUPS%2C%20I%20am%20interested%20in%20${encodeURIComponent(product.name)}`}
              >
                <Button size="lg" className="w-full bg-primary text-white hover:brightness-90">
                  Get Quote via WhatsApp
                </Button>
              </a>
              <a href="tel:+919092233456">
                <Button size="lg" variant="outline" className="w-full bg-transparent">
                  Call Us
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Extraction Process */}
        {product.extraction && (
          <Card className="card-premium p-8 mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Extraction & Production Process</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{product.extraction}</p>
          </Card>
        )}

        {/* Benefits */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {product.benefits && product.benefits.length > 0 && (
            <Card className="card-premium p-8">
              <h2 className="text-2xl font-bold text-primary mb-6">Key Benefits</h2>
              <ul className="space-y-4">
                {product.benefits.map((benefit, index) => (
                  <li key={index} className="flex gap-3 items-start">
                    <span className="text-primary font-bold mt-1">✓</span>
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </Card>
          )}

          {product.applications && product.applications.length > 0 && (
            <Card className="card-premium p-8">
              <h2 className="text-2xl font-bold text-primary mb-6">Applications & Usage</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                {product.applications.map((app, idx) => (
                  <li key={idx}>{app}</li>
                ))}
              </ul>
              {product.handling && (
                <div className="mt-4">
                  <h3 className="text-sm font-semibold text-foreground mb-1">Handling & Care</h3>
                  <p className="text-muted-foreground text-sm">{product.handling}</p>
                </div>
              )}
            </Card>
          )}

          {/* Specifications */}
          {product.specifications && Object.keys(product.specifications).length > 0 && (
            <Card className="card-premium p-8">
              <h2 className="text-2xl font-bold text-primary mb-6">Specifications</h2>
              <div className="space-y-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="border-b border-border pb-3 last:border-0">
                    <p className="text-sm font-semibold text-foreground capitalize">{key.replace(/([A-Z])/g, " $1")}</p>
                    <p className="text-muted-foreground">{value}</p>
                  </div>
                ))}
              </div>
            </Card>
          )}
        </div>

        {/* Related Products */}
        <Card className="card-premium p-8 bg-gradient-to-br from-primary/5 to-secondary-light/5">
          <h2 className="text-2xl font-bold text-foreground mb-6">Explore Other Products</h2>
          <p className="text-muted-foreground mb-6">
            We offer multiple roasting levels for both Bamboo Salt and Bamboo Stone. Contact us to explore our complete
            range.
          </p>
          <Link href="/products">
            <Button size="lg" className="bg-primary text-white hover:brightness-90">
              View All Products
            </Button>
          </Link>
        </Card>
      </div>
    </section>
  )
}
