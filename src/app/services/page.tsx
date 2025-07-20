import ServicesComponent from '@/components/Services'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-yellow-500 opacity-5"
            style={{
              width: `${Math.random() * 300 + 50}px`,
              height: `${Math.random() * 300 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: 'blur(40px)',
            }}
          />
        ))}
      </div>

      <Navbar />
      
      <main className="relative z-10 pt-32 pb-20">
        <div className="text-center mb-16 px-4">
          <div className="inline-block relative">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-6">
              Our Services
            </h1>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-yellow-500 to-transparent rounded-full" />
          </div>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience unparalleled luxury with our premium transportation services, meticulously crafted for the most discerning clients in the Bay Area and beyond.
          </p>
          
          <div className="mt-10 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 to-yellow-800 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
             <Link href={'/reservation'}>
              <button className="relative px-8 py-3 bg-black rounded-lg text-yellow-400 font-bold text-lg leading-none border border-yellow-800 group-hover:text-yellow-300 transition-colors duration-200">
                Book Your Experience
              </button>
             </Link>
            </div>
          </div>
        </div>
        
        <ServicesComponent />
      </main>
      
      <Footer />
    </div>
  )
}