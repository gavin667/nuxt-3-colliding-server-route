// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  site: { 
    url: 'http://localhost:3001', 
    name: 'My Awesome Website' 
  },

  sitemap: {
    sitemaps: {
      posts: {
        include: [
          '/hello/**',
        ],
      }
    }
  },

  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/sitemap']
})