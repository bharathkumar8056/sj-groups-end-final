import { CheckCircle, Leaf, Zap, Award } from "lucide-react"

const features = [
  {
    icon: Leaf,
    title: "Natural & Organic",
    description: "Sourced from premium bamboo, processed without any artificial additives.",
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "Carefully roasted to perfection for optimal taste and health benefits.",
  },
  {
    icon: Zap,
    title: "Premium Varieties",
    description: "Available in 1-9x roasted options to meet diverse preferences.",
  },
  {
    icon: CheckCircle,
    title: "Bulk-Friendly",
    description: "Wholesale-focused with competitive pricing and flexible terms.",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Why Choose SJ GROUPS</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We deliver excellence through quality, reliability, and commitment to our customers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="p-6 rounded-xl border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300"
              >
                <Icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
