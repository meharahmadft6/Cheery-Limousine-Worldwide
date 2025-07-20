'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const AboutUs: React.FC = () => {
  return (
    <section className="relative bg-black overflow-hidden">
      {/* 3D Effect Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-yellow-900 opacity-95"></div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="relative w-full h-full">
            {/* 3D Floating Elements */}
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-yellow-500 opacity-20"
                style={{
                  width: `${Math.random() * 20 + 5}px`,
                  height: `${Math.random() * 20 + 5}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-yellow-400 mb-2">Cheery Limousine Worldwide</h1>
              <p className="text-gray-300">Experience unmatched luxury and professionalism with our premium limo services in the SF Bay Area, trusted by executives and CEOs.</p>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-yellow-400">Our Premium</span>
              <br />
              <span className="text-yellow-300">Transportation Services</span>
            </h2>
            
            <p className="text-lg md:text-xl mb-8 leading-relaxed text-gray-300">
              With <span className="font-bold text-yellow-400">25+ years</span> of distinguished service, 
              Cheery Limousine Worldwide has established itself as the premier choice for elite transportation 
              throughout the Bay Area. We specialize in delivering discreet, reliable, and 
              seamless luxury experiences tailored for discerning professionals and corporate leaders.
            </p>
            
            <div className="bg-black/70 backdrop-blur-sm p-6 rounded-xl border border-yellow-500/30">
              <h3 className="text-xl font-bold mb-4 text-yellow-400">Our Distinguished Clients</h3>
              <p className="mb-4 text-gray-300">
                Cheery Limousine Worldwide serves the most respected names in business and technology, including:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {['Google', 'Apple', 'Microsoft', 'HP', 'DCVC', 'FOX News', 'Fortune 500 Companies'].map((company) => (
                  <div key={company} className="flex items-center text-yellow-300">
                    <svg className="w-4 h-4 mr-2 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{company}</span>
                  </div>
                ))}
              </div>
            </div>
<Link href={'/reservation'}>
          <button className="mt-8 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-yellow-500/20">
              Reserve Your Luxury Ride
           
            </button>
</Link> 
          </div>

          {/* 3D Image */}
          <div className="relative h-96 lg:h-[500px] w-full">
            <div className="absolute inset-0 rounded-2xl overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-700 shadow-2xl shadow-yellow-500/30">
              <Image
                src="/limo7.jpg"
                alt="Premium Limousine Service by Cheery Limousine Worldwide"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -inset-4 border-2 border-yellow-500 rounded-2xl transform -rotate-3 pointer-events-none"></div>
            <div className="absolute -inset-8 border border-yellow-500/30 rounded-2xl transform rotate-1 pointer-events-none"></div>
          </div>
        </div>
      </div>

      {/* Global styles for the 3D effect */}
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg);
          }
          50% {
            transform: translateY(-100px) translateX(50px) rotate(180deg);
          }
          100% {
            transform: translateY(0) translateX(100px) rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
};

export default AboutUs;