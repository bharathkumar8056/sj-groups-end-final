"use client"

import { Card } from "@/components/ui/card"

export default function BenefitsSection() {
  const benefits = [
    {
      title: "Digestive Health",
      description: "Supports healthy digestion and nutrient absorption with natural mineral composition",
      icon: "🔄",
    },
    {
      title: "Mineral Rich",
      description: "High concentration of calcium, magnesium, potassium, and essential trace minerals",
      icon: "⛰️",
    },
    {
      title: "Immune Support",
      description: "Natural compounds support the body's immune system and overall wellness",
      icon: "🛡️",
    },
    {
      title: "pH Balance",
      description: "Helps maintain natural alkaline pH balance in the body",
      icon: "⚖️",
    },
    {
      title: "Detoxification",
      description: "Traditional use in cleansing and detoxification practices",
      icon: "🌿",
    },
    {
      title: "Energy & Vitality",
      description: "Promotes natural energy, vitality, and overall well-being",
      icon: "⚡",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="line-accent"></div>
          </div>
          <h2 className="section-title">Health Benefits & Applications</h2>
          <p className="section-subtitle">Discover the wellness properties of our premium bamboo products</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <Card key={idx} className="card-premium p-8 text-center space-y-4 hover:border-primary/60">
              <div className="text-5xl">{benefit.icon}</div>
              <h3 className="font-serif font-bold text-xl text-foreground">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
