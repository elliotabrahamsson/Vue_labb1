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
          v-if="olympian.Picture"
          :src="olympian.Picture"
          class="w-full h-auto object-cover object-top aspect-square"
        />
        <div class="mt-4">
          <div v-html="OlympianInfo"></div>
        </div>
      </div>

      <div class="w-full sm:w-[60%] h-full overflow-y-auto mt-6 sm:mt-0 px-4">
        <h2 class="text-2xl sm:text-4xl">Karriär</h2>

        <p v-if="olympian.Bio1" class="text-sm sm:text-base mb-4">
          {{ olympian.Bio1 }}
        </p>
        <p v-if="!olympian.Bio1" class="text-sm sm:text-base mb-4">
          Det finns ingen Biotext för denna olympia!
        </p>

        <p v-if="olympian.Bio2" class="text-sm sm:text-base mb-4">
          {{ olympian.Bio2 }}
        </p>
        <p v-if="!olympian.Bio2" class="text-sm sm:text-base mb-4">
          Det finns ingen Biotext för denna olympia!
        </p>

        <p v-if="olympian.Bio3" class="text-sm sm:text-base mb-4">
          {{ olympian.Bio3 }}
        </p>
        <p v-if="!olympian.Bio3" class="text-sm sm:text-base mb-4">
          Det finns ingen Biotext för denna olympia!
        </p>

        <p v-if="olympian.BioSum" class="text-sm sm:text-base mb-4">
          {{ olympian.BioSum }}
        </p>
        <p v-if="!olympian.BioSum" class="text-sm sm:text-base mb-4">
          Det finns ingen Bio sammanfattning för denna olympia!
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
import { computed } from "vue";

const props = defineProps({
  olympian: Object,
  isOpen: Boolean,
});

const emit = defineEmits(["close"]);

const closeCard = () => {
  emit("close");
};

const OlympianInfo = computed(() => {
  return props.olympian
    ? `<h1><strong>${props.olympian.name}</strong></h1>
       ${props.olympian.age} år
       <br>${props.olympian.nationality}
       <br>${props.olympian.Division}
       <br>${props.olympian.Wins} vinster`
    : "Hittar inte info";
});
</script>
