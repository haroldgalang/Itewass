<script setup>
import Mycard from "@/components/MyCard.vue";
</script>

<template>
  <div class="text-gray-700">
    <h1 class="text-4xl font-bold my-5">Homepage</h1>

    <div class="flex justify-center flex-col items-center">
      <transition name="popup" appear>
        <Mycard />
      </transition>

      <h1 class="text-4xl font-bold my-5">Hello!</h1>
      <p class="text-center my-5 px-16">
        My name is Harold Galang from Cabuyao City, Laguna, Philippines and
        Welcome to My website profile in which I introduce to my skills and many
        abilities I have posses. Please feel free to navigate to this simple
        page and reach me out on my socials and other contacts! Thank You!
      </p>
    </div>
  </div>
</template>

<style scoped>
.popup-enter-from {
  opacity: 0;
  transform: scale(0.6);
}
.popup-enter-to {
  opacity: 1;
  transform: scale(1);
}
.popup-enter-active {
  transition: all 0.5s ease;
}

.popup-leave-from {
  opacity: 1;
  transform: scale(1);
}
.popup-leave-to {
  opacity: 0;
  transform: scale(0.6);
}
.popup-leave-active {
  transition: all 0.5s ease;
}
</style>

<!-- <script setup>
import Mycard from "@/components/MyCard.vue";
</script>

<template>
  <h1 class="text-4xl font-bold my-5">Homepage</h1>

  <div class="flex justify-center flex-col items-center">
    <transition name="popup" appear>
      <Mycard />
    </transition>

    <p class="text-center my-5">
      Hello! My name is Harold Galang from Cabuyao City, Laguna, Philippines and
      Welcome to My website profile in which I introduce to my skills and many
      abilities I have posses. Please feel free to navigate to this simple page
      and reach me out on my socials and other contacts! Thank You!
    </p>
  </div>
</template>

<style scoped>
.popup-enter-from {
  opacity: 0;
  transform: scale(0.6);
}
.popup-enter-to {
  opacity: 1;
  transform: scale(1);
}
.popup-enter-active {
  transition: all 1s ease;
}
</style> -->
