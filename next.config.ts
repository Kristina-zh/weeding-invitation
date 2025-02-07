import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        events: false, 
        crypto: false,
        fs: false,
        tls: false,
        net: false,
        child_process: false,
      };
    }
    return config;
  },
};

export default nextConfig;