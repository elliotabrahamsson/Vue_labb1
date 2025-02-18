<script setup>
import { onMounted } from "vue";
import { useUserStore } from "/stores/userStore.js";
import OlympiaCards from "./OlympiaCards.vue";

const userStore = useUserStore();

onMounted(async () => {
  await userStore.fetchData();
});
</script>

<template>
  <ul
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ml-[10%] mr-[10%]"
  >
    <OlympiaCards
      v-for="olympian in userStore.data"
      :key="olympian.id"
      :olympian="olympian"
    />
  </ul>
</template>
