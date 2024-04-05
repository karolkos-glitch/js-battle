<template>
  <form
    @submit="onSubmit"
    class="flex flex-col gap-y-2 bg-secondary border border-primary p-4 rounded-lg"
  >
    <h2 class="font-bold">Save record</h2>
    <div class="flex flex-col sm:flex-row sm:items-end gap-4">
      <label class="form-control w-full max-w-xs">
        <div class="label">
          <span class="label-text">Framework</span>
        </div>
        <select
          v-model="newMeasureType"
          class="select select-primary select-bordered"
        >
          <option disabled selected>Pick one</option>
          <option>Solid</option>
          <option>React</option>
        </select>
      </label>
      <label class="form-control w-full max-w-xs">
        <div class="label">
          <span class="label-text">Value</span>
          <span class="label-text-alt">In miliseconds</span>
        </div>
        <input
          v-model="newMeasureValue"
          type="text"
          placeholder="Write value..."
          min="0"
          class="input input-primary input-bordered w-full max-w-xs"
        />
      </label>
      <button type="submit" class="btn btn-accent w-[200px]">
        Save measurement
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";

const newMeasureType = ref("Pick one");
const newMeasureValue = ref(0);

const emit = defineEmits<{
  addMeasure: [
    value: {
      type: string;
      measure: number;
    },
  ];
}>();

const onSubmit = (e: Event) => {
  e.preventDefault();
  emit("addMeasure", {
    type: newMeasureType.value,
    measure: Number(newMeasureValue.value),
  });
  newMeasureValue.value = 0;
  newMeasureType.value = "Pick one";
};
</script>
