/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  output: "export",
  compiler: {
    emotion: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io" },
      { protocol: "https", hostname: "villajoyosa.kvamme.land" },
      { protocol: "https", hostname: "picsum.photos" },
    ],
  },
  generateBuildId: () => "build",
};
