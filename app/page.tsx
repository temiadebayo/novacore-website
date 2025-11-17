import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import ImageSection from '@/components/ImageSection'
import WhyNovaCore from '@/components/WhyNovaCore'
import Ecosystem from '@/components/Ecosystem'
import Features from '@/components/Features'
import DesignExperience from '@/components/DesignExperience'
import Impact from '@/components/Impact'
import Vision from '@/components/Vision'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <ImageSection />
      <WhyNovaCore />
      <Ecosystem />
      <Features />
      <DesignExperience />
      <Impact />
      <Vision />
      <Footer />
    </main>
  )
}

