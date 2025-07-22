"use client";
import React from "react";
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

export default function PrivacyPolicy() {
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
      <div className="relative h-96 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-yellow-900/70 z-10" />
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Image
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Privacy Policy"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        <div className="relative z-20 flex h-full flex-col items-center justify-center px-4 text-center">
          <motion.h1
            className="text-4xl font-bold sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              Policies & Privacy
            </span>
          </motion.h1>
          <motion.p
            className="mt-6 max-w-2xl text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Your safety and privacy are our top priorities
          </motion.p>
        </div>
      </div>

      {/* Content Section */}
      <motion.section
        className="py-16 px-4 bg-black"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={staggerContainer}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="prose prose-invert max-w-none"
            variants={fadeIn}
          >
            {/* Safety and Security Section */}
            <motion.div variants={fadeIn}>
              <h2 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
                Safety & Security Commitment
              </h2>
              <p className="mb-6">
                At Cherry Limousine Worldwide, we prioritize your safety with comprehensive measures:
              </p>
              <ul className="mb-6 space-y-4">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">✓</span>
                  <span><strong>Expert Chauffeurs:</strong> Highly trained professionals with extensive Bay Area knowledge and impeccable safety records</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">✓</span>
                  <span><strong>Vehicle Excellence:</strong> Rigorous pre-trip inspections, advanced safety systems, and premium sanitization protocols</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">✓</span>
                  <span><strong>Data Protection:</strong> Military-grade encryption for all transactions and confidential information</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">✓</span>
                  <span><strong>Workplace Standards:</strong> Strict drug-free policy with thorough background checks for all team members</span>
                </li>
              </ul>
            </motion.div>

            {/* Privacy Policy Section */}
            <motion.div variants={fadeIn} className="mt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
                Privacy Protection
              </h2>
              <p className="mb-6">
                We handle your personal information with the utmost care and security:
              </p>
              <ul className="mb-6 space-y-2">
                <li>Only collect essential data for service provision</li>
                <li>Employ end-to-end encryption for all digital communications</li>
                <li>Never share your information with third parties without consent</li>
                <li>Provide full transparency about data usage</li>
              </ul>
            </motion.div>

            {/* Booking & Cancellation Policies */}
            <motion.div variants={fadeIn} className="mt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
                Booking & Cancellation Policies
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-yellow-400 mb-2">Standard Reservations</h3>
                  <p>24-48 hour cancellation notice required for hourly charters or point-to-point services</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-yellow-400 mb-2">Special Events</h3>
                  <p>72 hour cancellation notice required for weddings, birthdays, and other celebrations</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-yellow-400 mb-2">Airport Transfers</h3>
                  <p>Free cancellations permitted before vehicle dispatch</p>
                </div>
                <div className="bg-gray-900 p-4 rounded-lg">
                  <p className="font-medium">Contact our dispatch center at <span className="text-yellow-400">+1 (415) 651-8239s</span> for any changes or assistance</p>
                </div>
              </div>
            </motion.div>

            {/* Service Policies */}
            <motion.div variants={fadeIn} className="mt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
                Service Policies
              </h2>
              <div className="grid gap-6">
                <div className="bg-gray-900/50 p-5 rounded-lg border-l-4 border-yellow-500">
                  <h3 className="text-xl font-semibold mb-2">No-Show Policy</h3>
                  <p>Clients who fail to appear at the pickup location without notification will be charged the full trip amount including gratuity.</p>
                </div>
                
                <div className="bg-gray-900/50 p-5 rounded-lg border-l-4 border-yellow-500">
                  <h3 className="text-xl font-semibold mb-2">Payment Terms</h3>
                  <ul className="space-y-2">
                    <li>We accept all major credit cards (Visa®, MasterCard®, American Express®, Discover®)</li>
                    <li>50% deposit required for card reservations</li>
                    <li>Cash payments must be made in person at time of service</li>
                  </ul>
                </div>
                
                <div className="bg-gray-900/50 p-5 rounded-lg border-l-4 border-yellow-500">
                  <h3 className="text-xl font-semibold mb-2">Wait Time Charges</h3>
                  <ul className="space-y-2">
                    <li>15-minute complimentary grace period for all pickups</li>
                    <li>Additional wait time billed in 30-minute increments at vehicles hourly rate</li>
                  </ul>
                </div>
                
                <div className="bg-gray-900/50 p-5 rounded-lg border-l-4 border-yellow-500">
                  <h3 className="text-xl font-semibold mb-2">Extra Stops</h3>
                  <ul className="space-y-2">
                    <li>Unscheduled stops incur $15-$50+ charges based on distance</li>
                    <li>Please specify all required stops during booking</li>
                  </ul>
                </div>
                
                <div className="bg-gray-900/50 p-5 rounded-lg border-l-4 border-yellow-500">
                  <h3 className="text-xl font-semibold mb-2">Late Night/Early Morning</h3>
                  <p>Trips between 11:00 PM - 6:00 AM include a $15-$25 surcharge based on duration and distance.</p>
                </div>
                
                <div className="bg-gray-900/50 p-5 rounded-lg border-l-4 border-yellow-500">
                  <h3 className="text-xl font-semibold mb-2">Non-Smoking Policy</h3>
                  <ul className="space-y-2">
                    <li>Strictly enforced in all vehicles</li>
                    <li>$100 cleaning fee for violations</li>
                    <li>Chauffeurs will accommodate smoke breaks at safe locations</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={fadeIn} className="mt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
                Contact Our Team
              </h2>
              <div className="bg-gray-900 p-6 rounded-lg">
                <p className="font-bold text-yellow-500">All Bay Limousine</p>
                <p>Dispatch: +1 (415) 651-8239</p>
                <p>Available 24/7 for your transportation needs</p>
                <p className="mt-4">Policy Effective Date: {new Date().toLocaleDateString()}</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <WhatsAppFloat />
      <Footer />
    </div>
  );
}