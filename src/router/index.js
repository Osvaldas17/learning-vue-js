import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Shop from '@/views/Shop'
import Cart from "@/views/Cart";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
