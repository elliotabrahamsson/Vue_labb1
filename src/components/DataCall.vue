<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import OlympiaCards from "./OlympiaCards.vue";

const olympians = ref([]);

onMounted(async () => {
  const response = await axios.get("http://localhost:5000/MrOlympias");
  olympians.value = response.data;
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
  <OlympiaCards :olympians="olympians" />
</template>
