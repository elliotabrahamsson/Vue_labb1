<script setup>
import OlympiaCards from "../components/OlympiaCards.vue";
import Header from "../components/Header.vue";
</script>

<template>
  <body class="bg-black h-screen">
    <Header class="mb-5" />

    <h2 class="text-4xl text-white text-center mb-10 font-sans uppercase">
      Mr. Olympias
    </h2>
    <ul
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ml-[10%] mr-[10%]"
    >
      <OlympiaCards />
    </ul>
  </body>
</template>
