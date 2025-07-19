'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const services = [
  {
    title: "Funeral Transportation",
    description: "Respectful, private transportation for families and guests during funeral services.",
    image: "/funeral.jpg",
    delay: 0
  },
  {
    title: "Prom Limo Service",
    description: "Safe, stylish prom night limo rides for students and groups.",
    image: "/prom.jpg",
    delay: 100
  },
  {
    title: "Quinceañera Limo Service",
    description: "Elegant limo service to celebrate your daughter's special Quinceañera day.",
    image: "/Quinceanera.jpg",
    delay: 200
  },
  {
    title: "Wedding Limo Services",
    description: "Wedding day transportation for couples, families, and bridal parties.",
    image: "/wedding.jpg",
    delay: 300
  },
  {
    title: "Wine Tours",
    description: "Comfortable wine country tours with safe, stylish transportation included.",
    image: "/wine.jpg",
    delay: 400
  },
  {
    title: "Airport Transportation",
    description: "Timely airport drop-offs and pickups with professional chauffeurs.",
    image: "/airport.jpg",
    delay: 500
  },
  {
    title: "Party Bus Service",
    description: "Spacious, group-friendly party buses for celebrations and special occasions.",
    image: "/limo2.jpg",
    delay: 600
  },
  {
    title: "Black Car Service",
    description: "Reliable, discreet black car rides for business or private transportation.",
    image: "/limo3.jpeg",
    delay: 700
  },
  {
    title: "Limo Service",
    description: "Luxury limo service for events, business, or personal travel needs.",
    image: "/limo4.jpg",
    delay: 800
  }
]

export default function Services() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCategory, setActiveCategory] = useState('All')
  const [visibleCount, setVisibleCount] = useState(6)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('services-section')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const filteredServices = activeCategory === 'All' 
    ? services 
    : services.filter(service => 
        service.title.toLowerCase().includes(activeCategory.toLowerCase()) ||
        service.description.toLowerCase().includes(activeCategory.toLowerCase())
      )

  const visibleServices = filteredServices.slice(0, visibleCount)

  const loadMore = () => {
    setVisibleCount(prev => prev + 3)
  }

  return (
    <section id="services-section" className="relative py-20 overflow-hidden">
      {/* 3D Effect Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-yellow-900 opacity-95"></div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="relative w-full h-full">
            {/* 3D Floating Elements */}
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-yellow-500 opacity-10"
                style={{
                  width: `${Math.random() * 20 + 5}px`,
                  height: `${Math.random() * 20 + 5}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className={`inline-block bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-semibold mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Our Services
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Premium Services <span className="text-yellow-400">Tailored for You</span>
          </h2>
          <p className={`text-lg text-yellow-200 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Cheery Limousine Worldwide sets the standard for luxury service by understanding the expectations of executives, providing journeys that respect your time, privacy, and reputation.
          </p>
        </div>

        {/* Category Filters */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <button 
            onClick={() => setActiveCategory('All')}
            className={`px-4 py-2 rounded-full ${activeCategory === 'All' ? 'bg-yellow-500 text-black' : 'bg-black text-white border border-yellow-500/30'}`}
          >
            All Services
          </button>
          <button 
            onClick={() => setActiveCategory('Wedding')}
            className={`px-4 py-2 rounded-full ${activeCategory === 'Wedding' ? 'bg-yellow-500 text-black' : 'bg-black text-white border border-yellow-500/30'}`}
          >
            Wedding
          </button>
          <button 
            onClick={() => setActiveCategory('Funeral')}
            className={`px-4 py-2 rounded-full ${activeCategory === 'Funeral' ? 'bg-yellow-500 text-black' : 'bg-black text-white border border-yellow-500/30'}`}
          >
            Funeral
          </button>
          <button 
            onClick={() => setActiveCategory('Prom')}
            className={`px-4 py-2 rounded-full ${activeCategory === 'Prom' ? 'bg-yellow-500 text-black' : 'bg-black text-white border border-yellow-500/30'}`}
          >
            Prom
          </button>
          <button 
            onClick={() => setActiveCategory('Airport')}
            className={`px-4 py-2 rounded-full ${activeCategory === 'Airport' ? 'bg-yellow-500 text-black' : 'bg-black text-white border border-yellow-500/30'}`}
          >
            Airport
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleServices.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-black rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2 border border-yellow-500/30 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${service.delay}ms` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-yellow-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-yellow-400 mb-3 group-hover:text-yellow-300 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <button className="w-full bg-yellow-500 text-black py-3 px-6 rounded-lg font-semibold hover:bg-yellow-400 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]">
                  Book Now
                </button>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 border-2 border-yellow-500/0 group-hover:border-yellow-500/30 transition-all duration-500 pointer-events-none rounded-2xl"></div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < filteredServices.length && (
          <div className="text-center mt-12">
            <button 
              onClick={loadMore}
              className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-500/30"
            >
              Load More Services
            </button>
          </div>
        )}
      </div>

      {/* Global styles for the 3D effect */}
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg);
          }
          50% {
            transform: translateY(-100px) translateX(50px) rotate(180deg);
          }
          100% {
            transform: translateY(0) translateX(100px) rotate(360deg);
          }
        }
      `}</style>
    </section>
  )
}