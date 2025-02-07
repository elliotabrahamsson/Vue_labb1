<script setup>
import Header from "../components/Header.vue";
import { ref } from "vue";

const Name = ref("Tjena");
</script>

<template>
  <Header />

  <h2 class="text-3xl text-center mb-4">Välkommen!</h2>
  <h3 class="text-2xl text-center">
    Fyll formuläret för att lägga till en Olympia!
  </h3>

  <div class="flex flex-row justify-center mt-10 space-y-2">
    <input v-model="Name" class="bg-gray-500" />
  </div>
  <p class="text-center">{{ Name }}</p>
</template>
