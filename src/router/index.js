import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import Skills from "../views/SkillsView.vue";
import Contact from "../views/ContactView.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/skills", component: Skills },
  { path: "/contact", component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
