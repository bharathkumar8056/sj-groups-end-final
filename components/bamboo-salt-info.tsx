"use client"

import { Card } from "@/components/ui/card"

export default function BambooSaltInfo() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="line-accent"></div>
                <span className="text-primary font-serif text-sm tracking-widest uppercase">Bamboo Salt</span>
              </div>
              <h2 className="font-serif font-bold text-balance">What is Bamboo Salt?</h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Bamboo salt is a traditional Korean health product that combines natural sea salt with organic bamboo. The
              salt is refined and roasted inside young bamboo poles over an open flame, infusing it with bamboo's
              natural minerals and creating a unique product with enhanced nutritional properties.
            </p>

            <div className="space-y-4">
              <h3 className="font-serif font-bold text-foreground">Extraction Process</h3>
              <div className="space-y-3">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-serif font-bold text-primary">
                    1
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Natural Sea Salt Selection</p>
                    <p className="text-sm text-muted-foreground">Premium sea salt sourced and dried</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-serif font-bold text-primary">
                    2
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Bamboo Preparation</p>
                    <p className="text-sm text-muted-foreground">
                      Young, organic bamboo poles are selected and prepared
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-serif font-bold text-primary">
                    3
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Roasting in Bamboo</p>
                    <p className="text-sm text-muted-foreground">
                      Salt is packed into bamboo and roasted over open flame
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-serif font-bold text-primary">
                    4
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Multiple Roasting Levels</p>
                    <p className="text-sm text-muted-foreground">1-9x roasting creates varied mineral compositions</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <h3 className="font-serif font-bold text-foreground">Why It's Used</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary">✓</span>
                  <span>Enhances digestive health and nutrient absorption</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">✓</span>
                  <span>Rich in minerals including calcium, magnesium, and potassium</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">✓</span>
                  <span>Supports immune system and overall wellness</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">✓</span>
                  <span>Natural pH balance properties</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary-light/10 rounded-3xl blur-2xl -z-10"></div>
            <Card className="card-premium overflow-hidden h-96 md:h-full">
              <img 
                src="/assets/bamboo-salt-info.webp" 
                alt="Bamboo Salt" 
                className="w-full h-full object-cover"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
