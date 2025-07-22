import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cherry Limousine Worldwide |  Premium Limo Service",
  description: "Luxury limousine service in San Francisco Bay Area. Corporate transportation, airport transfers, weddings & special events. 24/7 reliable chauffeurs.",
  keywords: [
    "San Francisco limo service",
    "Bay Area luxury transportation",
    "SF airport limousine",
    "corporate car service SF",
    "wedding limousine San Francisco",
    "executive transportation Bay Area",
    "black car service SF",
    "luxury limo rental",
    "SFO limo service",
    "SJC airport transportation"
  ],
  icons: {
    icon: "/logo-re.png",
  },
  openGraph: {
    title: "Premium Limo Service San Francisco | Cherry Limousine Worldwide",
    description: "Luxury limousine service in San Francisco Bay Area. Corporate transportation, airport transfers, weddings & special events.",
    url: "https://cherrylimousineworldwide.com",
    siteName: "Cherry Limousine Worldwide",
    images: [
      {
        url: "https://cherrylimousineworldwide.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cherry Limousine Worldwide Luxury Fleet",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Limo Service San Francisco | Cherry Limousine Worldwide",
    description: "Luxury limousine service in San Francisco Bay Area.",
    images: ["https://cherrylimousineworldwide.com/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://cherrylimousineworldwide.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="favicon" href="/favicon.png" type="image/png" />
        <script type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Cherry Limousine Worldwide",
    "image": "https://cherrylimousineworldwide.com/logo-re.png",
    "@id": "https://cherrylimousineworldwide.com",
    "url": "https://cherrylimousineworldwide.com",
    "email": "reservations@cherrylimousineworldwide.com",
    "telephone": "+1 (415) 651-8239",
    "priceRange": "$$$",
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "101 Henry Adams St",
        "addressLocality": "San Francisco",
        "addressRegion": "CA",
        "postalCode": "94103",
        "addressCountry": "US"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "160 Chestnut St",
        "addressLocality": "Redwood City",
        "addressRegion": "CA",
        "postalCode": "94063",
        "addressCountry": "US"
      }
    ],
    "geo": [
      {
        "@type": "GeoCoordinates",
        "latitude": "37.7749",
        "longitude": "-122.4194",
        "name": "San Francisco Location"
      },
      {
        "@type": "GeoCoordinates",
        "latitude": "37.4852",
        "longitude": "-122.2364",
        "name": "Redwood City Location"
      }
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://www.facebook.com/cherrylimousineworldwide",
      "https://www.instagram.com/cherrylimousineworldwide",
      "https://www.linkedin.com/company/cherrylimousineworldwide"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Limo Services",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Airport Transfers",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "SFO Airport Limo Service"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "OAK Airport Transportation"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Special Events",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Wedding Limousine Service"
              }
            }
          ]
        }
      ]
    }
  })}
</script>
      </head>
      <body 
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
