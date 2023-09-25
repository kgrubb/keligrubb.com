// https://nuxt.com/docs/api/configuration/nuxt-config
// eslint-disable-next-line no-undef
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      title: process.env.npm_package_name || '',
      htmlAttrs: {
        lang: 'en',
        style: 'has-navbar-fixed-top',
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
    'bulma',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],
});
