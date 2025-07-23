"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
type Vehicle = {
  id: string;
  type:
    | "SEDAN"
    | "SUV"
    | "LIMOUSINE"
    | "SHUTTLE BUS"
    | "PARTY BUS"
    | "COACH"
    | "SPRINTER";
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
      id: "sedan-1",
      type: "SEDAN",
      name: "Mercedes-Benz S-Class",
      imageUrl: "/sclass.jpg",
      passengerCapacity: 3,
      luggageCapacity: 3,
      features: [
        "Executive seating",
        "Advanced climate control",
        "Burmester sound system",
      ],
      description:
        "The epitome of luxury sedans with unparalleled comfort and cutting-edge technology.",
    },
    {
      id: "sedan-2",
      type: "SEDAN",
      name: "Executive Sedan",
      imageUrl: "/executive-sedan.jpg",
      passengerCapacity: 2,
      luggageCapacity: 2,
      features: ["Executive lounge", "Gesture control", "Sky lounge roof"],
      description:
        "Sophisticated design meets innovative technology for the ultimate driving experience.",
    },
    {
      id: "sedan-3",
      type: "SEDAN",
      name: "Audi A8 L",
      imageUrl: "/audi.avif",
      passengerCapacity: 3,
      luggageCapacity: 3,
      features: ["Virtual cockpit", "Massage seats", "Night vision assistant"],
      description:
        "Progressive luxury with industry-leading driver assistance systems.",
    },
    {
      id: "sedan-4",
      type: "SEDAN",
      name: "BMW 5 Series",
      imageUrl: "/bmw.webp",
      passengerCapacity: 3,
      luggageCapacity: 2,
      features: [
        "Dynamic handling",
        "iDrive infotainment",
        "Harman Kardon audio",
      ],
      description:
        "A perfect blend of performance and business-class luxury, ideal for executive rides.",
    },
    {
      id: "sedan-5",
      type: "SEDAN",
      name: "Mercedes-Benz E-Class",
      imageUrl: "/benz.jpg",
      passengerCapacity: 3,
      luggageCapacity: 2,
      features: [
        "MBUX interface",
        "Ambient lighting",
        "Agility control suspension",
      ],
      description:
        "Smart, elegant, and intuitive — a true executive’s choice for smooth city rides.",
    },
    {
      id: "sedan-6",
      type: "SEDAN",
      name: "Lexus LS",
      imageUrl: "/lexas.jpg",
      passengerCapacity: 3,
      luggageCapacity: 3,
      features: [
        "Mark Levinson audio",
        "Ottoman rear seats",
        "Climate concierge",
      ],
      description:
        "Japanese craftsmanship with ultra-luxury comfort and advanced hybrid efficiency.",
    },
    {
      id: "sedan-7",
      type: "SEDAN",
      name: "Genesis G90",
      imageUrl: "/genesis.avif",
      passengerCapacity: 3,
      luggageCapacity: 3,
      features: [
        "Nappa leather",
        "Driver attention warning",
        "Lexicon premium audio",
      ],
      description:
        "A rising luxury icon, combining elegance, intelligence, and next-gen technology.",
    },
    {
      id: "sedan-8",
      type: "SEDAN",
      name: "Jaguar XJ",
      imageUrl: "/jaguar.jpg",
      passengerCapacity: 3,
      luggageCapacity: 2,
      features: [
        "Panoramic sunroof",
        "Meridian sound system",
        "Adaptive dynamics",
      ],
      description:
        "A bold British statement in luxury, performance, and distinctive design.",
    },
    // SUVs
    {
      id: "suv-1",
      type: "SUV",
      name: "Cadillac Escalade",
      imageUrl: "/cadilliacsuv2.webp",
      passengerCapacity: 7,
      luggageCapacity: 7,
      features: ['36" curved OLED display', "AKG Studio sound", "Super Cruise"],
      description:
        "The ultimate luxury SUV with bold American styling and premium amenities.",
    },
    {
      id: "suv-2",
      type: "SUV",
      name: "Lincoln Navigator",
      imageUrl: "/lincon.jpg",
      passengerCapacity: 7,
      luggageCapacity: 7,
      features: [
        "30-way seats",
        "Revel audio system",
        "Perfect Position seats",
      ],
      description:
        "Spacious and sophisticated with exceptional comfort for all passengers.",
    },
    {
      id: "suv-3",
      type: "SUV",
      name: "Mercedes-Benz GLS",
      imageUrl: "/gls.jpg",
      passengerCapacity: 6,
      luggageCapacity: 6,
      features: [
        "MBUX infotainment",
        "ENERGIZING comfort",
        "AIRMATIC suspension",
      ],
      description:
        "The S-Class of SUVs offering first-class comfort in every seat.",
    },
    {
      id: "suv-4",
      type: "SUV",
      name: "Executive SUV",
      imageUrl: "/executive-suv.webp",
      passengerCapacity: 6,
      luggageCapacity: 6,
      features: [
        "All leather interior",
        "Meridian sound system",
        "All-terrain response",
        "Tinted Windows",
      ],
      description:
        "A blend of luxury and off-road capability, perfect for urban and adventurous drives alike.",
    },

    // Limousines

    {
      id: "limo-2",
      type: "LIMOUSINE",
      name: "Cadillac XTS Limousine",
      imageUrl: "/cadilliac.jpeg",
      passengerCapacity: 8,
      luggageCapacity: 4,
      features: ["Leather seating", "Entertainment system", "Climate control"],
      description:
        "Executive limousine offering both comfort and professional style.",
    },
    {
      id: "limo-3",
      type: "LIMOUSINE",
      name: "Mercedes-Benz S-Class Limousine",
      imageUrl: "/sclass.jpg",
      passengerCapacity: 6,
      luggageCapacity: 4,
      features: ["Executive seating", "Massage functions", "Burmester sound"],
      description:
        "The pinnacle of luxury limousines for the most discerning clients.",
    },
    {
      id: "limo-4",
      type: "LIMOUSINE",
      name: "Cadillac Escalade Limousine",
      imageUrl: "/cadillac-escalade-limousine.jpg",
      passengerCapacity: 6,
      luggageCapacity: 5,
      features: [
        "Spacious interior",
        "Premium leather seating",
        "Advanced infotainment system",
      ],
      description:
        "A bold and luxurious SUV limousine that blends power with first-class comfort.",
    },

    {
      id: "shuttle-1",
      type: "SPRINTER",
      name: "Mercedes-Benz Sprinter",
      imageUrl: "/sprinter.avif",
      passengerCapacity: 14,
      luggageCapacity: 12,
      features: ["Comfortable seating", "Ample storage", "Professional driver"],
      description:
        "Ideal for group transportation with comfort and reliability.",
    },
    {
      id: "shuttle-2",
      type: "SPRINTER",
      name: "Executive Sprinter",
      imageUrl: "/sprinter1.jpg",
      passengerCapacity: 13,
      luggageCapacity: 13,
      features: [
        "Spacious interior",
        "Climate control",
        "WiFi available",
        "All leather interior",
        "Flat Screen TV and Bluetooth Sound System",
      ],
      description:
        "Our executive sprinter are all equipped with amenities for you and seats up to 13 passengers and 13 pieces of luggage.",
    },
    {
      id: "shuttle-3",
      type: "SPRINTER",
      name: "Jet Sprinter",
      imageUrl: "/sprinter3.webp",
      passengerCapacity: 8,
      luggageCapacity: 8,
      features: [
        "Spacious interior",
        "Climate control",
        "Quiet and secure ride",
        "WiFi available",
        "All leather interior",
        "Flat Screen TV and Bluetooth Sound System",
        "All white leather interior",
      ],
      description:
        "Our jet sprinter are all equipped with amenities for you and seats up to 8 passengers.",
    },

    // Party Buses
    {
      id: "party-2",
      type: "PARTY BUS",
      name: "Luxury Party Limo Bus",
      imageUrl: "/party3.jpg",
      passengerCapacity: 18,
      luggageCapacity: 8,
      features: [
        "Plush seating",
        "Karaoke system",
        "Mood lighting",
        "Refreshing",
      ],
      description:
        "Perfect for bachelor/bachelorette parties and nightclub hopping.",
    },
    {
      id: "coach-1",
      type: "COACH",
      name: "Executive Bus 23 Passenger",
      imageUrl: "/23.webp", // You can replace this with an actual image URL
      passengerCapacity: 23,
      luggageCapacity: 23,
      features: [
        "Reclining leather seats",
        "Onboard restroom",
        "Complimentary Wi-Fi and water",
        "Climate control",
        "PA & entertainment system",
      ],
      description:
        "Our executive buses are fully equipped with premium amenities and comfortably accommodate up to 23 passengers along with 23 pieces of luggage, ensuring a smooth and luxurious journey.",
    },
    {
      id: "coach-2",
      type: "COACH",
      name: "Executive Bus 38 Passenger",
      imageUrl: "/38.webp", // You can replace this with an actual image URL
      passengerCapacity: 38,
      luggageCapacity: 38,
      features: [
        "Reclining leather seats",
        "Onboard restroom",
        "Complimentary Wi-Fi and water",
        "Climate control",
        "PA & entertainment system",
      ],
      description:
        "Our executive buses are fully equipped with premium amenities and comfortably accommodate up to 38 passengers along with 38 pieces of luggage, ensuring a smooth and luxurious journey.",
    },
    {
      id: "coach-3",
      type: "COACH",
      name: "56 Pax Luxury Motorcoach",
      imageUrl: "/56.png", // You can replace this with an actual image URL
      passengerCapacity: 56,
      luggageCapacity: 56,
      features: [
        "Reclining leather seats",
        "Onboard restroom",
        "Wi-Fi & power outlets",
        "Climate control",
        "PA & entertainment system",
      ],
      description:
        "Spacious and luxurious 56-passenger motorcoach designed for group travel, ensuring comfort, safety, and convenience on long journeys or corporate events.",
    },
  ];

  const vehicleTypes = [
    "SEDAN",
    "SUV",
    "SPRINTER",
    "LIMOUSINE",
    "SHUTTLE BUS",
    "COACH",
    "PARTY BUS",
  ] as const;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-black text-gray-100">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-96 md:h-screen w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-yellow-900/70 z-10" />
        <Image
          src="/limo9.jpg"
          alt="Luxury Fleet"
          fill
          className="object-fit"
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

      {/* Fleet Sections */}
      <div className="container mx-auto px-4 py-12 md:py-20">
        {vehicleTypes.map((type) => {
          const typeVehicles = vehicles.filter((v) => v.type === type);
          if (typeVehicles.length === 0) return null;

          return (
            <motion.section
              key={type}
              id={type.toLowerCase().replace(" ", "-")}
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
                className="grid grid-cols-1 gap-12"
                variants={containerVariants}
              >
                {typeVehicles.map((vehicle) => (
                  <motion.div
                    key={vehicle.id}
                    className="bg-gray-900/50 border border-yellow-800/30 rounded-xl overflow-hidden hover:border-yellow-500/50 transition-all duration-300"
                    variants={itemVariants}
                    whileHover={{
                      y: -5,
                      boxShadow: "0 10px 15px -3px rgba(234, 179, 8, 0.1)",
                    }}
                  >
                    <div className="flex flex-col md:flex-row">
                      {/* Image Column - Left Side */}
                      <motion.div
                        className="relative h-64 md:h-auto md:w-1/2"
                        initial={{ x: -20, opacity: 0.9 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Image
                          src={vehicle.imageUrl}
                          alt={vehicle.name}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent md:bg-gradient-to-t md:from-black/70 md:via-transparent md:to-transparent" />
                      </motion.div>

                      {/* Details Column - Right Side */}
                      <div className="p-6 md:w-1/2 flex flex-col justify-between">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">
                            {vehicle.name}
                          </h3>

                          {vehicle.description && (
                            <p className="text-gray-300 mb-4">
                              {vehicle.description}
                            </p>
                          )}

                          <div className="flex gap-6 mb-6">
                            <div className="text-yellow-400">
                              <div className="text-sm text-gray-400">
                                Passengers
                              </div>
                              <div className="text-xl font-bold">
                                {vehicle.passengerCapacity}
                              </div>
                            </div>
                            <div className="text-yellow-400">
                              <div className="text-sm text-gray-400">
                                Luggage
                              </div>
                              <div className="text-xl font-bold">
                                {vehicle.luggageCapacity}
                              </div>
                            </div>
                          </div>

                          {vehicle.features && (
                            <div className="mb-6">
                              <h4 className="text-lg font-semibold text-yellow-400 mb-2">
                                Features
                              </h4>
                              <ul className="space-y-2">
                                {vehicle.features.map((feature, idx) => (
                                  <li
                                    key={idx}
                                    className="flex items-start text-gray-300"
                                  >
                                    <svg
                                      className="w-4 h-4 mt-1 mr-2 text-yellow-500 flex-shrink-0"
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
                                    <span>{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>

                        <Link href={"/reservation"}>
                          <motion.button
                            className="w-full bg-yellow-600 hover:bg-yellow-500 text-black py-3 px-6 rounded-lg font-bold transition-colors mt-4"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            Book A Ride
                          </motion.button>
                        </Link>
                      </div>
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
            Book your premium vehicle today and travel in unmatched comfort and
            style.
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
                  boxShadow: "0 10px 15px -3px rgba(234, 179, 8, 0.5)",
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
