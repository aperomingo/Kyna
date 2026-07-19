import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    minimumCacheTTL: 31536000, // Cache optimized images for 1 year
  },
};

export default nextConfig;
