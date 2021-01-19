import { createRouter, createWebHistory } from 'vue-router'
import PokeStore from '@/views/PokeStore.vue'
import Poke from '@/views/Poke.vue'

const routes = [
  {
    path: '/',
    name: 'PokeStore',
    component: PokeStore
  },
  {
    path: '/:id',
    props: true,
    component: Poke
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
 