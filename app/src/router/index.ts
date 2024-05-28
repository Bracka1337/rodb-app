// Composables
import { createRouter, createWebHistory } from "vue-router";

function isLoggedIn() {
  return localStorage.getItem("userToken") !== null;
}

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "Home",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
      },
      {
        path: "/login",
        name: "Login",
        component: () => import("@/views/Login.vue"),
      },
      {
        path: "/register",
        name: "Register",
        component: () => import("@/views/Register.vue"),
      },
      {
        path: "/test",
        name: "Test",
        component: () => import("@/views/test.vue"),
        beforeEnter: (to: any, from: any, next: any) => {
          if (isLoggedIn()) {
            next();
          } else {
            next("/login");
          }
        },
      },
      {
        path: "/profile",
        name: "Profile",
        component: () => import("@/views/Profile.vue")
      },
      {
        path: '/games/:id',
        name: "Panel",
        component: () => import("@/views/Panel.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
