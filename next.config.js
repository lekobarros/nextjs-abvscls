/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  // images: {
  //   disableStaticImages: true,
  // },
  webpack (config, { isServer }) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  compiler: {
    styledComponents: {
      displayName: true,
      ssr: true
    }
  }
}

module.exports = nextConfig;