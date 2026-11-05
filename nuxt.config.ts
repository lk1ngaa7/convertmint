// Programmatic 数字页 + 场景页清单（单一真相源在 data/programmatic-routes.mjs，
// sitemap 生成脚本也读同一份）
import { programmaticRoutes } from './data/programmatic-routes.mjs'

const staticRoutes = [
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

const routes = [...staticRoutes, ...programmaticRoutes]

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
