const products = [
  {
    category: "Bamboo Salt",
    items: ["3x Roasted", "4x Roasted", "5x Roasted", "6x Roasted", "7x Roasted", "8x Roasted", "9x Roasted"],
  },
  {
    category: "Bamboo Stone",
    items: ["3x Roasted", "4x Roasted", "5x Roasted", "6x Roasted", "7x Roasted", "8x Roasted", "9x Roasted"],
  },
]

export default function Products() {
  return (
    <section id="products" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Our Premium Collection</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From 1-9x roasted varieties, each product is carefully crafted to deliver exceptional quality and authentic
            flavor.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {products.map((product) => (
            <div
              key={product.category}
              className="bg-background rounded-2xl p-8 border border-border hover:border-primary transition-colors"
            >
              <h3 className="text-2xl font-bold mb-6 text-primary">{product.category}</h3>
              <div className="grid grid-cols-2 gap-3">
                {product.items.map((item) => (
                  <div
                    key={item}
                    className="px-4 py-3 bg-primary/5 text-primary rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer text-center"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">
                  <span className="font-semibold text-foreground">Minimum Order:</span> 100 kgs
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  <span className="font-semibold text-foreground">Payment:</span> 30% Advance
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Delivery:</span> 30 Days
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
