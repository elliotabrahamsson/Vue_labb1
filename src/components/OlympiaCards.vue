<script setup>
import { ref } from "vue";
import LargerCard from "./LargerCard.vue";

const props = defineProps({
  olympian: Object,
});

const isModalOpen = ref(false);

const openModal = () => {
  isModalOpen.value = true;
  document.body.style.overflow = "hidden";
};

const closeModal = () => {
  isModalOpen.value = false;
};
</script>

<template>
  <ul class="flex flex-col items-center">
    <li
      class="border-2 border-gray-700 rounded-lg p-4 w-[200px] mb-[5%] overflow-hidden hover:scale-105 transition-transform duration-200 ease-in-out cursor-pointer shadow-lg"
      @click="openModal"
    >
      <img
        v-if="olympian.Picture"
        :src="olympian.Picture"
        class="w-full h-auto object-cover object-top aspect-square"
      />
      <div class="mt-3">
        <p class="text-lg font-semibold">{{ olympian.name }}</p>
        <p class="text-gray-600 text-sm">{{ olympian.age }} år</p>
        <p class="text-gray-600 text-sm">{{ olympian.nationality }}</p>
        <p class="text-gray-600 text-sm">{{ olympian.Division }}</p>
        <p class="text-gray-600 text-sm font-medium">
          {{ olympian.Wins }} vinster
        </p>
      </div>
    </li>
  </ul>
  <LargerCard :olympian="olympian" :isOpen="isModalOpen" @close="closeModal" />
</template>
