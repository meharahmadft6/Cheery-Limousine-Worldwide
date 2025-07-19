import React from 'react';
import Image from 'next/image';

type Vehicle = {
  id: string;
  type: 'SEDAN' | 'SUV' | 'LIMOUSINE' | 'SHUTTLE BUS' | 'PARTY BUS';
  name: string;
  imageUrl: string;
  passengerCapacity: number;
  luggageCapacity: number;
  features?: string[];
};

const FleetPage: React.FC = () => {
  const vehicles: Vehicle[] = [
    // Sedans
    {
      id: 'sedan-1',
      type: 'SEDAN',
      name: 'Rolls-Royce Ghost',
      imageUrl: '/images/rolls-royce-ghost.jpg',
      passengerCapacity: 3,
      luggageCapacity: 3,
      features: ['Handcrafted luxury', 'Whisper-quiet cabin', 'Bespoke finishes'],
    },
    {
      id: 'sedan-2',
      type: 'SEDAN',
      name: 'Mercedes-Benz S-Class',
      imageUrl: '/images/mercedes-s-class.jpg',
      passengerCapacity: 3,
      luggageCapacity: 3,
      features: ['Executive seating', 'Advanced climate control', 'Burmester sound system'],
    },
    {
      id: 'sedan-3',
      type: 'SEDAN',
      name: 'Mercedes-Benz E-Class',
      imageUrl: '/images/mercedes-e-class.jpg',
      passengerCapacity: 3,
      luggageCapacity: 3,
      features: ['Luxury appointments', 'Innovative technology', 'Spacious interior'],
    },

    // SUVs
    {
      id: 'suv-1',
      type: 'SUV',
      name: 'Toyota Highlander Platinum',
      imageUrl: '/images/toyota-highlander.jpg',
      passengerCapacity: 6,
      luggageCapacity: 4,
      features: ['Premium leather', 'Advanced safety', 'Spacious cabin'],
    },
    {
      id: 'suv-2',
      type: 'SUV',
      name: 'Lincoln Navigator Black Label',
      imageUrl: '/images/lincoln-navigator.jpg',
      passengerCapacity: 7,
      luggageCapacity: 7,
      features: ['Executive package', '30-way seats', 'Revel audio system'],
    },
    {
      id: 'suv-3',
      type: 'SUV',
      name: 'GMC Yukon Denali',
      imageUrl: '/images/gmc-yukon.jpg',
      passengerCapacity: 6,
      luggageCapacity: 6,
      features: ['Premium materials', 'Advanced towing', 'Power steps'],
    },

    // Limousines
    {
      id: 'limo-1',
      type: 'LIMOUSINE',
      name: 'Chrysler 300C (Black)',
      imageUrl: '/images/chrysler-limo.jpg',
      passengerCapacity: 10,
      luggageCapacity: 4,
      features: ['LED lighting', 'Premium sound', 'Privacy divider'],
    },
    {
      id: 'limo-2',
      type: 'LIMOUSINE',
      name: 'Cadillac Escalade',
      imageUrl: '/images/cadillac-escalade.jpg',
      passengerCapacity: 14,
      luggageCapacity: 6,
      features: ['Luxury seating', 'Entertainment system', 'Climate control'],
    },
    {
      id: 'limo-3',
      type: 'LIMOUSINE',
      name: 'Cadillac Escalade Premium Super Stretch',
      imageUrl: '/images/cadillac-super-stretch.jpg',
      passengerCapacity: 20,
      luggageCapacity: 8,
      features: ['Full bar', 'VIP seating', 'Ambient lighting'],
    },

    // Shuttle Buses
    {
      id: 'shuttle-1',
      type: 'SHUTTLE BUS',
      name: 'Mercedes-Benz Sprinter',
      imageUrl: '/images/sprinter-shuttle.jpg',
      passengerCapacity: 14,
      luggageCapacity: 12,
      features: ['Comfortable seating', 'Ample storage', 'Professional driver'],
    },

    // Party Buses
    {
      id: 'party-1',
      type: 'PARTY BUS',
      name: 'Elite Party Coach',
      imageUrl: '/images/party-bus.jpg',
      passengerCapacity: 25,
      luggageCapacity: 10,
      features: ['Dance floor', 'Premium sound', 'LED lighting', 'Bar area'],
    },
  ];

  const vehicleTypes = ['SEDAN', 'SUV', 'LIMOUSINE', 'SHUTTLE BUS', 'PARTY BUS'] as const;

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-black text-white py-20">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Fleets</h1>
          <p className="text-xl md:text-2xl max-w-2xl">
            Bay Area&apos;s Finest Executive Fleet. Our elite fleet serves top executives with precision and style, delivering
            the highest standards in luxury limo service Bay Area CA can offer.
          </p>
        </div>
      </div>

      {/* Fleet Navigation */}
      <div className="sticky top-0 bg-white shadow-md z-20">
        <div className="container mx-auto px-6">
          <div className="flex overflow-x-auto py-4 space-x-8">
            {vehicleTypes.map((type) => (
              <a
                key={type}
                href={`#${type.toLowerCase().replace(' ', '-')}`}
                className="whitespace-nowrap text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                {type}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Fleet Sections */}
      <div className="container mx-auto px-6 py-12">
        {vehicleTypes.map((type) => {
          const typeVehicles = vehicles.filter((v) => v.type === type);
          if (typeVehicles.length === 0) return null;

          return (
            <section key={type} id={type.toLowerCase().replace(' ', '-')} className="mb-20">
              <h2 className="text-3xl font-bold mb-8 text-gray-800 border-b pb-2">{type}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {typeVehicles.map((vehicle) => (
                  <div
                    key={vehicle.id}
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="relative h-48 w-full">
                      <Image
                        src={vehicle.imageUrl}
                        alt={vehicle.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-gray-800">{vehicle.name}</h3>
                      <div className="flex justify-between mb-4">
                        <div className="text-gray-600">
                          <span className="font-medium">Passengers:</span> {vehicle.passengerCapacity}
                        </div>
                        <div className="text-gray-600">
                          <span className="font-medium">Luggage:</span> {vehicle.luggageCapacity}
                        </div>
                      </div>
                      {vehicle.features && (
                        <ul className="mb-6 space-y-1">
                          {vehicle.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-gray-600">
                              <svg
                                className="w-4 h-4 mr-2 text-blue-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
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
                      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors">
                        Make A Reservation
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default FleetPage;