const nextConfig = {
  reactStrictMode: false,

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
// const withDotenv = require("next-runtime-dotenv");

// module.exports = withDotenv({
//   publicRuntimeConfig: {
//     NEXT_PUBLIC_ROBOTS_TXT: process.env.NEXT_PUBLIC_ROBOTS_TXT,
//   },
//   reactStrictMode: false,
//   images: {
//     unoptimized: true,
//     formats: ["image/webp", "image/avif"],
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "firebasestorage.googleapis.com",
//         port: "",
//         pathname: "/v0/b/**",
//       },
//     ],
//   },
// });
