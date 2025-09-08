import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve("./"), // Alias @ → raiz do projeto
    };
    return config;
  },
  experimental: {
    appDir: true, // Se você estiver usando /app
  },
};

export default nextConfig;
