const routes = [
  '/',
  '/military-time-converter',
  '/convert-kg-to-lbs',
  '/convert-lbs-to-kg',
  '/weight-converter',
  '/about',
  '/contact',
  '/privacy',
  '/terms',
  '/sitemap',
]

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  devtools: { enabled: false },
  typescript: {
    strict: true,
    typeCheck: true,
  },
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      titleTemplate: '%s',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#2563EB' },
      ],
      link: [{ rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
    },
  },
  nitro: {
    preset: 'static',
    prerender: {
      routes,
      crawlLinks: true,
    },
  },
  routeRules: Object.fromEntries(routes.map((route) => [route, { prerender: true }])),
})
