<template>
  <section class="flex flex-col gap-y-4">
    <h1 class="text-2xl font-bold">Create Measurement</h1>
    <div class="flex flex-col gap-y-4">
      <NewMeasureForm @add-measure="handleAddMeasure" />
      <RecordPreview :stats-records="measureRecord.statsRecords">
        <button class="btn btn-secondary w-[200px]">
          Create performance result
        </button>
      </RecordPreview>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import NewMeasureForm from "./NewMeasureForm.vue";
import RecordPreview from "./RecordPreview.vue";

const measureRecord = reactive<{
  type: string;
  statsRecords: Array<{
    type: string;
    measure: number;
  }>;
}>({
  type: "DISPLAY_ROWS",
  statsRecords: [
    {
      type: "solid",
      measure: 200,
    },
  ],
});

const handleAddMeasure = (newMeasure: { type: string; measure: number }) => {
  measureRecord.statsRecords.push(newMeasure);
};
</script>
