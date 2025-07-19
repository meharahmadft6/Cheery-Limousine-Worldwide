'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
            <div className="relative group">
              <Link href="/services" className="text-white hover:text-yellow-500 transition-colors duration-300 flex items-center border-b-2 border-transparent hover:border-yellow-500 pb-1">
                SERVICES
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              {/* Dropdown would go here */}
            </div>
            <div className="relative group">
              <Link href="/fleet" className="text-white hover:text-yellow-500 transition-colors duration-300 flex items-center border-b-2 border-transparent hover:border-yellow-500 pb-1">
                FLEETS
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              {/* Dropdown would go here */}
            </div>
            <Link href="/legal" className="text-white hover:text-yellow-500 transition-colors duration-300 border-b-2 border-transparent hover:border-yellow-500 pb-1">
              LEGAL
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
              <Link href="/" className="block px-4 py-3 text-white hover:text-yellow-500 transition-colors duration-300 border-l-4 border-yellow-500">
                HOME
              </Link>
              <Link href="/about" className="block px-4 py-3 text-white hover:text-yellow-500 transition-colors duration-300 border-l-4 border-transparent hover:border-yellow-500">
                ABOUT US
              </Link>
              <Link href="/services" className="block px-4 py-3 text-white hover:text-yellow-500 transition-colors duration-300 border-l-4 border-transparent hover:border-yellow-500">
                SERVICES
              </Link>
              <Link href="/fleet" className="block px-4 py-3 text-white hover:text-yellow-500 transition-colors duration-300 border-l-4 border-transparent hover:border-yellow-500">
                FLEETS
              </Link>
              <Link href="/legal" className="block px-4 py-3 text-white hover:text-yellow-500 transition-colors duration-300 border-l-4 border-transparent hover:border-yellow-500">
                LEGAL
              </Link>
              <div className="pt-2 mt-2 border-t border-yellow-500/20">
                <a 
                  href="tel:+14158771899"
                  className="block w-full text-center bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-all duration-300"
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