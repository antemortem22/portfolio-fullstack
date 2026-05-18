import type { NextConfig } from "next";

const allowedDevOrigins = Array.from(
  new Set(
    [
      "localhost",
      "127.0.0.1",
      "192.168.1.10",
      process.env.DEV_ALLOWED_ORIGIN,
    ].filter((value): value is string => Boolean(value))
  )
);

const nextConfig: NextConfig = {
  allowedDevOrigins,
};

export default nextConfig;
