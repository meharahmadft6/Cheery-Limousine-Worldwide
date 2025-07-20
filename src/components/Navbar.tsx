'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-yellow-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Large Side Logo - Hidden on mobile */}
          <div className="hidden md:flex items-center">
            <div className="w-48 h-20 relative">
              <Link href="/">
                <Image 
                  src="/logo-re.png" 
                  alt="Cheery Limousine Worldwide Logo" 
                  fill
                  className="object-cover object-left"
                />
              </Link>
            </div>
          </div>

          {/* Mobile Logo - Centered */}
          <div className="md:hidden w-full">
            <div className="w-40 h-16 relative">
              <Link href="/">
                <Image 
                  src="/logo-re.png" 
                  alt="Cheery Limousine Worldwide Logo" 
                  fill
                  className="object-cover"
                />
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-yellow-500 transition-colors duration-300 border-b-2 border-transparent hover:border-yellow-500 pb-1">
              HOME
            </Link>
            <Link href="/about" className="text-white hover:text-yellow-500 transition-colors duration-300 border-b-2 border-transparent hover:border-yellow-500 pb-1">
              ABOUT US
            </Link>
          
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <Link 
                href="/services" 
                className="text-white hover:text-yellow-500 transition-colors duration-300 flex items-center border-b-2 border-transparent hover:border-yellow-500 pb-1"
              >
                SERVICES
                <svg 
                  className={`w-4 h-4 ml-1 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              
              {/* Dropdown Menu */}
              {isServicesOpen && (
                <div 
                  className="absolute left-0 mt-2 w-72 bg-black/95 backdrop-blur-sm border border-gray-800 rounded-lg shadow-xl overflow-hidden z-50 animate-in fade-in-50 zoom-in-95"
                  onMouseEnter={() => setIsServicesOpen(true)}
                >
                  <div className="grid grid-cols-1 divide-y divide-gray-800/50">
                    {[
                      { name: 'Airport Transportation', href: '/services/airport-transportation' },
                      { name: 'Executive Limo Service', href: '/services/executive-black-car-service' },
                      { name: 'Wedding Limo', href: '/services/wedding-limo-services' },
                      { name: 'Wine Tours', href: '/services/wine-tours' },
                      { name: 'Funeral Transportations', href: '/services/funeral-transportation' },
                      { name: 'Prom Limo Service', href: '/services/prom-limo-service' },
                      { name: 'Quinceañera Limo Service', href: '/services/quinceanera-limo-service' },
                      { name: 'Luxury Limousine Service', href: '/services/luxury-limousine-service' },
                      { name: 'Concert & Event Transportation', href: '/services/concert-&-event-transportation' }
                    ].map((service, index) => (
                      <Link
                        key={index}
                        href={service.href}
                        className="px-4 py-3 text-gray-300 hover:text-yellow-400 hover:bg-gray-800/50 transition-all duration-200 flex items-center group"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        <span className="flex-grow">{service.name}</span>
                        <svg 
                          className="w-4 h-4 text-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/fleet" className="text-white hover:text-yellow-500 transition-colors duration-300 border-b-2 border-transparent hover:border-yellow-500 pb-1">
              FLEETS
            </Link>
            <Link href="/nationwide" className="text-white hover:text-yellow-500 transition-colors duration-300 border-b-2 border-transparent hover:border-yellow-500 pb-1">
              NATIONWIDE
            </Link>
          </div>

          {/* Contact Button - Desktop */}
          <div className="hidden md:block">
            <a 
              href="tel:+14158771899"
              className="bg-yellow-500 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-500/30"
            >
              +1 (415) 877-1899
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden absolute right-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-yellow-500 transition-colors duration-300 p-2"
              aria-label="Toggle menu"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-yellow-500/20 animate-in slide-in-from-top duration-300">
            <div className="px-2 pt-2 pb-4 space-y-2">
              <Link 
                href="/" 
                className="block px-4 py-3 text-white hover:text-yellow-500 transition-colors duration-300 border-l-4 border-yellow-500"
                onClick={() => setIsMenuOpen(false)}
              >
                HOME
              </Link>
              <Link 
                href="/about" 
                className="block px-4 py-3 text-white hover:text-yellow-500 transition-colors duration-300 border-l-4 border-transparent hover:border-yellow-500"
                onClick={() => setIsMenuOpen(false)}
              >
                ABOUT US
              </Link>
              
              {/* Mobile Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="w-full flex justify-between items-center px-4 py-3 text-white hover:text-yellow-500 transition-colors duration-300 border-l-4 border-transparent hover:border-yellow-500"
                >
                  SERVICES
                  <svg 
                    className={`w-4 h-4 ml-1 transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isMobileServicesOpen && (
                  <div className="ml-4 mt-1 space-y-1 border-l border-yellow-500/20">
                    {[
                      { name: 'Airport Transportation', href: '/services/airport-transportation' },
                      { name: 'Executive Limo Service', href: '/services/executive-black-car-service' },
                      { name: 'Wedding Limo', href: '/services/wedding-limo-services' },
                      { name: 'Wine Tours', href: '/services/wine-tours' },
                      { name: 'Funeral Transportations', href: '/services/funeral-transportation' },
                      { name: 'Prom Limo Service', href: '/services/prom-limo-service' },
                      { name: 'Quinceañera Limo Service', href: '/services/quinceanera-limo-service' },
                      { name: 'Luxury Limousine Service', href: '/services/luxury-limousine-service' },
                      { name: 'Concert & Event Transportation', href: '/services/concert-&-event-transportation' }
                    ].map((service, index) => (
                      <Link
                        key={index}
                        href={service.href}
                        className="block px-4 py-2 text-gray-300 hover:text-yellow-400 hover:bg-gray-800/50 transition-all duration-200"
                        onClick={() => {
                          setIsMobileServicesOpen(false)
                          setIsMenuOpen(false)
                        }}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link 
                href="/fleet" 
                className="block px-4 py-3 text-white hover:text-yellow-500 transition-colors duration-300 border-l-4 border-transparent hover:border-yellow-500"
                onClick={() => setIsMenuOpen(false)}
              >
                FLEETS
              </Link>
              <Link 
                href="/nationwide" 
                className="block px-4 py-3 text-white hover:text-yellow-500 transition-colors duration-300 border-l-4 border-transparent hover:border-yellow-500"
                onClick={() => setIsMenuOpen(false)}
              >
                NATIONWIDE
              </Link>
              <Link 
                href="/reservation" 
                className="block px-4 py-3 text-white hover:text-yellow-500 transition-colors duration-300 border-l-4 border-transparent hover:border-yellow-500"
                onClick={() => setIsMenuOpen(false)}
              >
                BOOK NOW
              </Link>
              <div className="pt-2 mt-2 border-t border-yellow-500/20">
                <a 
                  href="tel:+14158771899"
                  className="block w-full text-center bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  +1 (415) 877-1899
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}