import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  transpilePackages: ["framer-motion"],
  webpack: (config) => {
    config.resolve.alias["framer-motion"] =
      "framer-motion/dist/framer-motion.cjs";
    return config;
  },
};

export default nextConfig;
