/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.google.com",
        pathname: "/s2/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/datqllqvo/image/upload/**",
      },
    ],
  },
};

module.exports = nextConfig;
