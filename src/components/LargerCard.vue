<template>
  <div
    @click="toggleSize"
    class="cursor-pointer transition-all duration-100 ease-in-out"
    :class="{ 'scale-100': !isSelected, 'scale-125 z-10': isSelected }"
    :style="{ transformOrigin: 'center' }"
  >
    <slot></slot>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isSelected = ref(false);

const toggleSize = () => {
  isSelected.value = !isSelected.value;
};
</script>
