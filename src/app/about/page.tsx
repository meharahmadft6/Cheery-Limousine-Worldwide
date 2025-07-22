'use client'
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion, useAnimation, useInView } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function AboutPage() {
  const fleetControls = useAnimation();
  const fleetRef = useRef(null);
  const isInView = useInView(fleetRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      fleetControls.start("visible");
    }
  }, [isInView, fleetControls]);

  const fleetVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        type: "spring" as const,
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-gray-100">
      <Navbar />
      
      {/* Enhanced Hero Section */}
      <div className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-yellow-900/70 z-10" />
        <motion.div 
          className="absolute inset-0"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Image
            src="/limo7.jpg"
            alt="Luxury Limousine"
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
              Cherry Limousine Worldwide
            </span>
          </motion.h1>
          <motion.p 
            className="mt-6 max-w-2xl text-xl md:text-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Excellence in luxury transportation since 2010
          </motion.p>
          <motion.div
            className="mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <Link href={"#story"}>
              <motion.button 
                className="rounded-lg bg-yellow-600 px-8 py-3 text-lg font-bold text-black transition hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-black"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Our Story
              </motion.button>
            </Link> 
          </motion.div>
        </div>
        
    
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Our Story */}
        <motion.section 
          className="mb-16 md:mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div className="mb-12 text-center" variants={fadeIn}>
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl" id='story'>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                Our Story
              </span>
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full" />
          </motion.div>
          
          <div className="grid gap-8 md:grid-cols-2 px-4 md:px-8 lg:px-12">

            <motion.div variants={fadeIn}>
              <p className="mb-6 text-lg leading-relaxed md:text-xl">
                Founded in 2010, Cherry Limousine Worldwide began with a single vehicle and a vision to redefine luxury transportation in the Bay Area. What started as a small local service has grown into a premier limousine company trusted by executives, celebrities, and discerning clients.
              </p>
              <p className="mb-6 text-lg leading-relaxed md:text-xl">
                Our founder, recognized the need for a transportation service that combined impeccable reliability with genuine hospitality. Today, we maintain that original commitment while expanding our fleet and services to meet the evolving needs of our clients.
              </p>
           
            </motion.div>
            
            <motion.div 
              className="relative h-64 md:h-96 lg:h-[500px] "
              variants={fadeIn}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src="/limo1.jpeg"
                alt="Founder of Cherry Limousine"
                fill
                className="rounded-xl object-cover shadow-2xl"
              />
              <div className="absolute inset-0 rounded-xl border-2 border-yellow-500/30 pointer-events-none" />
            </motion.div>
          </div>
        </motion.section>

        {/* Our Mission */}
        <motion.section 
          className="mb-16 md:mb-24 rounded-xl bg-gradient-to-r from-black to-yellow-900 p-8 md:p-12 shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Our Mission
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full" />
          </div>
          <motion.p 
            className="mx-auto max-w-3xl text-center text-lg md:text-xl leading-relaxed text-gray-200"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            To provide unparalleled luxury transportation services that exceed expectations through attention to detail, professional chauffeurs, and a commitment to excellence in every journey.
          </motion.p>
        </motion.section>

        {/* Our Values */}
        <motion.section 
          className="mb-16 md:mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div className="mb-12 text-center" variants={fadeIn}>
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                Our Values
              </span>
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full" />
          </motion.div>
          
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Professionalism",
                description: "Our chauffeurs are extensively trained and maintain the highest standards of conduct.",
                icon: "👔",
                bg: "bg-gradient-to-br from-gray-900 to-gray-800"
              },
              {
                title: "Reliability",
                description: "We guarantee punctual service with real-time tracking for your peace of mind.",
                icon: "⏱️",
                bg: "bg-gradient-to-br from-gray-900 to-yellow-900"
              },
              {
                title: "Luxury",
                description: "Impeccably maintained vehicles with premium amenities for your comfort.",
                icon: "✨",
                bg: "bg-gradient-to-br from-gray-900 to-gray-800"
              },
              {
                title: "Discretion",
                description: "Your privacy is our priority with confidential, secure transportation.",
                icon: "🔒",
                bg: "bg-gradient-to-br from-gray-900 to-yellow-900"
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                className={`rounded-xl border border-yellow-800/50 p-6 text-center shadow-lg backdrop-blur-sm ${value.bg}`}
                variants={fadeIn}
                whileHover={{ 
                  y: -10, 
                  scale: 1.03,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
                  transition: { duration: 0.3 } 
                }}
              >
                <div className="mb-4 text-4xl">{value.icon}</div>
                <h3 className="mb-4 text-xl font-bold text-yellow-500">
                  {value.title}
                </h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Enhanced Fleet Section */}
        <motion.section
          className="mb-16 md:mb-24"
          ref={fleetRef}
          initial="hidden"
          animate={fleetControls}
          variants={staggerContainer}
        >
          <motion.div className="mb-12 text-center" variants={fadeIn}>
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                Our Fleet
              </span>
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full" />
          </motion.div>

       

          {/* Fleet Vehicles */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Mercedes-Benz E-Class",
                type: "SEDAN",
                capacity: "3 passengers",
                image: "/sedan.jpg",
              },
              {
                name: "Chevrolet Suburban LT",
                type: "SUV",
                capacity: "6 passengers",
                image: "/suv.jpeg",
              },
              {
                name: "Lincoln Stretch Limousine",
                type: "LIMOUSINE",
                capacity: "10 passengers",
                image: "/stretch.jpeg",
              },
            ].map((vehicle, index) => (
              <motion.div 
                key={index} 
                className="overflow-hidden rounded-xl shadow-2xl"
                variants={fleetVariants}
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 20px 25px -5px rgba(234, 179, 8, 0.3), 0 10px 10px -5px rgba(234, 179, 8, 0.1)"
                }}
              >
                <div className="relative h-64 overflow-hidden md:h-80">
              
                    <Image
                      src={vehicle.image}
                      alt={vehicle.name}
                      fill
                      className="object-contain"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="text-sm font-bold text-yellow-500">{vehicle.type}</div>
                      <h3 className="text-xl font-bold text-white">{vehicle.name}</h3>
                    </div>
                             </div>
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xl font-bold text-yellow-500">
                        {vehicle.name}
                      </h3>
                      <p className="text-gray-300">{vehicle.capacity}</p>
                    </div>
                    <Link href={'/reservation'}>
                    <motion.button
                      className="rounded-lg bg-yellow-600 px-4 py-2 text-sm font-bold text-black transition hover:bg-yellow-500"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      
                      >
                      Book Now
                    </motion.button>
                      </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="mt-12 text-center"
            variants={fadeIn}
          >
            <Link href="/fleet">
              <motion.button
                className="rounded-lg border-2 border-yellow-600 px-8 py-3 font-bold text-yellow-500 transition hover:bg-yellow-600 hover:text-black"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Full Fleet
              </motion.button>
            </Link>
          </motion.div>
        </motion.section>
      </div>

      {/* Enhanced CTA Section */}
      <motion.div 
        className="bg-gradient-to-r from-black to-yellow-900 py-16 md:py-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="mb-6 text-3xl font-bold text-white sm:text-4xl md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Experience the Cherry Difference
          </motion.h2>
          <motion.p 
            className="mx-auto mb-8 max-w-2xl text-xl text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Book your luxury transportation today and discover why we&#39;re the preferred choice for discerning clients.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Link href="/reservation">
              <motion.button 
                className="rounded-lg bg-yellow-600 px-8 py-4 text-lg font-bold text-black transition hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-black"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 15px -3px rgba(234, 179, 8, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Book Now
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
      
      <Footer />
    </div>
  );
}