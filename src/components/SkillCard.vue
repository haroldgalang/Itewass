<script setup>
import { defineProps } from "vue";

const props = defineProps({
  title: String,
  description: String,
});
</script>

<template>
  <div class="w-full rounded overflow-hidden shadow-lg bg-white mb-4">
    <div class="px-6 py-4">
      <h2 class="text-xl font-semibold text-gray-800">{{ props.title }}</h2>
      <p class="text-gray-600 text-base">{{ props.description }}</p>
    </div>
  </div>
</template>
