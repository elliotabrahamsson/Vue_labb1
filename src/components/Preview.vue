<template>
  <div
    class="border-2 border-solid border-gray-700 rounded-lg w-[200px] h-[300px] mb-[5%] overflow-hidden hover:scale-110 transition-transform duration-200 ease-in-out cursor-pointer flex flex-col absolute right-80 top-32"
  >
    <div class="w-full h-auto object-cover object-top aspect-[5/4]">
      <img v-if="data.Picture" :src="data.Picture" class="" />
    </div>
    <p>{{ data.Name }}</p>
    <p>{{ data.age }}</p>
    <p>{{ data.nationality }}</p>
    <p>{{ data.Division }}</p>
    <p>{{ data.Wins }}</p>
  </div>
</template>

<script setup>
const props = defineProps({ data: Object });
</script>
