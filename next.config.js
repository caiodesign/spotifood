/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  env: {
    host: isProd
      ? 'https://spotifood.caiodesign.vercel.app'
      : 'http://localhost:3000'
  },
  pwa: {
    dest: 'public',
    disable: !isProd
  }
})
