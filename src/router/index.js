import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/surah/:id",
      name: "SurahDetail",
      component: () => import("../views/SurahDetailView.vue"),
    },
  ],
});

export default router;
