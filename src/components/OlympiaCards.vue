<script setup>
defineProps(["olympians"]);
</script>

<template>
  <ul
    v-if="olympians.length"
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 ml-[10%] mr-[10%]"
  >
    <li
      v-for="olympian in olympians"
      :key="olympian.id"
      class="border-2 border-solid border-gray-700 rounded-lg flex-1 basis-[calc(50%-1rem)] w-max[200px] mb-[5%] overflow-hidden hover:transform hover:scale-110 transition-transform duration-100 ease-in cursor-pointer"
    >
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
    </li>
  </ul>
</template>
