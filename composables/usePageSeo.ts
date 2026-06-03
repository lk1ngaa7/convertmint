import { pages, siteUrl, type PageKey } from '~/data/pages'

export function usePageSeo(pageKey: PageKey): void {
  const page = pages[pageKey]
  const canonical = `${siteUrl}${page.path}`

  useHead({
    title: page.title,
    link: [{ rel: 'canonical', href: canonical }],
    meta: [
      { name: 'description', content: page.description },
      { property: 'og:title', content: page.ogTitle },
      { property: 'og:description', content: page.ogDescription },
      { property: 'og:type', content: page.type },
      { property: 'og:url', content: canonical },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:title', content: page.ogTitle },
      { name: 'twitter:description', content: page.ogDescription },
    ],
  })
}
