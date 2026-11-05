<template>
  <footer class="border-t border-gray-200 bg-white">
    <div class="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <section v-for="group in footerGroups" :key="group.title" class="space-y-3">
          <!-- 用 h3 而不是 h2：避免每页在 footer 多出 4 个 h2 稀释主内容标题权重 -->
          <h3 class="text-sm font-semibold text-gray-950">{{ group.title }}</h3>
          <ul class="space-y-2 text-sm text-gray-600">
            <li v-for="item in group.items" :key="item.href">
              <NuxtLink class="inline-flex min-h-8 items-center hover:text-blue-700" :to="item.href">
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>
        </section>
      </div>
      <p class="mt-8 border-t border-gray-200 pt-5 text-sm text-gray-600">
        © 2026 ConvertMintTools.com. Free browser-based converter tools.
        <span class="block sm:inline">Last updated: {{ lastUpdated }}.</span>
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
// 页脚显示的"最后更新"字样：发版时手动调整，给搜索引擎和访客"新鲜度"信号
const lastUpdated = 'November 2026'

const footerGroups = [
  {
    title: 'Tools',
    items: [
      { label: 'Convert kg to lbs', href: '/convert-kg-to-lbs' },
      { label: 'Convert lbs to kg', href: '/convert-lbs-to-kg' },
      { label: 'Military Time Converter', href: '/military-time-converter' },
      { label: 'Weight Converter', href: '/weight-converter' },
    ],
  },
  {
    title: 'Categories',
    items: [
      { label: 'Weight Converters', href: '/weight-converter' },
      { label: 'Time Converters', href: '/military-time-converter' },
    ],
  },
  {
    title: 'Company',
    items: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
  },
  {
    title: 'Resources',
    items: [
      { label: 'Sitemap', href: '/sitemap' },
    ],
  },
]
</script>
