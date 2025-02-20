<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav class="flex text-3xl bg-gray-400">
    <div class="mx-auto space-x-2">
      <RouterLink to="/" class="font-mono hover:underline">Home </RouterLink>

      <RouterLink to="/Add_Olympia" class="font-mono hover:underline"
        >Preview Olympia</RouterLink
      >
    </div>
  </nav>
</template>
