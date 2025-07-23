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
              Terms and Conditions
            </span>
          </motion.h1>
          <motion.p
            className="mt-6 max-w-2xl text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Your privacy is important to us
          </motion.p>
        </div>
      </div>

      {/* Privacy Content */}
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
            <motion.h2
              className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6"
              variants={fadeIn}
            >
              Information Collection
            </motion.h2>
            <motion.p className="mb-6" variants={fadeIn}>
              We do not collect personal data from our website unless you
              voluntarily provide it through our reservation forms or contact
              requests. The information we may collect includes:
            </motion.p>
            <motion.ul className="mb-6 space-y-2" variants={fadeIn}>
              <li>Name, email, and phone number for reservations</li>
              <li>Pickup/drop-off locations and travel details</li>
              <li>
                Payment information (processed securely through encrypted
                servers)
              </li>
            </motion.ul>

            <motion.h2
              className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6 mt-12"
              variants={fadeIn}
            >
              Data Usage
            </motion.h2>
            <motion.p className="mb-6" variants={fadeIn}>
              We use your information solely to provide and improve our
              transportation services. This includes:
            </motion.p>
            <motion.ul className="mb-6 space-y-2" variants={fadeIn}>
              <li>Processing reservations and payments</li>
              <li>Communicating service details and updates</li>
              <li>Improving our services and customer experience</li>
              <li>Complying with legal obligations</li>
            </motion.ul>

            <motion.h2
              className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6 mt-12"
              variants={fadeIn}
            >
              Data Protection
            </motion.h2>
            <motion.p className="mb-6" variants={fadeIn}>
              We implement industry-standard security measures to protect your
              information:
            </motion.p>
            <motion.ul className="mb-6 space-y-2" variants={fadeIn}>
              <li>End-to-end encryption for all data transmissions</li>
              <li>Secure servers with restricted access</li>
              <li>Regular security audits and updates</li>
              <li>
                We do not store complete credit card details after processing
              </li>
            </motion.ul>

            <motion.h2
              className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6 mt-12"
              variants={fadeIn}
            >
              Third-Party Sharing
            </motion.h2>
            <motion.p className="mb-6" variants={fadeIn}>
              We do not sell or share your personal information with third
              parties except when necessary for service provision or as required
              by law. This may include:
            </motion.p>
            <motion.ul className="mb-6 space-y-2" variants={fadeIn}>
              <li>Payment processors for transaction completion</li>
              <li>
                Affiliate transportation providers for service fulfillment
              </li>
              <li>Legal authorities when required by law</li>
            </motion.ul>

            <motion.h2
              className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6 mt-12"
              variants={fadeIn}
            >
              Your Rights
            </motion.h2>
            <motion.p className="mb-6" variants={fadeIn}>
              You have the right to:
            </motion.p>
            <motion.ul className="mb-6 space-y-2" variants={fadeIn}>
              <li>Access, update, or delete your personal information</li>
              <li>Opt-out of marketing communications</li>
              <li>Request details about data we hold about you</li>
              <li>Withdraw consent for data processing (where applicable)</li>
            </motion.ul>

            <motion.h2
              className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6 mt-12"
              variants={fadeIn}
            >
              Cookies & Tracking
            </motion.h2>
            <motion.p className="mb-6" variants={fadeIn}>
              Our website may use cookies to enhance user experience. You can
              disable cookies in your browser settings, though this may affect
              website functionality.
            </motion.p>

            <motion.h2
              className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6 mt-12"
              variants={fadeIn}
            >
              Policy Updates
            </motion.h2>
            <motion.p className="mb-6" variants={fadeIn}>
              We may update this policy periodically. The latest version will
              always be posted on our website with the effective date.
            </motion.p>

            <motion.h2
              className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6 mt-12"
              variants={fadeIn}
            >
              Contact Us
            </motion.h2>
            <motion.p className="mb-6" variants={fadeIn}>
              For any privacy-related questions or requests, please contact us
              at:
            </motion.p>
            <motion.div
              className="bg-gray-900 p-6 rounded-lg"
              variants={fadeIn}
            >
              <p className="font-bold text-yellow-500">
                Cherry Limousine Worldwide
              </p>
              <p>Phone: +1 (415) 651-2290</p>
              <p>Email: reservations@cherrylimousineworldwide.com</p>
              <p className="mt-4">
                Last Updated: {new Date().toLocaleDateString()}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <WhatsAppFloat />
      <Footer />
    </div>
  );
}
