/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep build artifacts out of locked OneDrive-managed .next cache.
  distDir: ".next-build",
};

export default nextConfig;
