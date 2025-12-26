import ContactContent from "@/components/contact-content"

export const metadata = {
  title: "Contact Us - SJ GROUPS",
  description: "Get in touch with SJ GROUPS. Find our contact information, FAQ, and reach out via WhatsApp",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background-light pt-24">
      <ContactContent />
    </main>
  )
}
