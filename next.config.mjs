import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve("./"), // raiz do projeto
    };
    return config;
  },
};

export default nextConfig;

