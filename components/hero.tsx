"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/6 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary-light/6 rounded-full blur-3xl -z-10"></div>

      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="line-accent"></div>
                <span className="text-primary font-serif text-sm md:text-base tracking-widest uppercase">
                  Premium Since 2024
                </span>
              </div>
              <h1 className="font-serif font-bold text-balance leading-tight">
                Pure <span className="text-primary">Bamboo</span> Excellence
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                Discover the finest bamboo salt and bamboo stones, meticulously roasted to perfection using traditional
                methods combined with modern quality control. 1-9x roasting varieties sourced directly from Viluppuram,
                Tamil Nadu.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/products">
                <Button size="lg" className="w-full sm:w-auto bg-primary text-white hover:bg-primary/90 text-base">
                  Explore Products
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-base bg-transparent">
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <p className="text-3xl md:text-4xl font-serif font-bold text-primary">100%</p>
                <p className="text-sm text-muted-foreground mt-2">Natural & Organic</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-serif font-bold text-primary">9x</p>
                <p className="text-sm text-muted-foreground mt-2">Roasting Levels</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-serif font-bold text-primary">30+</p>
                <p className="text-sm text-muted-foreground mt-2">Years Combined</p>
              </div>
            </div>
          </div>

          {/* Right Banner */}
          <div className="relative h-96 md:h-full md:min-h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/15 to-secondary-light/15 rounded-3xl blur-2xl -z-10"></div>
            <div className="rounded-3xl overflow-hidden border border-primary/20 h-full shadow-2xl relative">
              {/* full-bleed image covering the entire right banner */}
              <Image src="/assets/hero-banner.png" alt="Premium Bamboo Products" fill className="object-cover" />

              {/* optional subtle overlay to improve text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent -z-10"></div>

              {/* overlay text */}
              {/* <div className="relative z-10 h-full flex items-center justify-center p-12">
                <div className="text-center space-y-6 text-white">
                  <p className="text-xl md:text-2xl font-serif font-bold drop-shadow">Premium Bamboo Products</p>
                  <p className="text-muted-foreground mt-3 drop-shadow">Viluppuram, Tamil Nadu</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
