import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
      meta: {
        title: "Quran",
      },
    },
    {
      path: "/surah/:id",
      name: "SurahDetail",
      component: () => import("../views/SurahDetailView.vue"),
      meta: {
        title: "Surahs",
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Quran.uz`
  next()
})

export default router;
