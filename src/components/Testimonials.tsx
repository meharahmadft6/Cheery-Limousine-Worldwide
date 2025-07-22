'use client'

import { useEffect, useState } from 'react'

const venues = [
  "CHASE CENTER",
  "COACHELLA",
  "THE FILLMORE",
  "COW PALACE",
  "OAKLAND ARENA",
  "BILL GRAHAM CIVIC AUDITORIUM",
  "SAP CENTER AT SAN JOSE",
  "PAYPAL PARK"
]

const testimonials = [
  {
    name: "A-dul",
    date: "2025-06-13",
    rating: 5,
    text: "Used Cherry Limousine Worldwide multiple times, they never disappoint, always on time, clean vehicles and top notch service. Highly recommend if you want luxury transportation.",
    avatar: "A"
  },
  {
    name: "Danny Broocker",
    date: "2025-06-08",
    rating: 5,
    text: "Great experience! They are beyond professional and it was hassle free. We rented the sprinter party bus for 8 hours and there was never once an issue.",
    avatar: "D"
  },
  {
    name: "Matty Lynn Barnes",
    date: "2025-06-08",
    rating: 5,
    text: "Had a super fun time going around SF with friends on our wedding night! Would recommend ✨",
    avatar: "M"
  },
  {
    name: "Sarah Johnson",
    date: "2025-05-28",
    rating: 5,
    text: "The most professional limo service in the worldwide Area. Punctual, clean cars, and excellent drivers. Will use them again!",
    avatar: "S"
  }
]

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('testimonials-section')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials-section" className="relative py-20 overflow-hidden">
      {/* 3D Effect Background - Matching Other Sections */}
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Events We Covered */}
        <div className="mb-20">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Events We&apos;ve <span className="text-yellow-400">Covered</span>
          </h2>
          
          <div className={`bg-black/70 backdrop-blur-sm p-8 rounded-2xl border border-yellow-500/30 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {venues.map((venue, index) => (
                <div
                  key={index}
                  className="bg-black/50 rounded-xl p-4 text-center border border-yellow-500/20 hover:border-yellow-500/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-yellow-400 font-bold text-sm">{venue}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div>
        
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            What Our <span className="text-yellow-400">Clients Say</span>
          </h2>
          
          <p className={`text-lg text-yellow-200 text-center mb-12 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Proudly rated 5 stars on Google and 4.9 on Yelp by our valued clients.
          </p>

          {/* Testimonials Carousel */}
          <div className={`relative bg-black/70 backdrop-blur-sm rounded-2xl border border-yellow-500/30 p-8 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex flex-col lg:flex-row items-center">
              {/* Rating Summary */}
              <div className="lg:w-1/3 text-center mb-8 lg:mb-0 lg:pr-8">
                <div className="w-24 h-24 bg-yellow-500/10 rounded-full mx-auto mb-6 flex items-center justify-center border border-yellow-500/30">
                  <span className="text-4xl text-yellow-400">★</span>
                </div>
                <h3 className="text-2xl font-bold text-yellow-400 mb-2">Cherry Limousine Worldwide</h3>
                <p className="text-gray-300 mb-4">170+ Five Star Reviews</p>
                <div className="flex justify-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-500 text-xl">★</span>
                  ))}
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="lg:w-2/3 relative">
                <div className="relative h-full">
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className={`transition-opacity duration-500 ${index === currentTestimonial ? 'opacity-100' : 'opacity-0 absolute top-0 left-0'}`}
                    >
                      <div className="flex items-start mb-6">
                        <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center text-yellow-400 text-2xl font-bold mr-4 border border-yellow-500/30">
                          {testimonial.avatar}
                        </div>
                        <div>
                          <h4 className="font-semibold text-white text-xl">{testimonial.name}</h4>
                          <p className="text-yellow-400 text-sm mb-2">{testimonial.date}</p>
                          <div className="flex mb-3">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <span key={i} className="text-yellow-500">★</span>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 text-lg leading-relaxed">
                        &quot;{testimonial.text}&quot;
                      </p>
                    </div>
                  ))}
                </div>

                {/* Navigation Arrows */}
                <div className="flex justify-center lg:justify-end mt-8 space-x-4">
                  <button 
                    onClick={prevTestimonial}
                    className="bg-yellow-500 text-black w-12 h-12 rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors duration-300"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  
                  <button 
                    onClick={nextTestimonial}
                    className="bg-yellow-500 text-black w-12 h-12 rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors duration-300"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
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