<template>
  <div class="flex">
    <div
      class="text-white border-2 border-solid border-gray-700 rounded-lg w-[200px] h-[325px] mb-[5%] overflow-hidden hover:scale-110 transition-transform duration-200 ease-in-out cursor-pointer"
    >
      <img
        v-if="data.previewUrl"
        :src="data.previewUrl"
        class="w-auto h-auto object-cover object-top aspect-square"
      />

      <p class="text-lg font-semibold">{{ data.Name }}</p>
      <p class="text-sm">{{ data.age }}</p>
      <p class="text-sm">{{ data.nationality }}</p>
      <p class="text-sm">{{ data.Division }}</p>
      <p class="text-sm font-medium">{{ data.Wins }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ data: Object });
</script>
