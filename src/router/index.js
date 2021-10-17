import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../components/Main.vue";


Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
    meta: {title:'WAY\'s 短链'}
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
