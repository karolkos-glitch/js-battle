<template>
  <div
    class="flex flex-col justify-between h-[400px] gap-y-4 border border-primary p-4 rounded-lg"
  >
    <h2 class="font-bold">Record preview</h2>
    <div v-show="statsRecords.length === 0">
      Here we will have table alla excel for measurement records...
    </div>
    <div v-show="statsRecords.length > 0" class="pre">
      {{ JSON.stringify(statsRecords) }}
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  statsRecords: {
    type: string;
    measure: number;
  }[];
}>();
</script>
