// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      { 
        path: '/login',
        name: 'Login',
        component: () => import('@/views/Login.vue'),
      },
      { 
        path: '/register',
        name: 'Register',
        component: () => import('@/views/Register.vue'),
      },
      {
        path: '/test',
        name: 'Test',
        component: () => import('@/views/test.vue'),
      },
      {
        path: '/games',
        name: 'Games',
        component: () => import('@/views/Game.vue'),
      },
      {
        path: `/games/1/datastore`,
        name: 'Datastore',
        component: () => import('@/views/Datastore.vue'),
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
