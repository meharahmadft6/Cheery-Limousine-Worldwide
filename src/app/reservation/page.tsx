'use client'
import { useState, useRef } from 'react'
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import dynamic from 'next/dynamic'

// Dynamically import Leaflet to avoid SSR issues
const MapWithNoSSR = dynamic(() => import('@/components/LeafletMap'), {
  ssr: false
});

const services = [
  { id: 1, name: 'Executive Limo Service', icon: '🚘' },
  { id: 2, name: 'Party Bus', icon: '🚍' },
  { id: 3, name: 'Black Car Service', icon: '🚖' },
  { id: 4, name: 'Wedding Limo', icon: '💍' },
  { id: 5, name: 'Airport Transfer', icon: '✈️' },
  { id: 6, name: 'Wine Tour', icon: '🍷' }
]

export default function ReservationPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    passengers: 1,
    pickupLocation: '',
    dropoffLocation: '',
    specialRequests: ''
  })

  const mapCenter = { lat: 37.7749, lng: -122.4194 }; // SF coordinates
  const [markerPosition, setMarkerPosition] = useState<[number, number] | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const pickupInputRef = useRef<HTMLInputElement>(null)
  const dropoffInputRef = useRef<HTMLInputElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleLocationSelect = (type: 'pickup' | 'dropoff') => {
    // In a real implementation, you would use a geocoding service here
    // For demo purposes, we'll just set a marker at the center
    setMarkerPosition([mapCenter.lat, mapCenter.lng])
    
    if (type === 'pickup' && pickupInputRef.current) {
      setFormData(prev => ({ ...prev, pickupLocation: pickupInputRef.current?.value || '' }))
    } else if (dropoffInputRef.current) {
      setFormData(prev => ({ ...prev, dropoffLocation: dropoffInputRef.current?.value || '' }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          service: '',
          passengers: 1,
          pickupLocation: '',
          dropoffLocation: '',
          specialRequests: ''
        })
        setIsSuccess(false)
      }, 3000)
    }, 1500)
  }

  return (
    <>
      <Head>
        <title>Reservation | Cherry Limousine Worldwide</title>
      </Head>

      <div className="min-h-screen bg-black text-white">
        <Navbar/>
        
        {/* Hero Section */}
        <div className="relative h-96 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-yellow-900 opacity-90"></div>
          <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-400">
              Reserve Your Luxury Ride
            </h1>
            <p className="text-xl text-yellow-200 max-w-2xl">
              Experience the Cherry Limousine Worldwide difference with our premium transportation services
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          {isSuccess ? (
            <div className="bg-yellow-500/10 border border-yellow-500 rounded-xl p-8 text-center max-w-4xl mx-auto">
              <div className="text-6xl mb-4">🎉</div>
              <h2 className="text-3xl font-bold text-yellow-400 mb-2">Reservation Confirmed!</h2>
              <p className="text-lg mb-6">
                Thank you for choosing Cherry Limousine Worldwide. Our team will contact you shortly to confirm your booking details.
              </p>
              <button 
                onClick={() => setIsSuccess(false)}
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Make Another Reservation
              </button>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Left Side - Information */}
              <div className="lg:w-1/2 bg-black/70 backdrop-blur-sm border border-yellow-500/30 rounded-xl p-8">
                <h2 className="text-3xl font-bold text-yellow-400 mb-6">Why Choose Us</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-yellow-500/10 p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Premium Vehicles</h3>
                      <p className="text-gray-300">Our fleet features only the most luxurious and well-maintained vehicles in the Bay Area.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-yellow-500/10 p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Punctual Service</h3>
                      <p className="text-gray-300">We guarantee on-time arrivals with 99.7% punctuality across all our bookings.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-yellow-500/10 p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Verified Professionals</h3>
                      <p className="text-gray-300">All chauffeurs undergo rigorous background checks and professional training.</p>
                    </div>
                  </div>
                </div>

                {/* Map Section */}
                <div className="mt-10 h-64 rounded-xl overflow-hidden">
                  <MapWithNoSSR 
                    center={mapCenter} 
                    markerPosition={markerPosition} 
                    zoom={14}
                  />
                </div>
              </div>

              {/* Right Side - Form */}
              <div className="lg:w-1/2 bg-black/70 backdrop-blur-sm border border-yellow-500/30 rounded-xl overflow-hidden shadow-2xl">
                <div className="p-8">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 text-yellow-400">
                    Book Your Transportation
                  </h2>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="md:col-span-2">
                        <label className="block text-gray-300 mb-2">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 focus:border-yellow-500 focus:outline-none"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-gray-300 mb-2">Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 focus:border-yellow-500 focus:outline-none"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-gray-300 mb-2">Phone Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 focus:border-yellow-500 focus:outline-none"
                        />
                      </div>
                      
                      <div className="md:col-span-2">
                        <label className="block text-gray-300 mb-2">Service Type *</label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required
                          className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 focus:border-yellow-500 focus:outline-none"
                        >
                          <option value="">Select a service</option>
                          {services.map(service => (
                            <option key={service.id} value={service.name}>
                              {service.icon} {service.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-gray-300 mb-2">Date *</label>
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          required
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 focus:border-yellow-500 focus:outline-none"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-gray-300 mb-2">Time *</label>
                        <input
                          type="time"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          required
                          className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 focus:border-yellow-500 focus:outline-none"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-gray-300 mb-2">Passengers</label>
                        <input
                          type="number"
                          name="passengers"
                          min="1"
                          max="20"
                          value={formData.passengers}
                          onChange={handleChange}
                          className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 focus:border-yellow-500 focus:outline-none"
                        />
                      </div>

                      {/* Pickup Location */}
                      <div className="md:col-span-2">
                        <label className="block text-gray-300 mb-2">Pickup Location *</label>
                        <div className="flex">
                          <input
                            type="text"
                            name="pickupLocation"
                            ref={pickupInputRef}
                            value={formData.pickupLocation}
                            onChange={handleChange}
                            required
                            className="w-full bg-black/50 border border-gray-700 rounded-l-lg px-4 py-3 focus:border-yellow-500 focus:outline-none"
                            placeholder="Enter pickup address"
                          />
                          <button
                            type="button"
                            onClick={() => handleLocationSelect('pickup')}
                            className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 rounded-r-lg"
                          >
                            Set
                          </button>
                        </div>
                      </div>

                      {/* Dropoff Location */}
                      <div className="md:col-span-2">
                        <label className="block text-gray-300 mb-2">Dropoff Location</label>
                        <div className="flex">
                          <input
                            type="text"
                            name="dropoffLocation"
                            ref={dropoffInputRef}
                            value={formData.dropoffLocation}
                            onChange={handleChange}
                            className="w-full bg-black/50 border border-gray-700 rounded-l-lg px-4 py-3 focus:border-yellow-500 focus:outline-none"
                            placeholder="Enter dropoff address (optional)"
                          />
                          <button
                            type="button"
                            onClick={() => handleLocationSelect('dropoff')}
                            className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 rounded-r-lg"
                          >
                            Set
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-8">
                      <label className="block text-gray-300 mb-2">Special Requests</label>
                      <textarea
                        name="specialRequests"
                        value={formData.specialRequests}
                        onChange={handleChange}
                        rows={4}
                        className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 focus:border-yellow-500 focus:outline-none"
                        placeholder="Any special instructions or requirements..."
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-6 rounded-lg transition-all duration-300 ${isSubmitting ? 'opacity-70' : ''}`}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </span>
                      ) : (
                        'Confirm Reservation'
                      )}
                    </button>
                  </form>
                </div>
                
                <div className="bg-black/80 border-t border-yellow-500/30 p-6 text-center">
                  <div className="flex items-center justify-center space-x-4">
                    <div className="text-yellow-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Need immediate assistance?</p>
                      <a href="tel:+14156518239" className="text-yellow-400 font-semibold hover:underline">+1 (415) 651-8239</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <Footer />
      </div>
    </>
  )
}