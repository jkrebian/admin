// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui-pro',
    '@nuxt/content',
    '@vueuse/nuxt',
    'nuxt-og-image'
  ],
   
  devtools: {
    enabled: true
  },
 
  css: ['~/assets/css/main.css'],
  
  uiPro: {
    license: process.env.MY_ENVIRONMENT_VARIABLE
  },
  uiPro: 
    mdc: true
    content: true
    prefix: 'Nuxt'
    fonts: true
    colorMode: true
    theme: {
      colors: ['primary', 'secondary', 'success', 'info', 'warning', 'error'],
      transitions: true
  },

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2025-01-15',

  nitro: {
    prerender: {
      routes: [
        '/'
      ],
      crawlLinks: true
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
       }
     }
   }
})

