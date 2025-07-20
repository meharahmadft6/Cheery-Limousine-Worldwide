'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
type Vehicle = {
  id: string;
  type: 'SEDAN' | 'SUV' | 'LIMOUSINE' | 'SHUTTLE BUS' | 'PARTY BUS';
  name: string;
  imageUrl: string;
  passengerCapacity: number;
  luggageCapacity: number;
  features?: string[];
  description?: string;
};

const FleetPage = () => {
  const vehicles: Vehicle[] = [
    // Sedans
    {
      id: 'sedan-1',
      type: 'SEDAN',
      name: 'Mercedes-Benz S-Class',
      imageUrl: '/sclass.jpg',
      passengerCapacity: 3,
      luggageCapacity: 3,
      features: ['Executive seating', 'Advanced climate control', 'Burmester sound system'],
      description: 'The epitome of luxury sedans with unparalleled comfort and cutting-edge technology.'
    },
    {
      id: 'sedan-2',
      type: 'SEDAN',
      name: 'BMW 7 Series',
      imageUrl: '/bmw.webp',
      passengerCapacity: 3,
      luggageCapacity: 3,
      features: ['Executive lounge', 'Gesture control', 'Sky lounge roof'],
      description: 'Sophisticated design meets innovative technology for the ultimate driving experience.'
    },
    {
      id: 'sedan-3',
      type: 'SEDAN',
      name: 'Audi A8 L',
      imageUrl: '/audi.avif',
      passengerCapacity: 3,
      luggageCapacity: 3,
      features: ['Virtual cockpit', 'Massage seats', 'Night vision assistant'],
      description: 'Progressive luxury with industry-leading driver assistance systems.'
    },

    // SUVs
    {
      id: 'suv-1',
      type: 'SUV',
      name: 'Cadillac Escalade',
      imageUrl: '/cadilliacsuv2.webp',
      passengerCapacity: 7,
      luggageCapacity: 7,
      features: ['36" curved OLED display', 'AKG Studio sound', 'Super Cruise'],
      description: 'The ultimate luxury SUV with bold American styling and premium amenities.'
    },
    {
      id: 'suv-2',
      type: 'SUV',
      name: 'Lincoln Navigator',
      imageUrl: '/lincon.jpg',
      passengerCapacity: 7,
      luggageCapacity: 7,
      features: ['30-way seats', 'Revel audio system', 'Perfect Position seats'],
      description: 'Spacious and sophisticated with exceptional comfort for all passengers.'
    },
    {
      id: 'suv-3',
      type: 'SUV',
      name: 'Mercedes-Benz GLS',
      imageUrl: '/gls.jpg',
      passengerCapacity: 6,
      luggageCapacity: 6,
      features: ['MBUX infotainment', 'ENERGIZING comfort', 'AIRMATIC suspension'],
      description: 'The S-Class of SUVs offering first-class comfort in every seat.'
    },

    // Limousines
    {
      id: 'limo-1',
      type: 'LIMOUSINE',
      name: 'Lincoln Stretch Limousine',
      imageUrl: '/Lincoln.webp  ',
      passengerCapacity: 10,
      luggageCapacity: 4,
      features: ['LED lighting', 'Premium bar', 'Privacy divider'],
      description: 'Classic stretch limousine perfect for weddings and special events.'
    },
    {
      id: 'limo-2',
      type: 'LIMOUSINE',
      name: 'Cadillac XTS Limousine',
      imageUrl: '/cadilliac.jpeg',
      passengerCapacity: 8,
      luggageCapacity: 4,
      features: ['Leather seating', 'Entertainment system', 'Climate control'],
      description: 'Executive limousine offering both comfort and professional style.'
    },
    {
      id: 'limo-3',
      type: 'LIMOUSINE',
      name: 'Mercedes-Benz S-Class Limousine',
      imageUrl: '/sclass.jpg',
      passengerCapacity: 6,
      luggageCapacity: 4,
      features: ['Executive seating', 'Massage functions', 'Burmester sound'],
      description: 'The pinnacle of luxury limousines for the most discerning clients.'
    },

    // Shuttle Buses
    {
      id: 'shuttle-1',
      type: 'SHUTTLE BUS',
      name: 'Mercedes-Benz Sprinter',
      imageUrl: '/sprinter.avif',
      passengerCapacity: 14,
      luggageCapacity: 12,
      features: ['Comfortable seating', 'Ample storage', 'Professional driver'],
      description: 'Ideal for group transportation with comfort and reliability.'
    },
    {
      id: 'shuttle-2',
      type: 'SHUTTLE BUS',
      name: 'Ford Transit',
      imageUrl: '/ford.jpg',
      passengerCapacity: 12,
      luggageCapacity: 10,
      features: ['Spacious interior', 'Climate control', 'WiFi available'],
      description: 'Versatile shuttle for airport transfers and group outings.'
    },

    // Party Buses
    {
      id: 'party-1',
      type: 'PARTY BUS',
      name: 'Elite Party Coach',
      imageUrl: '/elite.jpg',
      passengerCapacity: 25,
      luggageCapacity: 10,
      features: ['Dance floor', 'Premium sound', 'LED lighting', 'Bar area'],
      description: 'The ultimate mobile party venue with all the amenities for celebration.'
    },
    {
      id: 'party-2',
      type: 'PARTY BUS',
      name: 'Luxury Party Limo Bus',
      imageUrl: '/party3.jpg',
      passengerCapacity: 18,
      luggageCapacity: 8,
      features: ['Plush seating', 'Karaoke system', 'Mood lighting','Refreshing'],
      description: 'Perfect for bachelor/bachelorette parties and nightclub hopping.'
    }
  ];

  const vehicleTypes = ['SEDAN', 'SUV', 'LIMOUSINE', 'SHUTTLE BUS', 'PARTY BUS'] as const;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-gray-100">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-96 md:h-screen w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-yellow-900/70 z-10" />
        <Image
          src="/audi.avif"
          alt="Luxury Fleet"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        
        <div className="relative z-20 flex h-full flex-col items-center justify-center px-4 text-center">
          <motion.h1 
            className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              Our Premium Fleet
            </span>
          </motion.h1>
          <motion.p 
            className="mt-2 max-w-2xl text-xl md:text-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Bay Area&#39;s finest luxury vehicles for every occasion
          </motion.p>
        </div>
      </div>

      {/* Fleet Navigation */}
      <motion.div 
        className="sticky top-0 bg-black border-b border-yellow-900 z-20 "
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6">
        <motion.div 
  className="flex justify-center overflow-x-auto py-4 space-x-8"
  initial="hidden"
  animate="visible"
  variants={containerVariants}
>
    
            {vehicleTypes.map((type) => (
              <motion.a
                key={type}
                href={`#${type.toLowerCase().replace(' ', '-')}`}
                className="whitespace-nowrap text-lg font-medium text-gray-300 hover:text-yellow-500 transition-colors"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                {type}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Fleet Sections */}
      <div className="container mx-auto px-4 py-12 md:py-20">
        {vehicleTypes.map((type) => {
          const typeVehicles = vehicles.filter((v) => v.type === type);
          if (typeVehicles.length === 0) return null;

          return (
            <motion.section 
              key={type} 
              id={type.toLowerCase().replace(' ', '-')}
              className="mb-20 md:mb-32"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
            >
              <motion.div className="mb-12 text-center" variants={itemVariants}>
                <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                    {type}
                  </span>
                </h2>
                <div className="mx-auto mt-4 h-1 w-20 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full" />
              </motion.div>
              
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
              >
                {typeVehicles.map((vehicle) => (
                  <motion.div
                    key={vehicle.id}
                    className="bg-gray-900/50 border border-yellow-800/30 rounded-xl overflow-hidden hover:border-yellow-500/50 transition-all duration-300"
                    variants={itemVariants}
                    whileHover={{ 
                      y: -10,
                      boxShadow: "0 20px 25px -5px rgba(234, 179, 8, 0.1), 0 10px 10px -5px rgba(234, 179, 8, 0.04)"
                    }}
                  >
                    <div className="relative h-64 w-full">
                      <Image
                        src={vehicle.imageUrl}
                        alt={vehicle.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-xl font-bold text-white">{vehicle.name}</h3>
                      </div>
                    </div>
                    <div className="p-6">
                      {vehicle.description && (
                        <p className="text-gray-300 mb-4">{vehicle.description}</p>
                      )}
                      <div className="flex justify-between mb-6">
                        <div className="text-yellow-400">
                          <span className="font-medium">Passengers:</span> {vehicle.passengerCapacity}
                        </div>
                        <div className="text-yellow-400">
                          <span className="font-medium">Luggage:</span> {vehicle.luggageCapacity}
                        </div>
                      </div>
                      {vehicle.features && (
                        <ul className="mb-6 space-y-2">
                          {vehicle.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-gray-300">
                              <svg
                                className="w-4 h-4 mr-2 text-yellow-500"
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
                              {feature}
                            </li>
                          ))}
                        </ul>
                      )}
                      <Link href={'/reservation'}>
                      <motion.button
                        className="w-full bg-yellow-600 hover:bg-yellow-500 text-black py-3 px-6 rounded-lg font-bold transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        >
                        Reserve This Vehicle
                      </motion.button>
                        </Link>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>
          );
        })}
      </div>

      {/* CTA Section */}
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
            Ready to Experience Luxury?
          </motion.h2>
          <motion.p 
            className="mx-auto mb-8 max-w-2xl text-xl text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Book your premium vehicle today and travel in unmatched comfort and style.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Link href="/reservation">
              <motion.button 
                className="rounded-lg bg-yellow-600 px-8 py-4 text-lg font-bold text-black transition hover:bg-yellow-500"
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
};

export default FleetPage;