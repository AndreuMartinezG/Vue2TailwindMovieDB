import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import DetailPage from '@/views/DetailPage.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/movies',
    name: 'movies',
    component: () => import('../views/MoviesPage.vue')
  },
  {
    path: '/movies/:id',
    name: 'DetailPage',
    component: DetailPage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
