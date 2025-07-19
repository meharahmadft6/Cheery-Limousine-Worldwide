'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const heroSlides = [
    {
      id: 1,
      image: "/limo11.png",
      title: "Executive Limo Service",
      subtitle: "Bay Area",
      description: "Experience unmatched luxury and professionalism with our premium limo service SF Bay Area, trusted by executives and CEOs.",
      badge: "Executive Limo Service"
    },
    {
      id: 2,
      image: "/party2.jpg",
      title: "Party Bus Service",
      subtitle: "Celebrations",
      description: "Spacious, group-friendly party buses for celebrations and special occasions. Perfect for weddings, proms, and corporate events.",
      badge: "Party Bus Service"
    },
    {
      id: 3,
      image: "/limo7.jpg",
      title: "Black Car Service",
      subtitle: "Professional",
      description: "Reliable, discreet black car rides for business or private transportation. Your trusted partner for executive travel.",
      badge: "Black Car Service"
    },
    {
      id: 5,
      image: "/wedding.jpg",
      title: "Wedding Limo Services",
      subtitle: "Special Day",
      description: "Elegant transportation for couples, families, and bridal parties on your wedding day.",
      badge: "Wedding Limo"
    },
    {
      id: 6,
      image: "/wine.jpg",
      title: "Wine Tours",
      subtitle: "Relax & Explore",
      description: "Luxury transportation for unforgettable wine country tours in comfort and style.",
      badge: "Wine Tour"
    },
    {
      id: 7,
      image: "/airport.jpg",
      title: "Airport Transportation",
      subtitle: "On Time, Every Time",
      description: "Timely, stress-free airport drop-offs and pickups with professional chauffeurs.",
      badge: "Airport Transfer"
    },
    {
      id: 8,
      image: "/prom.jpg",
      title: "Prom Limo Service",
      subtitle: "Safe, stylish prom night.",
      description: "Explore San Francisco and nearby attractions with personalized city tour limo service.",
      badge: "City Tours"
    },
    {
        id: 9,
        title: "Quinceañera Limo Service",
        description: "Elegant limo service to celebrate your daughter's special Quinceañera day.",
        image: "/Quinceanera.jpg",
        delay: 200
    }
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden mt-5 inset-0 bg-gradient-to-br from-black via-black to-yellow-900 opacity-95">
      {/* Carousel Container */}
      <div className="relative w-full h-screen">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide 
                ? 'opacity-100' 
                : 'opacity-0 pointer-events-none'
            }`}
          >
            {/* Background for mobile */}
            <div className="absolute inset-0 lg:hidden">
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  quality={100}
                />
              </div>
              <div className="absolute inset-0 bg-black/60"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 h-full container mx-auto md:ml-10 md:mr-5 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
              {/* Left Column - Text Content */}
              <div className="lg:w-1/2 text-center lg:text-left py-20 lg:py-0 lg:pr-10 flex flex-col justify-center min-h-screen lg:min-h-0">

                {/* Main Headline - Mobile Optimized */}
                <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6 transition-all duration-1000 delay-400 leading-tight ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  <span className="text-yellow-500 block">{slide.title}</span>
                  <span className="text-white block">{slide.subtitle}</span>
                </h1>

                {/* Description - Hidden on mobile, shown on desktop */}
                <p className={`hidden lg:block text-lg sm:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto lg:mx-0 text-gray-200 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  {slide.description}
                </p>

                {/* Call to Action Button - Mobile Optimized */}
                <div className={`transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} mt-4 lg:mt-0`}>
                  <button className="bg-black text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold border-2 border-yellow-500 hover:bg-yellow-500 hover:text-black transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-500/25 w-auto min-w-[140px] sm:min-w-[160px]">
                    Book Now
                  </button>
                </div>
              </div>

              {/* Right Column - Image with 3D Effect (Desktop Only) */}
              <div className="hidden lg:block lg:w-1/2 relative h-full mt-5">
                <div className="absolute right-0 w-full h-full flex items-center justify-center">
                  <div className="relative w-4/5 h-3/4 transform transition-all duration-1000 group-hover:duration-300 hover:scale-105">
                    <div className="absolute inset-0 bg-yellow-500/10 rounded-3xl shadow-2xl transform rotate-3 -translate-y-2 translate-x-2"></div>
                    <div className="absolute inset-0 bg-yellow-500/5 rounded-3xl shadow-2xl transform -rotate-2 translate-y-3 -translate-x-1"></div>
                    <div className="relative h-full w-full rounded-3xl overflow-hidden transform rotate-1 transition-all duration-500 hover:rotate-0">
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        className="object-cover"
                        quality={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel Indicators - Mobile Optimized */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-yellow-500 scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Floating decorative elements for mobile - Repositioned */}
      <div className="absolute top-8 sm:top-10 right-4 sm:right-6 lg:hidden z-10">
        <div className="bg-yellow-500/20 backdrop-blur-sm rounded-full p-2 sm:p-3 animate-pulse">
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
        </div>
      </div>
    </section>
  )
}