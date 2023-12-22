/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // domains: ["apiv2.allsportsapi.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "apiv2.allsportsapi.com",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
