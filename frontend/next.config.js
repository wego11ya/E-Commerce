/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["picsum.photos"], // 允許從 picsum.photos 加載圖片
  },
};

module.exports = nextConfig;
