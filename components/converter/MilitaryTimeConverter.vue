<template>
  <div class="grid gap-5 lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.95fr)]">
    <ConverterCard
      title="Military time converter"
      description="Enter a 24-hour time such as 1430 or 23:45."
    >
      <BaseInput
        id="military-time"
        :model-value="input"
        label="Military time"
        placeholder="e.g. 1430 or 23:45"
        inputmode="numeric"
        hint="Use 0000 through 2359. A colon is optional."
        :error="error"
        @update:model-value="updateInput"
      />

      <div class="flex flex-wrap gap-2" aria-label="Common military time examples">
        <BaseButton
          v-for="example in examples"
          :key="example"
          variant="secondary"
          @click="setExample(example)"
        >
          {{ example }}
        </BaseButton>
      </div>

      <BaseButton variant="secondary" @click="clear">
        Clear
      </BaseButton>
    </ConverterCard>

    <ConverterResult
      :value="resultValue"
      :description="resultDescription"
      :error="error"
      :copy-text="copyText"
      empty-text="Enter a military time like 1430 to see the regular time."
    />
  </div>
</template>

<script setup lang="ts">
const examples = ['0000', '0900', '1200', '1430', '1800', '2359']

const {
  input,
  resultValue,
  resultDescription,
  error,
  copyText,
  updateInput,
  setExample,
  clear,
} = useMilitaryTimeConverter('1430')
</script>
