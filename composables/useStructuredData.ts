import type { FaqItem } from '~/components/seo/FaqBlock.vue'
import { pages, siteUrl, type PageKey } from '~/data/pages'

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
    url: `${siteUrl}${page.path}`,
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

export function useHomeJsonLd(): void {
  addJsonLd([
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Convert Mint',
      url: siteUrl,
      description: pages.home.description,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Convert Mint',
      url: siteUrl,
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
