<script setup>
import { defineProps, defineEmits, computed } from "vue";
import { useUserStore } from "/stores/userStore.js";

const userStore = useUserStore();

const props = defineProps({
  isOpen: Boolean,
  selectedIndex: Number,
});

const emit = defineEmits(["close"]);

const closeCard = () => {
  emit("close");
};

const selectedOlympian = computed(() => {
  return userStore.data[props.selectedIndex] || null;
});

const OlympianInfo = computed(() => {
  const olympian = selectedOlympian.value;
  return olympian
    ? `<h1><strong>${olympian.name}</strong></h1>
       ${olympian.age} år
       <br>${olympian.nationality}
       <br>${olympian.Division}
       <br>${olympian.Wins} vinster`
    : "Hittar inte info";
});
</script>

<template>
  <div
    v-if="isOpen"
    @click.self="closeCard"
    class="fixed inset-0 bg-opacity-50 backdrop-brightness-20 flex items-center justify-center"
  >
    <div
      class="bg-white p-6 rounded-xl shadow-lg w-[90%] sm:w-[75%] md:w-[65%] lg:w-[55%] xl:w-[45%] h-[90%] sm:h-[80%] md:h-[75%] relative flex flex-col sm:flex-row overflow-hidden"
    >
      <span
        class="absolute top-3 text-xl cursor-pointer text-gray-600 hover:text-black"
        @click="closeCard"
        >&times;</span
      >

      <div class="w-full sm:w-[40%] h-full flex flex-col justify-center mx-5">
        <img
          v-if="selectedOlympian.Picture"
          :src="selectedOlympian.Picture"
          class="w-full h-auto object-cover object-top aspect-square"
        />
        <div class="mt-4">
          <div v-html="OlympianInfo"></div>
        </div>
      </div>

      <div class="w-full sm:w-[60%] h-full overflow-y-auto mt-6 sm:mt-0 px-4">
        <h2 class="text-2xl sm:text-4xl">Karriär</h2>

        <p v-if="selectedOlympian.Bio1" class="text-sm sm:text-base mb-4">
          {{ selectedOlympian.Bio1 }}
        </p>
        <p v-if="!selectedOlympian.Bio1" class="text-sm sm:text-base mb-4">
          Det finns ingen Biotext för denna olympia!
        </p>

        <p v-if="selectedOlympian.Bio2" class="text-sm sm:text-base mb-4">
          {{ selectedOlympian.Bio2 }}
        </p>
        <p v-if="!selectedOlympian.Bio2" class="text-sm sm:text-base mb-4">
          Det finns ingen Biotext för denna olympia!
        </p>

        <p v-if="selectedOlympian.Bio3" class="text-sm sm:text-base mb-4">
          {{ selectedOlympian.Bio3 }}
        </p>
        <p v-if="!selectedOlympian.Bio3" class="text-sm sm:text-base mb-4">
          Det finns ingen Biotext för denna olympia!
        </p>

        <p v-if="selectedOlympian.BioSum" class="text-sm sm:text-base mb-4">
          {{ selectedOlympian.BioSum }}
        </p>
        <p v-if="!selectedOlympian.BioSum" class="text-sm sm:text-base mb-4">
          Det finns ingen Bio sammanfattning för denna olympia!
        </p>
      </div>
    </div>
  </div>
</template>
