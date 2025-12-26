"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
            SJ
          </div>
          <div className="hidden sm:block">
            <h1 className="text-xl font-bold text-primary">SJ GROUPS</h1>
            <p className="text-xs text-muted-foreground">Premium Bamboo Products</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#products" className="text-foreground hover:text-primary transition-colors">
            Products
          </a>
          <a href="#features" className="text-foreground hover:text-primary transition-colors">
            Why Choose Us
          </a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">
            Contact
          </a>
          <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-accent transition-colors">
            Get Quote
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-foreground hover:text-primary">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <a href="#products" className="text-foreground hover:text-primary transition-colors">
                Products
              </a>
              <a href="#features" className="text-foreground hover:text-primary transition-colors">
                Why Choose Us
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </a>
              <button className="w-full px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-accent transition-colors">
                Get Quote
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
