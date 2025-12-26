import AboutContent from "@/components/about-content"

export const metadata = {
  title: "About Us - SJ GROUPS",
  description: "Learn about SJ GROUPS, our bamboo salt and stone products, privacy policy, and terms of service",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background-light pt-24">
      <AboutContent />
    </main>
  )
}
