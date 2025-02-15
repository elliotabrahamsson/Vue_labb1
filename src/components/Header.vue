<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav class="text-4xl bg-gray-400">
    <div class="ml-64 flex gap-5">
      <RouterLink to="/" class="hover:underline">Home </RouterLink>

      <RouterLink to="/Add_Olympia" class="hover:underline"
        >Preview Olympia</RouterLink
      >
    </div>
  </nav>
</template>
