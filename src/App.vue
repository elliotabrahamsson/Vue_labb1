<script setup>
import DataCall from "./components/DataCall.vue";
import { RouterView, RouterLink } from "vue-router";
</script>

<template>
  <router-link :to="{ name: 'home' }">Hem</router-link>
  <h1 class="text-4xl text-center mb-10">Mr. Olympias</h1>

  <DataCall class="flex flex-wrap gap-4 ml-[10%] mr-[10%]" />
</template>
