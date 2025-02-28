import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Solutions from "@/components/Solutions"
import Stats from "@/components/Stats"
import Testimonials from "@/components/Testimonials"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Hero />
      <Solutions />
      <Stats />
      <Testimonials />
      <Footer />
    </main>
  )
}

