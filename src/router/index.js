import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/notice',
    name: 'Notice',
    component: () => import('../views/Notice.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../views/Signup.vue'),
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('../views/User.vue'),
  },
  {
    path: '/notice_write',
    name: 'Notice_write',
    component: () => import('../views/Notice_write.vue'),
  },
  {
    path: '/notice_view/:id',
    name: 'Notice_view',
    component: () => import('../views/Notice_view.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
