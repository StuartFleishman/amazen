module.exports = {
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
  reactStrictMode: true,
  images: { domains: ['res.cloudinary.com'], formats: ['image/avif', 'image/webp'] },
};