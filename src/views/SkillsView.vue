<script setup>
import { ref } from "vue";
import SkillCard from "@/components/SkillCard.vue";

// Defining an array to store multiple cards
const cards = ref([
  {
    title: "HTML",
    description: "I have experience in building websites using HTML.",
  },
  {
    title: "Creative Web Design",
    description: "Skilled in styling web pages with CSS and CSS frameworks.",
  },
  {
    title: "Graphic Designing",
    description: "Works with graphics designs",
  },
]);

const addCard = (title, description) => {
  cards.value.push({ title, description });
};
</script>

<template>
  <div class="text-gray-700">
    <h1 class="text-4xl font-bold my-5">Skills Page</h1>
    <TransitionGroup name="popup" tag="div" appear>
      <div
        v-for="(card, index) in cards"
        :key="index"
        :style="{ transitionDelay: `${index * 0.1}s` }"
      >
        <SkillCard :title="card.title" :description="card.description" />
      </div>
    </TransitionGroup>
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
