import ProductListing from "@/components/product-listing"

export const metadata = {
  title: "Products - SJ GROUPS",
  description: "Browse our premium bamboo salt and stone products with multiple roasting levels",
}

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background-light pt-24">
      <ProductListing />
    </main>
  )
}
