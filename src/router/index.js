import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";

const routes = [
  { path: "/", name: "Home", component: HomeView },
  //,{path: "/newCards", name: "NewCards", component: () => import("../views/NewCards.vue")},
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;
