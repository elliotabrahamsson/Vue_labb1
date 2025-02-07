import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import ErrorPage from "../components/ErrorPage.vue";
import AddOlympiaView from "../views/AddOlympiaView.vue";

const routes = [
  { path: "/", name: "Home", component: HomeView },
  { path: "/:pathmatch(.*)", name: "Error", component: ErrorPage },
  { path: "/Add_Olympia", name: "Add Olympia", component: AddOlympiaView },
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;
