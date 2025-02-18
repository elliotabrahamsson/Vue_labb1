<script setup>
import { ref, watch, onMounted } from "vue";
import LargerCard from "./LargerCard.vue";
import { useUserStore } from "/stores/userStore.js";

const userStore = useUserStore();
const selectedOlympian = ref(null);

onMounted(() => {
  console.log("Hämtar data");
  userStore.fetchData();
});

const isModalOpen = ref(false);

watch(isModalOpen, (newValue) => {
  if (newValue) {
    console.log("Öppnade kort");
  }
});

const openModal = (index) => {
  isModalOpen.value = true;
  selectedOlympian.value = index;
  document.body.style.overflow = "hidden";
};

const closeModal = () => {
  isModalOpen.value = false;
};
</script>

<template>
  <li
    v-for="(olympian, index) in userStore.data"
    :key="olympian.id"
    class="border-2 border-gray-700 rounded-lg p-4 w-[200px] mb-[5%] overflow-hidden hover:scale-105 transition-transform duration-200 ease-in-out cursor-pointer shadow-lg"
    @click="openModal(index)"
  >
    <img
      v-if="olympian.Picture"
      :src="olympian.Picture"
      class="w-full h-auto object-cover object-top aspect-square"
    />
    <div class="mt-3">
      <p class="text-lg font-semibold" v-if="olympian.name">
        {{ olympian.name }}
      </p>
      <p v-else>Laddar</p>
      <p class="text-gray-600 text-sm">{{ olympian.age }} år</p>
      <p class="text-gray-600 text-sm">{{ olympian.nationality }}</p>
      <p class="text-gray-600 text-sm">{{ olympian.Division }}</p>
      <p class="text-gray-600 text-sm font-medium">
        {{ olympian.Wins }} vinster
      </p>
    </div>
  </li>

  <LargerCard
    :selectedIndex="selectedOlympian"
    :isOpen="isModalOpen"
    @close="closeModal"
  />
</template>
