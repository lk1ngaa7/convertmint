<template>
  <header class="border-b border-gray-200 bg-white">
    <div class="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
      <NuxtLink to="/" class="whitespace-nowrap text-lg font-semibold text-gray-950">
        Convert Mint
      </NuxtLink>
      <nav aria-label="Main navigation" class="-mx-2 flex w-[calc(100%+1rem)] items-center gap-1 overflow-x-auto px-2 text-sm font-medium text-gray-600 sm:mx-0 sm:w-auto sm:justify-end sm:gap-3 sm:overflow-visible sm:px-0">
        <NuxtLink class="inline-flex min-h-10 shrink-0 items-center rounded-lg px-2 hover:bg-gray-50 hover:text-blue-700" to="/convert-kg-to-lbs">
          kg to lbs
        </NuxtLink>
        <NuxtLink class="inline-flex min-h-10 shrink-0 items-center rounded-lg px-2 hover:bg-gray-50 hover:text-blue-700" to="/convert-lbs-to-kg">
          lbs to kg
        </NuxtLink>
        <NuxtLink class="inline-flex min-h-10 shrink-0 items-center rounded-lg px-2 hover:bg-gray-50 hover:text-blue-700" to="/military-time-converter">
          Military time
        </NuxtLink>
        <NuxtLink class="inline-flex min-h-10 shrink-0 items-center rounded-lg px-2 hover:bg-gray-50 hover:text-blue-700" to="/weight-converter">
          Weight
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>
