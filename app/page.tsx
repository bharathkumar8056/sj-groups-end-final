import Hero from "@/components/hero"
import ProductShowcase from "@/components/product-showcase"
import BambooSaltInfo from "@/components/bamboo-salt-info"
import BambooStoneInfo from "@/components/bamboo-stone-info"
import BenefitsSection from "@/components/benefits-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = {
  title: "Premium Bamboo Salt & Stone - SJ GROUPS",
  description: "Discover premium bamboo salt and bamboo stone products, 1-9x roasted from Viluppuram, Tamil Nadu",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />

      {/* Product Showcase */}
      <ProductShowcase />

      {/* Bamboo Salt Information */}
      <BambooSaltInfo />

      {/* Bamboo Stone Information */}
      <BambooStoneInfo />

      {/* IEC Certification (compact viewer) */}
      <section className="py-8 md:py-12">
        <div className="container-custom">
          <div className="text-center mb-6">
            <h2 className="section-title">Certification</h2>
            <p className="section-subtitle">Official IEC certificate for SJ GROUPS — open or download the PDF.</p>
          </div>

          <div className="mx-auto max-w-4xl bg-white/60 rounded-xl p-4 border border-border">
            <div className="md:flex md:items-center md:gap-6">
              {/* Desktop preview */}
              <div className="hidden md:block md:w-1/3">
                <object
                  data="/assets/certifications/Certificate-IEC.pdf"
                  type="application/pdf"
                  aria-label="IEC certificate preview"
                  className="w-full h-56 rounded-md overflow-hidden"
                />
              </div>

              {/* Compact info + actions */}
              <div className="w-full md:flex-1">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-red-50 rounded-md flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 2h7l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" stroke="#d64545" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M14 2v6h6" stroke="#d64545" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 11v4" stroke="#d64545" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>

                  <div className="flex-1">
                    <a
                      href="/assets/certifications/Certificate-IEC.pdf"
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold text-foreground block"
                    >
                      Certificate-IEC.pdf
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">IEC Certification — SJ GROUPS</p>
                    <p className="text-xs text-muted-foreground mt-2 hidden md:block">Click "View" to open the full certificate in a new tab for the best reading experience.</p>
                  </div>
                </div>

                <div className="mt-4 flex gap-3">
                  <a
                    href="/assets/certifications/Certificate-IEC.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md shadow-sm hover:brightness-95"
                  >
                    View
                  </a>

                  <a
                    href="/assets/certifications/Certificate-IEC.pdf"
                    download
                    className="inline-flex items-center px-4 py-2 border rounded-md text-muted-foreground hover:underline"
                  >
                    Download
                  </a>

                  <span className="ml-auto text-sm text-muted-foreground hidden md:inline">Verified • IEC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Order & Delivery Summary */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="section-title">Order & Delivery Details</h2>
            <p className="section-subtitle">Clear terms to help you plan bulk purchases and logistics.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl border border-border bg-white/50">
              <h3 className="text-xl font-bold text-foreground">Minimum Order</h3>
              <p className="text-primary font-semibold text-2xl mt-2">100 kgs</p>
              <p className="text-sm text-muted-foreground mt-3">We maintain consistent quality at scale — minimum orders ensure proper batching, roasting, and packaging. Contact us for custom quantites and packaging options for smaller sample orders.</p>
            </div>

            <div className="p-6 rounded-xl border border-border bg-white/50">
              <h3 className="text-xl font-bold text-foreground">Advance</h3>
              <p className="text-primary font-semibold text-2xl mt-2">30%</p>
              <p className="text-sm text-muted-foreground mt-3">A 30% advance secures production scheduling and raw material sourcing. The remaining amount is payable prior to shipment or as negotiated for repeat buyers.</p>
            </div>

            <div className="p-6 rounded-xl border border-border bg-white/50">
              <h3 className="text-xl font-bold text-foreground">Delivery Time</h3>
              <p className="text-primary font-semibold text-2xl mt-2">~30 Days</p>
              <p className="text-sm text-muted-foreground mt-3">Standard lead time is approximately 30 days from order confirmation. Timelines may vary for large custom orders or during peak seasons — contact us for expedited options.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Uses */}
      <BenefitsSection />

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/8 to-secondary-light/8 border-y border-border">
        <div className="container-custom text-center">
          <h2 className="section-title">Ready to Experience Premium Quality?</h2>
          <p className="section-subtitle">
            Browse our complete range of bamboo salt and stone products, expertly roasted to perfection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
                Shop Products
              </Button>
            </Link>
            <a href="https://wa.me/919092233456?text=Hi%20SJ%20GROUPS%2C%20I%20would%20like%20to%20get%20a%20quote">
              <Button size="lg" variant="outline">
                Get Quote via WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
