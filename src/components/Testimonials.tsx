"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const venues = [
  "CHASE CENTER",
  "COACHELLA",
  "THE FILLMORE",
  "COW PALACE",
  "OAKLAND ARENA",
  "BILL GRAHAM CIVIC AUDITORIUM",
  "SAP CENTER AT SAN JOSE",
  "PAYPAL PARK",
];

const testimonials = [
  {
    name: "Mary C",
    date: "2025-07-15",
    rating: 5,
    text: "Cherry Limos, five stars all the way!! Shawn, our driver (maybe the owner too, not sure) was very nice and professional. He was right on time, actually he showed up a few minutes early which was nice. We requested a 10 person limo, the limo was very nice and clean. Just what we were expecting.",
    avatar: "M",
  },
  {
    name: "Stephanie B",
    date: "2025-07-10",
    rating: 5,
    text: "I would definitely recommend Cherry Limos! We went to the city this past weekend and had a blast! The limo had iPod capability so we could listen to our own tunes and was stocked with a MAGNUM of champagne, special for us since it was a special occasion, which they knew in advance.",
    avatar: "S",
  },
  {
    name: "James R.",
    date: "2025-06-28",
    rating: 5,
    text: "Exceptional service from start to finish. The Mercedes Sprinter was spotless and our driver Marcus knew all the best routes to avoid traffic. Made our corporate event transportation seamless.",
    avatar: "J",
  },
  {
    name: "The Nguyen Family",
    date: "2025-06-20",
    rating: 5,
    text: "Used their party bus for my daughter's quinceañera. The LED lighting and sound system were incredible! The driver helped coordinate our schedule perfectly. Worth every penny!",
    avatar: "N",
  },
];

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("testimonials-section");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="testimonials-section"
      className="relative py-20 overflow-hidden"
    >
      {/* Enhanced 3D Effect Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-yellow-900/80 opacity-95"></div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="relative w-full h-full">
            {/* More dynamic floating elements */}
            {[...Array(20)].map((_, i) => {
              const size = Math.random() * 20 + 5;
              return (
                <div
                  key={i}
                  className="absolute rounded-full bg-yellow-500/20"
                  style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animation: `float ${
                      Math.random() * 15 + 10
                    }s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 5}s`,
                    filter: "blur(1px)",
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Events We Covered - Enhanced Section */}
        <div className="mb-20">
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-12 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Premier <span className="text-yellow-400">Event</span>{" "}
            Transportation
          </h2>

          <div
            className={`bg-black/70 backdrop-blur-sm p-8 rounded-2xl border border-yellow-500/30 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-center text-yellow-200 mb-6 text-lg">
              Trusted transportation for the Bay Areas most prestigious venues
              and events
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {venues.map((venue, index) => (
                <motion.div
                  key={index}
                  className="bg-black/50 rounded-xl p-4 text-center border border-yellow-500/20 hover:border-yellow-500/50 transition-all duration-300"
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 15px -3px rgba(234, 179, 8, 0.1)",
                  }}
                >
                  <div className="text-yellow-400 font-bold text-sm md:text-base">
                    {venue}
                  </div>
                  <div className="text-yellow-500/70 text-xs mt-1">
                    ★ ★ ★ ★ ★
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Reviews Section */}
        <div>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-6 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Client <span className="text-yellow-400">Testimonials</span>
          </h2>

          <p
            className={`text-lg text-yellow-200 text-center mb-12 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Rated 5 stars across all platforms by our valued clients
          </p>

          {/* Enhanced Testimonials Carousel */}
          <div
            className={`relative bg-black/70 backdrop-blur-sm rounded-2xl border border-yellow-500/30 p-8 transition-all duration-1000 delay-600 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex flex-col lg:flex-row items-center">
              {/* Rating Summary - Enhanced */}
              <div className="lg:w-1/3 text-center mb-8 lg:mb-0 lg:pr-8">
                <div className="w-24 h-24 bg-yellow-500/10 rounded-full mx-auto mb-6 flex items-center justify-center border border-yellow-500/30 shadow-lg">
                  <span className="text-4xl text-yellow-400">★</span>
                </div>
                <h3 className="text-2xl font-bold text-yellow-400 mb-2">
                  Cherry Limousine
                </h3>
                <p className="text-gray-300 mb-4">200+ Five Star Reviews</p>
                <div className="flex justify-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-500 text-xl">
                      ★
                    </span>
                  ))}
                </div>
                <div className="flex justify-center space-x-4">
                  <div className="text-center">
                    <div className="text-white font-bold text-xl">4.9</div>
                    <div className="text-yellow-400 text-sm">Yelp</div>
                  </div>
                  <div className="text-center">
                    <div className="text-white font-bold text-xl">5.0</div>
                    <div className="text-yellow-400 text-sm">Google</div>
                  </div>
                </div>
              </div>

              {/* Testimonial Content - Enhanced */}
              <div className="lg:w-2/3 relative min-h-[300px]">
                <div className="relative h-full">
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className={`transition-opacity duration-500 ease-in-out ${
                        index === currentTestimonial
                          ? "opacity-100"
                          : "opacity-0 absolute top-0 left-0 w-full"
                      }`}
                    >
                      <div className="flex flex-col md:flex-row items-start mb-6">
                        <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center text-yellow-400 text-2xl font-bold mr-4 mb-4 md:mb-0 border border-yellow-500/30 shadow-md">
                          {testimonial.avatar}
                        </div>
                        <div>
                          <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
                            <h4 className="font-bold text-white text-xl">
                              {testimonial.name}
                            </h4>
                            <div className="flex mb-2 md:mb-0">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <span key={i} className="text-yellow-500">
                                  ★
                                </span>
                              ))}
                            </div>
                          </div>
                          <p className="text-yellow-400 text-sm mb-3">
                            {testimonial.date}
                          </p>
                        </div>
                      </div>

                      <div className="relative">
                        <svg
                          className="absolute -left-8 -top-4 text-yellow-500/30 w-10 h-10"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>

                        <p className="text-gray-300 text-lg leading-relaxed italic pl-8">
                          {testimonial.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Enhanced Navigation Controls */}
                <div className="flex justify-center lg:justify-end mt-8 space-x-4">
                  <button
                    onClick={prevTestimonial}
                    className="bg-yellow-600 hover:bg-yellow-500 text-black w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-yellow-500/30"
                    aria-label="Previous testimonial"
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
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>

                  <div className="flex items-center space-x-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`w-3 h-3 rounded-full transition-all ${
                          index === currentTestimonial
                            ? "bg-yellow-500 w-6"
                            : "bg-yellow-500/30"
                        }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={nextTestimonial}
                    className="bg-yellow-600 hover:bg-yellow-500 text-black w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-yellow-500/30"
                    aria-label="Next testimonial"
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
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Global styles for the animations */}
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-80px) translateX(40px) rotate(180deg);
            opacity: 0.8;
          }
          100% {
            transform: translateY(0) translateX(80px) rotate(360deg);
            opacity: 0.2;
          }
        }
      `}</style>
    </section>
  );
}
