// https://nuxt.com/docs/api/configuration/nuxt-config
// eslint-disable-next-line no-undef
export default defineNuxtConfig({
  compatibilityDate: '2025-10-21',
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            primary: '#424874',
            darkish: '#4a4a4a',
          },
        },
      },
    },
  },
  image: {
    quality: 80,
    format: ['webp', 'jpg'],
  },
  app: {
    head: {
      charset: 'utf-8',
      title: process.env.npm_package_name || '',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Personal website for Keli' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],
});
