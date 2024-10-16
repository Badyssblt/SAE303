// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@vueuse/motion/nuxt'],
  runtimeConfig: {
    public: {
      baseURL: process.env.NUXT_BASE_URL === 'production' ? "https://sae303.badyssblilita.fr" : '',
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  }
})
