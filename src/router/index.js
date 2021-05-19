import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/class-and-style-binding",
    name: "ClassAndStyleBinding",
    component: () => import("../views/ClassAndStyleBinding.vue"),
  },
  {
    path: "/conditional-rendering",
    name: "ConditionalRendering",
    component: () => import("../views/ConditionalRendering"),
  },
  {
    path: "/list-rendering",
    name: "ListRendering",
    component: () => import("../views/ListRendering.vue"),
  },
  {
    path: "/event-handling",
    name :"EventHandling",
    component: ()=> import("../views/EventHandling.vue")
  },
  {
    path: "/form-input-binding",
    name: "FormInputBinding",
    component: ()=>import("../views/FormInputBinding.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
