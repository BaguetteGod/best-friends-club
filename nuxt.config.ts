// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  css: ['@/assets/css/main.css'],
  build: {
    transpile: ['gsap'],
  },
  app: {
    head: {
      charset: 'utf-16',
      title: 'De Beste Vrienden Club',
    },
  },
});
