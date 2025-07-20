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
    title: "Cheery Limousine Worldwide - Executive Limo Service Bay Area",
    description:
      "Experience unmatched luxury and professionalism with Cheery Limousine Worldwide—premium limo services in the SF Bay Area, trusted by executives and CEOs.",
    icons: {
      icon: "/logo.png", // Ensure this file exists at public/logo-re.png
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
        <link rel="favicon" href="/logo.png" type="image/png" />
      </head>
      <body 
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
