<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import OlympiaCards from "./OlympiaCards.vue";

const data = ref([]);

onMounted(async () => {
  const response = await axios.get("http://localhost:5000/MrOlympias");
  data.value = response.data;
  console.log(data.value);

  await axios
    .get("http://localhost:5000/MrOlympias/Picture", {
      responseType: "blob",
    })
    .then((response) => {
      const ImageUrl = URL.createObjectURL(response.data);
      console.log(ImageUrl);
      document.getElementById("olympianImage").src = ImageUrl;
    })
    .catch((error) => {
      console.log(error);
    });
});
</script>

<template>
  <ul
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 ml-[10%] mr-[10%]"
  >
    <OlympiaCards
      v-for="olympian in data"
      :key="olympian.id"
      :olympian="olympian"
    />
  </ul>
</template>
