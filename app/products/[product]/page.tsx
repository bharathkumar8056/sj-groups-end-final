import ProductDetail from "@/components/product-detail"
import { notFound } from "next/navigation"

const products = {
  "bamboo-salt": {
    name: "Bamboo Salt Collection",
    category: "bamboo-salt",
    image: "/assets/bamboo-salt-info.webp",
    price: "Contact for quote",
    description:
      "A complete Bamboo Salt collection covering roast levels 3x through 9x. Individual 6x–9x product pages remain available; 3x–5x are available on request via this collection page.",
    extraction:
      "Our bamboo salt is produced by carefully roasting sea salt and bamboo in controlled cycles. Each roast level develops distinct mineral profiles and properties; the collection groups these variants for convenience and bulk inquiries.",
    benefits: [
      "Available across multiple roast levels (3x–9x)",
      "Consistent quality and traceability",
      "Suitable for culinary, therapeutic, and industrial uses",
    ],
    variants: [
      "Bamboo Salt 3x Roasted",
      "Bamboo Salt 4x Roasted",
      "Bamboo Salt 5x Roasted",
      "Bamboo Salt 6x Roasted",
      "Bamboo Salt 7x Roasted",
      "Bamboo Salt 8x Roasted",
      "Bamboo Salt 9x Roasted",
    ],
    specifications: {
      storage: "Keep in cool, dry place",
      shelfLife: "2+ years depending on roast level",
    },
    minOrder: "100 kgs",
    delivery: "30 days",
    advance: "30%",
  },
  "bamboo-salt-6x": {
    name: "Bamboo Salt 6x Roasted",
    category: "bamboo-salt",
    image: "/assets/bamboo-salt-6x.jpg",
    price: "Contact for quote",
    roastLevel: "6x",
    description: "Premium 6x roasted bamboo salt with intense mineral profile",
    extraction:
      "Six roasting cycles produce our premium 6x bamboo salt. This extended process creates a deeply transformed product with exceptional purity and mineral density.",
    benefits: [
      "Intense therapeutic effects",
      "Maximum purity levels",
      "Premium wellness applications",
      "Enhanced alkalinity",
      "Professional grade quality",
    ],
    specifications: {
      roastLevel: "6x",
      color: "Dark charcoal gray",
      texture: "Fine granules",
      storage: "Store in airtight container in cool place",
      shelfLife: "2 years from production",
    },
    minOrder: "100 kgs",
    delivery: "30 days",
    advance: "30%",
  },
  "bamboo-salt-7x": {
    name: "Bamboo Salt 7x Roasted",
    category: "bamboo-salt",
    image: "/assets/bamboo-salt-7x.jpg",
    price: "Contact for quote",
    roastLevel: "7x",
    description: "Premium 7x roasted bamboo salt - ultra-premium quality",
    extraction:
      "Our signature 7x roasting process represents the pinnacle of bamboo salt production. Seven consecutive roasting cycles create an ultra-refined product of exceptional quality.",
    benefits: [
      "Ultra-premium quality",
      "Maximum therapeutic potency",
      "Exceptional mineral profile",
      "Perfect for advanced wellness applications",
      "Professional-grade product",
    ],
    specifications: {
      roastLevel: "7x",
      color: "Black with slight purple undertones",
      texture: "Very fine granules",
      storage: "Store in sealed glass container",
      shelfLife: "2+ years from production",
    },
    minOrder: "100 kgs",
    delivery: "30 days",
    advance: "30%",
  },
  "bamboo-salt-8x": {
    name: "Bamboo Salt 8x Roasted",
    category: "bamboo-salt",
    image: "/assets/bamboo-salt-8x.jpg",
    price: "Contact for quote",
    roastLevel: "8x",
    description: "Ultra-premium 8x roasted bamboo salt for discerning customers",
    extraction:
      "Eight roasting cycles create our ultra-premium 8x bamboo salt. This extended transformation process produces a product of unparalleled quality and potency.",
    benefits: [
      "Highest quality tier",
      "Maximum therapeutic benefits",
      "Exceptional mineral bioavailability",
      "Premium wellness investment",
      "Collector-grade product",
    ],
    specifications: {
      roastLevel: "8x",
      color: "Deep black",
      texture: "Ultra-fine granules",
      storage: "Store in sealed glass container in cool place",
      shelfLife: "3+ years from production",
    },
    minOrder: "100 kgs",
    delivery: "30 days",
    advance: "30%",
  },
  "bamboo-salt-9x": {
    name: "Bamboo Salt 9x Roasted",
    category: "bamboo-salt",
    image: "/assets/bamboo-salt-9x.jpg",
    price: "Contact for quote",
    roastLevel: "9x",
    description: "The ultimate 9x roasted bamboo salt - our finest creation",
    extraction:
      "Our masterpiece - nine roasting cycles represent the zenith of bamboo salt craftsmanship. This exclusive product combines ancient wisdom with modern quality control.",
    benefits: [
      "Ultimate quality tier",
      "Maximum mineral density",
      "Exceptional rarity and exclusivity",
      "Premium investment product",
      "Supreme therapeutic properties",
    ],
    specifications: {
      roastLevel: "9x",
      color: "Jet black with exceptional luster",
      texture: "Powder-fine granules",
      storage: "Store in sealed glass container away from light",
      shelfLife: "3+ years from production",
    },
    minOrder: "100 kgs",
    delivery: "30 days",
    advance: "30%",
  },
  /* Bamboo Stone individual entries commented out - using a single collection page instead
  "bamboo-stone-3x": {
    name: "Bamboo Stone 3x Roasted",
    category: "bamboo-stone",
    image: "/bamboo-stone-3x-roasted-mineral.jpg",
    price: "Contact for quote",
    roastLevel: "3x",
    description: "Premium 3x roasted bamboo stone with concentrated minerals",
    extraction:
      "Bamboo stones are natural mineral formations found within mature bamboo. Our 3x roasting process enhances their natural properties, creating a premium wellness product.",
    benefits: [
      "Natural mineral source",
      "Enhanced energy properties",
      "Supports natural detoxification",
      "Eco-friendly wellness solution",
      "Premium mineral supplementation",
    ],
    specifications: {
      roastLevel: "3x",
      origin: "Wild bamboo forests",
      density: "High mineral content",
      texture: "Natural stone formation",
      storage: "Keep in dry place",
      shelfLife: "Indefinite",
    },
    minOrder: "100 kgs",
    delivery: "30 days",
    advance: "30%",
  },
  */

  "bamboo-stone": {
    name: "Bamboo Stone Collection",
    category: "bamboo-stone",
    image: "/assets/bamboo-stone-3x.png",
    price: "Contact for quote",
    description: "A curated collection of Bamboo Stone variants (3x–9x). Select a roast level for specific inquiries — the collection page lists available variants and common product details.",
    extraction:
      "Bamboo Stone is sourced from mature bamboo and carefully roasted to concentrate natural minerals. Our collection process involves selecting clean, mature bamboo, extracting mineral-rich nodes, and applying controlled roasting cycles to enhance mineral density and stability. The stones are inspected, cleaned, and graded before packaging.",
    benefits: [
      "Concentrated natural minerals",
      "Eco-friendly and sustainably sourced",
      "Supports natural wellness applications",
      "Long shelf life and stable composition",
      "Suitable for industrial and therapeutic uses",
    ],
    applications: [
      "Mineral supplementation (external use)",
      "Traditional wellness preparations",
      "Natural water mineralization",
      "Cosmetic and spa applications",
      "Industrial mineral additives",
    ],
    variants: [
      "Bamboo Stone 3x Roasted",
      "Bamboo Stone 4x Roasted",
      "Bamboo Stone 5x Roasted",
      "Bamboo Stone 6x Roasted",
      "Bamboo Stone 7x Roasted",
      "Bamboo Stone 8x Roasted",
      "Bamboo Stone 9x Roasted",
    ],
    specifications: {
      origin: "Selected bamboo sources",
      storage: "Keep in dry place",
      shelfLife: "Indefinite",
    },
    minOrder: "100 kgs",
    delivery: "30 days",
    advance: "30%",
  },
  // "bamboo-stone-4x": {
  //   name: "Bamboo Stone 4x Roasted",
  //   category: "bamboo-stone",
  //   image: "/bamboo-stone-4x-roasted-dark-mineral.jpg",
  //   price: "Contact for quote",
  //   roastLevel: "4x",
  //   description: "Premium 4x roasted bamboo stone with enhanced mineral properties",
  //   extraction:
  //     "Four roasting cycles intensify the natural mineral properties of bamboo stones, making them ideal for advanced wellness applications.",
  //   benefits: [
  //     "Enhanced therapeutic properties",
  //     "Increased mineral potency",
  //     "Premium quality assurance",
  //     "Ideal for health professionals",
  //     "Natural wellness amplification",
  //   ],
  //   specifications: {
  //     roastLevel: "4x",
  //     origin: "Premium bamboo forests",
  //     density: "Very high mineral content",
  //     texture: "Enhanced stone formation",
  //     storage: "Keep in cool, dry place",
  //     shelfLife: "Indefinite",
  //   },
  //   minOrder: "100 kgs",
  //   delivery: "30 days",
  //   advance: "30%",
  // },
  // "bamboo-stone-5x": {
  //   name: "Bamboo Stone 5x Roasted",
  //   category: "bamboo-stone",
  //   image: "/bamboo-stone-5x-roasted-premium-quality.jpg",
  //   price: "Contact for quote",
  //   roastLevel: "5x",
  //   description: "Premium 5x roasted bamboo stone - maximum potency",
  //   extraction:
  //     "Five roasting cycles create our premium 5x bamboo stone, offering maximum therapeutic potential from natural mineral sources.",
  //   benefits: [
  //     "Maximum natural potency",
  //     "Superior wellness effects",
  //     "Professional-grade quality",
  //     "Eco-friendly solution",
  //     "Sustainable wellness",
  //   ],
  //   specifications: {
  //     roastLevel: "5x",
  //     origin: "Select premium forests",
  //     density: "Maximum mineral density",
  //     texture: "Transformed stone formation",
  //     storage: "Store in cool, dry place",
  //     shelfLife: "Indefinite",
  //   },
  //   minOrder: "100 kgs",
  //   delivery: "30 days",
  //   advance: "30%",
  // },
  // "bamboo-stone-6x": {
  //   name: "Bamboo Stone 6x Roasted",
  //   category: "bamboo-stone",
  //   image: "/bamboo-stone-black-6x-roasted.jpg",
  //   price: "Contact for quote",
  //   roastLevel: "6x",
  //   description: "Ultra-premium 6x roasted bamboo stone",
  //   extraction:
  //     "Six roasting cycles produce an exceptionally refined bamboo stone product suitable for the most demanding wellness applications.",
  //   benefits: [
  //     "Ultra-premium quality tier",
  //     "Exceptional mineral profile",
  //     "Advanced therapeutic use",
  //     "Professional certification compatible",
  //     "Investment-grade product",
  //   ],
  //   specifications: {
  //     roastLevel: "6x",
  //     origin: "Exclusive bamboo sources",
  //     density: "Exceptional mineral concentration",
  //     texture: "Highly refined formation",
  //     storage: "Store in sealed container",
  //     shelfLife: "Indefinite",
  //   },
  //   minOrder: "100 kgs",
  //   delivery: "30 days",
  //   advance: "30%",
  // },
  // "bamboo-stone-7x": {
  //   name: "Bamboo Stone 7x Roasted",
  //   category: "bamboo-stone",
  //   image: "/bamboo-stone-premium-black-7x-roasted.jpg",
  //   price: "Contact for quote",
  //   roastLevel: "7x",
  //   description: "Signature 7x roasted bamboo stone - our premium offering",
  //   extraction:
  //     "Seven roasting cycles create our signature 7x bamboo stone, representing the height of natural mineral enhancement.",
  //   benefits: [
  //     "Signature premium quality",
  //     "Maximum therapeutic potential",
  //     "Rare and exclusive",
  //     "Professional-grade materials",
  //     "Collector's item",
  //   ],
  //   specifications: {
  //     roastLevel: "7x",
  //     origin: "Premium handpicked sources",
  //     density: "Supreme mineral density",
  //     texture: "Masterfully refined",
  //     storage: "Store in glass or ceramic",
  //     shelfLife: "Indefinite",
  //   },
  //   minOrder: "100 kgs",
  //   delivery: "30 days",
  //   advance: "30%",
  // },
  // "bamboo-stone-8x": {
  //   name: "Bamboo Stone 8x Roasted",
  //   category: "bamboo-stone",
  //   image: "/bamboo-stone-ultimate-black-8x-roasted.jpg",
  //   price: "Contact for quote",
  //   roastLevel: "8x",
  //   description: "Ultra-exclusive 8x roasted bamboo stone",
  //   extraction:
  //     "Eight roasting cycles produce our ultra-exclusive bamboo stone, limited in availability and unmatched in quality.",
  //   benefits: [
  //     "Highest quality tier available",
  //     "Supreme wellness investment",
  //     "Exceptional rarity",
  //     "Premium therapeutic grade",
  //     "Exclusive market offering",
  //   ],
  //   specifications: {
  //     roastLevel: "8x",
  //     origin: "Ultra-select bamboo sources",
  //     density: "Absolute maximum mineral content",
  //     texture: "Finest possible refinement",
  //     storage: "Premium storage recommended",
  //     shelfLife: "Indefinite with proper care",
  //   },
  //   minOrder: "100 kgs",
  //   delivery: "30 days",
  //   advance: "30%",
  // },
  // "bamboo-stone-9x": {
  //   name: "Bamboo Stone 9x Roasted",
  //   category: "bamboo-stone",
  //   image: "/bamboo-stone-exclusive-9x-roasted-premium.jpg",
  //   price: "Contact for quote",
  //   roastLevel: "9x",
  //   description: "The ultimate 9x roasted bamboo stone - our masterpiece",
  //   extraction:
  //     "Nine roasting cycles represent the pinnacle of bamboo stone processing. This exclusive product is the ultimate expression of our craftsmanship.",
  //   benefits: [
  //     "Ultimate exclusive creation",
  //     "Absolute premium quality",
  //     "Maximum rarity and value",
  //     "Supreme therapeutic benefits",
  //     "Heritage quality product",
  //   ],
  //   specifications: {
  //     roastLevel: "9x",
  //     origin: "Only finest bamboo sources selected",
  //     density: "Supreme mineral density",
  //     texture: "Ultimate refinement",
  //     storage: "Premium environmental control",
  //     shelfLife: "Indefinite with premium care",
  //   },
  //   minOrder: "100 kgs",
  //   delivery: "30 days",
  //   advance: "30%",
  // },
}

export async function generateStaticParams() {
  return Object.keys(products).map((slug) => ({
    product: slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ product: string }> }) {
  const { product: productSlug } = await params
  const product = products[productSlug as keyof typeof products]
  if (!product) return { title: "Product Not Found" }
  return {
    title: `${product.name} - SJ GROUPS`,
    description: product.description,
  }
}

export default async function ProductDetailPage({ params }: { params: Promise<{ product: string }> }) {
  const { product: productSlug } = await params
  const product = products[productSlug as keyof typeof products]

  if (!product) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background-light pt-24 pb-16">
      <ProductDetail product={product} />
    </main>
  )
}
