import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import AboutUs from '@/components/AboutUs'
import Features from '@/components/Features'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs/>
      <Features />
      <Testimonials />
      <Footer />
      
      <WhatsAppFloat  />
    </>
  )
}
