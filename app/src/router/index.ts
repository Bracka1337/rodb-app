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
        beforeEnter: (to: any, from: any, next: any) => {
          if (isLoggedIn()) {
            next("/profile");
          } else {
            next();
          }
        },
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
      },
      {
        path: "/profile",
        name: "Profile",
        component: () => import("@/views/Profile.vue"),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: '/games/:id',
        name: "Panel",
        component: () => import("@/views/Panel.vue"),
        meta: {
          requiresAuth: true,
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isLoggedIn()) {
      next('/login');
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
