<script setup>
import { Disclosure } from "@headlessui/vue";
import Navbar from "@/components/Navbar.vue";
</script>

<template>
  <Navbar />
  <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <router-view v-slot="{ Component }">
      <transition name="route" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </div>
</template>

<style scoped>
.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}

.route-enter-active {
  transition: all 0.3 ease-out;
}

.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}

.route-leave-active {
  transition: all 0.3s ease-in;
}
</style>
