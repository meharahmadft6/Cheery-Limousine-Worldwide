'use client'

import { useEffect, useState } from 'react'

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: "25+",
    subtitle: "Years of Excellence",
    delay: 0
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    title: "5 Stars",
    subtitle: "Ratings on Google & Yelp",
    delay: 100
  },
  {
    icon: (
      <svg xmlns="http://www3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: "24/7",
    subtitle: "Live Dispatch",
    delay: 200
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
    title: "Vehicle",
    subtitle: "Insured & Maintained",
    delay: 300
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: "Chauffeurs",
    subtitle: "Professional & Licensed",
    delay: 400
  }
]

export default function Features() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('features-section')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="features-section" className="relative py-20 overflow-hidden">
      {/* 3D Effect Background - Matching About Us */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-yellow-900 opacity-95"></div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="relative w-full h-full">
            {/* 3D Floating Elements */}
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-yellow-500 opacity-20"
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

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Why Choose <span className="text-yellow-400">Cherry Limousine</span>
          </h2>
          <p className={`text-lg text-yellow-200 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Our commitment to excellence ensures every journey meets the highest standards of luxury and professionalism.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-black/70 backdrop-blur-sm rounded-2xl p-8 text-center border border-yellow-500/30 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${feature.delay}ms` }}
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-yellow-500/10 rounded-full border border-yellow-500/30 text-yellow-400 transition-all duration-500 group-hover:bg-yellow-500/20 group-hover:scale-110">
                  {feature.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">
                {feature.title}
              </h3>

              {/* Subtitle */}
              <p className="text-gray-300">
                {feature.subtitle}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-yellow-500/0 group-hover:bg-yellow-500/5 rounded-2xl transition-colors duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Elements - Enhanced */}
      <div className="absolute top-10 left-10 hidden lg:block">
        <div className="w-6 h-6 bg-yellow-500 rounded-full animate-pulse shadow-lg shadow-yellow-500/30"></div>
      </div>

      <div className="absolute bottom-10 right-10 hidden lg:block">
        <div className="w-8 h-8 bg-yellow-500 rounded-full animate-pulse delay-1000 shadow-lg shadow-yellow-500/30"></div>
      </div>

      <div className="absolute top-1/2 left-5 hidden lg:block">
        <div className="w-5 h-5 bg-yellow-500 rounded-full animate-pulse delay-500 shadow-lg shadow-yellow-500/30"></div>
      </div>

      <div className="absolute top-1/2 right-5 hidden lg:block">
        <div className="w-5 h-5 bg-yellow-500 rounded-full animate-pulse delay-1500 shadow-lg shadow-yellow-500/30"></div>

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