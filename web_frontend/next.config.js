const nextConfig = {
  /** 
   * For static export compatibility, unoptimized images are required.
   * See: https://nextjs.org/docs/pages/api-reference/next.config.js/images#unoptimized
   */
  images: {
    unoptimized: true,
  },
  // Add any other existing Next.js config options below as needed
};

module.exports = nextConfig;
