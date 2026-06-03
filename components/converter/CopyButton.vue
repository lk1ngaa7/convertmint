<template>
  <BaseButton variant="secondary" :disabled="!canCopy" @click="copy">
    {{ label }}
  </BaseButton>
</template>

<script setup lang="ts">
const props = defineProps<{
  text: string
}>()

const copied = ref(false)
const canCopy = computed(() => props.text.trim().length > 0)
const label = computed(() => (copied.value ? 'Copied' : 'Copy result'))

async function copy(): Promise<void> {
  if (!canCopy.value || typeof navigator === 'undefined' || !navigator.clipboard) {
    return
  }

  await navigator.clipboard.writeText(props.text)
  copied.value = true
  window.setTimeout(() => {
    copied.value = false
  }, 1600)
}
</script>
