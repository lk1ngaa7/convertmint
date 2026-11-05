// useProgrammaticPageSeo：供 programmatic 数字页和场景页使用的 SEO head 封装。
// 和 usePageSeo 产出完全相同的 meta 集合，但接收 inline 参数而不是 PageKey 查表，
// 避免 200+ programmatic 页塞爆 PageKey 闭集。

import { siteUrl } from '~/data/pages'

const defaultOgImage = `${siteUrl}/og-default.png`

export interface ProgrammaticPageSeo {
  title: string             // <title> 内容
  description: string       // meta description
  canonical: string         // 带尾斜杠的完整 URL
  ogTitle?: string          // 省略时用 title
  ogDescription?: string    // 省略时用 description
  ogType?: 'article' | 'website' // 默认 article
}

export function useProgrammaticPageSeo(seo: ProgrammaticPageSeo): void {
  const ogTitle = seo.ogTitle ?? seo.title
  const ogDescription = seo.ogDescription ?? seo.description
  const ogType = seo.ogType ?? 'article'

  useHead({
    title: seo.title,
    link: [{ rel: 'canonical', href: seo.canonical }],
    meta: [
      { name: 'description', content: seo.description },
      // Open Graph
      { property: 'og:title', content: ogTitle },
      { property: 'og:description', content: ogDescription },
      { property: 'og:type', content: ogType },
      { property: 'og:url', content: seo.canonical },
      { property: 'og:site_name', content: 'ConvertMintTools' },
      { property: 'og:locale', content: 'en_US' },
      { property: 'og:image', content: defaultOgImage },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: ogTitle },
      // Twitter 大卡
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: ogTitle },
      { name: 'twitter:description', content: ogDescription },
      { name: 'twitter:image', content: defaultOgImage },
      { name: 'twitter:image:alt', content: ogTitle },
    ],
  })
}
