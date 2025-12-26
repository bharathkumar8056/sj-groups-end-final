"use client"

import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"

export default function AboutContent() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  return (
    <section className="py-12 md:py-20">
      <div className="container-custom space-y-16">
        {/* About Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="section-title text-foreground">About SJ GROUPS</h1>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              SJ GROUPS is a premium producer of bamboo salt and bamboo stones, dedicated to bringing the finest quality
              natural products to customers worldwide. Located in Viluppuram, Tamil Nadu, we combine traditional
              craftsmanship with modern quality standards.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Our commitment to excellence is reflected in every product we create. From sourcing the finest bamboo to
              meticulous roasting processes, we ensure that each batch meets our exacting standards.
            </p>
            <div className="space-y-3">
              <div className="flex gap-3">
                <span className="text-primary font-bold">📍</span>
                <div>
                  <p className="font-semibold text-foreground">Location</p>
                  <p className="text-muted-foreground">Viluppuram, Tamil Nadu 605602, India</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-primary font-bold">📞</span>
                <div>
                  <p className="font-semibold text-foreground">Contact</p>
                  <p className="text-muted-foreground">+91 909 223 3456</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-primary font-bold">✉️</span>
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <p className="text-muted-foreground">sjgroupsvpm@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary-light/20 rounded-3xl blur-2xl -z-10"></div>
            <div className="rounded-3xl overflow-hidden border-2 border-primary/20 aspect-square shadow-xl">
              <img 
                src="/assets/hero-banner.png" 
                alt="SJ GROUPS - About"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Our Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="card-premium p-8">
            <h2 className="text-2xl font-bold text-primary mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              To produce and deliver the highest quality bamboo salt and bamboo stones while maintaining sustainable and
              ethical practices. We aim to serve health-conscious consumers and wellness professionals worldwide with
              products that enhance natural vitality and well-being.
            </p>
          </Card>
          <Card className="card-premium p-8">
            <h2 className="text-2xl font-bold text-primary mb-4">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed">
              To become the leading global supplier of premium bamboo-based products recognized for uncompromising
              quality, sustainability, and innovation. We envision a world where traditional wisdom and modern
              excellence create transformative wellness solutions.
            </p>
          </Card>
        </div>

        {/* Why Choose Us */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Why Choose SJ GROUPS</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Premium Quality",
                description: "Every batch undergoes rigorous quality control to ensure excellence",
              },
              {
                title: "Sustainable Sourcing",
                description: "We source our bamboo from sustainable, well-managed forests",
              },
              {
                title: "Expert Craftsmanship",
                description: "Traditional roasting methods combined with modern techniques",
              },
              {
                title: "Competitive Pricing",
                description: "Direct sourcing allows us to offer competitive wholesale rates",
              },
              {
                title: "Reliable Delivery",
                description: "Consistent 30-day delivery schedules for all bulk orders",
              },
              {
                title: "Customer Support",
                description: "Dedicated support team available 24/7 for inquiries",
              },
            ].map((item, index) => (
              <Card key={index} className="card-premium p-6 text-center">
                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Policies */}
        <Tabs defaultValue="privacy" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="privacy">Privacy Policy</TabsTrigger>
            <TabsTrigger value="terms">Terms of Service</TabsTrigger>
          </TabsList>

          <TabsContent value="privacy" className="space-y-6">
            <Card className="card-premium p-8">
              <h2 className="text-2xl font-bold text-primary mb-6">Privacy Policy</h2>
              <div className="space-y-6 text-muted-foreground">
                <div>
                  <h3 className="font-bold text-foreground mb-2">1. Information Collection</h3>
                  <p>
                    We collect information you provide directly to us, such as when you request a quote, place an order,
                    or contact us. This may include your name, email address, phone number, company information, and
                    shipping address.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">2. Information Use</h3>
                  <p>
                    We use the information we collect to process orders, respond to inquiries, send promotional
                    materials (if opted in), and improve our services. We may also use your information to comply with
                    legal obligations.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">3. Data Protection</h3>
                  <p>
                    We implement appropriate technical and organizational measures to protect your personal information
                    against unauthorized access, alteration, disclosure, or destruction.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">4. Information Sharing</h3>
                  <p>
                    We do not sell, trade, or rent your personal information to third parties. We may share information
                    with trusted partners only as necessary to fulfill orders or provide services you have requested.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">5. Contact Us</h3>
                  <p>
                    If you have questions about our privacy practices, please contact us at sjgroupsvpm@gmail.com or
                    call +91 909 223 3456.
                  </p>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="terms" className="space-y-6">
            <Card className="card-premium p-8">
              <h2 className="text-2xl font-bold text-primary mb-6">Terms of Service</h2>
              <div className="space-y-6 text-muted-foreground">
                <div>
                  <h3 className="font-bold text-foreground mb-2">1. Agreement to Terms</h3>
                  <p>
                    By accessing and using this website and services, you accept and agree to be bound by the terms and
                    provision of this agreement. If you do not agree to abide by the above, please do not use this
                    service.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">2. Use License</h3>
                  <p>
                    Permission is granted to temporarily download one copy of the materials (information or software) on
                    our website for personal, non-commercial transitory viewing only. This is the grant of a license,
                    not a transfer of title.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">3. Product Information</h3>
                  <p>
                    We strive to provide accurate product descriptions and pricing. However, we do not warrant that
                    product descriptions, pricing, or other content is accurate, complete, reliable, current, or
                    error-free.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">4. Order and Payment Terms</h3>
                  <p>
                    All orders are subject to acceptance and confirmation. We require a 30% advance payment for all bulk
                    orders. Delivery is scheduled within 30 days of order confirmation. Minimum order quantity is 100
                    kgs.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">5. Disclaimer</h3>
                  <p>
                    The materials on our website are provided on an "as is" basis. We make no warranties, expressed or
                    implied, and hereby disclaim and negate all other warranties including, without limitation, implied
                    warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement
                    of intellectual property or other violation of rights.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">6. Limitations</h3>
                  <p>
                    In no event shall SJ GROUPS or its suppliers be liable for any damages (including, without
                    limitation, damages for loss of data or profit, or due to business interruption) arising out of the
                    use or inability to use the materials on this website.
                  </p>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
