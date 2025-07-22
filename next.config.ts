import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "plus.unsplash.com",
      "images.pexels.com",
      "upload.wikimedia.org", // ✅ added Wikimedia
    ],
  },
  // other config options
};

export default nextConfig;
