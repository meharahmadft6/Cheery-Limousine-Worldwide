import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function ConcertTransportationPage() {
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
                Concert & Event Transportation
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Avoid parking hassles and arrive in style at Bay Area venues.
              We&#39;ll get you there and back safely.
            </p>
          </div>

          {/* Full-width hero image with overlay */}
          <div className="relative w-full h-64 md:h-96 lg:h-[500px] rounded-xl overflow-hidden mb-12 shadow-xl">
            <Image
              src="/limo9.jpg"
              alt="Concert transportation service"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white hidden md:block">
              <h2 className="text-2xl md:text-3xl font-semibold mb-2">
                Stress-Free Transportation for Bay Area Events
              </h2>
              <p className="text-gray-300 max-w-2xl">
                Our service ensures you enjoy the event without worrying about
                parking, traffic, or designated drivers.
              </p>
            </div>
          </div>
        </section>

        {/* Service Details */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-yellow-500 mb-6">
                About Our Event Transportation
              </h2>
              <div className="space-y-6 text-gray-300">
                <p>
                  Attending concerts, sports games, or special events in the Bay
                  Area should be about the experience, not the logistics. Our
                  event transportation service handles all the details so you
                  can focus on enjoying the show.
                </p>
                <p>
                  We specialize in group transportation to all major venues
                  including Chase Center, Oracle Park, Levi&#39;s Stadium, and
                  the Greek Theatre. Our drivers know the best routes and pickup
                  locations to avoid traffic congestion.
                </p>
                <p>
                  With late-night availability and group pricing options, we
                  make it easy and affordable for your whole party to travel
                  together safely. Arrive relaxed and leave without the parking
                  lot scramble.
                </p>
              </div>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-yellow-500 mb-6">
                Service Features
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-yellow-500/10 p-2 rounded-lg mr-4">
                    <svg
                      className="w-6 h-6 text-yellow-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-white">
                      Late Night Service
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Available until the last guest leaves the venue
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-yellow-500/10 p-2 rounded-lg mr-4">
                    <svg
                      className="w-6 h-6 text-yellow-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Group Discounts</h4>
                    <p className="text-gray-400 text-sm">
                      Special pricing for parties of 6 or more
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-yellow-500/10 p-2 rounded-lg mr-4">
                    <svg
                      className="w-6 h-6 text-yellow-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Venue Knowledge</h4>
                    <p className="text-gray-400 text-sm">
                      Designated pickup points at all major venues
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-yellow-500/10 p-2 rounded-lg mr-4">
                    <svg
                      className="w-6 h-6 text-yellow-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-white">
                      Celebration Ready
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Optional party lighting and sound systems
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Vehicle Options */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-yellow-500 mb-12">
            Event Vehicles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Party Limousine",
                description:
                  "Celebrate in style with lighting and premium sound",
                capacity: "8-10 passengers",
                image: "/limo7.jpg",
              },
              {
                name: "Luxury Party Bus",
                description:
                  "Spacious ride for large groups with entertainment",
                capacity: "18-20 passengers",
                image: "/party3.jpg",
              },
              {
                name: "Executive SUV",
                description: "Comfortable transportation for smaller groups",
                capacity: "5-6 passengers",
                image: "/suv.jpeg",
              },
            ].map((vehicle, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-yellow-500/50 transition-all duration-300"
              >
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
                  <h3 className="text-xl font-bold text-white mb-2">
                    {vehicle.name}
                  </h3>
                  <p className="text-gray-300 mb-4">{vehicle.description}</p>
                  <div className="flex items-center text-yellow-400">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
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
            <svg
              className="w-10 h-10 text-yellow-500 mx-auto mb-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="text-xl italic text-white mb-6">
              &quot;We used Cherry Limousine for our group going to a Warriors
              game and it was the best decision! No parking nightmares, no
              waiting for Ubers, and our party bus had amazing sound system to
              keep the energy high. The driver even knew the perfect pickup spot
              after the game to avoid all the chaos.&quot;
            </blockquote>
            <div className="text-yellow-400 font-bold">— Jason & Friends</div>
            <div className="text-yellow-300 text-sm">Concord, CA</div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Book Your Event Transportation Today
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Make your next event experience seamless and memorable with our
            professional transportation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/reservation"
              className="bg-yellow-600 hover:bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-yellow-500/30"
            >
              Reserve Event Transportation
            </a>
            <a
              href="tel:+tel:+14156512290"
              className="border border-yellow-500 text-yellow-500 hover:bg-yellow-500/10 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300"
            >
              Call Now: +1 (415) 651-2290
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
