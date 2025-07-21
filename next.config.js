// import type { NextConfig } from "next";

const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [ "img.clerk.com",'gravatar.com','lh3.googleusercontent.com', 'github.com'], // Allow images from this domain
  },
  /* config options here */
};

export default nextConfig;
