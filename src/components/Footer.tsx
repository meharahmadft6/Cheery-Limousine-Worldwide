"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("footer-section");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer id="footer-section" className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Column */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-xl font-bold text-yellow-500 mb-6">About</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              25 years of trusted service, delivering excellence for innovators
              and high-tech executives across the greater SF Bay Area.
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mb-6">
              <a
                href="https://www.yelp.com/biz/cherry-limo-redwood-city" // <-- Replace with your real Yelp URL
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M10.342 2.63c-.527-.275-1.107.315-.9.84l1.888 4.816c.203.52.954.503 1.125-.025l1.728-5.305a.75.75 0 0 0-1.126-.874L10.342 2.63zM4.403 8.43a.75.75 0 0 0-.708.987l1.37 4.093c.179.533.9.654 1.205.206l2.63-3.942a.75.75 0 0 0-.685-1.141l-3.812-.203zM17.695 3.604c-.275-.526-1.094-.41-1.163.178l-.613 5.292a.75.75 0 0 0 1.268.657l3.003-3.796a.75.75 0 0 0-.495-1.33h.001zM21.375 15.438c-.59-1.167-4.122-1.683-4.985-1.69-.864-.007-1.662.637-1.414 1.354l1.518 4.497c.233.69 1.01.98 1.586.586l3.132-2.144c.51-.35.728-1.03.482-1.604h.001zM11.999 14.25c-.748 0-1.353.605-1.353 1.353v4.5a1.353 1.353 0 0 0 2.707 0v-4.5c0-.748-.605-1.353-1.353-1.353z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/cherrylimousines/photos/?ref=page_internal&_rdr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
                </svg>
              </a>
              <a
                href="https://www.weddingwire.com/biz/cherry-limos/2480b947472e0644.html"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-500 transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.948 4.524c-1.283-1.398-3.392-1.515-4.852-.257l-.718.633-.736-.61c-1.486-1.23-3.617-1.125-4.912.266-1.353 1.454-1.272 3.732.182 5.185l5.462 5.414a.752.752 0 001.063 0l5.36-5.283c1.453-1.453 1.536-3.742.153-5.348zm-1.031 4.363l-4.816 4.748-4.894-4.85c-.893-.893-.965-2.347-.132-3.255.801-.86 2.036-.928 2.94-.15l1.25 1.036a.75.75 0 00.978-.006l1.227-1.082c.887-.783 2.096-.705 2.876.147.847.923.763 2.38-.429 3.412z" />
                </svg>
              </a>
            </div>

            {/* Logo */}
            <div className="flex items-center space-x-2">
              <span className="text-yellow-500 font-bold text-lg">
                Cherry LIMOUSINE WORLDWIDE
              </span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-xl font-bold text-yellow-500 mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "Services", href: "/services" },
                { name: "About Us", href: "/about" },
                { name: "Fleet", href: "/fleet" },
                { name: "Nationwide", href: "/nationwide" },
                { name: "Terms and Conditions", href: "/terms-and-conditions" },
                { name: "Policies", href: "/policies" },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-yellow-500 transition-colors duration-300 flex items-center"
                  >
                    <span className="text-yellow-500 mr-2">»</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-xl font-bold text-yellow-500 mb-6">Services</h3>
            <ul className="space-y-3">
              {[
                {
                  name: "Airport Transportation",
                  href: "/services/airport-transportation",
                },
                {
                  name: "Executive Limo Service",
                  href: "/services/executive-black-car-service",
                },
                {
                  name: "Wedding Limo",
                  href: "/services/wedding-limo-services",
                },
                { name: "Wine Tours", href: "/services/wine-tours" },
                {
                  name: "Funeral Transportations",
                  href: "services/funeral-transportation",
                },
                {
                  name: "Prom Limo Service",
                  href: "/services/prom-limo-service",
                },
                {
                  name: "Quinceanera Limo Service",
                  href: "/services/quinceanera-limo-service",
                },
                {
                  name: "Luxury Limousine Service",
                  href: "services/luxury-limousine-service",
                },
                {
                  name: "Concert & Event Transportation",
                  href: "services/concert-&-event-transportation",
                },
              ].map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-yellow-500 transition-colors duration-300 flex items-center"
                  >
                    <span className="text-yellow-500 mr-2">»</span>
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div
            className={`transition-all duration-1000 delay-600 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-xl font-bold text-yellow-500 mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-yellow-500 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href="tel:+14156512290"
                  className="text-gray-300 hover:text-yellow-500 transition-colors duration-300"
                >
                  +1 (415) 651-2290{" "}
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7 text-yellow-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:reservations@cherrylimousineworldwide.com"
                  className="hover:text-yellow-500 transition-colors duration-300 text-base"
                >
                  reservations@cherrylimousine worldwide.com
                </a>
              </div>

              {/* Address */}
              <div className="flex items-start">
                <svg
                  className="w-10 h-10 text-yellow-500 mr-3 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-gray-300">
                  160 Chestnut st., Redwood City, CA, United States, 94063
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          className={`border-t border-gray-800 mt-12 pt-8 text-center transition-all duration-1000 delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-gray-400">
            © {new Date().getFullYear()} cherry Limousine Worldwide | All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
