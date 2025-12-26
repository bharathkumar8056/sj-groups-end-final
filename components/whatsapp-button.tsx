"use client"

import { MessageCircle } from "lucide-react"
import Link from "next/link"

export default function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/919092233456?text=Hi%20SJ%20GROUPS%2C%20I%20would%20like%20to%20get%20a%20quote%20for%20your%20bamboo%20products"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 group"
      aria-label="Contact us on WhatsApp"
    >
      <div className="bg-primary hover:brightness-90 text-white rounded-full p-4 shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center justify-center w-16 h-16">
        <MessageCircle size={28} className="group-hover:animate-bounce" />
      </div>
    </Link>
  )
}
