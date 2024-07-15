/** @type {import("next").NextConfig} */
const nextConfig = {
  // 启用React严格模式
  reactStrictMode: true,
  // 进行代码压缩
  experimental: {
    swcMinify: true,
  },
  // 打包文件夹配置
  distDir: "dist",
  // 配置环境变量
  env: {
    CUSTOM_KEY: "my-value",
  },
  images: {
    domains: ["example.com"], // 配置允许加载图片的域名
  },
  i18n: {
    locales: ["en", "fr", "es"], // 配置多语言支持
    defaultLocale: "en", // 默认语言
  },
  // 自定义路由
  async redirects() {
    return [
      /* {
        source: '/old-blog/:slug',
        destination: '/blog/:slug',
        permanent: true,
      }, */
    ];
  },
  // 配置跨域
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: process.env.BASE_URL + "/api/:path*",
      },
    ];
  },
  // WebPack 配置
  webpack: (config) => {
    return config;
  },
};

export default nextConfig;
