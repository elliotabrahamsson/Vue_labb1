<script setup>
import LargerCard from "./LargerCard.vue";
const props = defineProps({ olympian: Object });
</script>

<template>
  <li
    class="border-2 border-solid border-gray-700 rounded-lg flex-1 basis-[calc(50%-1rem)] w-max[200px] mb-[5%] overflow-hidden hover:transform hover:scale-110 transition-transform duration-100 ease-in cursor-pointer"
  >
    <LargerCard>
      <div class="w-full h-full">
        <img
          v-if="olympian.Picture"
          :src="olympian.Picture"
          class="w-full h-auto object-cover object-top aspect-square"
        />
        <p>{{ olympian.name }}</p>
        <p>{{ olympian.age }}</p>
        <p>{{ olympian.nationality }}</p>
        <p>{{ olympian.Division }}</p>
        <p>{{ olympian.Wins }}</p>
      </div>
    </LargerCard>
  </li>
</template>
