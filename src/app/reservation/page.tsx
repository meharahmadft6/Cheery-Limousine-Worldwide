"use client";
import { useState } from "react";
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

        {/* Main Booking Form */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="bg-black/70 backdrop-blur-sm border border-yellow-500/30 rounded-xl overflow-hidden shadow-2xl">
            <div className="p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-yellow-400 text-center">
                Book Your Transportation
              </h2>

              {/* Full-width Widget Container */}
              <div className="min-h-[800px] w-full relative">
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
                  className="w-full h-full min-h-[800px] border-0"
                  onLoad={() => setIframeLoaded(true)}
                  allowFullScreen
                  title="Cherry Limousine worldwide Reservation Form"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="bg-black/70 backdrop-blur-sm border border-yellow-500/30 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">
              Why Choose Cherry Limousine Worldwide
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="bg-yellow-500/10 p-4 rounded-full mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-yellow-400"
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
                <h3 className="text-xl font-semibold text-white mb-2">
                  Premium Vehicles
                </h3>
                <p className="text-gray-300">
                  Our fleet features only the most luxurious and well-maintained
                  vehicles in the Bay Area, ensuring your comfort and style.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="bg-yellow-500/10 p-4 rounded-full mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-yellow-400"
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
                <h3 className="text-xl font-semibold text-white mb-2">
                  Punctual Service
                </h3>
                <p className="text-gray-300">
                  We guarantee on-time arrivals with 99.7% punctuality across
                  all our bookings, so you'll never miss an important event.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="bg-yellow-500/10 p-4 rounded-full mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-yellow-400"
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
                <h3 className="text-xl font-semibold text-white mb-2">
                  Verified Professionals
                </h3>
                <p className="text-gray-300">
                  All chauffeurs undergo rigorous background checks and
                  professional training to ensure your safety and satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Services Section */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="bg-black/70 backdrop-blur-sm border border-yellow-500/30 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-yellow-400 mb-8 text-center">
              Our Premium Services
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="flex flex-col items-center bg-black/50 p-6 rounded-lg hover:bg-yellow-500/10 transition-all duration-300"
                >
                  <span className="text-4xl mb-3">{service.icon}</span>
                  <h3 className="text-lg font-semibold text-center">
                    {service.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="bg-black/70 backdrop-blur-sm border border-yellow-500/30 rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">
              Need Immediate Assistance?
            </h2>
            <div className="flex flex-col items-center justify-center space-y-4">
              <a
                href="tel:+14156512290"
                className="flex items-center text-2xl text-yellow-400 font-semibold hover:underline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 mr-2"
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
                +1 (415) 651-2290
              </a>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Our customer service team is available 24/7 to assist with your
                reservations and any questions you may have about our services.
              </p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
