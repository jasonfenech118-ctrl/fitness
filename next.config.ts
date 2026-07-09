import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/fitness",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
