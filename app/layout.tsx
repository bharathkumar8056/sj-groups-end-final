import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import ClientLayout from "./client-layout"

export const metadata: Metadata = {
  title: "SJ GROUPS - Premium Bamboo Salt & Stone",
  description:
    "Premium bamboo salt and bamboo stones, 1-9x roasted. Organic, natural products from Viluppuram, Tamil Nadu. Get Quote via WhatsApp.",
    generator: 'BKB Incorporation'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Favicon using project logo - place your logo at public/assets/sj-logo.png */}
        <link rel="icon" href="/assets/sj-logo.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/sj-logo.png" />
        <link rel="apple-touch-icon" href="/assets/sj-logo.png" />
      </head>
      <body className={`font-sans antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
