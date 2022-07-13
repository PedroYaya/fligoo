import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from './../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: () => import('../views/EditView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
