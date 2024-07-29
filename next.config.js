const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 静的エクスポート有効設定
  reactStrictMode: true,
  env: {
    ...require(`./config/${process.env.APP_ENV || 'local'}.json`),
  },
};

module.exports = withVanillaExtract(nextConfig);
