module.exports = {
    swcMinify: true,
  experimental: {
    styledComponents: true,
  },
  images:{
      domains:["at-hackathon.s3.amazonaws.com"]
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};