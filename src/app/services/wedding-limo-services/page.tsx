import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function WeddingServicePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Subtle background pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20"></div>
      </div>

      <Navbar />
      
      <main className="pt-32 pb-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                Wedding Limo Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              From the ceremony to the reception, our wedding packages provide flawless transportation for the entire bridal party.
            </p>
          </div>
          
          {/* Full-width hero image with overlay */}
          <div className="relative w-full h-64 md:h-96 lg:h-[500px] rounded-xl overflow-hidden mb-12 shadow-xl">
            <Image 
              src="/wedding.jpg" 
              alt="Wedding limousine service" 
              fill 
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white hidden md:block">
              <h2 className="text-2xl md:text-3xl font-semibold mb-2">
                Make Your Special Day Unforgettable
              </h2>
              <p className="text-gray-300 max-w-2xl">
                Our luxury fleet and professional chauffeurs ensure your wedding transportation is seamless and stress-free.
              </p>
            </div>
          </div>
        </section>

        {/* Service Details */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-yellow-500 mb-6">
                About Our Wedding Service
              </h2>
              <div className="space-y-6 text-gray-300">
                <p>
                  Your wedding day should be perfect in every detail. Our wedding limousine service provides elegant, reliable transportation that complements your special occasion. We coordinate with your wedding planner to ensure flawless timing from the ceremony to the reception.
                </p>
                <p>
                  Whether you need transportation for the bridal party, family members, or the entire wedding guest list, our fleet of luxury vehicles can accommodate groups of all sizes. We specialize in creating memorable experiences with our attention to detail and white-glove service.
                </p>
                <p>
  From classic stretch limousines to modern luxury SUVs, we offer a variety of vehicles to match your wedding theme and style. Our packages include special touches like complimentary champagne and &quot;Just Married&quot; decorations.
</p>

              </div>
            </div>
            
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-yellow-400 mb-6">
                Service Features
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-yellow-500/10 p-2 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Bridal Dressing Area</h4>
                    <p className="text-gray-400 text-sm">Spacious interiors for last-minute touch-ups</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-yellow-500/10 p-2 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Wedding Decorations</h4>
                    <p className="text-gray-400 text-sm">Custom &quot;Just Married&quot; signs and ribbons</p>

                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-yellow-500/10 p-2 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Coordinated Timing</h4>
                    <p className="text-gray-400 text-sm">Precision scheduling with your wedding planner</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-yellow-500/10 p-2 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Complimentary Champagne</h4>
                    <p className="text-gray-400 text-sm">Toast to your new life together in style</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Vehicle Options */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-yellow-500 mb-12">
            Available Vehicles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Classic Stretch Limousine",
                description: "Timeless elegance for the bridal party's grand entrance",
                capacity: "8-10 passengers",
                image: "/limo7.jpg"
              },
              {
                name: "Luxury SUV Fleet",
                description: "Modern sophistication for wedding party transportation",
                capacity: "5-6 passengers per vehicle",
                image: "/suv.jpeg"
              },
              {
                name: "Vintage Rolls Royce",
                description: "Old-world charm for a fairy tale wedding experience",
                capacity: "4 passengers",
                image: "/vintage.jpg"
              }
            ].map((vehicle, index) => (
              <div key={index} className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-yellow-500/50 transition-all duration-300">
                <div className="relative h-48">
                  <Image 
                    src={vehicle.image} 
                    alt={vehicle.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{vehicle.name}</h3>
                  <p className="text-gray-300 mb-4">{vehicle.description}</p>
                  <div className="flex items-center text-yellow-400">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span>{vehicle.capacity}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonial */}
        <section className="mb-20 bg-gradient-to-r from-yellow-900/30 to-black/50 p-8 rounded-2xl border border-yellow-500/20">
          <div className="max-w-3xl mx-auto text-center">
            <svg className="w-10 h-10 text-yellow-500 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="text-xl italic text-white mb-6">
  &quot;Cheery Limousine made our wedding day transportation absolutely perfect! From getting ready at the hotel to our grand exit from the reception, everything was seamless. Our chauffeur even helped coordinate timing with our photographer. The vintage Rolls Royce was stunning and made us feel like royalty!&quot;
</blockquote>

            <div className="text-yellow-400 font-bold">— Sarah & Michael</div>
            <div className="text-yellow-300 text-sm">Napa Valley, CA</div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Plan Your Wedding Transportation?</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Contact us today to discuss your wedding transportation needs and receive a customized quote.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/reservation" 
              className="bg-yellow-600 hover:bg-yellow-500 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-yellow-500/30"
            >
              Book Wedding Transportation
            </a>
            <a 
              href="tel:+14156518239" 
              className="border border-yellow-500 text-yellow-500 hover:bg-yellow-500/10 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300"
            >
              Call Now: +1 (415) 651-8239
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}