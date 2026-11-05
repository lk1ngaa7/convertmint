import type { FaqItem } from '~/components/seo/FaqBlock.vue'
import { canonicalUrl, pages, siteUrl, type PageKey } from '~/data/pages'

interface JsonLdNode {
  '@context': 'https://schema.org'
  '@type': string
  [key: string]: unknown
}

function addJsonLd(nodes: JsonLdNode | JsonLdNode[]): void {
  const data = Array.isArray(nodes) ? nodes : [nodes]

  useHead({
    script: data.map((node) => ({
      type: 'application/ld+json',
      children: JSON.stringify(node),
    })),
  })
}

export function useFaqJsonLd(items: FaqItem[]): void {
  addJsonLd({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  })
}

export function useWebApplicationJsonLd(pageKey: PageKey): void {
  const page = pages[pageKey]

  addJsonLd({
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: page.h1,
    url: canonicalUrl(page.path),
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Any',
    description: page.description,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  })
}

export interface BreadcrumbItem {
  name: string
  path: string
}

export function useBreadcrumbJsonLd(items: BreadcrumbItem[]): void {
  addJsonLd({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: canonicalUrl(item.path),
    })),
  })
}

export function useCollectionPageJsonLd(pageKey: PageKey): void {
  const page = pages[pageKey]

  addJsonLd({
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: page.h1,
    url: canonicalUrl(page.path),
    description: page.description,
  })
}

// ItemList 条目：工具或任意可列举的内部资源
export interface ItemListEntry {
  name: string
  url: string
  description?: string
}

// 为首页等「列表型」页面生成 ItemList 结构化数据
// Google 识别为导航集合，有机会出现 sitelinks 或 carousel
export function useItemListJsonLd(name: string, items: ItemListEntry[]): void {
  addJsonLd({
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      url: item.url,
      ...(item.description ? { description: item.description } : {}),
    })),
  })
}

export function useHomeJsonLd(): void {
  // 首页外部 URL 统一带尾斜杠
  const home = canonicalUrl('/')

  addJsonLd([
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Convert Mint',
      url: home,
      description: pages.home.description,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'ConvertMintTools',
      url: home,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Convert Mint',
      url: home,
      applicationCategory: 'UtilitiesApplication',
      operatingSystem: 'Any',
      description: pages.home.description,
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
    },
  ])
}
