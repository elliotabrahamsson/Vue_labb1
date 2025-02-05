import { createRouter, createWebHistory } from "vue-router";

import AppVue from "../App.vue";

const routes = [
  { path: "", name: "Home", component: AppVue },
  //,{path: "/newCards", name: "NewCards", component: () => import("../views/NewCards.vue")},
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;
