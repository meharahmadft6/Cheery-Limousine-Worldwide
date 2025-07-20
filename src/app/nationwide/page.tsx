"use client";
import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cities = [
  "Los Angeles",
  "Orlando",
  "New Jersey",
  "Houston",
  "Dallas",
  "Miami",
  "Chicago",
  "Las Vegas",
  "Atlanta",
  "Boston",
  "Seattle",
  "Washington DC",
  "Philadelphia",
  "Phoenix",
  "Denver",
  "Austin",
  "San Antonio",
  "Nashville",
  "New Orleans",
  "San Jose",
];

const cityCards = [
  {
    name: "New York",
    image:
      "https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    link: "/reservation",
    alt: "New York City skyline at night",
  },
  {
    name: "San Diego",
    image:
      "https://images.unsplash.com/photo-1508402476522-c77c2fa4479d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    link: "/reservation",
    alt: "San Diego coastline with palm trees",
  },
  {
    name: "San Francisco",
    image:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
    link: "/reservation",
    alt: "Golden Gate Bridge in San Francisco",
  },
  {
    name: "Chicago",
    image:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpY2Fnb3xlbnwwfHwwfHx8MA%3D%3D",
    link: "/reservation",
    alt: "Chicago skyline with cloud gate",
  },
  {
    name: "Las Vegas",
    image:
      "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    link: "/reservation",
    alt: "Las Vegas strip at night",
  },
  {
    name: "Miami",
    image:
      "https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
    link: "/reservation",
    alt: "Miami beach with art deco buildings",
  },
];

export default function NationwidePage() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <div className="min-h-screen bg-black text-gray-100">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-yellow-900/70 z-10" />
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Image
            src="https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
            alt="Nationwide limousine service"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        <div className="relative z-20 flex h-full flex-col items-center justify-center px-4 text-center">
          <motion.h1
            className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              Nationwide Luxury Service
            </span>
          </motion.h1>
          <motion.p
            className="mt-6 max-w-2xl text-xl md:text-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Premium limousine service across 20+ major US cities
          </motion.p>
          <motion.div
            className="mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <Link href={"#cities"}>
              <motion.button
                className="rounded-lg bg-yellow-600 px-8 py-3 text-lg font-bold text-black transition hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-black"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Cities
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Cities Grid */}
      <motion.section
        className="py-16 px-4 bg-black"
        id="cities"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div className="mb-12 text-center" variants={fadeIn}>
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                Cities We Serve
              </span>
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full" />
          </motion.div>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
            variants={staggerContainer}
          >
            {cities.map((city) => (
              <motion.div
                key={city}
                className="flex items-center gap-3 py-2 px-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition"
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-yellow-500">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="12" fill="#FACC15" />
                    <path
                      d="M7 13l3 3 7-7"
                      stroke="#000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-lg font-medium text-yellow-100">
                  {city}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Highlight Section */}
      <motion.section
        className="bg-gradient-to-r from-yellow-500 to-yellow-600 py-16 px-4 text-black text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            The most reliable nationwide limo service
          </motion.h2>
          <motion.p
            className="text-xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Whether you&apos;re attending a business conference, celebrating a
            graduation, heading off on a much needed vacation or just spending a
            special night in the city, Cheery Limousine&apos;s limo service will
            promptly attend to all your travel needs.
          </motion.p>
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "24/7 Availability",
                "Professional Chauffeurs",
                "Luxury Fleet",
                "Nationwide Coverage",
                "Real-time Tracking",
                "Custom Packages",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                href="/about"
                className="inline-block px-6 py-3 bg-black text-yellow-500 font-bold rounded-lg hover:bg-gray-900 transition"
              >
                Learn More About Our Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* City Cards */}
      <motion.section
        className="py-16 px-4 bg-black"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="mb-12 text-center" variants={fadeIn}>
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                Popular Destinations
              </span>
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full" />
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {cityCards.map((card, index) => (
              <motion.div
                key={index}
                className="rounded-xl overflow-hidden shadow-2xl bg-gray-900 flex flex-col"
                variants={fadeIn}
                whileHover={{
                  scale: 1.03,
                  boxShadow:
                    "0 20px 25px -5px rgba(234, 179, 8, 0.3), 0 10px 10px -5px rgba(234, 179, 8, 0.1)",
                }}
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    className="object-cover w-full h-full"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-3xl font-bold text-yellow-500">
                      {card.name}
                    </h3>
                    <p className="text-gray-200 mt-2">
                      Premium limousine service
                    </p>
                  </div>
                </div>
                <div className="flex-1 flex items-end p-6">
                  <Link
                    href={card.link}
                    className="w-full text-center rounded-lg bg-yellow-600 px-6 py-3 text-lg font-bold text-black transition hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-black"
                  >
                    Book Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        className="py-16 px-4 bg-gray-900"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div className="mb-12 text-center" variants={fadeIn}>
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                What Our Clients Say
              </span>
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full" />
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
          >
            {[
              {
                quote:
                  "Cheery Limousine provided exceptional service for our corporate event in New York. The chauffeur was professional and the vehicle was immaculate.",
                author: "Michael T., New York",
                rating: "★★★★★",
              },
              {
                quote:
                  "Used their service in Miami for our wedding. Everything was perfect - on time, clean, and the driver went above and beyond to make our day special.",
                author: "Sarah L., Miami",
                rating: "★★★★★",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-black p-6 rounded-xl"
                variants={fadeIn}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center mb-4">
                  <div className="text-yellow-500 text-2xl mr-2">
                    {testimonial.rating}
                  </div>
                </div>
                <p className="text-gray-300 mb-4">
                  &quot;{testimonial.quote}&quot;
                </p>
                <p className="font-bold text-yellow-500">
                  - {testimonial.author}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-20 px-4 text-center relative overflow-hidden bg-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-4xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-yellow-500 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Ready for Your Luxury Ride?
          </motion.h2>
          <motion.p
            className="text-xl text-gray-200 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Book your luxury transportation today and discover why we&apos;re
            the preferred choice for discerning clients across the country.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Link href="/reservation">
              <motion.button
                className="rounded-lg bg-yellow-600 px-8 py-4 text-lg font-bold text-black transition hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-black"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Reserve Now
              </motion.button>
            </Link>
            <a href="tel:+923394126260">
              <motion.button
                className="rounded-lg border-2 border-yellow-500 px-8 py-4 text-lg font-bold text-yellow-500 transition hover:bg-yellow-500 hover:text-black focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-black"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button>
            </a>
          </motion.div>
        </div>
      </motion.section>

      <WhatsAppFloat />
      <Footer />
    </div>
  );
}
