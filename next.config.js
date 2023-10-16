const nextConfig = {
  async rewrites() {
    return {
      fallback: [
        // These rewrites are checked after both pages/public files
        // and dynamic routes are checked
        {
          source: "/:slug*",
          destination: `https://hammeronstudios.com/:slug*`,
        },
      ],
    };
  },
  reactStrictMode: true,
  images: {
    unoptimized: true,
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
