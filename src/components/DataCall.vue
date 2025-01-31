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
  <ul
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 ml-[10%] mr-[10%]"
  >
    <li
      v-for="olympians in data"
      :key="olympians.id"
      class="border-2 border-solid border-gray-700 rounded-lg flex-1 basis-[calc(50%-1rem)] w-max[200px] mb-[5%] overflow-hidden"
    >
      <img
        :src="olympians.Picture"
        class="w-full h-auto object-cover object-top aspect-square"
      />
      <p>{{ olympians.name }}</p>
      <p>{{ olympians.age }}</p>
      <p>{{ olympians.nationality }}</p>
      <p>{{ olympians.Division }}</p>
      <p>{{ olympians.Wins }}</p>
    </li>
  </ul>
</template>

<style></style>
