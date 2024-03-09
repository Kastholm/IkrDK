// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n', '@nuxtjs/sanity'],
  sanity: {
    projectId: '18wdvgvc',
    useCdn: true,
  },
  i18n: {
    vueI18n: './i18n.config.ts' // if you are using custom path, default
  }
});
