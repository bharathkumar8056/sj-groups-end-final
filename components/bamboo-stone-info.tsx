"use client"

import { Card } from "@/components/ui/card"

export default function BambooStoneInfo() {
  return (
    <section className="py-16 md:py-24 bg-background-light">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Visual */}
          <div className="relative order-2 md:order-1">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary-light/10 rounded-3xl blur-2xl -z-10"></div>
            <Card className="card-premium overflow-hidden h-96 md:h-full">
              <img 
                src="/assets/bamboo-stone-6x.jpg" 
                alt="Bamboo Salt" 
                className="w-full h-full object-cover"
              />
            </Card>
          </div>

          {/* Content */}
          <div className="space-y-8 order-1 md:order-2">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="line-accent"></div>
                <span className="text-primary font-serif text-sm tracking-widest uppercase">Bamboo Stone</span>
              </div>
              <h2 className="font-serif font-bold text-balance">What is Bamboo Stone?</h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Bamboo stone is a natural mineral composite created through the roasting process of mineral salts within
              bamboo. This creates a crystalline stone with unique properties and mineral composition, highly valued in
              traditional wellness practices and modern holistic health applications.
            </p>

            <div className="space-y-4">
              <h3 className="font-serif font-bold text-foreground">Extraction Process</h3>
              <div className="space-y-3">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-serif font-bold text-primary">
                    1
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Mineral Selection</p>
                    <p className="text-sm text-muted-foreground">Premium natural minerals are sourced and prepared</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-serif font-bold text-primary">
                    2
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Bamboo Encasing</p>
                    <p className="text-sm text-muted-foreground">Minerals are placed inside organic bamboo poles</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-serif font-bold text-primary">
                    3
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">High-Temperature Roasting</p>
                    <p className="text-sm text-muted-foreground">
                      Intense roasting over open flame crystallizes the stones
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-serif font-bold text-primary">
                    4
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Stone Formation</p>
                    <p className="text-sm text-muted-foreground">
                      Cooling creates natural mineral stones with unique properties
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <h3 className="font-serif font-bold text-foreground">Where It's Used</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>Spa and wellness therapies for hot stone treatments</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>Traditional Eastern medicine and holistic practices</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>Home wellness and meditation practices</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>Professional therapeutic and cosmetic applications</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
