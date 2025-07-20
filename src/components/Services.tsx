'use client'

import {  useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
const services = [
  {
    title: "Funeral Transportation",
    description: "Respectful, dignified transportation with utmost privacy for families during difficult times. Our professional chauffeurs ensure a seamless experience.",
    image: "/funeral.jpg",
    category: "special",
    features: ["Privacy partitions", "Flower arrangements available", "Spacious seating"]
  },
  {
    title: "Prom Limo Service",
    description: "Make prom night unforgettable with our luxury fleet. Safe, stylish rides with red carpet treatment for your special night.",
    image: "/prom.jpg",
    category: "events",
    features: ["LED mood lighting", "Champagne toast (non-alcoholic)", "Complimentary bottled water"]
  },
  {
    title: "Quinceanera Limo Service",
    description: "Celebrate this milestone in elegance. Our white glove service ensures the birthday princess arrives in royal style.",
    image: "/Quinceanera.jpg",
    category: "events",
    features: ["Decorated vehicles available", "Professional photography stops", "Coordinated arrival timing"]
  },
  {
    title: "Wedding Limo Services",
    description: "From the ceremony to the reception, our wedding packages provide flawless transportation for the entire bridal party.",
    image: "/wedding.jpg",
    category: "wedding",
    features: ["Bridal dressing area", "Just married decorations", "Coordinated timing"]
  },
  {
    title: "Wine Tours",
    description: "Sip in style with our Napa/Sonoma wine tour packages. Travel safely between vineyards in luxury vehicles with knowledgeable drivers.",
    image: "/wine.jpg",
    category: "tours",
    features: ["Custom itinerary planning", "Cooler storage for purchases", "Vineyard recommendations"]
  },
  {
    title: "Airport Transportation",
    description: "Punctual, professional airport transfers with flight tracking. Never worry about missing a flight or waiting for rides.",
    image: "/airport.jpg",
    category: "corporate",
    features: ["Flight monitoring", "Meet-and-greet service", "Luggage assistance"]
  },
  {
    title: "Executive Black Car Service",
    description: "Discreet, reliable transportation for business professionals. Arrive at meetings refreshed and prepared.",
    image: "/limo3.jpeg",
    category: "corporate",
    features: ["WiFi enabled", "Mobile office setup", "Newspaper/magazine selection"]
  },
  {
    title: "Luxury Limousine Service",
    description: "Our signature service for any occasion. Choose from our fleet of premium vehicles for your special event.",
    image: "/limo4.jpg",
    category: "premium",
    features: ["Complementary refreshments", "Ambient lighting control", "Premium sound system"]
  },
  {
    title: "Concert & Event Transportation",
    description: "Avoid parking hassles and arrive in style at Bay Area venues. We'll get you there and back safely.",
    image: "/limo9.jpg",
    category: "events",
    features: ["Late night availability", "Group pricing", "Designated pickup points"]
  }
]

const categories = [
  { name: "All", icon: "⭐" },
  { name: "Wedding", icon: "💍" },
  { name: "Corporate", icon: "💼" },
  { name: "Events", icon: "🎉" },
  { name: "Special", icon: "✨" },
  { name: "Tours", icon: "🗺️" }
]

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [visibleCount, setVisibleCount] = useState(6)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const filteredServices = activeCategory === 'All' 
    ? services 
    : services.filter(service => 
        service.category.toLowerCase() === activeCategory.toLowerCase()
      )

  const visibleServices = filteredServices.slice(0, visibleCount)

  const loadMore = () => {
    setVisibleCount(prev => prev + 3)
  }

  return (
    <section className="relative py-10 overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-yellow-500 opacity-10"
            initial={{
              width: `${Math.random() * 20 + 5}px`,
              height: `${Math.random() * 20 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, 50, 100],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {categories.map((category) => (
          <motion.button
            key={category.name}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setActiveCategory(category.name)
              setVisibleCount(6)
            }}
            className={`flex items-center px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === category.name
                ? 'bg-yellow-500 text-black shadow-lg shadow-yellow-500/30'
                : 'bg-black text-white border border-yellow-500/20 hover:border-yellow-500/50'
            }`}
          >
            <span className="mr-2">{category.icon}</span>
            {category.name}
          </motion.button>
        ))}
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {visibleServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-900/10 to-yellow-900/30 rounded-xl pointer-events-none transition-all duration-500 opacity-0 group-hover:opacity-100" />
              
              <div className="relative h-full bg-gradient-to-br from-black to-gray-900 rounded-xl overflow-hidden border border-yellow-500/20 group-hover:border-yellow-500/50 transition-all duration-500 shadow-lg group-hover:shadow-xl group-hover:shadow-yellow-500/10">
                {/* Image with parallax effect */}
                <div className="relative h-64 overflow-hidden">
                  <motion.div
                    className="absolute inset-0"
                    animate={{
                      scale: hoveredCard === index ? 1.1 : 1
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-yellow-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-yellow-400 mb-3 group-hover:text-yellow-300 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features list */}
                  <ul className="mb-6 space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="h-4 w-4 text-yellow-500 mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-400 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
  <motion.button
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 relative overflow-hidden"
  >
    <span className="relative z-10">View Details</span>
    <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
  </motion.button>
</Link>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Load More Button */}
      {visibleCount < filteredServices.length && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={loadMore}
            className="relative px-8 py-4 bg-gradient-to-r from-yellow-600 to-yellow-700 text-black font-bold rounded-lg overflow-hidden group"
          >
            <span className="relative z-10 flex items-center justify-center">
              View More Services
              <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
          </motion.button>
        </motion.div>
      )}

      {/* Testimonial Section */}
      <div className="mt-24 bg-gradient-to-r from-yellow-900/30 to-black/50 p-8 rounded-2xl border border-yellow-500/20 relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-yellow-500 opacity-10 blur-3xl" />
        <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-yellow-500 opacity-10 blur-3xl" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <svg className="w-12 h-12 text-yellow-500 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <blockquote className="text-xl md:text-2xl font-medium text-white mb-6">
            &quot;Cheery Limousine provided exceptional service for our wedding. Their attention to detail and professional chauffeurs made our special day stress-free. The luxury vehicle was immaculate and arrived perfectly on time.&quot;
          </blockquote>
          <div className="text-yellow-400 font-bold">— Sarah & Michael J.</div>
          <div className="text-yellow-300 text-sm">Wedding Clients, June 2023</div>
        </div>
      </div>
    </section>
  )
}