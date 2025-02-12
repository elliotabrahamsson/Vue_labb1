<template>
  <h2 class="text-3xl text-center mb-4">Välkommen!</h2>
  <h3 class="text-2xl text-center">
    Fyll formuläret för att lägga till en Olympia!
  </h3>

  <div class="flex flex-col mt-10 space-y-2 w-1/4 top-32 left-[30%] absolute">
    <input
      type="file"
      placeholder="Tryck här för att ladda upp en bild"
      @change="onFileChange"
      class="bg-gray-500 rounded-md w-64 hover:border-0 cursor-pointer"
    />
    <input
      v-model="formData.Name"
      placeholder="Namn"
      class="bg-gray-500 rounded-md w-64 hover:border-0"
    />
    <input
      v-model="formData.age"
      type="number"
      placeholder="Ålder"
      class="bg-gray-500 rounded-md w-64 hover:border-0"
    />
    <input
      v-model="formData.nationality"
      type="text"
      placeholder="Nationalitet"
      class="bg-gray-500 rounded-md w-64 hover:border-0"
    />
    <input
      v-model="formData.Division"
      type="text"
      placeholder="Division"
      class="bg-gray-500 rounded-md w-64 hover:border-0"
    />
    <input
      v-model="formData.Wins"
      type="number"
      placeholder="Vinster"
      class="bg-gray-500 rounded-md w-64 hover:border-0"
    />
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
  Picture: null,
  previewUrl: null,
});

const onFileChange = (event) => {
  const selectedFile = event.target.files[0];
  if (selectedFile) {
    formData.Picture = selectedFile;
    formData.previewUrl = URL.createObjectURL(selectedFile);
  }
};
</script>
