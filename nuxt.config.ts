// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: [
    '@/static/css/custom-font.css',
    // ... other CSS files if needed
  ],
  modules: ['@nuxtjs/tailwindcss'],
});
