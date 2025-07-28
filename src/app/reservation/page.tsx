"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  { id: 1, name: "Executive Limo Service", icon: "🚘" },
  { id: 2, name: "Party Bus", icon: "🚍" },
  { id: 3, name: "Black Car Service", icon: "🚖" },
  { id: 4, name: "Wedding Limo", icon: "💍" },
  { id: 5, name: "Airport Transfer", icon: "✈️" },
  { id: 6, name: "Wine Tour", icon: "🍷" },
];

export default function ReservationPage() {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  return (
    <>
      <Head>
        <title>Reservation | Cherry Limousine Worldwide</title>
      </Head>

      <div className="min-h-screen bg-black text-white">
        <Navbar />

        {/* Hero Section */}
        <div className="relative h-96 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-yellow-900 opacity-90"></div>
          <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-400">
              Reserve Your Luxury Ride
            </h1>
            <p className="text-xl text-yellow-200 max-w-2xl">
              Experience the Cherry Limousine Worldwide difference with our
              premium transportation services
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left Side - Information */}
            <div className="lg:w-1/2 bg-black/70 backdrop-blur-sm border border-yellow-500/30 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-yellow-400 mb-6">
                Why Choose Us
              </h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-yellow-500/10 p-3 rounded-full mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-yellow-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Premium Vehicles
                    </h3>
                    <p className="text-gray-300">
                      Our fleet features only the most luxurious and
                      well-maintained vehicles in the Bay Area.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-yellow-500/10 p-3 rounded-full mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-yellow-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Punctual Service
                    </h3>
                    <p className="text-gray-300">
                      We guarantee on-time arrivals with 99.7% punctuality
                      across all our bookings.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-yellow-500/10 p-3 rounded-full mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-yellow-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Verified Professionals
                    </h3>
                    <p className="text-gray-300">
                      All chauffeurs undergo rigorous background checks and
                      professional training.
                    </p>
                  </div>
                </div>
              </div>

              {/* Services List */}
              <div className="mt-10">
                <h3 className="text-xl font-semibold text-yellow-400 mb-4">
                  Our Services
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {services.map((service) => (
                    <div
                      key={service.id}
                      className="flex items-center bg-black/50 p-3 rounded-lg"
                    >
                      <span className="text-2xl mr-2">{service.icon}</span>
                      <span className="text-gray-300">{service.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - MyLimoBiz Widget */}
            <div className="lg:w-1/2 bg-black/70 backdrop-blur-sm border border-yellow-500/30 rounded-xl overflow-hidden shadow-2xl">
              <div className="p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-yellow-400">
                  Book Your Transportation
                </h2>

                {/* Widget Container */}
                <div className="min-h-[600px] w-full relative">
                  {!iframeLoaded && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 rounded-lg p-8">
                      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500 mb-4"></div>
                      <p className="text-gray-300">
                        Loading reservation system...
                      </p>
                    </div>
                  )}
                  <iframe
                    src="https://book.mylimobiz.com/v4/fivestarlimo"
                    className="w-full h-full min-h-[600px] border-0"
                    onLoad={() => setIframeLoaded(true)}
                    allowFullScreen
                    title="MyLimoBiz Reservation Widget"
                  ></iframe>
                </div>
              </div>

              <div className="bg-black/80 border-t border-yellow-500/30 p-6 text-center">
                <div className="flex items-center justify-center space-x-4">
                  <div className="text-yellow-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">
                      Need immediate assistance?
                    </p>
                    <a
                      href="tel:+14156512290"
                      className="text-yellow-400 font-semibold hover:underline"
                    >
                      +1 (415) 651-2290
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
