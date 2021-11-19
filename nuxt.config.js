export default {
  target: 'static',
  // Headers of the page
  head: {
    title: process.env.npm_package_name || '',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || 'nuxt-powered static site' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },
  // Customize the progress-bar color
  loading: { color: '#fff' },
  // Global CSS
  css: [
  ],
  // Plugins to load before mounting the App
  plugins: [
  ],
  // Nuxt.js dev-modules
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],
  // Nuxt.js modules
  modules: [],
  // Build configuration
  build: {
    // You can extend webpack config here
    // eslint-disable-next-line no-unused-vars
    extend(config, ctx) {
    },
    babel: {
      plugins: [['@babel/plugin-proposal-private-methods', { loose: true }]],
    },
  },
};
