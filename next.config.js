/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  unoptimized: true,
  images: {
    formats: ["image/webp", "image/avif"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        port: "",
        pathname: "/v0/b/**",
      },
    ],
  },
};

module.exports = nextConfig;
