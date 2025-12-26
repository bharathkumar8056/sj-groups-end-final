"use client"

import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-primary/5 to-foreground/10 border-t border-primary/20 py-16 md:py-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/assets/sj-logo.png" 
                alt="SJ GROUPS Logo"
                className="w-10 h-10 rounded-lg object-cover"
              />
              <span className="font-bold text-foreground text-lg">SJ GROUPS</span>
            </div>
            <p className="text-base text-muted-foreground leading-relaxed">
              Premium bamboo salt and stone products from Viluppuram, Tamil Nadu.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-foreground mb-4 text-base md:text-lg">Quick Links</h4>
            <ul className="space-y-2 text-base">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-muted-foreground hover:text-primary transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-foreground mb-4 text-base md:text-lg">Products</h4>
            <ul className="space-y-2 text-base">
              <li>
                <Link href="/products" className="text-muted-foreground hover:text-primary transition-colors">
                  Bamboo Salt
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-muted-foreground hover:text-primary transition-colors">
                  Bamboo Stone
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Bulk Orders
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-foreground mb-4 text-base md:text-lg">Contact</h4>
            <ul className="space-y-3 text-base">
              <li>
                <a href="tel:+919092233456" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <Phone size={18} className="text-primary flex-shrink-0" />
                  +91 9092233456
                </a>
              </li>
              <li>
                <a
                  href="mailto:sjgroupsvpm@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Mail size={18} className="text-primary flex-shrink-0" />
                  sjgroupsvpm@gmail.com
                </a>
              </li>
              <li className="text-muted-foreground flex gap-2">
                <MapPin size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <span>Building No. 372/2, East Yamuna Street, Vandimedu, Viluppuram 605602, Tamil Nadu</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary/20 pt-8 mb-8">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <p className="text-base text-muted-foreground">© {currentYear} SJ GROUPS. All rights reserved.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:justify-end text-base">
              <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        {/* Developer Credits */}
        <div className="border-t border-primary/20 pt-8">
          <p className="text-center text-base text-muted-foreground mb-4">
            Developed by{" "}
            <a
              href="https://www.instagram.com/bkb_incorporation/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:brightness-125 font-semibold transition-colors"
            >
              BKB Incorporation
            </a>{" "}
            in association with{" "}
            <a
              href="https://www.instagram.com/brandsparksm/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:brightness-125 font-semibold transition-colors"
            >
              Brandspark
            </a>
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://www.instagram.com/bkb_incorporation/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors text-base font-medium flex items-center gap-2"
            >
              📱 BKB Instagram
            </a>
            <span className="text-border">•</span>
            <a
              href="https://www.instagram.com/brandsparksm/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors text-base font-medium flex items-center gap-2"
            >
              📱 Brandspark Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
