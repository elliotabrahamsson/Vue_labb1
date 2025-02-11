<template>
  <h2 class="text-3xl text-center mb-4">Välkommen!</h2>
  <h3 class="text-2xl text-center">
    Fyll formuläret för att lägga till en Olympia!
  </h3>

  <div class="flex flex-col mt-10 space-y-2 w-1/4 top-32 left-80 absolute">
    <input v-model="formData.Name" placeholder="Namn" class="bg-gray-500" />
    <input v-model="formData.age" placeholder="Ålder" class="bg-gray-500" />
    <input
      v-model="formData.nationality"
      placeholder="Nationalitet"
      class="bg-gray-500"
    />
    <input
      v-model="formData.Division"
      placeholder="Division"
      class="bg-gray-500"
    />
    <input v-model="formData.Wins" placeholder="Vinster" class="bg-gray-500" />
  </div>

  <PreviewVue :data="formData" />
</template>

<script setup>
import { reactive } from "vue";
import PreviewVue from "./Preview.vue";
const formData = reactive({
  Name: "",
  age: "",
  nationality: "",
  Division: "",
  Wins: "",
});
</script>
