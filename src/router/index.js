import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import MoviesPage from '@/views/MoviesPage.vue'
import DetailPage from '@/views/DetailPage.vue'
import TvShowsPage from '@/views/TvShowsPage.vue'


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
    component: MoviesPage
  },
  {
    path: '/movies/:id',
    name: 'DetailPage',
    component: DetailPage
  },
  {
    path: '/tvshows',
    name: 'TvShowsPage',
    component: TvShowsPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
