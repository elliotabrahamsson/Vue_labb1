<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

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
  <ul>
    <li v-for="olympians in data" :key="olympians.id">
      <p>{{ olympians.name }}</p>
      <p>{{ olympians.age }}</p>
      <p>{{ olympians.nationality }}</p>
      <p>{{ olympians.Division }}</p>
      <p>{{ olympians.Wins }}</p>
      <img :src="olympians.Picture" />
      <p>{{ olympians.Bio1 }}</p>
      <p>{{ olympians.Bio2 }}</p>
      <p>{{ olympians.Bio3 }}</p>
      <p>{{ olympians.Biosum }}</p>
    </li>
  </ul>
</template>

<style></style>
