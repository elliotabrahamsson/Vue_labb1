<template>
  <div class="flex flex-col absolute right-[38%] top-32">
    <div
      class="border-2 border-solid border-gray-700 rounded-lg w-[200px] h-[325px] mb-[5%] overflow-hidden hover:scale-110 transition-transform duration-200 ease-in-out cursor-pointer"
    >
      <img
        v-if="data.previewUrl"
        :src="data.previewUrl"
        class="w-auto h-auto object-cover object-top aspect-square"
      />

      <p>{{ data.Name }}</p>
      <p>{{ data.age }}</p>
      <p>{{ data.nationality }}</p>
      <p>{{ data.Division }}</p>
      <p>{{ data.Wins }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ data: Object });
</script>
