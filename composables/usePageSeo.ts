import { canonicalUrl, pages, siteUrl, type PageKey } from '~/data/pages'

// 全站默认 OG 图（1200x630 PNG）
const defaultOgImage = `${siteUrl}/og-default.png`

export function usePageSeo(pageKey: PageKey): void {
  const page = pages[pageKey]
  // 使用带尾斜杠的 canonical，匹配 Cloudflare Pages 的实际 URL
  const canonical = canonicalUrl(page.path)

  useHead({
    title: page.title,
    link: [{ rel: 'canonical', href: canonical }],
    meta: [
      { name: 'description', content: page.description },
      // Open Graph 核心
      { property: 'og:title', content: page.ogTitle },
      { property: 'og:description', content: page.ogDescription },
      { property: 'og:type', content: page.type },
      { property: 'og:url', content: canonical },
      { property: 'og:site_name', content: 'ConvertMintTools' },
      { property: 'og:locale', content: 'en_US' },
      // Open Graph 图像（1200x630 默认品牌图，方便社媒 preview）
      { property: 'og:image', content: defaultOgImage },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: page.ogTitle },
      // Twitter 大卡
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: page.ogTitle },
      { name: 'twitter:description', content: page.ogDescription },
      { name: 'twitter:image', content: defaultOgImage },
      { name: 'twitter:image:alt', content: page.ogTitle },
    ],
  })
}
